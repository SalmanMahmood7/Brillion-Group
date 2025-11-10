'use client';
import { useState, useEffect } from 'react';

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                      <a href="/about-us/" className="current">About Us</a>
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
      <section className="about-hero-section">
        <div className="hero-background" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
        }}></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="about-hero-content">
            <div className="hero-text">
              <h1>ABOUT<br />BRILLION</h1>
              <p>Brillion Group is a forward-thinking and dynamic organization dedicated to delivering tailored, cutting-edge solutions in accounting, finance, back-office data management, taxation, and real estate investment advisory.</p>
              <p>With an unwavering commitment to innovation, we craft business strategies that seamlessly align with our clients' unique needs. As trusted partners, we navigate the complexities of modern business, empowering our clients to achieve sustainable success.</p>
            </div>
            <div className="hero-image">
              <img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="About Brillion" />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section-new">
        <div className="container">
          <div className="philosophy-grid">
            <div className="philosophy-text">
              <h2>OUR PHILOSOPHY</h2>
              
              <div className="mission-vision-stack">
                <div className="philosophy-item">
                  <div className="philosophy-details">
                    <h3>Mission</h3>
                    <p>At Brillion Group, our mission is to empower businesses by delivering innovative and tailored business solutions that drive sustainable growth and create lasting value for our clients and their stakeholders.</p>
                  </div>
                </div>
                
                <div className="philosophy-item">
                  <div className="philosophy-details">
                    <h3>Vision</h3>
                    <p>To be a globally recognized leader in innovative business solutions, setting the standard for excellence, trust, and transformative growth across all industries we serve.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="philosophy-image">
              <div className="image-wrapper">
                <img src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Our Philosophy" />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h4>Building Tomorrow</h4>
                    <p>Through Innovation & Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section-modern">
        <img src="/shape.png" alt="" className="frame-image" />
        <div className="frame-content">
          <div className="container">
            <div className="values-center-content">
              <div className="values-title">
                <h2>OUR VALUES</h2>
              </div>
              
              <div className="values-circle-layout">
                <div className="center-content">
                  <h3>EXCELLENCE</h3>
                  <p>Driven by five core principles</p>
                </div>
                
                <div className="value-circle innovation-circle">
                  <div className="circle-number">01</div>
                  <h4>INNOVATION</h4>
                  <p>Creative solutions</p>
                </div>
                
                <div className="value-circle integrity-circle">
                  <div className="circle-number">02</div>
                  <h4>INTEGRITY</h4>
                  <p>Trust & transparency</p>
                </div>
                
                <div className="value-circle collaboration-circle">
                  <div className="circle-number">03</div>
                  <h4>COLLABORATION</h4>
                  <p>Partnership focus</p>
                </div>
                
                <div className="value-circle accuracy-circle">
                  <div className="circle-number">04</div>
                  <h4>ACCURACY</h4>
                  <p>Precision & reliability</p>
                </div>
                
                <div className="value-circle accountability-circle">
                  <div className="circle-number">05</div>
                  <h4>ACCOUNTABILITY</h4>
                  <p>Ownership & commitment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership-section-new">
        <div className="container">
          <div className="leadership-header">
            <h2>OUR LEADERSHIP</h2>
            <p>Meet the visionary behind Brillion Group's success</p>
          </div>
          
          <div className="leadership-card">
            <div className="leader-profile">
              <div className="profile-image-wrapper">
                <div className="profile-image">
                  <img src="/Tahir Sheikh.png" alt="Tahir Sheikh" />
                </div>
                <div className="profile-decoration"></div>
              </div>
              
              <div className="profile-details">
                <div className="name-title">
                  <h3>TAHIR SHEIKH</h3>
                  <span className="position">CEO & Chairman</span>
                  <span className="company">Brillion Group Inc</span>
                </div>
                
                <div className="experience-badges">
                  <div className="badge">
                    <span className="badge-number">30+</span>
                    <span className="badge-label">Years Experience</span>
                  </div>
                  <div className="badge">
                    <span className="badge-number">CPA</span>
                    <span className="badge-label">Canada & U.S.</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="leader-bio">
              <div className="bio-content">
                <p className="bio-highlight">A seasoned professional with extensive global experience in banking, finance, and business solutions.</p>
                <p>Tahir Sheikh has worked globally, including a decade with leading Saudi Arabian banks, implementing financial systems, compliance frameworks, and risk management solutions. He specializes in accounting standards, taxation, and complex technology integrations.</p>
                <p>Known for his client-focused approach, Tahir delivers innovative, professional, and compliant solutions that drive sustainable success for businesses worldwide.</p>
              </div>
              
              <div className="expertise-areas">
                <h4>Areas of Expertise</h4>
                <div className="expertise-tags">
                  <span className="tag">Banking & Finance</span>
                  <span className="tag">Project Management</span>
                  <span className="tag">Accounting Standards</span>
                  <span className="tag">Taxation</span>
                  <span className="tag">Risk Management</span>
                  <span className="tag">Technology Integration</span>
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