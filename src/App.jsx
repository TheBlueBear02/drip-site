import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SkillProvider } from './context/SkillContext';
import { useSkillTheme } from './hooks/useSkillTheme';
import FloatingTab from './components/ui/FloatingTab';
import Home from './pages/Home';

// Component that applies theme to root
function ThemeApplier() {
  useSkillTheme();
  return null;
}

function App() {
  return (
    <SkillProvider>
      <ThemeApplier />
      <Router basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <FloatingTab />
      </Router>
    </SkillProvider>
  );
}

export default App;
