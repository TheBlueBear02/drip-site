import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-content">
                    <Link to="/" className="logo">GETDRIP.DEV</Link>
                    <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                        <Link to="/skills">Skills</Link>
                        <Link to="/docs">Docs</Link>
                        <Link to="/skills" className="btn-primary">Browse designs</Link>
                    </div>
                    <button 
                        className="mobile-menu-toggle" 
                        aria-label="Toggle menu"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
