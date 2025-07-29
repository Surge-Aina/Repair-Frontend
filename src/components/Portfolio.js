import React, { useState } from 'react';
import './Portfolio.css';

const allProjects = [
  { id: 1, title: 'Bathroom Faucet Replacement', category: 'Plumbing', before: 'https://via.placeholder.com/400x300.png?text=Leaky+Faucet', after: 'https://via.placeholder.com/400x300.png?text=New+Faucet' },
  { id: 2, title: 'Living Room Repaint', category: 'Painting', before: 'https://via.placeholder.com/400x300.png?text=Old+Paint', after: 'https://via.placeholder.com/400x300.png?text=Fresh+Coat' },
  { id: 3, title: 'Ceiling Fan Installation', category: 'Electrical', before: 'https://via.placeholder.com/400x300.png?text=No+Fan', after: 'https://via.placeholder.com/400x300.png?text=Fan+Installed' },
  { id: 4, title: 'Leaky Pipe Repair', category: 'Plumbing', before: 'https://via.placeholder.com/400x300.png?text=Dripping+Pipe', after: 'https://via.placeholder.com/400x300.png?text=Sealed+Pipe' },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const filteredProjects = filter === 'All' ? allProjects : allProjects.filter(p => p.category === filter);

  const categories = ['All', ...new Set(allProjects.map(p => p.category))];

  return (
    <section id="portfolio" className="portfolio-section">
      <h2>Quality Craftsmanship You Can See</h2>

      <div className="portfolio-filters">
        {categories.map(category => (
          <button
            key={category}
            className={filter === category ? 'active' : ''}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <div className="project-pair">
              <div className="project-image">
                <img src={project.before} alt="Before work" />
                <div className="image-overlay">Before</div>
              </div>
              <div className="project-image">
                <img src={project.after} alt="After work" />
                <div className="image-overlay">After</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;