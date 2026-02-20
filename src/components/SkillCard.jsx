import { Link } from 'react-router-dom';
import CopyButton from './CopyButton';

function SkillCard({ skill }) {
    return (
        <div className="skill-card">
            <div className="skill-preview">
                <div className={`preview-placeholder ${skill.id}`}></div>
            </div>
            <h3>{skill.name}</h3>
            <div className="skill-tags">
                {skill.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                ))}
            </div>
            <div className="skill-command">
                <code>{skill.command}</code>
                <CopyButton command={skill.command} size="small" />
            </div>
            <Link to={`/skills/${skill.id}`} className="btn-secondary">Preview</Link>
        </div>
    );
}

export default SkillCard;
