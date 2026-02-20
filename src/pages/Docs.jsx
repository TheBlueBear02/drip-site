import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function Docs() {
    return (
        <>
            <Navigation />
            
            <section className="docs-page">
                <div className="container">
                    <div className="docs-section">
                        <h2>Getting Started</h2>
                        <p>GETDRIP.DEV is a collection of design skills that transform your AI agent's UI with beautiful, ready-to-use styles.</p>
                        
                        <h3>Installation</h3>
                        <p>Install GETDRIP globally or use npx to run commands directly:</p>
                        <pre><code>npm install -g getdrip</code></pre>
                        <p>Or use npx (no installation required):</p>
                        <pre><code>npx getdrip add [skill-name]</code></pre>

                        <h3>Quick Start</h3>
                        <p>Browse our skill library and copy the command for any skill you like. Then run it in your project directory:</p>
                        <pre><code>npx getdrip add retro-terminal</code></pre>
                        <p>The skill will be applied to your project automatically, transforming your UI components with the selected design aesthetic.</p>
                    </div>

                    <div className="docs-section">
                        <h2>Available Skills</h2>
                        <p>Each skill includes:</p>
                        <ul>
                            <li>Pre-configured design tokens (colors, fonts, spacing)</li>
                            <li>Styled React components</li>
                            <li>Responsive layouts</li>
                            <li>Accessibility features</li>
                        </ul>
                    </div>

                    <div className="docs-section">
                        <h2>Platform Support</h2>
                        <p>GETDRIP works with:</p>
                        <ul>
                            <li>Lovable</li>
                            <li>Cursor</li>
                            <li>Base44</li>
                            <li>Claude Code</li>
                        </ul>
                    </div>

                    <div className="docs-section">
                        <h2>Contributing</h2>
                        <p>Want to add a new skill? Visit our GitHub repository to learn how to contribute.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Docs;
