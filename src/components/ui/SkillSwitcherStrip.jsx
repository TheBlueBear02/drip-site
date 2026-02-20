import { useSkillContext } from '../../context/SkillContext';
import { skillList } from '../../skills';
import './SkillSwitcherStrip.css';

function SkillSwitcherStrip() {
  const { activeSkill, setActiveSkill, setPreviewSkill } = useSkillContext();

  const handleMouseEnter = (skillId) => {
    setPreviewSkill(skillId);
  };

  const handleMouseLeave = () => {
    setPreviewSkill(null);
  };

  const handleClick = (skillId) => {
    setActiveSkill(skillId);
    setPreviewSkill(null); // Clear preview when locking
  };

  const handleDefaultClick = () => {
    setActiveSkill(null);
    setPreviewSkill(null);
  };

  // Filter out default from skillList since we show it separately
  const nonDefaultSkills = skillList.filter(skill => skill.id !== 'default');

  return (
    <div className="skill-switcher-strip">
      <div className="container">
        <div className="skill-switcher-scroll">
          {/* Default chip */}
          <button
            className={`skill-chip ${activeSkill === null || activeSkill === 'default' ? 'skill-chip-active' : ''}`}
            onMouseEnter={() => handleMouseEnter('default')}
            onMouseLeave={handleMouseLeave}
            onClick={handleDefaultClick}
          >
            <span className="skill-chip-name">Default</span>
          </button>

          {/* Skill chips */}
          {nonDefaultSkills.map((skill) => {
            const isActive = activeSkill === skill.id;
            return (
              <button
                key={skill.id}
                className={`skill-chip ${isActive ? 'skill-chip-active' : ''}`}
                onMouseEnter={() => handleMouseEnter(skill.id)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(skill.id)}
              >
                <span
                  className="skill-chip-swatch"
                  style={{ backgroundColor: skill.accentColor }}
                />
                <span className="skill-chip-name">{skill.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SkillSwitcherStrip;
