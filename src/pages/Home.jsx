import Nav from '../components/layout/Nav';
import SkillSwitcherStrip from '../components/ui/SkillSwitcherStrip';
import Hero from '../components/sections/Hero';
import HowItWorks from '../components/sections/HowItWorks';
import SkillsPreview from '../components/sections/SkillsPreview';
import PlatformSupport from '../components/sections/PlatformSupport';
import Footer from '../components/layout/Footer';

function Home() {
  return (
    <>
      <header className="site-header">
        <Nav />
        <SkillSwitcherStrip />
      </header>
      <Hero />
      <HowItWorks />
      <SkillsPreview />
      <PlatformSupport />
      <Footer />
    </>
  );
}

export default Home;
