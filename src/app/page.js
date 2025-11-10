'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  const slides = [
    {
      id: "rs-1",
      title1: "MAKE THE RIGHT DECISION,",
      title2: "AT THE RIGHT TIME,",
      title3: "FOR THE RIGHT REASONS!",
      buttonText: "Schedule a Consultation",
      buttonLink: "https://www.robbinex.com/schedule-a-no-obligation-consultation/",
      backgroundImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: "rs-2", 
      title1: "FORWARD-THINKING",
      title2: "BUSINESS SOLUTIONS",
      subtitle: "Tailored Excellence in Financial & Advisory Services",
      description: "Brillion Group delivers cutting-edge solutions in accounting, finance, back-office data management, taxation, and real estate investment advisory. With an unwavering commitment to innovation, we craft business strategies that seamlessly align with our clients' unique needs, empowering sustainable success.",
      buttonText: "GET STARTED",
      buttonLink: "https://www.robbinex.com/schedule-a-no-obligation-consultation/",
      backgroundImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80"
    }
  ];

  const testimonials = [
    {
      text: "Robbinex guided us through every step of selling our manufacturing business. Their expertise and professionalism made the process smooth and profitable.",
      author: "Sarah Johnson",
      company: "Johnson Manufacturing Inc.",
      location: "Toronto, ON"
    },
    {
      text: "After 30 years of building my restaurant chain, Robbinex helped me achieve the exit I dreamed of. Exceptional service and results.",
      author: "Michael Chen",
      company: "Chen's Kitchen Group",
      location: "Hamilton, ON"
    },
    {
      text: "The COSATA process is brilliant. Robbinex delivered results that exceeded our expectations in both timeline and valuation.",
      author: "Jennifer Mitchell",
      company: "Mitchell Logistics",
      location: "Ottawa, ON"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Parallax effect for background
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = scrolled * 0.3;
      setParallaxOffset(parallax);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation on scroll for cards
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate', 'animated');
        }
      });
    }, observerOptions);

    // Observe all cards
    const cards = document.querySelectorAll('.bt_bb_card_image, .bt_bb_column');
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="robbinex-site">
      {/* Header */}
      <header className="mainHeader bt-clear gutter">
        <div className="main-header-inner">
          {/* Top Bar */}
          <div className="topBar bt-clear">
            <div className="topBarPort port bt-clear">
              <div className="topTools btTopToolsLeft">
                <a href="https://maps.google.com" title="" target="_blank" className="btIconWidget btWidgetWithText">
                  <div className="btIconWidgetIcon">
                    <span className="bt_bb_icon_holder">📍</span>
                  </div>
                  <div className="btIconWidgetContent">
                    <span className="btIconWidgetTitle">123 Bay Street, Toronto, ON M5K 1A1</span>
                  </div>
                </a>
                <a href="tel:+1-416-555-0123" title="" target="_self" className="btIconWidget btWidgetWithText">
                  <div className="btIconWidgetIcon">
                    <span className="bt_bb_icon_holder">📞</span>
                  </div>
                  <div className="btIconWidgetContent">
                    <span className="btIconWidgetTitle">+1 (416) 555-0123</span>
                  </div>
                </a>
              </div>
              
            </div>
          </div>

          {/* Main Navigation */}
          <div className="bt-logo-area menu-holder bt-clear">
            <div className="port">
              <div className="bt-horizontal-menu-trigger">
                <div className="bt_bb_icon bt_bb_text_empty">
                  <a href="#" target="_self" className="bt_bb_icon_holder">☰</a>
                </div>
              </div>
              
              <div className="logo">
                <span>
                  <a href="/">
                    <img className="btMainLogo" src="/BRILLION GROUP LOGO PNG.png" alt="Brillion Group" />
                    <img className="btAltLogo" src="/BRILLION GROUP LOGO PNG.png" alt="Brillion Group" />
                  </a>
                </span>
              </div>
              
              <div className="menuPort">
                <nav>
                  <ul id="menu-main-menu" className="menu">
                    <li id="menu-item-8324" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8324">
                      <div className="subToggler"></div>
                      <a href="#">OUR SERVICES</a>
                      <ul className="sub-menu">
                        <li id="menu-item-8325" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-8325">
                          <a href="/advisory-services/">ADVISORY SERVICES</a>
                        </li>
                        <li id="menu-item-8326" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-8326">
                          <a href="/bookkeeping-accounting/">BOOKKEEPING & ACCOUNTING</a>
                        </li>
                        <li id="menu-item-8875" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8875">
                          <a href="/back-office-services/">BACK OFFICE SERVICES</a>
                        </li>
                        <li id="menu-item-8876" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8876">
                          <a href="/tax-services/">TAX SERVICES</a>
                        </li>
                      </ul>
                    </li>
                    <li id="menu-item-4189" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4189">
                      <a href="/industries/">INDUSTRIES SERVED</a>
                    </li>
                    <li id="menu-item-4251" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4251">
                      <a href="/business-consulting/">BRILLION ADVANTAGE</a>
                    </li>
                    <li id="menu-item-4309" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4309">
                      <a href="/about-us/">About Us</a>
                    </li>
                    <li id="menu-item-6562" className="workshop_btn menu-item menu-item-type-post_type menu-item-object-page menu-item-6562">
                      <a href="/contact-us/">CONTACT US</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Revolution Slider Hero Section */}
      <section className="home_banner">
        <div id="rev_slider_1_1_wrapper">
          <div id="rev_slider_1_1">
            
            {/* Navigation Bullets */}
            <div className="tp-bullets">
              <div 
                className={`tp-bullet ${currentSlide === 0 ? 'selected' : ''}`} 
                onClick={() => setCurrentSlide(0)}
              ></div>
              <div 
                className={`tp-bullet ${currentSlide === 1 ? 'selected' : ''}`} 
                onClick={() => setCurrentSlide(1)}
              ></div>
            </div>
            
            {/* Progress Bar */}
            <div className="rs-progress">
              <div className="rs-progress-bar"></div>
            </div>
            
            <div className="rs-slides">
              
              {/* Slide 1 */}
              <div className={`slide-container ${currentSlide === 0 ? 'active' : ''}`}>
                <div 
                  className="slide-background" 
                  style={{
                    backgroundImage: `url(${slides[0].backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                
                {/* Background Overlay */}
                <div className="slide-overlay"></div>
                
                {/* Slide Content */}
                <div className="slide-content slide-1-content">
                  <div className="slide-title slide-title-1">
                    <span className="title-line title-gold">{slides[0].title1}</span>
                    <span className="title-line title-blue">{slides[0].title2}</span>
                    <span className="title-line title-blue">{slides[0].title3}</span>
                  </div>
                  <a href={slides[0].buttonLink} className="slide-button">
                    {slides[0].buttonText}
                  </a>
                </div>
              </div>
              
              {/* Slide 2 */}
              <div className={`slide-container ${currentSlide === 1 ? 'active' : ''}`}>
                <div 
                  className="slide-background" 
                  style={{
                    backgroundImage: `url(${slides[1].backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                
                {/* Background Overlay */}
                <div className="slide-overlay"></div>
                
                {/* Slide Content */}
                <div className="slide-content slide-2-content">
                  <div className="slide-title slide-title-2">
                    <span className="title-line title-gold">{slides[1].title1}</span>
                    <span className="title-line title-white">{slides[1].title2}</span>
                    <span className="subtitle-line">{slides[1].subtitle}</span>
                    <span className="description-line">{slides[1].description}</span>
                  </div>
                  <a href={slides[1].buttonLink} className="slide-button">
                    {slides[1].buttonText}
                  </a>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Redesigned */}
      <section className="robbinex-about-section">
        <div className="container">
          <div className="about-grid">
            
            {/* Left Column - Main Content */}
            <div className="about-content">
              <div className="section-intro">
                <h2>ABOUT BRILLION</h2>
                <p className="intro-text">
                  Brillion Group is a forward-thinking and dynamic organization dedicated to delivering tailored, cutting-edge solutions in accounting, finance, back-office data management, taxation, and real estate investment advisory.
                </p>
              </div>
              
              <div className="about-details">
                <p>With an unwavering commitment to innovation, we craft business strategies that seamlessly align with our clients' unique needs.</p>
                
                <p>As trusted partners, we navigate the complexities of modern business, empowering our clients to achieve sustainable success.</p>
                
                <div className="bt_bb_button bt_bb_color_scheme_4 bt_bb_icon_position_left bt_bb_style_outline bt_bb_width_inline bt_bb_shape_inherit bt_bb_target_self bt_bb_text_transform_inherit bt_bb_size_large bt_bb_align_inherit" style={{"--primary-color": "#002b6a", "--secondary-color": "#ffffff"}}>
                  <a href="/about-brillion/" target="_self" className="bt_bb_link" title="Learn More About Us">
                    <span className="bt_bb_button_text">Learn More About Us</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Column - Service Cards Grid */}
            <div className="services-cards-grid">
              
              {/* Advisory Services */}
              <div className="service-card-compact">
                <div className="card-image">
                  <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80" alt="Advisory Services" />
                </div>
                <div className="card-content">
                  <h4><a href="/advisory-services/">ADVISORY SERVICES</a></h4>
                  <p>Strategic business guidance and expert consultation to help you make informed decisions and achieve sustainable growth.</p>
                  <a href="/advisory-services/" className="card-link">Learn More →</a>
                </div>
              </div>
              
              {/* Bookkeeping & Accounting */}
              <div className="service-card-compact">
                <div className="card-image">
                  <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80" alt="Bookkeeping & Accounting" />
                </div>
                <div className="card-content">
                  <h4><a href="/bookkeeping-accounting/">BOOKKEEPING & ACCOUNTING</a></h4>
                  <p>Comprehensive financial record management and accounting services to keep your business finances organized and compliant.</p>
                  <a href="/bookkeeping-accounting/" className="card-link">Learn More →</a>
                </div>
              </div>
              
              {/* Back Office Services */}
              <div className="service-card-compact">
                <div className="card-image">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80" alt="Back Office Services" />
                </div>
                <div className="card-content">
                  <h4><a href="/back-office-services/">BACK OFFICE SERVICES</a></h4>
                  <p>Streamlined administrative support and data management solutions to optimize your operational efficiency.</p>
                  <a href="/back-office-services/" className="card-link">Learn More →</a>
                </div>
              </div>
              
              {/* Tax Services */}
              <div className="service-card-compact">
                <div className="card-image">
                  <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80" alt="Tax Services" />
                </div>
                <div className="card-content">
                  <h4><a href="/tax-services/">TAX SERVICES</a></h4>
                  <p>Expert tax preparation, planning, and compliance services to minimize liability and maximize your financial potential.</p>
                  <a href="/tax-services/" className="card-link">Learn More →</a>
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </section>

      {/* Frame Section */}
      <section className="frame-section">
        <img src="/shape.png" alt="" className="frame-image" />
        <div className="frame-content">
          <div className="philosophy-content">
            <h2>TRANSFORMING BUSINESS EXCELLENCE</h2>
            <p className="main-description">
              Where innovation meets integrity. We don't just provide solutions – we create partnerships that drive exceptional results and sustainable growth for forward-thinking businesses.
            </p>
            
            <div className="key-principles">
              <div className="principle">
                <h3>TRUSTED PARTNERSHIPS</h3>
                <p>Building lasting relationships through transparency, ethical practices, and unwavering commitment to your success.</p>
              </div>
              <div className="principle">
                <h3>PRECISION & INNOVATION</h3>
                <p>Delivering creative, accurate solutions with the highest standards of reliability and forward-thinking approach.</p>
              </div>
            </div>
            
            <a href="/contact-us" className="philosophy-button">Start Your Journey</a>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section">
        <div className="container">
          <div className="industries-showcase">
            <div className="industries-intro">
              <h2>EMPOWERING BUSINESSES IN EVERY SECTOR</h2>
              <p>Your success is our mission. We bring industry-specific insights and proven strategies to drive growth across all business landscapes.</p>
            </div>
            
            <div className="industries-masonry">
              <div className="industry-card">
                <h3>CONSTRUCTION</h3>
                <span>Building tomorrow's infrastructure</span>
              </div>
              <div className="industry-card">
                <h3>REAL ESTATE</h3>
                <span>Property investment excellence</span>
              </div>
              <div className="industry-card">
                <h3>FINANCIAL</h3>
                <span>Banking & finance solutions</span>
              </div>
              <div className="industry-card">
                <h3>FRANCHISING</h3>
                <span>Multi-location success</span>
              </div>
              <div className="industry-card">
                <h3>STAFFING</h3>
                <span>Workforce optimization strategies</span>
              </div>
              <div className="industry-card">
                <h3>LOGISTICS</h3>
                <span>Supply chain mastery</span>
              </div>
              <div className="industry-card">
                <h3>MANUFACTURING</h3>
                <span>Production efficiency</span>
              </div>
              <div className="industry-card">
                <h3>RETAIL</h3>
                <span>Customer experience focus</span>
              </div>
            </div>
            
            <div className="industries-action">
              <a href="/industries/" className="industries-cta-button">DISCOVER YOUR INDUSTRY SOLUTION</a>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Quote Section Wrapper */}
      <section className="ceo-quote-wrapper">
        <div className="ceo-quote-section">
          <div className="quote-background-image"></div>
          <div className="quote-overlay"></div>
          <div className="container">
            <div className="quote-container">
              <div className="quote-content">
                <p className="quote-text">
                  "Growth isn't something to leave to chance—it's a deliberate journey that requires the right expertise and a trusted partner by your side. At Brillion, we're here to help you navigate challenges, seize opportunities, and achieve your vision for success. Let us work together to build a stronger, more prosperous future for your business."
                </p>
                <div className="quote-author">
                  <span className="author-name">Tahir Sheikh</span>
                  <span className="author-title">CEO – Brillion Group Inc</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section-new">
        <div className="container">
          <div className="partners-header">
            <h2>TRUSTED PARTNERSHIPS</h2>
            <p>Building success through collaboration with industry-leading organizations</p>
          </div>
          
          <div className="partners-slider-container">
            <div className="partners-slider">
              <div className="partner-card">
                <div className="partner-logo-wrapper">
                  <img src="/Brillion tax & acounting.png" alt="Brillion Tax & Accounting" />
                </div>
              </div>
              <div className="partner-card">
                <div className="partner-logo-wrapper">
                  <img src="/Screenshot 2025-11-09 004945.png" alt="Partner Logo" />
                </div>
              </div>
              <div className="partner-card">
                <div className="partner-logo-wrapper">
                  <img src="/Screenshot 2025-11-09 005002.png" alt="Partner Logo" />
                </div>
              </div>
              <div className="partner-card">
                <div className="partner-logo-wrapper">
                  <img src="/Screenshot 2025-11-09 005017.png" alt="Partner Logo" />
                </div>
              </div>
              <div className="partner-card">
                <div className="partner-logo-wrapper">
                  <img src="/Screenshot 2025-11-09 005032.png" alt="Partner Logo" />
                </div>
              </div>
              <div className="partner-card">
                <div className="partner-logo-wrapper">
                  <img src="/Screenshot 2025-11-09 005049.png" alt="Partner Logo" />
                </div>
              </div>
              <div className="partner-card">
                <div className="partner-logo-wrapper">
                  <img src="/Brillion tax & acounting.png" alt="Brillion Tax & Accounting" />
                </div>
              </div>
              <div className="partner-card">
                <div className="partner-logo-wrapper">
                  <img src="/Screenshot 2025-11-09 004945.png" alt="Partner Logo" />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-clean">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <div className="footer-logo-section">
                <img src="/BRILLION GROUP LOGO PNG.png" alt="Brillion Group" className="footer-logo" />
              </div>
              <div className="footer-links-section">
                <div className="footer-links-group">
                  <h4>Services</h4>
                  <a href="/advisory-services">Advisory Services</a>
                  <a href="/bookkeeping-accounting">Bookkeeping & Accounting</a>
                  <a href="/back-office-services">Back Office Services</a>
                  <a href="/tax-services">Tax Services</a>
                </div>
                <div className="footer-links-group">
                  <h4>Company</h4>
                  <a href="/about-us">About Us</a>
                  <a href="/contact-us">Contact</a>
                  <a href="/careers">Careers</a>
                </div>
                <div className="footer-links-group">
                  <h4>Contact</h4>
                  <span>+1 (416) 555-0123</span>
                  <span>info@brilliongroup.com</span>
                  <span>Toronto, ON</span>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2024 Brillion Group. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}