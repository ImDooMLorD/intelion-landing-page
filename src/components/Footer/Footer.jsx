import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faLocationDot, 
  faArrowRight,
  faChevronRight, 
  faStar 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin, 
  faTwitter, 
  faInstagram, 
  faGithub 
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const solutions = [
    'Digital Strategy & Design',
    'Application Development and Management',
    'Cloud & Infrastructure',
    'Software-as-a-Service',
    'Digital & Brand Marketing',
    'Generative AI & Business Intelligence',
    'Network Connectivity',
    'ERP Solutions'
  ];

  const company = [
    'Events',
    'Why us',
    'Team',
    'Careers',
    'Partners & Certifications',
    'Reviews & Awards',
    'Blog',
    'Case studies',
    'FAQ'
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '/icons/linkedin.svg' },
    { name: 'Github', url: 'https://github.com', icon: '/icons/github.svg' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '/icons/twitter.svg' },
    { name: 'Facebook', url: 'https://facebook.com', icon: '/icons/facebook.svg' },
    { name: 'Brandfetch', url: 'https://brandfetch.com', icon: '/icons/brandfetch.svg' }
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__sections">
            <div className="footer__section">
              <h3 className="footer__title">Solutions</h3>
              <ul className="footer__list">
                {solutions.map((item, index) => (
                  <li key={index} className="footer__item">
                    <a href="#" className="footer__link">
                      {item}
                      <FontAwesomeIcon icon={faChevronRight} className="footer__link-icon" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__section">
              <h3 className="footer__title">Company</h3>
              <ul className="footer__list">
                {company.map((item, index) => (
                  <li key={index} className="footer__item">
                    <a href="#" className="footer__link">
                      {item}
                      <FontAwesomeIcon icon={faChevronRight} className="footer__link-icon" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__section footer__section--newsletter">
              <div className="footer__newsletter">
                <h3 className="footer__newsletter-title">
                  Don't miss out updates
                  <span className="footer__newsletter-subtitle">Sign up for our newsletter</span>
                </h3>
                <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
                  <div className="footer__input-group">
                    <div className="footer__input-wrapper">
                      <FontAwesomeIcon icon={faEnvelope} className="footer__input-icon" />
                      <input
                        type="email"
                        className="footer__input"
                        placeholder="Enter your email"
                      />
                    </div>
                    <button type="submit" className="footer__submit">
                      Subscribe <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </div>
                  <label className="footer__checkbox-label">
                    <input type="checkbox" className="footer__checkbox" />
                    <span className="footer__checkbox-text">
                      I agree to the Privacy Policy and give my permission to process my personal data for the
                      purposes specified in the Privacy Policy.
                    </span>
                  </label>
                </form>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <div className="footer__info">
              <div className="footer__clutch">
                <img src="/brands/clutch.svg" alt="Clutch" className="footer__clutch-logo" />
                <div className="footer__clutch-rating">
                  <span>REVIEWED ON</span>
                  <div className="footer__stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <span>2K+ REVIEWS</span>
                </div>
              </div>

              <div className="footer__contact">
                <div className="footer__contact-info">
                  <p>
                    <FontAwesomeIcon icon={faLocationDot} /> R-7 Street, Yamuna Nagar, Haryana<br />
                    135001
                  </p>
                  <a href="tel:0612-2500-971">
                    <FontAwesomeIcon icon={faPhone} /> 0612-2500-971
                  </a>
                  <a href="mailto:connect@finolity.com">
                    <FontAwesomeIcon icon={faEnvelope} /> connect@finolity.com
                  </a>
                </div>
              </div>
            </div>

            <div className="footer__social">
              <a href="#" className="footer__social-link">
                <FontAwesomeIcon icon={faLinkedin} className="footer__social-icon" />
              </a>
              <a href="#" className="footer__social-link">
                <FontAwesomeIcon icon={faTwitter} className="footer__social-icon" />
              </a>
              <a href="#" className="footer__social-link">
                <FontAwesomeIcon icon={faInstagram} className="footer__social-icon" />
              </a>
              <a href="#" className="footer__social-link">
                <FontAwesomeIcon icon={faGithub} className="footer__social-icon" />
              </a>
            </div>
          </div>

          <div className="footer__copyright">
            <div className="footer__copyright-left">
              © 2025 Finolity
            </div>
            <div className="footer__copyright-right">
              <a href="#" className="footer__link">Terms & Conditions</a>
              <a href="#" className="footer__link">Privacy Policy</a>
              <a href="#" className="footer__link">Refund and Cancellation Policy</a>
              <a href="#" className="footer__link">Blog</a>
              <a href="#" className="footer__link">Case studies</a>
              <a href="#" className="footer__link">Events</a>
              <a href="#" className="footer__link">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;