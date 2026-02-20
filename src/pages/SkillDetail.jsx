import { useParams, Navigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CopyButton from '../components/CopyButton';
import { getSkillById } from '../data/skills';

function SkillDetail() {
    const { id } = useParams();
    const skill = getSkillById(id);

    if (!skill) {
        return <Navigate to="/skills" replace />;
    }

    const prompt = `Apply the ${skill.id} skill to this project.\nRun: ${skill.command}\nTransform all UI components to match the ${skill.name.toLowerCase()} aesthetic.`;

    return (
        <>
            <Navigation />
            
            <section className="skill-detail">
                <div className="container">
                    {/* Full Preview */}
                    <div className={`skill-preview-full preview-placeholder ${skill.id}`}>
                        <h1 className="skill-name-heading" style={{ display: 'none' }}>{skill.name}</h1>
                    </div>

                    {/* Command Section */}
                    <div className="command-section">
                        <h2>Copy This Command</h2>
                        <div className="command-large">
                            <code>{skill.command}</code>
                            <CopyButton command={skill.command} />
                        </div>
                    </div>

                    {/* What's Inside */}
                    <div className="details-section">
                        <h2>What's Inside</h2>
                        <div className="details-grid">
                            <div className="detail-item">
                                <h3>Components</h3>
                                <ul className="components-list">
                                    {skill.components.map(component => (
                                        <li key={component}>{component}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="detail-item">
                                <h3>Design Tokens</h3>
                                <ul className="tokens-list">
                                    {skill.tokens.map(token => (
                                        <li key={token}>{token}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="detail-item">
                                <h3>Stack</h3>
                                <p className="stack-text">{skill.stack}</p>
                            </div>
                        </div>
                    </div>

                    {/* Before / After */}
                    <div className="details-section">
                        <h2>Before / After</h2>
                        <div className="before-after">
                            <div className="before-after-item">
                                <h3>Default AI UI</h3>
                                <div className="before-after-preview" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}></div>
                            </div>
                            <div className="before-after-item">
                                <h3>With Skill Applied</h3>
                                <div className={`before-after-preview preview-placeholder ${skill.id}`}></div>
                            </div>
                        </div>
                    </div>

                    {/* How to Apply */}
                    <div className="how-to-apply">
                        <h2>How to Apply</h2>
                        <p>Paste this prompt into your AI agent:</p>
                        <code>{prompt}</code>
                        <div style={{ marginTop: '16px' }}>
                            <CopyButton command={prompt} />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default SkillDetail;
