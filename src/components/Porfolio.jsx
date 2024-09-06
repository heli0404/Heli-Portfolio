import React from 'react';
import project1 from '../asset/zoho.png';
import project2 from '../asset/tatva.png';
import project3 from '../asset/text.png';
import '../App.css';


function Portfolio() {
  return (
    <section className="portfolio">
      <div className="container">
        <h2>My Portfolio</h2>
        <div className="projects">
          <div className="project">
             <img src={project1} alt="Project 1" /> 
            
            <a href="#">View Project</a>
          </div>
          <div className="project">
             <img src={project2} alt="Project 2" /> 
            
            <a href="#">View project</a>
          </div>
          <div className="project">
            <img src={project3} alt="Project 3" />
            
            <a href="#">View Project</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;