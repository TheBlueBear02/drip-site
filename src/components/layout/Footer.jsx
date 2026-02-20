import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <a href="https://github.com/getdrip" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.npmjs.com/package/getdrip" target="_blank" rel="noopener noreferrer">
              npm
            </a>
          </div>
          <div className="footer-copyright">
            <p>&copy; 2026 <span className="brand-get">GET</span><span className="brand-drip">DRIP</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
