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
      <section className="philosophy-section">
        <div className="container">
          <div className="philosophy-content">
            <h2>OUR PHILOSOPHY</h2>
            
            <div className="philosophy-cards">
              <div className="philosophy-card">
                <div className="card-icon">
                  <div className="icon-circle">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="m12 1 0 6m0 6 0 6"/>
                      <path d="m21 12-6 0m-6 0-6 0"/>
                    </svg>
                  </div>
                </div>
                <div className="card-content">
                  <h3>Mission</h3>
                  <p>At Brillion Group, our mission is to empower businesses by delivering innovative and tailored business solutions.</p>
                </div>
              </div>
              
              <div className="philosophy-card">
                <div className="card-icon">
                  <div className="icon-circle">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                      <circle cx="12" cy="12" r="4"/>
                    </svg>
                  </div>
                </div>
                <div className="card-content">
                  <h3>Vision</h3>
                  <p>To be a globally recognized leader in innovative business solutions, setting the standard for excellence, trust, and transformative growth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>OUR VALUES</h2>
          
          <div className="values-timeline">
            <div className="timeline-container">
              
              <div className="value-item">
                <div className="value-number">1</div>
                <div className="value-content">
                  <h3>INNOVATION</h3>
                  <p>Constantly seeking creative and forward-thinking solutions to meet evolving client needs.</p>
                </div>
              </div>
              
              <div className="value-item">
                <div className="value-number">2</div>
                <div className="value-content">
                  <h3>INTEGRITY</h3>
                  <p>Building trust through honesty, transparency, and ethical practices in all engagements.</p>
                </div>
              </div>
              
              <div className="value-item">
                <div className="value-number">3</div>
                <div className="value-content">
                  <h3>COLLABORATION</h3>
                  <p>Partnering closely with clients and team members to deliver holistic and impactful results.</p>
                </div>
              </div>
              
            </div>
            
            <div className="timeline-container">
              
              <div className="value-item">
                <div className="value-number">4</div>
                <div className="value-content">
                  <h3>ACCURACY</h3>
                  <p>Highest standards of precision and reliability in every aspect of our work.</p>
                </div>
              </div>
              
              <div className="value-item">
                <div className="value-number">5</div>
                <div className="value-content">
                  <h3>ACCOUNTABILITY</h3>
                  <p>Taking ownership of responsibilities and delivering on promises with unwavering commitment.</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership-section">
        <div className="container">
          <h2>OUR LEADERSHIP</h2>
          
          <div className="leadership-content">
            <div className="leader-image">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Tahir Sheikh" />
            </div>
            <div className="leader-info">
              <h3>TAHIR SHEIKH</h3>
              <p className="leader-title">CEO – Brillion Group Inc</p>
              <p>Tahir Sheikh, Chairman of Brillion Group, is a seasoned professional with over 30 years of experience in banking, finance, project management, accounting, taxation, and real estate. He has worked globally, including a decade with leading Saudi Arabian banks, implementing financial systems, compliance frameworks, and risk management solutions. A CPA in Canada and the U.S., Tahir specializes in accounting standards, taxation, and complex technology integrations. Known for his client-focused approach, he delivers innovative, professional, and compliant solutions that drive sustainable success.</p>
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