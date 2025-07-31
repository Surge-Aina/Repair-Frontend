import React, { useState } from 'react';
import Slider from 'react-slick';
import './Portfolio.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const allProjects = [
    { _id: 1, title: 'Bathroom Faucet Replacement', category: 'Plumbing', beforeImageUrl: 'https://res.cloudinary.com/dgvfuvako/image/upload/v1753908265/BeforeAfter_2_rlwe96.jpg', afterImageUrl: 'https://res.cloudinary.com/dgvfuvako/image/upload/v1753908265/BeforeAfter_2_rlwe96.jpg' },
    { _id: 2, title: 'Living Room Repaint', category: 'Painting', beforeImageUrl: 'https://res.cloudinary.com/dgvfuvako/image/upload/v1753908356/before-and-after_yfgqss.jpg', afterImageUrl: 'https://res.cloudinary.com/dgvfuvako/image/upload/v1753908356/before-and-after_yfgqss.jpg' },
    { _id: 3, title: 'Ceiling Fan Installation', category: 'Electrical', beforeImageUrl: 'https://res.cloudinary.com/dgvfuvako/image/upload/v1753908417/hq720_rhavae.jpg', afterImageUrl: 'https://res.cloudinary.com/dgvfuvako/image/upload/v1753908417/hq720_rhavae.jpg' },
    { _id: 4, title: 'Leaky Pipe Repair', category: 'Plumbing', beforeImageUrl: 'https://res.cloudinary.com/dgvfuvako/image/upload/v1753908470/hqdefault_w8rltu.jpg', afterImageUrl: 'https://res.cloudinary.com/dgvfuvako/image/upload/v1753908470/hqdefault_w8rltu.jpg' },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const filteredProjects = filter === 'All' ? allProjects : allProjects.filter(p => p.category === filter);

  const categories = ['All', ...new Set(allProjects.map(p => p.category))];


  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
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
      </div>
    </section>
  );
};

export default Portfolio;