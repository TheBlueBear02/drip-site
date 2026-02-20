import { useState, useEffect } from 'react';
import './Nav.css';

// Full repo path for GitHub API (owner/repo)
const GITHUB_REPO = 'TheBlueBear02/drip-cli';
const GITHUB_URL = `https://github.com/${GITHUB_REPO}`;

function Nav() {
  const [stars, setStars] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${GITHUB_REPO}`)
      .then((res) => res.ok ? res.json() : Promise.reject(res))
      .then((data) => setStars(data.stargazers_count))
      .catch(() => setStars(null));
  }, []);

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollTo = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-content">
          <a href="#" onClick={handleScrollToTop} className="nav-logo" aria-label="Scroll to top">
            <span className="nav-logo-text">
              <span className="brand-get">GET</span><span className="brand-drip">DRIP</span>
            </span>
            <span className="nav-logo-beta" aria-label="Beta">Beta</span>
          </a>
          <div className="nav-links">
            <a href="#how-it-works" onClick={(e) => handleScrollTo(e, 'how-it-works')} className="nav-link">
              How It Works
            </a>
            <a href="#skills" onClick={(e) => handleScrollTo(e, 'skills')} className="nav-link">
              Skills
            </a>
            <a href="#platforms" onClick={(e) => handleScrollTo(e, 'platforms')} className="nav-link">
              Platforms
            </a>
            <a href="#faq" onClick={(e) => handleScrollTo(e, 'faq')} className="nav-link">
              Q&A
            </a>
          </div>
          <div className="nav-right">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-stars"
              aria-label={stars != null ? `${stars} stars on GitHub` : 'View on GitHub'}
            >
              <span className="nav-stars-label">GitHub Stars</span>
              <span className="nav-stars-icon" aria-hidden>★</span>
              <span className="nav-stars-count">
                {stars != null ? stars.toLocaleString() : '—'}
              </span>
            </a>
            <a href="#skills" onClick={(e) => handleScrollTo(e, 'skills')} className="nav-cta">
              Browse Skills
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
