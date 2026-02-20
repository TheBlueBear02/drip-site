import { useSkillContext } from '../../context/SkillContext';
import { skillList } from '../../skills';
import CopyCommand from '../ui/CopyCommand';
import './SkillsPreview.css';

function SkillsPreview() {
  const { setActiveSkill, activeSkill } = useSkillContext();
  
  // Get first 3 non-default skills
  const previewSkills = skillList.filter(skill => skill.id !== 'default').slice(0, 3);

  const handlePreviewClick = (skillId) => {
    // Toggle: if already active, reset to default; otherwise set to this skill
    if (activeSkill === skillId) {
      setActiveSkill(null);
    } else {
      setActiveSkill(skillId);
    }
  };

  return (
    <section id="skills" className="skills-preview">
      <div className="container">
        <h2 className="skills-preview-title">Featured Skills</h2>
        <div className="skills-preview-grid">
          {previewSkills.map((skill) => (
            <div
              key={skill.id}
              className="skills-preview-card"
            >
              <button
                className={`skills-preview-card-btn ${activeSkill === skill.id ? 'skills-preview-card-btn-active' : ''}`}
                onClick={() => handlePreviewClick(skill.id)}
              >
                {activeSkill === skill.id ? 'Active' : 'Preview'}
              </button>
              <div className="skills-preview-card-preview">
                <div
                  className="skills-preview-card-preview-bg"
                  style={{ backgroundColor: skill.bgColor }}
                />
              </div>
              <div className="skills-preview-card-content">
                <h3 className="skills-preview-card-title">{skill.name}</h3>
                <p className="skills-preview-card-description">{skill.description}</p>
                <div className="skills-preview-card-tags">
                  {skill.mood.slice(0, 3).map((tag) => (
                    <span key={tag} className="skills-preview-card-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="skills-preview-card-command">
                  <CopyCommand command={skill.command} size="sm" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsPreview;
