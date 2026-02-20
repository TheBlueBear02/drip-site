import { useState, useEffect } from 'react';
import { useSkillContext } from '../../context/SkillContext';
import CopyCommand from '../ui/CopyCommand';
import './Hero.css';

const HERO_HEADLINE = 'Your AI App Works. Now Make It Look Good.';
const TYPING_MS_PER_CHAR = 80;
const SENTENCE_BREAK_MS = 800;
const CURSOR_BLINK_MS = 530;
const FIRST_SENTENCE_END = HERO_HEADLINE.indexOf('.') + 1;

function Hero() {
  const { activeSkill, previewSkill } = useSkillContext();
  const resolvedSkillId = previewSkill ?? activeSkill ?? 'default';
  const isPlayfulGeometric = resolvedSkillId === 'playful-geometric';

  const [headlineVisibleLength, setHeadlineVisibleLength] = useState(0);
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setHeadlineVisibleLength(HERO_HEADLINE.length);
      setTypingDone(true);
      return;
    }

    if (headlineVisibleLength >= HERO_HEADLINE.length) {
      setTypingDone(true);
      return;
    }

    const delay =
      headlineVisibleLength === FIRST_SENTENCE_END ? SENTENCE_BREAK_MS : TYPING_MS_PER_CHAR;
    const t = setTimeout(() => {
      setHeadlineVisibleLength((n) => Math.min(n + 1, HERO_HEADLINE.length));
    }, delay);

    return () => clearTimeout(t);
  }, [headlineVisibleLength]);

  const defaultCommand = 'npx getdrip add [skill-name]';

  const content = (
    <>
      <p className="hero-eyebrow">CURE THE "DEFAULT UI" LOOK</p>
      <h1 className="hero-headline">
        {HERO_HEADLINE.slice(0, headlineVisibleLength)}
        {!typingDone && <span className="hero-headline-cursor" aria-hidden="true">|</span>}
      </h1>
      <p className="hero-subheadline">
       Drop fully realized design system into your vibe coding workflow with exactly one line.
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
