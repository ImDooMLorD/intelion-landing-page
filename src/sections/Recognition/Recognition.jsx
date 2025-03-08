import React, { useRef, useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import './Recognition.css';

const Recognition = () => {
  const logosTrackRef = useRef(null);
  const highlightRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const isInView = useInView(logosTrackRef, { margin: "100px" });
  const isHighlightInView = useInView(highlightRef, { 
    margin: "100px",
    amount: 0.3 // Only needs 30% to be visible
  });

  const containerVariants = {
    hidden: { 
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const logoVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.92,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const highlightVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.2, 0, 0, 1]
      }
    }
  };

  const logos = [
    { src: "/brands/forbes.svg", alt: "Forbes" },
    { src: "/brands/clutch.svg", alt: "Clutch" },
    { src: "/brands/google.svg", alt: "Google" },
    { src: "/brands/microsoft.svg", alt: "Microsoft" },
    { src: "/brands/intel.svg", alt: "Intel" },
    { src: "/brands/lenovo.svg", alt: "Lenovo" },
    { src: "/brands/cisco.svg", alt: "Cisco" },
    { src: "/brands/dell.svg", alt: "Dell" },
    { src: "/brands/hp.svg", alt: "HP" }
  ];

  useEffect(() => {
    const track = logosTrackRef.current;
    if (!track) return;

    let scrollTimeout;

    const handleScroll = () => {
      if (!isScrolling) {
        setIsScrolling(true);
      }

      const scrollPosition = track.scrollTop;
      const containerHeight = track.clientHeight - 160; // Account for padding
      const rowHeight = track.querySelector('.recognition__logo-item')?.offsetHeight || 0;
      const gap = 32; // 2rem gap
      const totalRowHeight = rowHeight + gap;
      
      if (totalRowHeight === 0) return;
      
      // Calculate the active index based on the scroll position and viewport center
      const centerPosition = scrollPosition + (containerHeight / 2);
      const adjustedPosition = centerPosition - 64; // Account for padding
      const newIndex = Math.floor(adjustedPosition / totalRowHeight);
      
      // Ensure the index is within bounds
      const maxIndex = Math.ceil(logos.length / 3) - 1;
      const boundedIndex = Math.max(0, Math.min(newIndex, maxIndex));
      
      if (boundedIndex !== activeIndex) {
        setActiveIndex(boundedIndex);
      }

      // Clear the previous timeout
      clearTimeout(scrollTimeout);

      // Set a new timeout
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    const options = {
      passive: true
    };

    track.addEventListener('scroll', handleScroll, options);
    
    // Initial calculation
    handleScroll();
    
    return () => {
      track.removeEventListener('scroll', handleScroll, options);
      clearTimeout(scrollTimeout);
    };
  }, [activeIndex, logos.length, isScrolling]);

  const scrollToIndex = (index) => {
    const track = logosTrackRef.current;
    if (!track) return;

    setIsScrolling(true);
    
    const rowHeight = track.querySelector('.recognition__logo-item')?.offsetHeight || 0;
    const gap = 32; // 2rem gap
    const totalRowHeight = rowHeight + gap;
    const containerHeight = track.clientHeight - 160; // Account for padding
    
    // Adjust scroll position to center the selected row
    const targetScroll = (totalRowHeight * index) - ((containerHeight - rowHeight) / 2) + 64; // Add padding offset
    
    track.scrollTo({
      top: Math.max(0, targetScroll),
      behavior: 'smooth'
    });

    // Reset scrolling state after animation
    setTimeout(() => {
      setIsScrolling(false);
    }, 500);
  };

  // Calculate number of rows (each row has 3 items)
  const totalRows = Math.ceil(logos.length / 3);

  return (
    <section className="recognition">
      <motion.div 
        className="recognition__container"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="recognition__content">
          <motion.div 
            className="recognition__main"
            variants={itemVariants}
          >
            <motion.h2 
              className="recognition__title"
              variants={itemVariants}
            >
              Trusted by Industry Leaders
            </motion.h2>
            <div className={`recognition__logos ${isScrolling ? 'is-scrolling' : ''}`}>
              <motion.div 
                className="recognition__logos-track"
                ref={logosTrackRef}
                variants={containerVariants}
              >
                {logos.map((logo, index) => (
                  <motion.div
                    key={`${logo.alt}-${index}`}
                    className="recognition__logo-item"
                    variants={logoVariants}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                  >
                    <motion.img 
                      src={logo.src} 
                      alt={logo.alt} 
                      className="recognition__logo"
                      loading="eager"
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2, ease: "easeOut" }
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>
              <div className="recognition__scroll-indicator">
                {Array.from({ length: totalRows }).map((_, index) => (
                  <button
                    key={index}
                    className={`recognition__scroll-dot ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => scrollToIndex(index)}
                    aria-label={`Scroll to row ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <motion.button 
              className="recognition__button"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              variants={itemVariants}
            >
              <span>View Success Stories</span>
            </motion.button>
          </motion.div>

          <motion.div 
            ref={highlightRef}
            className="recognition__highlight"
            initial="hidden"
            animate={isHighlightInView ? "visible" : "hidden"}
            variants={highlightVariants}
            style={{ 
              transformOrigin: "center",
              willChange: "transform, opacity"
            }}
          >
            <motion.h3 
              className="recognition__highlight-title"
              variants={itemVariants}
            >
              Recognized as a Leader in Digital Innovation
            </motion.h3>
            <motion.a 
              href="#" 
              className="recognition__highlight-link"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View our achievements
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Recognition; 