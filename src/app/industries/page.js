'use client';
import { useState, useEffect, useRef } from 'react';

export default function Industries() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const cardsRef = useRef(null);

  const industries = [
    {
      id: 0,
      title: "CONSTRUCTION",
      description: "Comprehensive financial management and advisory services for construction companies, contractors, and developers. We understand project-based accounting, cash flow management, and regulatory compliance specific to the construction industry.",
      icon: "M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 14v3m4-3v3m4-3v3"
    },
    {
      id: 1,
      title: "REAL ESTATE", 
      description: "Strategic real estate investment services including property analysis, market research, and portfolio optimization. Our expertise helps investors maximize returns while minimizing risks in today's dynamic real estate market.",
      icon: "M3 21h18M5 21V7l7-4 7 4v14M9 9h6v6H9z"
    },
    {
      id: 2,
      title: "FINANCIAL INSTITUTIONS",
      description: "Specialized financial services for banks, credit unions, and financial institutions. We provide regulatory compliance support, risk management solutions, and comprehensive financial reporting that meets industry standards.",
      icon: "M1 3h15v13H1zM16 8h2v8H9l3-4.5L16 8z"
    },
    {
      id: 3,
      title: "FRANCHISING",
      description: "Multi-location franchise success through standardized processes, performance tracking, and scalable solutions. We help franchisors and franchisees maintain consistency while driving growth across all locations.",
      icon: "M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0M12 1l0 6m0 6l0 6M21 12l-6 0m-6 0l-6 0"
    },
    {
      id: 4,
      title: "STAFFING",
      description: "Workforce optimization strategies for staffing agencies and HR departments. Our services include payroll management, compliance monitoring, and strategic workforce planning to help you manage human capital effectively.",
      icon: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
    },
    {
      id: 5,
      title: "LOGISTICS",
      description: "Supply chain mastery for logistics and transportation companies. We provide inventory management solutions, distribution optimization, and comprehensive supply chain analytics to streamline operations and reduce costs.",
      icon: "M1 3h15v13H1zM16 8h2v8H9l3-4.5L16 8z"
    },
    {
      id: 6,
      title: "MANUFACTURING",
      description: "Production efficiency solutions for manufacturing companies. We offer cost optimization, quality control systems, and manufacturing analytics to help you improve productivity while maintaining the highest quality standards.",
      icon: "M2 3h20v14H2zM8 21h8M12 17v4"
    },
    {
      id: 7,
      title: "RETAIL",
      description: "Customer experience focused solutions for retail businesses. We provide inventory management, sales analytics, and multi-channel retail strategies to help you deliver exceptional customer experiences and drive sales growth.",
      icon: "M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM20 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!cardsRef.current) return;
      
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionTop = cardsRef.current.offsetTop;
      const sectionHeight = cardsRef.current.offsetHeight;
      
      // Calculate when section is in view and how much we've scrolled through it
      const sectionStart = sectionTop;
      const sectionEnd = sectionTop + sectionHeight - windowHeight;
      
      if (scrollTop >= sectionStart && scrollTop <= sectionEnd) {
        // Calculate progress through the scrollable area
        const scrollableHeight = sectionHeight - windowHeight;
        const progress = (scrollTop - sectionStart) / scrollableHeight;
        const cardIndex = Math.min(7, Math.max(0, Math.floor(progress * 8)));
        setActiveCard(cardIndex);
      } else if (scrollTop < sectionStart) {
        setActiveCard(0);
      } else {
        setActiveCard(7);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
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
                      <a href="/industries/" className="current">INDUSTRIES SERVED</a>
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

      {/* Hero Section */}
      <section className="industries-hero-section-new">
        <div className="hero-background" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
        }}></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="industries-hero-content-centered">
            <div className="hero-text-centered">
              <h1>INDUSTRIES<br />WE SERVE</h1>
              <p>From construction to retail, manufacturing to finance – we understand the unique challenges each industry faces. Our specialized expertise delivers tailored solutions that drive real results for your business.</p>
              <p>With three decades of experience across diverse sectors, we bring industry-specific insights and proven strategies to help your organization thrive in today's competitive landscape.</p>
            </div>
          </div>
        </div>
        <div className="hero-frame-bottom">
          <img src="/frame.png" alt="Decorative Frame" className="frame-image" />
        </div>
      </section>

      {/* Industries Sticky Cards */}
      <section className="industries-sticky-section" ref={cardsRef}>
        {/* Header */}
        <div className="sticky-section-header">
          <div className="container">
            <h2 className="sticky-section-title">EMPOWERING BUSINESSES IN EVERY SECTOR</h2>
            <p className="sticky-section-subtitle">Your success is our mission. We bring industry-specific insights and proven strategies to drive growth across all business landscapes.</p>
          </div>
        </div>
        
        {/* Sticky Cards Area */}
        <div className="sticky-cards-wrapper">
          <div className="sticky-cards-background">
            <div className="sticky-cards-viewport">
              {industries.map((industry, index) => (
                <div 
                  key={industry.id}
                  className={`industry-sticky-card ${activeCard === index ? 'card-active' : 'card-hidden'}`}
                >
                  <div className="sticky-card-content">
                    <div className="card-background-design">
                      <div className="card-pattern-overlay"></div>
                      <div className="card-gradient-accent"></div>
                    </div>
                    
                    <div className="sticky-card-header">
                      <div className="card-number-container">
                        <div className="sticky-card-number">{String(index + 1).padStart(2, '0')}</div>
                      </div>
                      <div className="card-title-container">
                        <div className="card-subtitle">INDUSTRY FOCUS</div>
                        <h3 className="sticky-card-title">{industry.title}</h3>
                      </div>
                    </div>
                    
                    <div className="sticky-card-description">
                      <p>{industry.description}</p>
                      <div className="card-footer">
                        <div className="expertise-tags">
                          <span className="tag">Expert Solutions</span>
                          <span className="tag">Proven Results</span>
                        </div>
                        <div className="card-arrow">→</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll Space */}
        <div className="scroll-spacer" />
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