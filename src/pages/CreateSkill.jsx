import { useState, useRef, useEffect } from 'react';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';

// ── Constants ─────────────────────────────────────────────────────────────────

const MAGIC_PHASES = [
  {
    id: 'reading',
    label: 'Reading your design DNA',
    sub: 'Extracting colors, shapes, rhythm, and visual intent from your screenshots',
    duration: 12000,
  },
  {
    id: 'reverse',
    label: 'Reverse-engineering the visual language',
    sub: 'Building a complete design token system from what the AI sees',
    duration: 15000,
  },
  {
    id: 'writing',
    label: 'Writing your skill files',
    sub: 'Components, tokens, integration configs — the full design world',
    duration: 20000,
  },
  {
    id: 'publishing',
    label: 'Publishing to the registry',
    sub: 'Your skill is being pushed live — almost there',
    duration: 6000,
  },
];

const FLOATING_TOKENS = [
  '--color-primary', '--font-display', '--radius-md', '--shadow-lift',
  '--spacing-section', 'Button.jsx', 'colors.md', 'Card.jsx',
  '--motion-bounce', 'philosophy.md', 'typography.md', '--border-thick',
  'SKILL.md', 'Navbar.jsx', '--color-accent', 'globals.css',
  'tailwind.config.js', 'LandingPage.jsx', '--color-bg', 'Badge.jsx',
];

// ── Main Component ─────────────────────────────────────────────────────────────

export default function CreateSkill() {
  const [step, setStep] = useState('upload'); // 'upload' | 'magic' | 'done'
  const [images, setImages] = useState([]); // { file, preview }[]
  const [skillName, setSkillName] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [nameError, setNameError] = useState('');

  // Magic screen state
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [phaseProgress, setPhaseProgress] = useState(0);
  const [apiPhase, setApiPhase] = useState('idle'); // 'image' | 'skill' | 'github' | 'done'
  const [errorMsg, setErrorMsg] = useState('');

  // Done state
  const [resultSkillName, setResultSkillName] = useState('');
  const [copied, setCopied] = useState(false);

  const fileInputRef = useRef(null);
  const phaseTimerRef = useRef(null);
  const progressTimerRef = useRef(null);

  // ── File handling ──────────────────────────────────────────────────────────

  function addFiles(files) {
    const valid = Array.from(files).filter((f) => f.type.startsWith('image/'));
    const newItems = valid.slice(0, 3 - images.length).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...newItems].slice(0, 3));
  }

  function removeImage(index) {
    setImages((prev) => {
      const copy = [...prev];
      URL.revokeObjectURL(copy[index].preview);
      copy.splice(index, 1);
      return copy;
    });
  }

  function onDrop(e) {
    e.preventDefault();
    setIsDragging(false);
    addFiles(e.dataTransfer.files);
  }

  function onDragOver(e) {
    e.preventDefault();
    setIsDragging(true);
  }

  function onDragLeave() {
    setIsDragging(false);
  }

  function toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result); // data:image/... base64
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  // ── Validate & start ──────────────────────────────────────────────────────

  function slugify(val) {
    return val.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  }

  function handleNameChange(e) {
    const val = e.target.value;
    setSkillName(val);
    if (nameError) setNameError('');
  }

  async function handleCreate() {
    if (images.length === 0) return;
    const slug = slugify(skillName);
    if (!slug) {
      setNameError('Enter a name for your skill');
      return;
    }

    setResultSkillName(slug);
    setStep('magic');
    setPhaseIndex(0);
    setPhaseProgress(0);
    setApiPhase('image');
    runMagicPhases();
    runApiFlow(slug);
  }

  // ── Magic phase animation ──────────────────────────────────────────────────

  function runMagicPhases() {
    let current = 0;

    function advance() {
      if (current >= MAGIC_PHASES.length - 1) return;
      current += 1;
      setPhaseIndex(current);
      setPhaseProgress(0);
      phaseTimerRef.current = setTimeout(advance, MAGIC_PHASES[current].duration);
    }

    // Progress bar ticks every 100ms
    let elapsed = 0;
    progressTimerRef.current = setInterval(() => {
      elapsed += 100;
      const phaseDur = MAGIC_PHASES[current]?.duration ?? 12000;
      setPhaseProgress(Math.min((elapsed / phaseDur) * 100, 97));
      if (elapsed >= phaseDur) elapsed = 0;
    }, 100);

    phaseTimerRef.current = setTimeout(advance, MAGIC_PHASES[0].duration);
  }

  function clearMagicTimers() {
    clearTimeout(phaseTimerRef.current);
    clearInterval(progressTimerRef.current);
  }

  // ── Real API calls ─────────────────────────────────────────────────────────

  async function runApiFlow(slug) {
    try {
      // Step 1: images → design doc
      setApiPhase('image');
      const base64Images = await Promise.all(images.map((img) => toBase64(img.file)));

      const designRes = await fetch('/api/image-to-design', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ images: base64Images }),
      });

      if (!designRes.ok) throw new Error('Failed to analyse images');
      const { designDoc } = await designRes.json();

      // Step 2: design doc → skill files + GitHub push
      setApiPhase('skill');
      const skillRes = await fetch('/api/design-to-skill', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ designDoc, skillName: slug }),
      });

      if (!skillRes.ok) throw new Error('Failed to generate skill');
      await skillRes.json();

      // Done
      clearMagicTimers();
      setApiPhase('done');
      setPhaseIndex(MAGIC_PHASES.length - 1);
      setPhaseProgress(100);

      // Brief pause before showing done screen
      setTimeout(() => setStep('done'), 1200);
    } catch (err) {
      clearMagicTimers();
      setErrorMsg(err.message ?? 'Something went wrong');
      setStep('error');
    }
  }

  // ── Copy command ──────────────────────────────────────────────────────────

  function copyCommand() {
    navigator.clipboard.writeText(`npx getdrip add ${resultSkillName}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  // ── Paste from clipboard ──────────────────────────────────────────────────

  useEffect(() => {
    if (step !== 'upload') return;

    function handlePaste(e) {
      const items = Array.from(e.clipboardData?.items ?? []);
      const imageFiles = items
        .filter((item) => item.type.startsWith('image/'))
        .map((item) => item.getAsFile())
        .filter(Boolean);
      if (imageFiles.length > 0) addFiles(imageFiles);
    }

    document.addEventListener('paste', handlePaste);
    return () => document.removeEventListener('paste', handlePaste);
  }, [step, images.length]); // re-bind when images.length changes so addFiles closure is fresh

  // ── Cleanup on unmount ────────────────────────────────────────────────────

  useEffect(() => () => clearMagicTimers(), []);

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--color-bg, #0a0a0a)', color: 'var(--color-fg, #f0f0f0)' }}>
      <Nav variant="create" />

      {step === 'upload' && (
        <UploadStep
          images={images}
          skillName={skillName}
          nameError={nameError}
          isDragging={isDragging}
          fileInputRef={fileInputRef}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onBrowse={() => fileInputRef.current?.click()}
          onFileInput={(e) => addFiles(e.target.files)}
          onRemoveImage={removeImage}
          onNameChange={handleNameChange}
          onCreate={handleCreate}
        />
      )}

      {step === 'magic' && (
        <MagicScreen
          phaseIndex={phaseIndex}
          phaseProgress={phaseProgress}
          apiPhase={apiPhase}
        />
      )}

      {step === 'done' && (
        <DoneScreen
          skillName={resultSkillName}
          copied={copied}
          onCopy={copyCommand}
          onCreateAnother={() => {
            setStep('upload');
            setImages([]);
            setSkillName('');
            setResultSkillName('');
          }}
        />
      )}

      {step === 'error' && (
        <ErrorScreen
          message={errorMsg}
          onRetry={() => {
            setStep('upload');
            setErrorMsg('');
          }}
        />
      )}

      <Footer />
    </div>
  );
}

// ── Upload Step ───────────────────────────────────────────────────────────────

function UploadStep({ images, skillName, nameError, isDragging, fileInputRef, onDrop, onDragOver, onDragLeave, onBrowse, onFileInput, onRemoveImage, onNameChange, onCreate }) {
  return (
    <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 24px' }}>
      <div style={{ maxWidth: 640, width: '100%' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span style={{ display: 'inline-block', fontSize: 13, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-primary, #7c6af7)', marginBottom: 16 }}>
            AI Skill Generator
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, lineHeight: 1.1, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
            Turn any design into<br />a Drip skill
          </h1>
          <p style={{ fontSize: 17, color: 'var(--color-muted-fg, #888)', margin: 0, lineHeight: 1.6 }}>
            Upload screenshots of a UI you love. We'll reverse-engineer the visual language and generate a complete, installable skill.
          </p>
        </div>

        {/* Skill name */}
        <div style={{ marginBottom: 24 }}>
          <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 8, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-muted-fg, #888)' }}>
            Skill name
          </label>
          <input
            type="text"
            placeholder="e.g. glassmorphic-dashboard"
            value={skillName}
            onChange={onNameChange}
            style={{
              width: '100%',
              padding: '14px 16px',
              fontSize: 16,
              background: 'rgba(255,255,255,0.04)',
              border: `1px solid ${nameError ? '#e05252' : 'rgba(255,255,255,0.12)'}`,
              borderRadius: 12,
              color: 'inherit',
              outline: 'none',
              boxSizing: 'border-box',
              transition: 'border-color 0.2s',
            }}
          />
          {nameError && <p style={{ margin: '6px 0 0', fontSize: 13, color: '#e05252' }}>{nameError}</p>}
          <p style={{ margin: '6px 0 0', fontSize: 12, color: 'var(--color-muted-fg, #666)' }}>
            Will be used as: <code style={{ background: 'rgba(255,255,255,0.06)', padding: '1px 6px', borderRadius: 4 }}>npx getdrip add {skillName ? skillName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') : 'your-skill-name'}</code>
          </p>
        </div>

        {/* Drop zone */}
        <div
          onDrop={onDrop}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onClick={images.length < 3 ? onBrowse : undefined}
          style={{
            border: `2px dashed ${isDragging ? 'var(--color-primary, #7c6af7)' : 'rgba(255,255,255,0.12)'}`,
            borderRadius: 16,
            padding: images.length === 0 ? '48px 24px' : '24px',
            textAlign: 'center',
            cursor: images.length < 3 ? 'pointer' : 'default',
            transition: 'border-color 0.2s, background 0.2s',
            background: isDragging ? 'rgba(124,106,247,0.06)' : 'rgba(255,255,255,0.02)',
            marginBottom: 24,
          }}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            style={{ display: 'none' }}
            onChange={onFileInput}
          />

          {images.length === 0 ? (
            <>
              <div style={{ fontSize: 40, marginBottom: 12 }}>🖼</div>
              <p style={{ margin: '0 0 6px', fontWeight: 600, fontSize: 16 }}>Drop screenshots here</p>
              <p style={{ margin: 0, fontSize: 14, color: 'var(--color-muted-fg, #888)' }}>
                or <span style={{ color: 'var(--color-fg, #f0f0f0)' }}>click to browse</span>
                {' · '}
                <span style={{ color: 'var(--color-fg, #f0f0f0)' }}>Ctrl+V to paste</span>
                {' — up to 3 images'}
              </p>
            </>
          ) : (
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              {images.map((img, i) => (
                <div key={i} style={{ position: 'relative' }}>
                  <img
                    src={img.preview}
                    alt={`Screenshot ${i + 1}`}
                    style={{ width: 160, height: 110, objectFit: 'cover', borderRadius: 10, border: '1px solid rgba(255,255,255,0.1)' }}
                  />
                  <button
                    onClick={(e) => { e.stopPropagation(); onRemoveImage(i); }}
                    style={{ position: 'absolute', top: -8, right: -8, width: 24, height: 24, borderRadius: '50%', border: 'none', background: '#333', color: '#fff', cursor: 'pointer', fontSize: 14, lineHeight: '24px' }}
                    aria-label="Remove image"
                  >
                    ×
                  </button>
                </div>
              ))}
              {images.length < 3 && (
                <div
                  style={{ width: 160, height: 110, borderRadius: 10, border: '2px dashed rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, color: 'rgba(255,255,255,0.3)', cursor: 'pointer' }}
                  onClick={(e) => { e.stopPropagation(); onBrowse(); }}
                >
                  +
                </div>
              )}
            </div>
          )}
        </div>

        {/* CTA */}
        <button
          onClick={onCreate}
          disabled={images.length === 0}
          style={{
            width: '100%',
            padding: '16px 24px',
            fontSize: 17,
            fontWeight: 700,
            border: 'none',
            borderRadius: 12,
            cursor: images.length === 0 ? 'not-allowed' : 'pointer',
            background: images.length === 0 ? 'rgba(255,255,255,0.06)' : 'var(--color-primary, #7c6af7)',
            color: images.length === 0 ? 'rgba(255,255,255,0.3)' : '#fff',
            transition: 'opacity 0.2s, transform 0.15s',
            letterSpacing: '-0.01em',
          }}
          onMouseEnter={(e) => { if (images.length > 0) e.currentTarget.style.opacity = '0.88'; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
        >
          Create Design Skill →
        </button>
      </div>
    </main>
  );
}

// ── Magic Screen ──────────────────────────────────────────────────────────────

function MagicScreen({ phaseIndex, phaseProgress, apiPhase }) {
  const phase = MAGIC_PHASES[phaseIndex];
  const [visibleTokens, setVisibleTokens] = useState([]);
  const [dots, setDots] = useState('');

  // Gradually reveal floating tokens
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < FLOATING_TOKENS.length) {
        setVisibleTokens((prev) => [...prev, i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 800);
    return () => clearInterval(interval);
  }, []);

  // Animated dots for the label
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((d) => (d.length >= 3 ? '' : d + '.'));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,106,247,0.08) 0%, transparent 70%)', animation: 'pulse 4s ease-in-out infinite' }} />
      </div>

      {/* Floating tokens */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {FLOATING_TOKENS.map((token, i) => {
          const visible = visibleTokens.includes(i);
          const x = 5 + (i * 31 % 90);
          const y = 10 + (i * 17 % 80);
          return (
            <div
              key={token}
              style={{
                position: 'absolute',
                left: `${x}%`,
                top: `${y}%`,
                fontSize: 11,
                fontFamily: 'monospace',
                color: 'rgba(124,106,247,0.45)',
                opacity: visible ? 1 : 0,
                transition: 'opacity 1s ease',
                whiteSpace: 'nowrap',
                animation: visible ? `float-${i % 3} ${6 + (i % 4)}s ease-in-out infinite` : 'none',
              }}
            >
              {token}
            </div>
          );
        })}
      </div>

      {/* Central content */}
      <div style={{ position: 'relative', textAlign: 'center', maxWidth: 560, zIndex: 1 }}>
        {/* Spinner ring */}
        <div style={{ marginBottom: 36, display: 'flex', justifyContent: 'center' }}>
          <svg width="72" height="72" viewBox="0 0 72 72" style={{ animation: 'spin 1.4s linear infinite' }}>
            <circle cx="36" cy="36" r="30" fill="none" stroke="rgba(124,106,247,0.12)" strokeWidth="4" />
            <circle cx="36" cy="36" r="30" fill="none" stroke="var(--color-primary,#7c6af7)" strokeWidth="4"
              strokeDasharray="60 130" strokeLinecap="round" />
          </svg>
        </div>

        {/* Phase label */}
        <h2 style={{ fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: 800, margin: '0 0 12px', letterSpacing: '-0.02em', transition: 'opacity 0.4s' }}>
          {phase.label}{dots}
        </h2>

        <p style={{ fontSize: 15, color: 'var(--color-muted-fg,#888)', margin: '0 0 40px', lineHeight: 1.6, maxWidth: 420, marginLeft: 'auto', marginRight: 'auto' }}>
          {phase.sub}
        </p>

        {/* Phase steps */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 40 }}>
          {MAGIC_PHASES.map((p, i) => (
            <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{
                width: i <= phaseIndex ? (i === phaseIndex ? 28 : 10) : 10,
                height: 6,
                borderRadius: 3,
                background: i < phaseIndex ? 'var(--color-primary,#7c6af7)' : i === phaseIndex ? 'var(--color-primary,#7c6af7)' : 'rgba(255,255,255,0.12)',
                transition: 'width 0.4s ease, background 0.3s',
                opacity: i < phaseIndex ? 0.5 : 1,
              }} />
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div style={{ height: 3, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden', width: 240, margin: '0 auto' }}>
          <div style={{ height: '100%', background: 'var(--color-primary,#7c6af7)', borderRadius: 2, width: `${phaseProgress}%`, transition: 'width 0.3s linear' }} />
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100% { opacity:0.6; transform:translateX(-50%) scale(1); } 50% { opacity:1; transform:translateX(-50%) scale(1.05); } }
        @keyframes float-0 { 0%,100% { transform:translateY(0px); } 50% { transform:translateY(-8px); } }
        @keyframes float-1 { 0%,100% { transform:translateY(0px); } 50% { transform:translateY(-14px); } }
        @keyframes float-2 { 0%,100% { transform:translateY(0px); } 50% { transform:translateY(-6px); } }
      `}</style>
    </main>
  );
}

// ── Done Screen ───────────────────────────────────────────────────────────────

function DoneScreen({ skillName, copied, onCopy, onCreateAnother }) {
  return (
    <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 24px', textAlign: 'center' }}>
      <div style={{ maxWidth: 560, width: '100%' }}>
        {/* Success icon */}
        <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(75,210,143,0.12)', border: '2px solid rgba(75,210,143,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px', fontSize: 30 }}>
          ✓
        </div>

        <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 800, margin: '0 0 12px', letterSpacing: '-0.02em' }}>
          <span style={{ color: 'var(--color-primary,#7c6af7)' }}>{skillName}</span> is live
        </h2>
        <p style={{ fontSize: 16, color: 'var(--color-muted-fg,#888)', margin: '0 0 40px', lineHeight: 1.6 }}>
          Your skill is now in the Drip registry. Install it in any project with one command:
        </p>

        {/* Copy command */}
        <div
          onClick={onCopy}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '14px 20px', cursor: 'pointer', marginBottom: 32, transition: 'border-color 0.2s', maxWidth: '100%' }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(124,106,247,0.4)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
        >
          <code style={{ fontSize: 15, fontFamily: 'monospace', color: 'var(--color-primary,#7c6af7)', wordBreak: 'break-all' }}>
            npx getdrip add {skillName}
          </code>
          <span style={{ fontSize: 13, color: copied ? '#4bd28f' : 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap', transition: 'color 0.2s', flexShrink: 0 }}>
            {copied ? '✓ Copied' : 'Copy'}
          </span>
        </div>

        <button
          onClick={onCreateAnother}
          style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-muted-fg,#888)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,0.2)' }}
        >
          Create another skill
        </button>
      </div>
    </main>
  );
}

// ── Error Screen ──────────────────────────────────────────────────────────────

function ErrorScreen({ message, onRetry }) {
  return (
    <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 24px', textAlign: 'center' }}>
      <div style={{ maxWidth: 440 }}>
        <div style={{ fontSize: 40, marginBottom: 24 }}>⚠</div>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '0 0 12px' }}>Something went wrong</h2>
        <p style={{ color: 'var(--color-muted-fg,#888)', margin: '0 0 32px', fontSize: 14, fontFamily: 'monospace' }}>{message}</p>
        <button
          onClick={onRetry}
          style={{ padding: '12px 28px', fontSize: 15, fontWeight: 700, borderRadius: 10, border: 'none', background: 'var(--color-primary,#7c6af7)', color: '#fff', cursor: 'pointer' }}
        >
          Try again
        </button>
      </div>
    </main>
  );
}
