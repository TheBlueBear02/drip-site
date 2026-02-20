import { useState } from 'react';
import './CopyCommand.css';

function CopyCommand({ command, size = 'md' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      alert('Failed to copy. Please copy manually: ' + command);
    }
  };

  return (
    <div className={`copy-command copy-command-${size}`}>
      <code className="copy-command-text">{command}</code>
      <button
        className={`copy-command-button ${copied ? 'copy-command-button-copied' : ''}`}
        onClick={handleCopy}
        aria-label="Copy command"
      >
        {copied ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        )}
      </button>
    </div>
  );
}

export default CopyCommand;
