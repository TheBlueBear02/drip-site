import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import OpenAI from 'openai';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json({ limit: '50mb' }));

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Load prompts from the drip-skills repo
const IMAGE2DESIGN_PROMPT = readFileSync(
  join(__dirname, '../drip-skills/creating new skill info/image2design.md'),
  'utf-8'
);
const DESIGN2SKILL_PROMPT = readFileSync(
  join(__dirname, '../drip-skills/creating new skill info/design2skill.md'),
  'utf-8'
);

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_OWNER = 'TheBlueBear02';
const GITHUB_REPO = 'drip-skills';

// ── STEP 1: Images → Design Document ──────────────────────────────────────────

app.post('/api/image-to-design', async (req, res) => {
  const { images } = req.body; // array of base64 strings (data:image/... format)

  if (!images || images.length === 0) {
    return res.status(400).json({ error: 'No images provided' });
  }

  const imageContent = images.map((base64) => ({
    type: 'image_url',
    image_url: { url: base64, detail: 'high' },
  }));

  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    max_tokens: 4096,
    messages: [
      { role: 'system', content: IMAGE2DESIGN_PROMPT },
      {
        role: 'user',
        content: [
          ...imageContent,
          {
            type: 'text',
            text: 'Analyze these UI screenshots and generate a complete, detailed design system document following the exact structure specified.',
          },
        ],
      },
    ],
  });

  const designDoc = response.choices[0].message.content;
  res.json({ designDoc });
});

// ── STEP 2: Design Document → Skill Files + GitHub Push ───────────────────────

app.post('/api/design-to-skill', async (req, res) => {
  const { designDoc, skillName } = req.body;

  if (!designDoc || !skillName) {
    return res.status(400).json({ error: 'designDoc and skillName are required' });
  }

  // Clean the skill name: lowercase, hyphenated, no spaces
  const cleanName = skillName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

  const FILE_REQUEST_CHUNK_1 = `
Generate the following files for a Drip skill named "${cleanName}". Use the DRIP SKILL CREATION REFERENCE as your guide.

Output EVERY file in this exact format with no extra commentary between files:
=== FILE: SKILL.md ===
[content]
=== FILE: philosophy.md ===
[content]
=== FILE: skill.json ===
[content]
=== FILE: tokens/colors.md ===
[content]
=== FILE: tokens/typography.md ===
[content]
=== FILE: tokens/spacing.md ===
[content]
=== FILE: tokens/borders.md ===
[content]
=== FILE: tokens/shadows.md ===
[content]
=== FILE: tokens/motion.md ===
[content]
=== FILE: integration/globals.css ===
[content]
=== FILE: integration/tailwind.config.js ===
[content]
=== FILE: integration/setup.md ===
[content]
=== FILE: responsive/breakpoints.md ===
[content]
=== FILE: meta/changelog.md ===
[content]

Here is the design document to base the skill on:

${designDoc}
`;

  const FILE_REQUEST_CHUNK_2 = `
Continue generating the Drip skill named "${cleanName}". Output the following component and example files.

Use the DRIP SKILL CREATION REFERENCE structure. Output in this exact format:
=== FILE: components/core/Button.jsx ===
[content]
=== FILE: components/core/Input.jsx ===
[content]
=== FILE: components/core/Badge.jsx ===
[content]
=== FILE: components/display/Card.jsx ===
[content]
=== FILE: components/display/Alert.jsx ===
[content]
=== FILE: components/navigation/Navbar.jsx ===
[content]
=== FILE: components/feedback/Spinner.jsx ===
[content]
=== FILE: examples/LandingPage.jsx ===
[content]
=== FILE: examples/README.md ===
[content]

Here is the design document for context:

${designDoc}
`;

  // Run both generation chunks in parallel
  const [chunk1Response, chunk2Response] = await Promise.all([
    openai.chat.completions.create({
      model: 'gpt-4o',
      max_tokens: 16000,
      messages: [
        { role: 'system', content: DESIGN2SKILL_PROMPT },
        { role: 'user', content: FILE_REQUEST_CHUNK_1 },
      ],
    }),
    openai.chat.completions.create({
      model: 'gpt-4o',
      max_tokens: 16000,
      messages: [
        { role: 'system', content: DESIGN2SKILL_PROMPT },
        { role: 'user', content: FILE_REQUEST_CHUNK_2 },
      ],
    }),
  ]);

  const rawOutput = chunk1Response.choices[0].message.content + '\n' + chunk2Response.choices[0].message.content;

  // Parse the output into { filePath: content } map
  const files = parseSkillFiles(rawOutput);

  // Push all files to GitHub
  await pushFilesToGitHub(cleanName, files);

  res.json({ skillName: cleanName, success: true });
});

// ── Helpers ───────────────────────────────────────────────────────────────────

function stripCodeFence(content) {
  // Remove all leading/trailing code fences (AI sometimes emits mismatched fences)
  return content
    .replace(/^(```[a-z]*\n?)+/i, '')
    .replace(/(\n?```)+\s*$/g, '')
    .trim();
}

function parseSkillFiles(raw) {
  const files = {};
  const regex = /=== FILE: (.+?) ===\n([\s\S]*?)(?==== FILE:|$)/g;
  let match;
  while ((match = regex.exec(raw)) !== null) {
    const filePath = match[1].trim();
    const content = stripCodeFence(match[2].trim());
    if (filePath && content) {
      files[filePath] = content;
    }
  }
  return files;
}

async function pushFilesToGitHub(skillName, files) {
  const baseApiUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents`;
  const headers = {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    Accept: 'application/vnd.github+json',
    'Content-Type': 'application/json',
  };

  for (const [filePath, content] of Object.entries(files)) {
    const fullPath = `drip-skills/generated/${skillName}/${filePath}`;
    const base64Content = Buffer.from(content).toString('base64');

    // Check if file already exists (to get its SHA for updates)
    let sha;
    try {
      const checkRes = await fetch(`${baseApiUrl}/${fullPath}`, { headers });
      if (checkRes.ok) {
        const existing = await checkRes.json();
        sha = existing.sha;
      }
    } catch (_) {
      // File doesn't exist yet — no SHA needed
    }

    const body = {
      message: `feat: add generated skill ${skillName}`,
      content: base64Content,
      ...(sha ? { sha } : {}),
    };

    const putRes = await fetch(`${baseApiUrl}/${fullPath}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(body),
    });

    if (!putRes.ok) {
      const err = await putRes.json();
      throw new Error(`GitHub push failed for ${filePath}: ${JSON.stringify(err)}`);
    }
  }
}

// ── Start ─────────────────────────────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`Drip backend running at http://localhost:${PORT}`);
});
