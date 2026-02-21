// src/skills/index.js
import { linearModernTheme } from './registered/linear-modern/theme';
import { linearModernMeta } from './registered/linear-modern/meta';

import { minimalistMonochromeTheme } from './registered/minimalist-monochrome/theme';
import { minimalistMonochromeMeta } from './registered/minimalist-monochrome/meta';

import { playfulGeometricTheme } from './registered/playful-geometric/theme';
import { playfulGeometricMeta } from './registered/playful-geometric/meta';

import { clayPremiumTheme } from './registered/clay-premium/theme';
import { clayPremiumMeta } from './registered/clay-premium/meta';

export const skillThemes = {
  'linear-modern': linearModernTheme,
  'minimalist-monochrome': minimalistMonochromeTheme,
  'playful-geometric': playfulGeometricTheme,
  'clay-premium': clayPremiumTheme,
};

export const skillMetas = {
  'linear-modern': linearModernMeta,
  'minimalist-monochrome': minimalistMonochromeMeta,
  'playful-geometric': playfulGeometricMeta,
  'clay-premium': clayPremiumMeta,
};

// Ordered list for the SkillSwitcherStrip and Skills page grid (linear-modern is the site default)
export const skillList = [
  linearModernMeta,
  clayPremiumMeta,
  minimalistMonochromeMeta,
  playfulGeometricMeta,
];
