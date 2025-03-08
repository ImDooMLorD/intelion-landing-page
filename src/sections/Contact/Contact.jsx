import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheck, 
  faPhone, 
  faEnvelope, 
  faBuilding, 
  faUser, 
  faArrowRight,
  faHeadset,
  faChevronDown,
  faMessage 
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    helpType: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const benefits = [
    'Client-oriented',
    'Independent',
    'Competent',
    'Results-driven',
    'Problem-solving',
    'Transparent'
  ];

  const steps = [
    {
      number: 1,
      text: 'We schedule a call at your convenience'
    },
    {
      number: 2,
      text: 'We do a discovery and consulting meeting'
    },
    {
      number: 3,
      text: 'We prepare a proposal'
    }
  ];

  return (
    <section className="contact">
      <div className="contact__container">
        <div className="contact__content">
          <div className="contact__info">
            <span className="contact__label">CONTACT US</span>
            <h2 className="contact__title">
              Partner with Us for<br />
              Comprehensive IT
            </h2>
            <p className="contact__description">
              We're happy to answer any questions you may have and
              help you determine which of our services best fit your needs.
            </p>
            
            <div className="contact__phone">
              <span className="contact__phone-label">Call us:</span>
              <a href="tel:+1234567890" className="contact__phone-number">
                <FontAwesomeIcon icon={faPhone} className="contact__phone-icon" /> +1 (234) 567-890
              </a>
            </div>

            <div className="contact__benefits">
              <h3 className="contact__benefits-title">Your benefits:</h3>
              <ul className="contact__benefits-list">
                {benefits.map((benefit, index) => (
                  <li key={index} className="contact__benefit-item">
                    <span className="contact__benefit-check">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="contact__steps">
              <h3 className="contact__steps-title">What happens next?</h3>
              <div className="contact__steps-list">
                {steps.map((step, index) => (
                  <div key={index} className="contact__step">
                    <span className="contact__step-number">{step.number}</span>
                    <p className="contact__step-text">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="contact__form-container">
            <form className="contact__form" onSubmit={handleSubmit}>
              <h3 className="contact__form-title">Schedule a Free Consultation</h3>
              
              <div className="contact__form-group">
                <div className="contact__form-row">
                  <div>
                    <label>
                      <FontAwesomeIcon icon={faUser} className="contact__form-icon" /> First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label>
                      <FontAwesomeIcon icon={faUser} className="contact__form-icon" /> Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="contact__form-group">
                  <label>
                    <FontAwesomeIcon icon={faBuilding} className="contact__form-icon" /> Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__form-group">
                  <label>
                    <FontAwesomeIcon icon={faEnvelope} className="contact__form-icon" /> Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact__form-group">
                <label>
                  <FontAwesomeIcon icon={faPhone} className="contact__form-icon" /> Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__form-group">
                <label>
                  <FontAwesomeIcon icon={faHeadset} className="contact__form-icon" /> How Can We Help You?
                </label>
                <div className="contact__select-wrapper">
                  <select
                    id="helpType"
                    name="helpType"
                    value={formData.helpType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Option</option>
                    <option value="consulting">IT Consulting</option>
                    <option value="development">Software Development</option>
                    <option value="cloud">Cloud Services</option>
                    <option value="security">Security Solutions</option>
                  </select>
                  <FontAwesomeIcon icon={faChevronDown} className="contact__select-icon" />
                </div>
              </div>

              <div className="contact__form-group">
                <label>
                  <FontAwesomeIcon icon={faMessage} className="contact__form-icon" /> Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="To better assist you, please describe how we can help..."
                  required
                />
              </div>

              <button type="submit" className="contact__form-submit">
                Send Message <FontAwesomeIcon icon={faArrowRight} className="contact__form-submit-icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 