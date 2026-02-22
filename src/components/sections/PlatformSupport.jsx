import './PlatformSupport.css';
import { useSkillContext } from '../../context/SkillContext';
import { skillMetas } from '../../skills';

const LOGOS_BASE = `${import.meta.env.BASE_URL}platforms%20logos`;

const DEFAULT_SKILL = 'linear-modern';

// Logos for light backgrounds (dark/black variants).
const platformsLightBg = [
  { name: 'Lovable', logo: `${LOGOS_BASE}/lovable-dark-png.png` },
  { name: 'Cursor', logo: `${LOGOS_BASE}/cursor logo.png` },
  { name: 'OpenAI', logo: `${LOGOS_BASE}/OpenAI-black-wordmark.svg` },
  { name: 'Claude Code', logo: `${LOGOS_BASE}/Claude_Logo_2023-s1280.png` },
  { name: 'Base44', logo: `${LOGOS_BASE}/base44-logo_brandlogos.net_sum8k-scaled.png` },
];

// Logos for dark backgrounds (light/white variants) — used by linear-modern.
const platformsDarkBg = [
  { name: 'Lovable', logo: `${LOGOS_BASE}/lovable-light-png.png` },
  { name: 'Cursor', logo: `${LOGOS_BASE}/cursor logo for darkmode.png` },
  { name: 'OpenAI', logo: `${LOGOS_BASE}/OpenAI-white-wordmark.svg` },
  { name: 'Claude Code', logo: `${LOGOS_BASE}/claude logo for dark mode.png` },
  { name: 'Base44', logo: `${LOGOS_BASE}/Base44-Dark-Mode-New.avif` },
];

function PlatformSupport({ lightBg: lightBgProp }) {
  const { activeSkill, previewSkill } = useSkillContext();
  const resolvedId = previewSkill ?? activeSkill ?? DEFAULT_SKILL;
  const meta = skillMetas[resolvedId];
  const lightBg =
    lightBgProp ?? (meta?.category === 'light' || meta?.category === 'colorful');
  const useDarkBgLogos = resolvedId === 'linear-modern';
  const platforms = useDarkBgLogos ? platformsDarkBg : platformsLightBg;

  return (
    <section
      id="platforms"
      className={`platform-support${lightBg ? ' platform-support--light' : ''}`}
    >
      <div className="container">
        <h2 className="platform-support-title">Platform Support</h2>
        <p className="platform-support-subtitle">
          GetDRIP works seamlessly with your favorite AI development platforms. And with every react project out there.
        </p>
        <div className="platform-support-strip">
          {platforms.map((platform) => (
            <div key={platform.name} className="platform-support-item">
              <img
                src={platform.logo}
                alt={platform.name}
                className="platform-support-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlatformSupport;
