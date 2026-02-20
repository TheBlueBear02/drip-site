import { useState } from 'react';
import { useSkillContext } from '../../context/SkillContext';
import './FAQ.css';

const FAQ_ITEMS = [
  {
    id: 'what-is',
    question: 'What is getDRIP?',
    answer: 'getDRIP is a library of design system skills for AI coding agents. Each skill gives your agent a complete visual language—colors, typography, shadows, and components—so the UIs it generates match a specific aesthetic instead of generic defaults.',
  },
  {
    id: 'how-add',
    question: 'How do I add a skill to my project?',
    answer: 'Copy the npx command for the skill you want (e.g. npx getdrip add minimalist-monochrome), paste it into your agent\'s chat, and run it in your project. The skill is installed locally and your agent applies that design system to the code it generates.',
  },
  {
    id: 'platforms',
    question: 'Which AI platforms are supported?',
    answer: 'getDRIP works with Cursor, Lovable, Bolt, Claude Code, Base44, and other agents that can run CLI commands and use project files. No special integration is required—just run the command where your agent can see the output.',
  },
  {
    id: 'account',
    question: 'Do I need an account or subscription?',
    answer: 'No. Skills are installed via npx from the public registry. No signup, no API keys, and no account required. You browse, copy the command, and paste it into your agent.',
  },
  {
    id: 'multiple-skills',
    question: 'Can I use more than one skill in a project?',
    answer: 'Each project typically uses one skill at a time so the UI stays consistent. You can switch skills by running a different npx getdrip add [skill-name] command; the new skill replaces the previous one for that project.',
  },
];

function FAQ() {
  const { activeSkill, previewSkill } = useSkillContext();
  const resolvedSkillId = previewSkill ?? activeSkill ?? 'linear-modern';
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className={`qa qa--${resolvedSkillId}`}>
      <div className="container">
        <h2 className="qa-title">Questions & Answers</h2>
        <p className="qa-subtitle">
        </p>
        <div className="qa-list">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`qa-item ${isOpen ? 'qa-item--open' : ''}`}
              >
                <button
                  type="button"
                  className="qa-question"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`qa-answer-${item.id}`}
                  id={`qa-question-${item.id}`}
                >
                  <span className="qa-question-text">{item.question}</span>
                  <span className="qa-icon" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div
                  id={`qa-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`qa-question-${item.id}`}
                  aria-hidden={!isOpen}
                  className="qa-answer-wrap"
                >
                  <div className="qa-answer">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
