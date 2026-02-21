import { useEffect } from 'react';
import { useSkillContext } from '../context/SkillContext';
import { skillThemes } from '../skills';

/**
 * Watches the resolved active theme
 * On change: iterates token map, writes each to document.documentElement.style
 * Also handles font URL injection/removal via <link> tag
 * Runs on every render where theme changes — fast, no flicker
 */
export function useSkillTheme() {
  const { activeSkill, previewSkill } = useSkillContext();

  // Resolve which theme to use: previewSkill ?? activeSkill ?? linear-modern (site default)
  const resolvedTheme = previewSkill 
    ? skillThemes[previewSkill] 
    : activeSkill 
    ? skillThemes[activeSkill] 
    : skillThemes['linear-modern'];

  useEffect(() => {
    if (!resolvedTheme) return;

    const root = document.documentElement;

    // Data attribute for skill-specific CSS (e.g. hand-drawn dot-grid)
    root.dataset.skill = resolvedTheme.id || '';

    // Apply all CSS custom properties to :root
    Object.entries(resolvedTheme.tokens).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    // Handle font URL injection/removal
    let fontLink = document.getElementById('skill-font-link');
    
    if (resolvedTheme.fontUrl) {
      if (!fontLink) {
        fontLink = document.createElement('link');
        fontLink.id = 'skill-font-link';
        fontLink.rel = 'stylesheet';
        document.head.appendChild(fontLink);
      }
      fontLink.href = resolvedTheme.fontUrl;
    } else {
      // Remove font link if no font URL
      if (fontLink) {
        fontLink.remove();
      }
    }

    // Cleanup: reset to default when component unmounts or theme changes
    return () => {
      // Only reset if we're actually changing themes
      // (don't reset on unmount if another theme is active)
    };
  }, [resolvedTheme]);

  return resolvedTheme;
}
