import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import CopyCommand from '../components/ui/CopyCommand';
import { skillList } from '../skills';
import { useSkillContext } from '../context/SkillContext';
import '../components/sections/SkillsPreview.css';
import './Library.css';

const GITHUB_GENERATED_API =
  'https://api.github.com/repos/TheBlueBear02/drip-skills/contents/drip-skills/generated';
const GITHUB_RAW_BASE =
  'https://raw.githubusercontent.com/TheBlueBear02/drip-skills/main/drip-skills/generated';

// Mirrors the filenames used in SkillsPreview
const PREVIEW_IMAGES = {
  'linear-modern': 'linear modern.png',
  'clay-premium': 'clay-premium.png',
  'minimalist-monochrome': 'minimalist-monochrome.png',
  'playful-geometric': 'playful-geomtric.png',
  'neo-brutalism': 'neo-brutalism.png',
  'hand-drawn': 'hand-drawn.png',
  'art-deco': 'art deco.png',
};

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'dark', label: 'Dark' },
  { id: 'light', label: 'Light' },
  { id: 'colorful', label: 'Colorful' },
  { id: 'expressive', label: 'Expressive' },
];

// Deterministic gradient from a skill name so every community card looks different
function gradientFromName(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) | 0;
  const hue = Math.abs(hash) % 360;
  const hue2 = (hue + 60) % 360;
  return `linear-gradient(135deg, hsl(${hue},50%,18%) 0%, hsl(${hue2},45%,12%) 100%)`;
}

function LibrarySkillCard({ skill }) {
  const { activeSkill, setActiveSkill } = useSkillContext();
  const isActive = activeSkill === skill.id;

  return (
    <div className="skills-preview-card">
      <div className="skills-preview-card-preview">
        <button
          type="button"
          className={`skills-preview-card-btn ${isActive ? 'skills-preview-card-btn-active' : ''}`}
          onClick={() => setActiveSkill(isActive ? null : skill.id)}
        >
          {isActive ? 'Active' : 'Preview'}
        </button>
        {PREVIEW_IMAGES[skill.id] && (
          <img
            src={`${import.meta.env.BASE_URL}${['styles preview', PREVIEW_IMAGES[skill.id]].map(encodeURIComponent).join('/')}`}
            alt={`${skill.name} style preview`}
            className="skills-preview-card-preview-img"
          />
        )}
        <div
          className="skills-preview-card-preview-bg"
          style={{ backgroundColor: skill.bgColor }}
        />
      </div>
      <div className="skills-preview-card-content">
        <div className="library-card-meta">
          <h3 className="skills-preview-card-title">{skill.name}</h3>
          <span className="library-card-category">{skill.category}</span>
        </div>
        <p className="skills-preview-card-description">{skill.description}</p>
        <div className="skills-preview-card-tags">
          {skill.mood.slice(0, 3).map((tag) => (
            <span key={tag} className="skills-preview-card-tag">{tag}</span>
          ))}
        </div>
        <div className="skills-preview-card-command">
          <CopyCommand command={skill.command} size="sm" />
        </div>
      </div>
    </div>
  );
}

function CommunitySkillCard({ skill }) {
  return (
    <div className="skills-preview-card library-community-card">
      <div
        className="skills-preview-card-preview"
        style={{ background: gradientFromName(skill.id) }}
      >
        <span className="library-community-badge">Community</span>
      </div>
      <div className="skills-preview-card-content">
        <div className="library-card-meta">
          <h3 className="skills-preview-card-title">{skill.name}</h3>
          {skill.category && (
            <span className="library-card-category">{skill.category}</span>
          )}
        </div>
        <p className="skills-preview-card-description">{skill.description}</p>
        <div className="skills-preview-card-tags">
          {(skill.mood ?? []).slice(0, 3).map((tag) => (
            <span key={tag} className="skills-preview-card-tag">{tag}</span>
          ))}
        </div>
        <div className="skills-preview-card-command">
          <CopyCommand command={`npx getdrip add ${skill.id}`} size="sm" />
        </div>
      </div>
    </div>
  );
}

function CommunitySection() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const dirRes = await fetch(GITHUB_GENERATED_API);
        if (!dirRes.ok) throw new Error();
        const folders = await dirRes.json();

        const results = await Promise.all(
          folders
            .filter((item) => item.type === 'dir')
            .map(async (folder) => {
              try {
                const jsonRes = await fetch(
                  `${GITHUB_RAW_BASE}/${folder.name}/skill.json`
                );
                if (!jsonRes.ok) return null;
                const text = await jsonRes.text();
                // Slice from first { to last } to strip any surrounding code fences
                const start = text.indexOf('{');
                const end = text.lastIndexOf('}');
                if (start === -1 || end === -1) return null;
                const decoded = JSON.parse(text.slice(start, end + 1));
                return { ...decoded, id: folder.name };
              } catch {
                return null;
              }
            })
        );

        setSkills(results.filter(Boolean));
      } catch {
        setSkills([]);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return (
    <div className="library-community-section">
      <div className="library-section-header">
        <h2 className="library-section-title">Community Designs</h2>
        <p className="library-section-subtitle">
          Skills generated by the community via the AI creator.
        </p>
      </div>

      {loading ? (
        <div className="library-community-loading">
          <span className="library-community-spinner" />
          Loading community designs…
        </div>
      ) : skills.length === 0 ? (
        <p className="library-empty">
          No community designs yet.{' '}
          <Link to="/create" className="library-create-link">
            Be the first to create one!
          </Link>
        </p>
      ) : (
        <div className="library-grid">
          {skills.map((skill) => (
            <CommunitySkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      )}
    </div>
  );
}

function Library() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredSkills =
    activeFilter === 'all'
      ? skillList
      : skillList.filter((s) => s.category === activeFilter);

  return (
    <>
      <Nav variant="library" />
      <main className="library-page">
        <div className="container">
          <div className="library-header">
            <h1 className="library-title">Design Library</h1>
            <p className="library-subtitle">
              {skillList.length} ready-made design systems. Install any in one command.
            </p>
            <Link to="/create" className="library-create-btn">
              Create Your Own Skill
            </Link>
          </div>

          <div className="library-section-header">
            <h2 className="library-section-title">Official Designs</h2>
          </div>

          <div className="library-filter-bar">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                className={`library-filter-btn ${activeFilter === f.id ? 'library-filter-btn--active' : ''}`}
                onClick={() => setActiveFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="library-grid">
            {filteredSkills.map((skill) => (
              <LibrarySkillCard key={skill.id} skill={skill} />
            ))}
            {filteredSkills.length === 0 && (
              <p className="library-empty">No designs in this category yet.</p>
            )}
          </div>

          <CommunitySection />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Library;
