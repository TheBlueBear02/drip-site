import './PlatformSupport.css';
import { useSkillContext } from '../../context/SkillContext';
import { skillMetas } from '../../skills';

const LOGOS_BASE = '/platforms%20logos';

const DEFAULT_SKILL = 'linear-modern';

// Dark bg = use light/dark-mode logos. Light bg = use black logos.
const platforms = [
  {
    name: 'Lovable',
    logoDarkBg: `${LOGOS_BASE}/lovable-light-png.png`,
    logoLightBg: `${LOGOS_BASE}/lovable-dark-png.png`,
  },
  {
    name: 'Cursor',
    logoDarkBg: `${LOGOS_BASE}/cursor logo for darkmode.png`,
    logoLightBg: `${LOGOS_BASE}/cursor logo.png`,
  },
  {
    name: 'Base44',
    logoDarkBg: `${LOGOS_BASE}/Base44-Dark-Mode-New.avif`,
    logoLightBg: `${LOGOS_BASE}/base44-logo_brandlogos.net_sum8k-scaled.png`,
  },
  {
    name: 'Claude Code',
    logoDarkBg: `${LOGOS_BASE}/claude%20logo%20for%20dark%20mode.png`,
    logoLightBg: `${LOGOS_BASE}/Claude_Logo_2023-s1280.png`,
  },
];

function PlatformSupport({ lightBg: lightBgProp }) {
  const { activeSkill, previewSkill } = useSkillContext();
  const resolvedId = previewSkill ?? activeSkill ?? DEFAULT_SKILL;
  const meta = skillMetas[resolvedId];
  const lightBg =
    lightBgProp ?? (meta?.category === 'light' || meta?.category === 'colorful');

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
                src={platform.logoDarkBg}
                alt={platform.name}
                className="platform-support-logo platform-support-logo--dark-bg"
              />
              <img
                src={platform.logoLightBg}
                alt={platform.name}
                className="platform-support-logo platform-support-logo--light-bg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlatformSupport;
