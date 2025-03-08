import React from 'react';
import './UpcomingEvents.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const UpcomingEvents = () => {
  AOS.init({
    duration: 400,
    offset: 200,
    once: false,
    mirror: true,
    easing: 'ease',
    anchorPlacement: 'top-bottom'
  });

  const events = [
    {
      image: '/images/events/ai-excellence.jpg',
      date: 'SATURDAY, MARCH 29',
      title: 'AI Centre of Excellence In Education',
      time: '11 AM – 1 PM',
      location: 'Webinar',
      description: 'Discover how Finolity and Ingram Micro leverage Microsoft Teams to transform hybrid work strategies, improve collaboration, and drive productivity for businesses.'
    },
    {
      image: '/images/events/green-summit.jpg',
      date: 'SUNDAY, MAY 25',
      title: 'Join Finolity Green Horizons Summit 2025',
      time: '12 AM – 2 PM',
      location: 'New Delhi',
      description: 'Join the Finolity Green Horizons Summit 2025 to explore innovative solutions for sustainability and green technology. Discover actionable insights and network with industry leaders driving a cleaner, greener future.'
    },
    {
      image: '/images/events/ecosystem-summit.jpg',
      date: 'SUNDAY, SEPTEMBER 14',
      title: 'Finolity Ecosystem Partnerships Summit',
      time: '4 PM – 8:30 PM',
      location: 'Bangalore',
      description: 'Join the Finolity Ecosystem Partnerships Summit to collaborate with industry leaders and explore opportunities in building robust, innovative ecosystems. Discover strategies to foster growth, partnerships, and technological advancements.'
    }
  ];

  return (
    <section className="events" id="events">
      <div className="events__container">
        <div className="events__header" data-aos="fade-up">
          <h2 className="events__title">Upcoming Events</h2>
        </div>

        <div className="events__grid">
          {events.map((event, index) => (
            <article 
              key={index}
              className="events__card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="events__card-inner">
                <div className="events__image-container">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="events__image"
                  />
                </div>
                <div className="events__content">
                  <div className="events__date">{event.date}</div>
                  <h3 className="events__card-title">{event.title}</h3>
                  <div className="events__details">
                    <div className="events__detail">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 6v6l4 2"/>
                      </svg>
                      <span>{event.time}</span>
                    </div>
                    <div className="events__detail">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="events__description">{event.description}</p>
                  <button className="events__register">Register Today</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents; 