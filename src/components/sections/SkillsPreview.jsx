import { useState, useCallback, useEffect } from 'react';
import { useSkillContext } from '../../context/SkillContext';
import { skillList } from '../../skills';
import CopyCommand from '../ui/CopyCommand';
import './SkillsPreview.css';

const CARDS_PER_VIEW = 3;
const MOBILE_INITIAL_CARDS = 3;
const MOBILE_SHOW_MORE_COUNT = 3;
const MOBILE_BREAKPOINT = 768;

// Preview image filenames in public/styles preview/ (one per skill)
const PREVIEW_IMAGES = {
  'linear-modern': 'linear modern.png',
  'clay-premium': 'clay-premium.png',
  'minimalist-monochrome': 'minimalist-monochrome.png',
  'playful-geometric': 'playful-geomtric.png',
  'neo-brutalism': 'neo-brutalism.png',
  'hand-drawn': 'hand-drawn.png',
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches : false
  );
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
    const handler = () => setIsMobile(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return isMobile;
}

/** Chunk into pages of 3; each btn click swaps all 3 visible cards for the next/prev page. */
function chunkPages(arr, size) {
  const pages = [];
  for (let i = 0; i < arr.length; i += size) {
    pages.push(arr.slice(i, i + size));
  }
  return pages.length ? pages : [arr];
}

function SkillCard({ skill, isActive, onPreviewClick }) {
  return (
    <div className="skills-preview-card">
      <div className="skills-preview-card-preview">
        <button
          type="button"
          className={`skills-preview-card-btn ${isActive ? 'skills-preview-card-btn-active' : ''}`}
          onClick={() => onPreviewClick(skill.id)}
        >
          {isActive ? 'Active' : 'Preview'}
        </button>
        {PREVIEW_IMAGES[skill.id] && (
          <img
            src={`${import.meta.env.BASE_URL}${['styles preview', PREVIEW_IMAGES[skill.id]].map(encodeURIComponent).join('/')}`}
            alt={`${skill.name} style preview`}
            className="skills-preview-card-preview-img"
          />
        )}
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
  );
}

function SkillsPreview() {
  const { setActiveSkill, activeSkill, previewSkill } = useSkillContext();
  const resolvedSkillId = previewSkill ?? activeSkill ?? 'linear-modern';
  const isPlayfulGeometric = resolvedSkillId === 'playful-geometric';
  const isLinearModern = resolvedSkillId === 'linear-modern';
  const [pageIndex, setPageIndex] = useState(0);
  const [mobileVisibleCount, setMobileVisibleCount] = useState(MOBILE_INITIAL_CARDS);
  const isMobile = useIsMobile();

  const previewSkills = skillList;
  const visibleSkills = isMobile
    ? previewSkills.slice(0, mobileVisibleCount)
    : previewSkills;
  const hasMoreMobile = isMobile && mobileVisibleCount < previewSkills.length;
  const showMoreMobile = () =>
    setMobileVisibleCount((n) => Math.min(n + MOBILE_SHOW_MORE_COUNT, previewSkills.length));
  const slides = chunkPages(previewSkills, CARDS_PER_VIEW);
  const totalPages = slides.length;

  const goPrev = useCallback(() => {
    setPageIndex((i) => (i - 1 + totalPages) % totalPages);
  }, [totalPages]);
  const goNext = useCallback(() => {
    setPageIndex((i) => (i + 1) % totalPages);
  }, [totalPages]);

  const handlePreviewClick = (skillId) => {
    if (activeSkill === skillId) {
      setActiveSkill(null);
    } else {
      setActiveSkill(skillId);
    }
  };

  return (
    <section id="skills" className={`skills-preview ${isPlayfulGeometric ? 'skills-preview--playful-geometric' : ''} ${isLinearModern ? 'skills-preview--linear-modern' : ''}`}>
      <div className="container">
        <h2 className="skills-preview-title">Featured Designs</h2>

        {isMobile ? (
          <>
            <div className="skills-preview-gallery">
              {visibleSkills.map((skill) => (
                <SkillCard
                  key={skill.id}
                  skill={skill}
                  isActive={activeSkill === skill.id}
                  onPreviewClick={handlePreviewClick}
                />
              ))}
            </div>
            {hasMoreMobile && (
              <div className="skills-preview-show-more-wrap">
                <button
                  type="button"
                  className="skills-preview-show-more"
                  onClick={showMoreMobile}
                >
                  Show more
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="skills-preview-carousel">
            <button
              type="button"
              className="skills-preview-arrow skills-preview-arrow--prev"
              onClick={goPrev}
              disabled={pageIndex === 0}
              aria-label="Previous designs"
            />
            <div className="skills-preview-viewport">
              <div
                className="skills-preview-track"
                style={{ transform: `translateX(-${pageIndex * 100}%)` }}
              >
                {slides.map((slideSkills, slideIndex) => (
                  <div key={slideIndex} className="skills-preview-slide">
                    {slideSkills.map((skill) => (
                      <SkillCard
                        key={skill.id}
                        skill={skill}
                        isActive={activeSkill === skill.id}
                        onPreviewClick={handlePreviewClick}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <button
              type="button"
              className="skills-preview-arrow skills-preview-arrow--next"
              onClick={goNext}
              disabled={pageIndex === totalPages - 1}
              aria-label="Next designs"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default SkillsPreview;
