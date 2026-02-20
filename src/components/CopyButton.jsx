import { useState } from 'react';

function CopyButton({ command, className = '', size = 'normal' }) {
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

    const isSmall = size === 'small';
    const buttonClass = isSmall ? 'btn-copy-small' : 'btn-copy';
    const finalClass = `${buttonClass} ${copied ? 'copied' : ''} ${className}`.trim();

    return (
        <button 
            className={finalClass}
            onClick={handleCopy}
            aria-label="Copy command"
        >
            <svg width={isSmall ? "16" : "20"} height={isSmall ? "16" : "20"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            {!isSmall && <span className="copy-text">{copied ? 'Copied!' : 'Copy'}</span>}
        </button>
    );
}

export default CopyButton;
