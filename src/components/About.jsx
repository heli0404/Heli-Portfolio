import React from 'react';
import dp1  from '../asset/dp1.jpg'

const About = () => {
  return (
    <div className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="section-title">About Me</h2>
            <p className="section-description">
              <h1>Hello I'm Heli Nayani</h1>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p>
            As a passionate frontend developer, I specialize in crafting seamless and visually stunning user experiences. With a strong foundation in HTML, CSS, and JavaScript, I turn design concepts into dynamic, responsive websites. My keen eye for detail and dedication to performance optimization ensure that each project not only looks great but functions flawlessly. I thrive on tackling challenges and continuously improving my skills to stay ahead in the ever-evolving tech landscape. Let's build something amazing together!            </p>
          </div>
          <div className="col-md-6">
            <div className="about-image">
              <img src={dp1} alt="About Image" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="social-links">
              <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-link"><i className="fab fa-behance"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;