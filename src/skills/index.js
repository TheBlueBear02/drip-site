// src/skills/index.js
import { defaultTheme } from './registered/default/theme';
import { defaultMeta } from './registered/default/meta';

import { minimalistMonochromeTheme } from './registered/minimalist-monochrome/theme';
import { minimalistMonochromeMeta } from './registered/minimalist-monochrome/meta';

import { playfulGeometricTheme } from './registered/playful-geometric/theme';
import { playfulGeometricMeta } from './registered/playful-geometric/meta';

export const skillThemes = {
  'default': defaultTheme,
  'minimalist-monochrome': minimalistMonochromeTheme,
  'playful-geometric': playfulGeometricTheme,
};

export const skillMetas = {
  'default': defaultMeta,
  'minimalist-monochrome': minimalistMonochromeMeta,
  'playful-geometric': playfulGeometricMeta,
};

// Ordered list for the SkillSwitcherStrip and Skills page grid
export const skillList = [
  defaultMeta,
  minimalistMonochromeMeta,
  playfulGeometricMeta,
];
