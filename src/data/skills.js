// Skill data
export const skills = [
    {
        id: 'retro-terminal',
        name: 'Retro Terminal',
        tags: ['dark', 'retro', 'terminal'],
        command: 'npx getdrip add retro-terminal',
        mood: 'dark',
        components: ['LandingPage', 'Button', 'Card', 'Input'],
        tokens: ['colors.terminal', 'fonts.mono', 'spacing.retro'],
        stack: 'React, Tailwind CSS'
    },
    {
        id: 'minimal-light',
        name: 'Minimal Light',
        tags: ['light', 'minimal', 'clean'],
        command: 'npx getdrip add minimal-light',
        mood: 'light',
        components: ['LandingPage', 'Button', 'Card', 'Form'],
        tokens: ['colors.light', 'fonts.sans', 'spacing.minimal'],
        stack: 'React, Tailwind CSS'
    },
    {
        id: 'colorful-playful',
        name: 'Colorful Playful',
        tags: ['colorful', 'playful', 'vibrant'],
        command: 'npx getdrip add colorful-playful',
        mood: 'colorful',
        components: ['LandingPage', 'Button', 'Card', 'Badge'],
        tokens: ['colors.vibrant', 'fonts.display', 'spacing.playful'],
        stack: 'React, Tailwind CSS'
    },
    {
        id: 'dark-modern',
        name: 'Dark Modern',
        tags: ['dark', 'modern', 'sleek'],
        command: 'npx getdrip add dark-modern',
        mood: 'dark',
        components: ['LandingPage', 'Button', 'Card', 'Modal'],
        tokens: ['colors.dark', 'fonts.modern', 'spacing.modern'],
        stack: 'React, Tailwind CSS'
    },
    {
        id: 'neon-cyber',
        name: 'Neon Cyber',
        tags: ['dark', 'neon', 'cyber'],
        command: 'npx getdrip add neon-cyber',
        mood: 'dark',
        components: ['LandingPage', 'Button', 'Card', 'Glow'],
        tokens: ['colors.neon', 'fonts.cyber', 'spacing.cyber'],
        stack: 'React, Tailwind CSS'
    },
    {
        id: 'pastel-dream',
        name: 'Pastel Dream',
        tags: ['light', 'pastel', 'dreamy'],
        command: 'npx getdrip add pastel-dream',
        mood: 'light',
        components: ['LandingPage', 'Button', 'Card', 'Gradient'],
        tokens: ['colors.pastel', 'fonts.soft', 'spacing.dreamy'],
        stack: 'React, Tailwind CSS'
    },
    {
        id: 'monochrome',
        name: 'Monochrome',
        tags: ['minimal', 'monochrome', 'clean'],
        command: 'npx getdrip add monochrome',
        mood: 'minimal',
        components: ['LandingPage', 'Button', 'Card', 'Typography'],
        tokens: ['colors.mono', 'fonts.serif', 'spacing.minimal'],
        stack: 'React, Tailwind CSS'
    },
    {
        id: 'glassmorphism',
        name: 'Glassmorphism',
        tags: ['modern', 'glass', 'translucent'],
        command: 'npx getdrip add glassmorphism',
        mood: 'minimal',
        components: ['LandingPage', 'Button', 'Card', 'Glass'],
        tokens: ['colors.glass', 'fonts.modern', 'spacing.modern'],
        stack: 'React, Tailwind CSS'
    }
];

export function getSkillById(id) {
    return skills.find(skill => skill.id === id);
}

export function filterSkills(mood) {
    if (mood === 'all') {
        return skills;
    }
    return skills.filter(skill => {
        if (mood === 'dark') return skill.mood === 'dark';
        if (mood === 'light') return skill.mood === 'light';
        if (mood === 'colorful') return skill.mood === 'colorful';
        if (mood === 'minimal') return skill.mood === 'minimal';
        return true;
    });
}
