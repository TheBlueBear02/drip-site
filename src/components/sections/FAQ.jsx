import { useState } from 'react';
import { useSkillContext } from '../../context/SkillContext';
import './FAQ.css';

const FAQ_ITEMS = [
  {
    id: 'what-is',
    question: 'What is getDRIP?',
    answer: 'getDRIP is a library of "skills" designed for AI agents. A skill is not just a theme; it is a complete design language for your project, structured as a folder of files that teaches an AI agent how to think, decide, and build within a specific visual world. When you add a skill, the agent internalizes it to ensure every component it generates feels native to that world.',
  },
  {
    id: 'why not',
    question: 'Why not use a design prompt instead?',
    answer: 'Simple prompts often lead to "Default UI" looks because agents lack a deep understanding of consistent design logic. While a prompt might describe a specific element, a getDRIP skill provides a comprehensive philosophy, defined design tokens (like colors, shadows, and typography), and reference patterns. This ensures that even when an agent builds something new, it follows the project\'s design principles and rules that keep the aesthetic cohesive.'
  },
  {
    id: 'how-add',
    question: 'How do I add a design to my project?',
    answer: 'Copy the npx command for the skill you want (e.g. npx getdrip add minimalist-monochrome), paste it into your agent\'s chat, and run it in your project. The skill is installed locally and your agent applies that design system to the code it generates.',
  },
  {
    id: 'platforms',
    question: 'Which AI platforms are supported?',
    answer: 'getDRIP works with Cursor, Lovable, Codex, Claude Code, Base44, and other vibe coding platforms that build react projects. No special integration is required, just run the command and let the agent do the rest.',
  },
  {
    id: 'account',
    question: 'Do I need an account or subscription?',
    answer: 'No. Skills are installed via npx from the public registry. No signup, no API keys, and no account required. You browse, copy the command, and paste it into your agent.',
  },
  {
    id: 'multiple-skills',
    question: 'Can I use more than one skill in a project?',
    answer: 'Each project typically uses one skill at a time so the UI stays consistent. You can switch skills by running a different npx getdrip add [skill-name] command. Or use the npx getdrip remove command to remove the skill from the project.',
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
        <h2 className="qa-title">Common Questions</h2>
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
