import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './WhatWeDo.css';

const WhatWeDo = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      offset: 200,
      once: false,
      mirror: true,
      easing: 'ease',
      anchorPlacement: 'top-bottom'
    });
  }, []);

  const services = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "24/7 IT Support",
      description: "Round-the-clock technical support and monitoring to ensure your systems run smoothly"
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3V21M9 3H15M9 21H15M3 12H21M3 9V15M21 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Network Solutions",
      description: "Secure and scalable network infrastructure design and implementation"
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Cloud Services",
      description: "Cloud migration, management, and optimization for enhanced business efficiency"
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3L20 7V11C20 15.4183 16.4183 19 12 19C7.58172 19 4 15.4183 4 11V7L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8V12M12 15H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your business from evolving threats"
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "IT Consulting",
      description: "Strategic technology consulting to align IT with your business goals"
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12H15M9 16H15M9 8H15M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Software Solutions",
      description: "Custom software development and integration services"
    }
  ];

  return (
    <section className="what-we-do" id="what-we-do">
      <div className="what-we-do__container">
        <div className="what-we-do__header" 
          data-aos="fade-up" 
          data-aos-offset="200"
        >
          <span className="what-we-do__subtitle">What We Do</span>
          <h2 className="what-we-do__title">Comprehensive IT Solutions</h2>
          <p className="what-we-do__description">
            We deliver end-to-end IT services that help businesses transform, scale, and gain competitive advantage
          </p>
        </div>
        
        <div className="what-we-do__grid">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="what-we-do__card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-offset="200"
            >
              <div className="what-we-do__card-header">
                <div className="what-we-do__card-icon">
                  {service.icon}
                </div>
                <h3 className="what-we-do__card-title">{service.title}</h3>
              </div>
              <p className="what-we-do__card-description">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo; 