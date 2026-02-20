import { useState, useCallback } from 'react';
import { useSkillContext } from '../../context/SkillContext';
import { skillMetas } from '../../skills';
import './FloatingTab.css';

function FloatingTab() {
  const { activeSkill } = useSkillContext();
  const [copied, setCopied] = useState(false);

  const meta = activeSkill ? skillMetas[activeSkill] : skillMetas['default'];
  const displayName = meta?.name ?? 'Default';
  const command = meta?.command ?? 'npx getdrip add default';

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback for older browsers
      const ta = document.createElement('textarea');
      ta.value = command;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [command]);

  return (
    <div className="floating-tab" aria-label="getDRIP — copy design command">
      <span className="floating-tab-label">
        getDRIP<span className="floating-tab-sep">/</span>{displayName}
      </span>
      <button
        type="button"
        className="floating-tab-copy"
        onClick={handleCopy}
        title={`Copy: ${command}`}
        aria-label={`Copy command for ${displayName}`}
      >
        <CopyIcon />
        <span>{copied ? 'Copied!' : 'Copy command'}</span>
      </button>
    </div>
  );
}

function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

export default FloatingTab;
