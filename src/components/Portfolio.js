import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Portfolio.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('All');
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/projects');
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  // --- SETTINGS UPDATED FOR CAROUSEL EFFECT ---
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3, // Show 3 slides at a time
    speed: 500,
    responsive: [
        {
          breakpoint: 768, 
          settings: {
            slidesToShow: 1, 
            centerPadding: "40px",
          }
        }
      ]
  };

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

      <div className="portfolio-slider">
        {/* Only render slider if there are enough projects */}
        {filteredProjects.length > 0 ? (
          <Slider {...settings}>
            {filteredProjects.map(project => (
              <div key={project._id} className="project-slide">
                <div className="project-card">
                  <h3>{project.title}</h3>
                  <div className="project-pair">
                    <div className="project-image">
                      <img src={project.beforeImageUrl} alt="Before work" />
                      <div className="image-overlay">Before</div>
                    </div>
                    <div className="project-image">
                      <img src={project.afterImageUrl} alt="After work" />
                      <div className="image-overlay">After</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p>Loading projects or no projects in this category...</p>
        )}
      </div>
    </section>
  );
};

export default Portfolio;