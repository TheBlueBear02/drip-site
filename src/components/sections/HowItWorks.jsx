import './HowItWorks.css';

const steps = [
  {
    number: 1,
    title: 'Pick your vibe',
    description: 'Browse the library and find the aesthetic vibe your app needs. No CSS knowledge required.',
  },
  {
    number: 2,
    title: 'Copy one line',
    description: 'Grab the simple npx command. No signups, no API keys, no configuration BS.',
  },
  {
    number: 3,
    title: 'Paste in your project',
    description: 'Run the command in your project. Your agent learn the new style instanty and apply it to your project.',
  }
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
