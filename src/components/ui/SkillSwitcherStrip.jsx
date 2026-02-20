import { useSkillContext } from '../../context/SkillContext';
import { skillList } from '../../skills';
import './SkillSwitcherStrip.css';

function SkillSwitcherStrip() {
  const { activeSkill, setActiveSkill } = useSkillContext();

  const handleClick = (skillId) => {
    setActiveSkill(skillId);
  };

  // Linear Modern is the site default: clicking it "resets" to default (null)
  const handleDefaultStyleClick = () => {
    setActiveSkill(null);
  };

  return (
    <div className="skill-switcher-strip">
      <div className="container">
        <div className="skill-switcher-scroll">
          {skillList.map((skill) => {
            const isDefaultStyle = skill.id === 'linear-modern';
            const isActive = isDefaultStyle
              ? activeSkill === null || activeSkill === 'linear-modern'
              : activeSkill === skill.id;
            return (
              <button
                key={skill.id}
                className={`skill-chip ${isActive ? 'skill-chip-active' : ''}`}
                onClick={isDefaultStyle ? handleDefaultStyleClick : () => handleClick(skill.id)}
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
