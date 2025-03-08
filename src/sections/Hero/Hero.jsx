import React from 'react';
import './Hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  AOS.init({
    duration: 400,
    offset: 200,
    once: false,
    mirror: true,
    easing: 'ease',
    anchorPlacement: 'top-bottom'
  });

  return (
    <section className="hero" id="home">
      <div className="hero__background"></div>
      <div className="hero__announcement" 
        data-aos="fade-down" 
        data-aos-offset="200"
      >
        <span className="hero__announcement-tag">REVIEWED ON</span>
        <img src="/brands/clutch.svg" alt="Clutch" className="hero__announcement-logo" />
        <div className="hero__rating-stars">★★★★★</div>
        <span>2K+ REVIEWS</span>
      </div>
      <div className="hero__container">
        <div className="hero__content" 
          data-aos="fade-up"
          data-aos-offset="200"
        >
          <h1 className="hero__title">
            We manage your IT,<br />so you can manage your business.
          </h1>
          <p className="hero__subtitle">
            Take charge of your business continuity with innovative IT solutions
          </p>
          <div className="hero__cta">
            <a href="#trial" className="hero__cta-primary">
              Schedule a Free Consultation
            </a>
            <a href="#demo" className="hero__cta-secondary">
              Services
            </a>
          </div>
          <div className="hero__ratings">
            <div className="hero__rating">
              <span className="hero__rating-number">08</span>
              <div className="hero__rating-text">
                <span>Years</span>
                <span className="hero__rating-subtext">Proven Track Record</span>
              </div>
            </div>
            <div className="hero__rating">
              <span className="hero__rating-number">98</span>
              <span className="hero__rating-percent">%</span>
              <div className="hero__rating-text">
                <span>Customer Satisfaction</span>
              </div>
            </div>
            <div className="hero__rating">
              <span className="hero__rating-number">470</span>
              <span className="hero__rating-plus">+</span>
              <div className="hero__rating-text">
                <span>Projects</span>
                <span className="hero__rating-subtext">We Have Completed</span>
              </div>
            </div>
            <div className="hero__rating">
              <span className="hero__rating-number">3</span>
              <div className="hero__rating-text">
                <span>Mins</span>
                <span className="hero__rating-subtext">Average Answer Time</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero__image">
          <div className="hero__image-container">
            {/* Add your hero image here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 