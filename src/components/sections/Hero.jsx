import { Link } from 'react-router-dom';
import { useSkillContext } from '../../context/SkillContext';
import CopyCommand from '../ui/CopyCommand';
import './Hero.css';

function Hero() {
  const { activeSkill, previewSkill } = useSkillContext();
  const resolvedSkillId = previewSkill ?? activeSkill ?? 'default';
  const isPlayfulGeometric = resolvedSkillId === 'playful-geometric';

  const defaultCommand = 'npx getdrip add [skill-name]';

  const content = (
    <>
      <p className="hero-eyebrow">Design skills for AI agents</p>
      <h1 className="hero-headline">
        Transform Your AI Design in Seconds 
      </h1>
      <p className="hero-subheadline">
      Use GetDRIP to add beautiful design skills to your vibe coding project with only one line
      </p>
      <div className="hero-cta-group">
        <div className="hero-command">
          <CopyCommand command={defaultCommand} size="lg" />
        </div>

      </div>
    </>
  );

  return (
    <section
      id="home"
      className={`hero ${isPlayfulGeometric ? 'hero--playful-geometric' : ''}`}
    >
      {isPlayfulGeometric && (
        <div className="hero-shapes" aria-hidden="true">
          <div className="hero-shape hero-shape--circle hero-shape--1" />
          <div className="hero-shape hero-shape--circle hero-shape--2" />
          <div className="hero-shape hero-shape--circle hero-shape--3" />
          <div className="hero-shape hero-shape--triangle hero-shape--4" />
          <div className="hero-shape hero-shape--triangle hero-shape--5" />
          <div className="hero-shape hero-shape--dot hero-shape--6" />
          <div className="hero-shape hero-shape--dot hero-shape--7" />
          <div className="hero-shape hero-shape--dot hero-shape--8" />
        </div>
      )}

      {!isPlayfulGeometric && <div className="hero-background" />}

      <div className="container">
        {isPlayfulGeometric ? (
          <div className="hero-card">
            <div className="hero-content">{content}</div>
          </div>
        ) : (
          <div className="hero-content">{content}</div>
        )}
      </div>
    </section>
  );
}

export default Hero;
