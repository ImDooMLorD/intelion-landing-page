import React, { useRef } from 'react';
import './LatestNews.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LatestNews = () => {
  const scrollContainerRef = useRef(null);

  AOS.init({
    duration: 400,
    offset: 200,
    once: false,
    mirror: true,
    easing: 'ease',
    anchorPlacement: 'top-bottom'
  });

  const scrollTo = (direction) => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollAmount = direction === 'next' ? 400 + 32 : -(400 + 32); // card width + gap
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  const news = [
    {
      image: '/images/news/digital-campus.jpg',
      source: 'ABP NEWS',
      date: 'January 24, 2024',
      title: 'Empowering Universities: Finolity\'s Digital Campus Program And Strategic Partnerships',
      link: '#'
    },
    {
      image: '/images/news/corel-partner.jpg',
      source: 'NDTVProfit',
      date: 'October 25, 2024',
      title: 'Finolity Becomes Authorized Corel Partner, Offering Cutting-Edge Software Solutions to Businesses',
      link: '#'
    },
    {
      image: '/images/news/adobe-certified.jpg',
      source: 'Economictimes',
      date: 'December 1, 2024',
      title: 'Finolity Achieves Certified Adobe Reseller Status, Expanding Access to Premium Creative Tools',
      link: '#'
    },
    {
      image: '/images/news/namestair.jpg',
      source: 'The Straits Times',
      date: 'November 15, 2024',
      title: 'Finolity Launches New "Namestair" to Provide Cloud Services and Solutions for SMBs',
      link: '#'
    }
  ];

  return (
    <section className="latest-news" id="news">
      <div className="latest-news__container">
        <div className="latest-news__header" data-aos="fade-up">
          <button 
            className="latest-news__nav-button latest-news__nav-button--prev" 
            onClick={() => scrollTo('prev')}
            aria-label="View previous news"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="latest-news__nav-text">Previous</span>
          </button>
          <div className="latest-news__header-content">
            <span className="latest-news__subtitle">Latest Updates</span>
            <h2 className="latest-news__title">News & Insights</h2>
          </div>
          <button 
            className="latest-news__nav-button latest-news__nav-button--next" 
            onClick={() => scrollTo('next')}
            aria-label="View next news"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="latest-news__nav-text">Next</span>
          </button>
        </div>

        <div className="latest-news__grid" ref={scrollContainerRef} role="region" aria-label="Latest news carousel">
          {news.map((item, index) => (
            <article 
              key={index}
              className="latest-news__card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="latest-news__card-inner">
                <div className="latest-news__image-container">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="latest-news__image"
                  />
                  <div className="latest-news__meta">
                    <div className="latest-news__meta-info">
                      <span className="latest-news__source">{item.source}</span>
                      <span className="latest-news__separator">•</span>
                      <span className="latest-news__date">{item.date}</span>
                    </div>
                  </div>
                </div>
                <div className="latest-news__content">
                  <h3 className="latest-news__card-title">{item.title}</h3>
                  <a href={item.link} className="latest-news__read-more">
                    Read Article →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews; 