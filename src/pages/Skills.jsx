import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SkillCard from '../components/SkillCard';
import { skills, filterSkills } from '../data/skills';

function Skills() {
    const [activeFilter, setActiveFilter] = useState('all');
    const filteredSkills = filterSkills(activeFilter);

    const filters = [
        { id: 'all', label: 'All' },
        { id: 'dark', label: 'Dark' },
        { id: 'light', label: 'Light' },
        { id: 'colorful', label: 'Colorful' },
        { id: 'minimal', label: 'Minimal' }
    ];

    return (
        <>
            <Navigation />
            
            <section className="skills-page">
                <div className="container">
                    <h1 className="section-title">Skill Library</h1>
                    
                    {/* Filter Bar */}
                    <div className="filter-bar">
                        {filters.map(filter => (
                            <button
                                key={filter.id}
                                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                                onClick={() => setActiveFilter(filter.id)}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>

                    {/* Skills Grid */}
                    <div className="skills-grid">
                        {filteredSkills.map(skill => (
                            <SkillCard key={skill.id} skill={skill} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Skills;
