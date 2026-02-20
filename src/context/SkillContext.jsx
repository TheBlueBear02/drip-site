import { createContext, useContext, useState } from 'react';

const SkillContext = createContext();

export function SkillProvider({ children }) {
  const [activeSkill, setActiveSkill] = useState(null); // The locked skill
  const [previewSkill, setPreviewSkill] = useState(null); // Temporary hover state

  // The rendered skill = previewSkill ?? activeSkill ?? linear-modern (site default)
  // This means hover always wins over locked, locked wins over default

  return (
    <SkillContext.Provider
      value={{
        activeSkill,
        previewSkill,
        setActiveSkill,
        setPreviewSkill,
      }}
    >
      {children}
    </SkillContext.Provider>
  );
}

export function useSkillContext() {
  const context = useContext(SkillContext);
  if (!context) {
    throw new Error('useSkillContext must be used within SkillProvider');
  }
  return context;
}
