import './PlatformSupport.css';

const LOGOS_BASE = '/platforms%20logos';

const platforms = [
  { name: 'Lovable', logo: `${LOGOS_BASE}/lovable-dark-png.png` },
  { name: 'Cursor', logo: `${LOGOS_BASE}/Cursor_logo.svg.png` },
  { name: 'Base44', logo: `${LOGOS_BASE}/base44-logo_brandlogos.net_sum8k-scaled.png` },
  { name: 'Claude Code', logo: `${LOGOS_BASE}/Claude_Logo_2023-s1280.png` },
];

function PlatformSupport() {
  return (
    <section id="platforms" className="platform-support">
      <div className="container">
        <h2 className="platform-support-title">Platform Support</h2>
        <p className="platform-support-subtitle">
          GetDRIP works seamlessly with your favorite AI development platforms. And with every react project out there.
        </p>
        <div className="platform-support-strip">
          {platforms.map((platform) => (
            <div key={platform.name} className="platform-support-item">
              <img src={platform.logo} alt={platform.name} className="platform-support-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlatformSupport;
