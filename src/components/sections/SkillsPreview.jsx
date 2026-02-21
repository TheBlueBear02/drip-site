import { useState, useCallback } from 'react';
import { useSkillContext } from '../../context/SkillContext';
import { skillList } from '../../skills';
import CopyCommand from '../ui/CopyCommand';
import './SkillsPreview.css';

const CARDS_PER_VIEW = 3;

/** Sliding window: each slide shows 3 cards; one click moves by 1 card (left or right). */
function slidingSlides(arr, size) {
  if (arr.length <= size) return [arr];
  const slides = [];
  for (let i = 0; i <= arr.length - size; i++) {
    slides.push(arr.slice(i, i + size));
  }
  return slides;
}

function SkillsPreview() {
  const { setActiveSkill, activeSkill, previewSkill } = useSkillContext();
  const resolvedSkillId = previewSkill ?? activeSkill ?? 'linear-modern';
  const isPlayfulGeometric = resolvedSkillId === 'playful-geometric';
  const [pageIndex, setPageIndex] = useState(0);

  const previewSkills = skillList;
  const slides = slidingSlides(previewSkills, CARDS_PER_VIEW);
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
    <section id="skills" className={`skills-preview ${isPlayfulGeometric ? 'skills-preview--playful-geometric' : ''}`}>
      <div className="container">
        <h2 className="skills-preview-title">Featured Designs</h2>
        <div className="skills-preview-carousel">
          <button
            type="button"
            className="skills-preview-arrow skills-preview-arrow--prev"
            onClick={goPrev}
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
                    <div key={skill.id} className="skills-preview-card">
                      <div className="skills-preview-card-preview">
                        <button
                          type="button"
                          className={`skills-preview-card-btn ${activeSkill === skill.id ? 'skills-preview-card-btn-active' : ''}`}
                          onClick={() => handlePreviewClick(skill.id)}
                        >
                          {activeSkill === skill.id ? 'Active' : 'Preview'}
                        </button>
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
              ))}
            </div>
          </div>
          <button
            type="button"
            className="skills-preview-arrow skills-preview-arrow--next"
            onClick={goNext}
            aria-label="Next designs"
          />
        </div>
      </div>
    </section>
  );
}

export default SkillsPreview;
