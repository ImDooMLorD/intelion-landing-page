import React, { useEffect, useRef } from 'react';
import './ITVendors.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ITVendors() {
  const cardsRef = useRef([]);
  const gridRef = useRef(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const decorationRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-out-cubic'
    });

    // Handle scroll effects
    const handleScroll = () => {
      if (!sectionRef.current || !decorationRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const normalizedProgress = Math.max(0, Math.min(1, scrollProgress));

      // Move SVG decoration based on scroll
      const moveAmount = normalizedProgress * 100; // Move up to 100px
      decorationRef.current.style.transform = `translateY(${-moveAmount}px)`;

      // Apply floating effect to cards
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        // Simple floating effect based on scroll position
        const offset = Math.sin(normalizedProgress * Math.PI + (index * 0.5)) * 20;
        card.style.transform = `translateY(${offset}px)`;
      });
    };

    // Handle mouse movement for card hover effects
    const handleMouseMove = (e) => {
      cardsRef.current.forEach(card => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll(); // Initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollGrid = (direction) => {
    if (gridRef.current) {
      const cardWidth = gridRef.current.querySelector('.vendors__card').offsetWidth;
      const gap = 32; // 2rem gap
      const scrollAmount = cardWidth + gap;
      const newScrollPosition = gridRef.current.scrollLeft + (direction === 'next' ? scrollAmount : -scrollAmount);
      gridRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const services = [
    {
      title: 'Datacenter & Hosting',
      description: 'Our facility – Data Center – is the first in the USA that meets the strict ANSI/TIA-942 rated 4 certificate requirements for design, build and operate.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="2" ry="2"/>
          <path d="M2 10h20"/>
          <path d="M6 14h4"/>
          <path d="M14 14h4"/>
          <path d="M6 18h4"/>
          <path d="M14 18h4"/>
        </svg>
      )
    },
    {
      title: 'Network & Connectivity',
      description: 'Network topologies include hub, linear, tree, and star designs, each of which is set up differently to promote connectivity between computers or devices.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <line x1="12" y1="6" x2="12" y2="18"/>
          <line x1="4" y1="12" x2="20" y2="12"/>
        </svg>
      )
    },
    {
      title: 'Collaboration',
      description: 'Despite modern cloud technology, your users operate in a familiar Microsoft Office environment and benefit from broad compatibility and low-threshold access.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    },
    {
      title: 'Cloud Platform',
      description: 'Customized cloud platform designed to improve performance, lower IT costs, and provide secure and reliable access to your company data from any device, anytime, anywhere.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="vendors" id="vendors" ref={sectionRef}>
      <div className="vendors__decoration">
        <svg 
          className="vendors__decoration-svg" 
          ref={decorationRef}
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
        >
          {/* Decorative circles */}
          <circle className="vendors__decoration-circle" cx="20" cy="20" r="5" />
          <circle className="vendors__decoration-circle" cx="80" cy="40" r="8" />
          <circle className="vendors__decoration-circle" cx="40" cy="70" r="6" />
          <circle className="vendors__decoration-circle" cx="70" cy="85" r="4" />
          
          {/* Decorative paths */}
          <path 
            className="vendors__decoration-path" 
            d="M20,20 Q40,40 80,40 T40,70 T70,85"
          />
          <path 
            className="vendors__decoration-path" 
            d="M10,30 Q30,50 90,50 T30,80 T80,95"
            style={{ opacity: 0.7 }}
          />
        </svg>
      </div>

      <div className="vendors__container">
        <div className="vendors__header" data-aos="fade-up" ref={headerRef}>
          <span className="vendors__label">WHAT WE USE</span>
          <h2 className="vendors__title">
            Bringing the best IT vendors to you.
          </h2>
          <p className="vendors__subtitle">
            Working only with the best, to ensure the quality of our services, and to bring state of the art technology to those who need it.
          </p>
        </div>

        <div className="vendors__challenges">
          <button 
            className="vendors__nav-button vendors__nav-button--prev" 
            aria-label="Previous challenge"
            onClick={() => scrollGrid('prev')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <span className="vendors__challenges-text">Your IT Challenges</span>
          <button 
            className="vendors__nav-button vendors__nav-button--next" 
            aria-label="Next challenge"
            onClick={() => scrollGrid('next')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        <div className="vendors__grid" ref={gridRef}>
          {services.map((service, index) => (
            <div 
              key={index}
              className="vendors__card"
              ref={el => cardsRef.current[index] = el}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="vendors__card-content">
                <div className="vendors__icon-wrapper">
                  {service.icon}
                </div>
                <h3 className="vendors__card-title">{service.title}</h3>
                <p className="vendors__card-description">{service.description}</p>
                <button className="vendors__card-button">
                  View more
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/>
                    <path d="M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
              <div className="vendors__card-gradient"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ITVendors; 