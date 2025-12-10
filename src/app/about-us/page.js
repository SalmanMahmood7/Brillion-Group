'use client';
import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="robbinex-site">
      {/* Header */}
      <Header />

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
            
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-14 bg-white mb-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span style={{color:'var(--primary-blue)'}}>OUR</span> <span style={{color:'var(--primary-orange)'}}>VALUES</span>
            </h2>
            <p className="text-lg md:text-xl max-w-5xl mx-auto leading-relaxed" style={{color:'var(--text-secondary)'}}>
              Excellence driven by five core principles that guide our approach to delivering exceptional business solutions.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2 hidden md:block" style={{backgroundColor:'var(--primary-orange)',opacity:'0.3'}}></div>
            
            <div className="space-y-12">
              {/* Innovation */}
              <div className="relative flex items-center md:justify-center">
                <div className="flex flex-col md:flex-row items-center w-full">
                  <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 order-2 md:order-1 ml-20 md:ml-0">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl shadow-sm border border-blue-200">
                      <h3 className="text-2xl font-bold mb-3" style={{color:'var(--primary-blue)'}}>INNOVATION</h3>
                      <p className="text-gray-700">Creative solutions that drive transformative business growth</p>
                    </div>
                  </div>
                  <div className="absolute md:relative left-4 md:left-auto top-8 md:top-auto order-1 md:order-2">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg" style={{background:'linear-gradient(135deg, var(--primary-orange), #e89a44)'}}>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                      </svg>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-xs font-bold" style={{color:'var(--primary-orange)'}}>1</span>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2 md:pl-8 order-3"></div>
                </div>
              </div>

              {/* Integrity */}
              <div className="relative flex items-center md:justify-center">
                <div className="flex flex-col md:flex-row items-center w-full">
                  <div className="hidden md:block md:w-1/2 md:pr-8 order-1"></div>
                  <div className="absolute md:relative left-4 md:left-auto top-8 md:top-auto order-1 md:order-2">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg" style={{background:'linear-gradient(135deg, var(--primary-blue), #1a4082)'}}>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-xs font-bold" style={{color:'var(--primary-blue)'}}>2</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 mb-8 md:mb-0 order-2 md:order-3 ml-20 md:ml-0">
                    <div className="p-6 rounded-xl shadow-sm border" style={{background:'linear-gradient(to right, rgba(0, 43, 106, 0.05), rgba(0, 43, 106, 0.1))',borderColor:'rgba(0, 43, 106, 0.2)'}}>
                      <h3 className="text-2xl font-bold mb-3" style={{color:'var(--primary-blue)'}}>INTEGRITY</h3>
                      <p className="text-gray-700">Trust and transparency in all our business relationships</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Collaboration */}
              <div className="relative flex items-center md:justify-center">
                <div className="flex flex-col md:flex-row items-center w-full">
                  <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 order-2 md:order-1 ml-20 md:ml-0">
                    <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl shadow-sm border border-green-200">
                      <h3 className="text-2xl font-bold mb-3" style={{color:'var(--primary-blue)'}}>COLLABORATION</h3>
                      <p className="text-gray-700">Partnership focus that creates lasting value for our clients</p>
                    </div>
                  </div>
                  <div className="absolute md:relative left-4 md:left-auto top-8 md:top-auto order-1 md:order-2">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg" style={{background:'linear-gradient(135deg, var(--primary-orange), #e89a44)'}}>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                      </svg>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-xs font-bold" style={{color:'var(--primary-orange)'}}>3</span>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2 md:pl-8 order-3"></div>
                </div>
              </div>

              {/* Accuracy */}
              <div className="relative flex items-center md:justify-center">
                <div className="flex flex-col md:flex-row items-center w-full">
                  <div className="hidden md:block md:w-1/2 md:pr-8 order-1"></div>
                  <div className="absolute md:relative left-4 md:left-auto top-8 md:top-auto order-1 md:order-2">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg" style={{background:'linear-gradient(135deg, var(--primary-blue), #1a4082)'}}>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                      </svg>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-xs font-bold" style={{color:'var(--primary-blue)'}}>4</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 mb-8 md:mb-0 order-2 md:order-3 ml-20 md:ml-0">
                    <div className="p-6 rounded-xl shadow-sm border" style={{background:'linear-gradient(to right, rgba(0, 43, 106, 0.05), rgba(0, 43, 106, 0.1))',borderColor:'rgba(0, 43, 106, 0.2)'}}>
                      <h3 className="text-2xl font-bold mb-3" style={{color:'var(--primary-blue)'}}>ACCURACY</h3>
                      <p className="text-gray-700">Precision and reliability in every service we deliver</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accountability */}
              <div className="relative flex items-center md:justify-center">
                <div className="flex flex-col md:flex-row items-center w-full">
                  <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 order-2 md:order-1 ml-20 md:ml-0">
                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl shadow-sm border border-purple-200">
                      <h3 className="text-2xl font-bold mb-3" style={{color:'var(--primary-blue)'}}>ACCOUNTABILITY</h3>
                      <p className="text-gray-700">Ownership and commitment to delivering exceptional results</p>
                    </div>
                  </div>
                  <div className="absolute md:relative left-4 md:left-auto top-8 md:top-auto order-1 md:order-2">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg" style={{background:'linear-gradient(135deg, var(--primary-orange), #e89a44)'}}>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
                      </svg>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-xs font-bold" style={{color:'var(--primary-orange)'}}>5</span>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2 md:pl-8 order-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Synergy & Future Growth Section */}
      <section className="synergy-section-new">
        <div className="container">
          <div className="synergy-header-new">
            <h2 style={{color:'var(--primary-blue)'}}>SYNERGY & <span style={{color:'var(--primary-orange)'}}>FUTURE GROWTH</span></h2>
            <p>Driving innovation through collaborative excellence and strategic integration</p>
          </div>
          
          <div className="synergy-main-content">
            <div className="creating-value-section">
              <div className="section-content">
                <h3 style={{color:'var(--primary-blue)'}}>Creating Value Through Synergy</h3>
                <p style={{color:'var(--text-secondary)'}}>Our diverse portfolio fosters a powerful synergy across professional services, consumer brands, and digital infrastructure.</p>
                
                <div className="synergy-benefits-grid">
                  <div className="benefit-card">
                    <div className="benefit-icon-new" style={{background:'linear-gradient(135deg, var(--primary-orange), #e89a44)'}}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <h4 style={{color:'var(--primary-blue)'}}>Cross-pollination of expertise</h4>
                    <p style={{color:'var(--text-secondary)'}}>Knowledge sharing across divisions</p>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon-new" style={{background:'linear-gradient(135deg, var(--primary-blue), #1a4082)'}}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </div>
                    <h4 style={{color:'var(--primary-blue)'}}>Streamlined operations</h4>
                    <p style={{color:'var(--text-secondary)'}}>Unified processes and efficiency</p>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon-new" style={{background:'linear-gradient(135deg, var(--primary-orange), #e89a44)'}}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h4 style={{color:'var(--primary-blue)'}}>Enhanced client value</h4>
                    <p style={{color:'var(--text-secondary)'}}>Comprehensive solution delivery</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="future-outlook-section">
              <div className="outlook-content">
                <h3 style={{color:'var(--primary-blue)'}}>Future Outlook</h3>
                <p style={{color:'var(--text-secondary)'}}>Our collaborative ecosystem positions us for sustained growth and expansion into new markets, adapting to evolving industry landscapes and consumer needs.</p>
                
                <div className="business-units-grid">
                  <div className="unit-card">
                    <h5 style={{color:'var(--primary-orange)'}}>Business Partnerships</h5>
                    <p>Strategic alliances and collaborative ventures</p>
                  </div>
                  <div className="unit-card">
                    <h5 style={{color:'var(--primary-orange)'}}>Collaborative Ventures</h5>
                    <p>Joint initiatives and shared expertise</p>
                  </div>
                  <div className="unit-card">
                    <h5 style={{color:'var(--primary-orange)'}}>Synergy Integration</h5>
                    <p>Unified solutions and integrated approach</p>
                  </div>
                </div>
                
                <div className="synergy-summary">
                  <p style={{color:'var(--primary-blue)', fontWeight:'600'}}>Synergy creates value across all business units</p>
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
            <h2 style={{color:'#002b6a'}}>OUR LEADERSHIP</h2>
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
                  <h3 style={{color:'#002b6a'}}>TAHIR SHEIKH</h3>
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
                <h4 style={{color:'#002b6a'}}>Areas of Expertise</h4>
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

      {/* Connecting Section */}
      <section className="connecting-section">
        <div className="container">
          <div className="connecting-content">
            <h2>
              <span style={{color:'var(--primary-blue)'}}>We look Forward to</span>{' '}
              <span style={{color:'var(--primary-orange)'}}>Connecting with you</span>
            </h2>
            <div className="flags-container">
              <div className="flag-item">
                <img src="https://flagcdn.com/w160/ca.png" alt="Canada" />
              </div>
              <div className="flag-item">
                <img src="https://flagcdn.com/w160/nl.png" alt="Netherlands" />
              </div>
              <div className="flag-item">
                <img src="https://flagcdn.com/w160/us.png" alt="United States" />
              </div>
              <div className="flag-item">
                <img src="https://flagcdn.com/w160/pk.png" alt="Pakistan" />
              </div>
              <div className="flag-item">
                <img src="https://flagcdn.com/w160/kg.png" alt="Kyrgyzstan" />
              </div>
              <div className="flag-item">
                <img src="https://flagcdn.com/w160/qa.png" alt="Qatar" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
