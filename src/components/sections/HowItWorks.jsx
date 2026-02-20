import './HowItWorks.css';

const steps = [
  {
    number: 1,
    title: 'Browse the skill library',
    description: 'Explore our collection of design skills. Each skill transforms your AI agent\'s UI with a unique aesthetic.',
  },
  {
    number: 2,
    title: 'Copy the npx command',
    description: 'One click copies the exact command you need. No account required, no signup forms.',
  },
  {
    number: 3,
    title: 'Paste in your agent\'s chat',
    description: 'Run the command in your project. Your agent transforms your UI instantly.',
  },
  {
    number: 4,
    title: 'Watch your UI transform',
    description: 'See your interface come alive with the chosen design system. Every component adapts automatically.',
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <h2 className="how-it-works-title">How It Works</h2>
        <div className="how-it-works-steps">
          {steps.map((step) => (
            <div key={step.number} className="how-it-works-step">
              <div className="how-it-works-step-number">{step.number}</div>
              <h3 className="how-it-works-step-title">{step.title}</h3>
              <p className="how-it-works-step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
