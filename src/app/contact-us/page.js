'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ContactUs() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="robbinex-site">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="contact-hero-section">
        <div className="hero-background" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
        }}></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="contact-hero-content">
            <div className="hero-text-centered">
              <h1>GET IN TOUCH</h1>
              <p>Ready to take your business to the next level? Let's discuss how Brillion Group can help you achieve your goals with our comprehensive financial and advisory services.</p>
              <p>Schedule a consultation with our experts and discover the difference professional guidance can make.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-content-wrapper">
            {/* Contact Information */}
            <div className="contact-info-side">
              <div className="contact-info-card">
                <h2>CONNECT WITH US</h2>
                <p className="contact-intro">We're here to help your business thrive. Reach out to us through any of the channels below or fill out the form to get started.</p>
                
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon"></div>
                    <div className="contact-content">
                      <h4>Office Location</h4>
                      <p>233 Speers Rd unit 5<br />Oakville, ON L6K 0J5<br />Canada</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon"></div>
                    <div className="contact-content">
                      <h4>Phone</h4>
                      <p>+1 (647) 891-2155</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon"></div>
                    <div className="contact-content">
                      <h4>Email</h4>
                      <p>info@brilliongroup.com</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon"></div>
                    <div className="contact-content">
                      <h4>Business Hours</h4>
                      <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 2:00 PM<br />Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-side">
              <div className="contact-form-card">
                <h2>SEND US A MESSAGE</h2>
                <p className="form-intro">Fill out the form below and we'll get back to you within 24 hours.</p>
                
                {submitStatus === 'success' && (
                  <div className="success-message">
                    <p>Thank you for your message! We'll get back to you soon.</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="company">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">Service of Interest</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service</option>
                        <option value="digital-services">Digital Services</option>
                        <option value="incorporation-services">Incorporation Services</option>
                        <option value="business-brokerage">Business Brokerage</option>
                        <option value="bookkeeping-accounting">Bookkeeping & Accounting</option>
                        <option value="back-office-services">Back Office Services</option>
                        <option value="tax-services">Tax Services</option>
                        <option value="other">Other / General Inquiry</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Tell us about your business needs or ask any questions you may have..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-header">
            <h2>FIND US</h2>
            <p>Visit our office in Oakville's business district</p>
          </div>
          <div className="map-container">
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.7!2d-80.309583!3d43.443694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s233%20Speers%20Rd%20unit%205%2C%20Oakville%2C%20ON%20L6K%200J5%2C%20Canada!5e0!3m2!1sen!2s!4v1635959542851!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{border: 0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Brillion Group Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
