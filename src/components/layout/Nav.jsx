import './Nav.css';

function Nav() {
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
          <a href="#home" onClick={(e) => handleScrollTo(e, 'home')} className="nav-logo">
            <span className="brand-get">GET</span><span className="brand-drip">DRIP</span>
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
          </div>
          <a href="#skills" onClick={(e) => handleScrollTo(e, 'skills')} className="nav-cta">
            Browse Skills
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
