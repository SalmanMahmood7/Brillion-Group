'use client';
import { useState, useEffect } from 'react';
import Footer from '../../components/Footer';

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
                    <span className="btIconWidgetTitle">233 Speers Rd unit 5, Oakville, ON L6K 0J5</span>
                  </div>
                </a>
                <a href="tel:+647-891-2155" title="" target="_self" className="btIconWidget btWidgetWithText">
                  <div className="btIconWidgetIcon">
                    <span className="bt_bb_icon_holder">📞</span>
                  </div>
                  <div className="btIconWidgetContent">
                    <span className="btIconWidgetTitle">+1 (647) 891-2155</span>
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
                  <a href="#" target="_self" className="bt_bb_icon_holder" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>☰</a>
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
                    <li id="menu-item-8324" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8324 group relative">
                      <div className="subToggler"></div>
                      <a href="#">OUR SERVICES</a>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-30 h-30 transition-all duration-300 opacity-0 -translate-y-2 pointer-events-none invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-hover:visible">
                        <div className="relative w-[320px] bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/95 to-slate-900/90"></div>
                          <div className="relative z-10 p-2">
                            <div className="space-y-1">
                              <a className="group/item relative flex items-start space-x-3 p-4 rounded-xl hover:bg-white/10 transition-all duration-300 overflow-hidden" href="/advisory-services/" style={{animationDelay: '0ms'}}>
                                <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-orange-500 to-amber-600" style={{mixBlendMode: 'overlay'}}></div>
                                <div className="relative">
                                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:shadow-xl transition-all duration-300 group-hover/item:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                  </div>
                                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl blur-xl opacity-50 group-hover/item:opacity-75 transition-opacity duration-300"></div>
                                </div>
                                <div className="relative flex-1 min-w-0">
                                  <h4 className="text-sm font-semibold text-white group-hover/item:text-white transition-colors duration-300">Advisory Services</h4>
                                  <p className="text-xs text-gray-400 mt-0.5 group-hover/item:text-gray-300 transition-colors duration-300">Strategic business guidance</p>
                                </div>
                              </a>
                              <a className="group/item relative flex items-start space-x-3 p-4 rounded-xl hover:bg-white/10 transition-all duration-300 overflow-hidden" href="/bookkeeping-accounting/" style={{animationDelay: '100ms'}}>
                                <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500 to-cyan-600" style={{mixBlendMode: 'overlay'}}></div>
                                <div className="relative">
                                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:shadow-xl transition-all duration-300 group-hover/item:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                                      <line x1="8" y1="21" x2="16" y2="21"/>
                                      <line x1="12" y1="17" x2="12" y2="21"/>
                                    </svg>
                                  </div>
                                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl blur-xl opacity-50 group-hover/item:opacity-75 transition-opacity duration-300"></div>
                                </div>
                                <div className="relative flex-1 min-w-0">
                                  <h4 className="text-sm font-semibold text-white group-hover/item:text-white transition-colors duration-300">Bookkeeping & Accounting</h4>
                                  <p className="text-xs text-gray-400 mt-0.5 group-hover/item:text-gray-300 transition-colors duration-300">Financial record management</p>
                                </div>
                              </a>
                              <a className="group/item relative flex items-start space-x-3 p-4 rounded-xl hover:bg-white/10 transition-all duration-300 overflow-hidden" href="/back-office-services/" style={{animationDelay: '200ms'}}>
                                <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500 to-indigo-600" style={{mixBlendMode: 'overlay'}}></div>
                                <div className="relative">
                                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:shadow-xl transition-all duration-300 group-hover/item:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                      <polyline points="14,2 14,8 20,8"/>
                                      <line x1="16" y1="13" x2="8" y2="13"/>
                                      <line x1="16" y1="17" x2="8" y2="17"/>
                                      <polyline points="10,9 9,9 8,9"/>
                                    </svg>
                                  </div>
                                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl blur-xl opacity-50 group-hover/item:opacity-75 transition-opacity duration-300"></div>
                                </div>
                                <div className="relative flex-1 min-w-0">
                                  <h4 className="text-sm font-semibold text-white group-hover/item:text-white transition-colors duration-300">Back Office Services</h4>
                                  <p className="text-xs text-gray-400 mt-0.5 group-hover/item:text-gray-300 transition-colors duration-300">Operational support solutions</p>
                                </div>
                              </a>
                              <a className="group/item relative flex items-start space-x-3 p-4 rounded-xl hover:bg-white/10 transition-all duration-300 overflow-hidden" href="/tax-services/" style={{animationDelay: '300ms'}}>
                                <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-green-500 to-emerald-600" style={{mixBlendMode: 'overlay'}}></div>
                                <div className="relative">
                                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:shadow-xl transition-all duration-300 group-hover/item:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                                      <line x1="12" y1="1" x2="12" y2="23"/>
                                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                                    </svg>
                                  </div>
                                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl blur-xl opacity-50 group-hover/item:opacity-75 transition-opacity duration-300"></div>
                                </div>
                                <div className="relative flex-1 min-w-0">
                                  <h4 className="text-sm font-semibold text-white group-hover/item:text-white transition-colors duration-300">Tax Services</h4>
                                  <p className="text-xs text-gray-400 mt-0.5 group-hover/item:text-gray-300 transition-colors duration-300">Comprehensive tax solutions</p>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl"></div>
                          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
                        </div>
                      </div>
                    </li>
                    <li id="menu-item-4189" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4189">
                      <a href="/industries/">INDUSTRIES SERVED</a>
                    </li>
                    <li id="menu-item-4251" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4251">
                      <a href="/advantage/">BRILLION ADVANTAGE</a>
                    </li>
                    <li id="menu-item-4309" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4309">
                      <a href="/about-us/">About Us</a>
                    </li>
                    <li id="menu-item-consumer-brands" className="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="/consumer-brands/">CONSUMER BRANDS</a>
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
              <img src="/Tahir Sheikh.png" alt="Tahir Sheikh" />
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
      <Footer />
    </div>
  );
}
