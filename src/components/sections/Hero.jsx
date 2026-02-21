import { useState, useEffect } from 'react';
import { useSkillContext } from '../../context/SkillContext';
import CopyCommand from '../ui/CopyCommand';
import './Hero.css';

const HERO_HEADLINE = 'Your AI App Works. Now Make It Look Good.';
const TYPING_MS_PER_CHAR = 70;
const SENTENCE_BREAK_MS = 1000;
const CURSOR_BLINK_MS = 530;
const FIRST_SENTENCE_END = HERO_HEADLINE.indexOf('.') + 1;
const ACCENT_START = 31;   // start of "Look Good"
const ACCENT_END = 41;     // end of "Look Good" (exclusive; period is at 40)

function Hero() {
  const { activeSkill, previewSkill } = useSkillContext();
  const resolvedSkillId = previewSkill ?? activeSkill ?? 'linear-modern';
  const isPlayfulGeometric = resolvedSkillId === 'playful-geometric';
  const isClayPremium = resolvedSkillId === 'clay-premium';
  const isNeoBrutalism = resolvedSkillId === 'neo-brutalism';
  const isHandDrawn = resolvedSkillId === 'hand-drawn';

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

  const defaultCommand = `npx getdrip add ${resolvedSkillId}`;

  const content = (
    <>
      <p className="hero-eyebrow">CURE THE "DEFAULT UI" LOOK</p>
      <h1 className="hero-headline">
        {HERO_HEADLINE.slice(0, Math.min(headlineVisibleLength, ACCENT_START))}
        {headlineVisibleLength > ACCENT_START && (
          <span className="hero-headline-accent">
            {HERO_HEADLINE.slice(ACCENT_START, Math.min(headlineVisibleLength, ACCENT_END))}
          </span>
        )}
        {headlineVisibleLength > ACCENT_END && HERO_HEADLINE.slice(ACCENT_END, headlineVisibleLength)}
        {!typingDone && <span className="hero-headline-cursor" aria-hidden="true">|</span>}
      </h1>
      <p className="hero-subheadline">
      Drop a complete design system into your project with one command and get back to vibe coding.
      </p>
      <div className="hero-cta-group">
        <p className="hero-try-label">Apply style with:</p>
        <div className="hero-command">
          <CopyCommand command={defaultCommand} size="lg" />
        </div>
      </div>
      <p className="hero-free">100% style, 100% free</p>
    </>
  );

  return (
    <section
      id="home"
      className={`hero ${isPlayfulGeometric ? 'hero--playful-geometric' : ''} ${isClayPremium ? 'hero--clay-premium' : ''} ${isNeoBrutalism ? 'hero--neo-brutalism' : ''} ${isHandDrawn ? 'hero--hand-drawn' : ''}`}
    >
      {isClayPremium && (
        <div className="hero-blobs" aria-hidden="true">
          <div className="hero-blob hero-blob--1" />
          <div className="hero-blob hero-blob--2" />
          <div className="hero-blob hero-blob--3" />
          <div className="hero-blob hero-blob--4" />
        </div>
      )}
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

      {!isPlayfulGeometric && !isClayPremium && !isNeoBrutalism && !isHandDrawn && <div className="hero-background" />}

      <div className="container">
        {isPlayfulGeometric || isNeoBrutalism || isHandDrawn ? (
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
