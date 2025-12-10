'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Advantage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dottedPattern = "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23002b6a' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")";

  return (
    <div className="robbinex-site">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="advantage-hero-section">
        <div className="hero-background" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
        }}></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="advantage-hero-content">
            <div className="hero-text-centered">
              <h1>THE BRILLION<br />ADVANTAGE</h1>
              <p>Discover how Brillion Group delivers exceptional results through our unique approach, proven expertise, and unwavering commitment to your success.</p>
              <p>With decades of experience and a client-focused methodology, we transform challenges into opportunities for sustainable business growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Advantage Section */}
      <section className="advantage-main-section">
        <div className="container">
          <div className="advantage-intro">
            <h2>THE ADVANTAGE</h2>
            <p>Quality, innovation, and customer satisfaction drive our approach to business excellence</p>
          </div>
          
          <div className="advantage-showcase">
            
            {/* Advantage 1 */}
            <div className="advantage-showcase-card">
              <div className="advantage-card-content">
                <div className="advantage-info">
                  <div className="advantage-badge">
                    <span className="advantage-icon"></span>
                    <span className="advantage-category">Trusted Partners</span>
                  </div>
                  <h3>We are trusted partners in Complex Solutions</h3>
                  <p>We tackle your most challenging business problems with innovative approaches and proven methodologies, becoming your strategic partner for long-term success.</p>
                </div>
                <div className="advantage-image">
                  <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Trusted Partners" />
                </div>
              </div>
            </div>

            {/* Advantage 2 */}
            <div className="advantage-showcase-card">
              <div className="advantage-card-content">
                <div className="advantage-image">
                  <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="30+ Years Experience" />
                </div>
                <div className="advantage-info">
                  <div className="advantage-badge">
                    <span className="advantage-icon"></span>
                    <span className="advantage-category">Experience</span>
                  </div>
                  <h3>30+ Years experience in Accounting, Taxation, Consulting, Banking & Finance, IT Implementation, Real Estate & Business Acquisitions Advisory, Due Diligence</h3>
                  <p>Three decades of expertise spanning multiple industries and international markets, delivering comprehensive solutions across all business verticals.</p>
                </div>
              </div>
            </div>

            {/* Advantage 3 */}
            <div className="advantage-showcase-card">
              <div className="advantage-card-content">
                <div className="advantage-info">
                  <div className="advantage-badge">
                    <span className="advantage-icon"></span>
                    <span className="advantage-category">Customized Solutions</span>
                  </div>
                  <h3>Customized & Client-Oriented Solutions</h3>
                  <p>Every business is unique. We craft tailored solutions that align perfectly with your specific needs, goals, and industry requirements, ensuring maximum impact and efficiency.</p>
                </div>
                <div className="advantage-image">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Customized Solutions" />
                </div>
              </div>
            </div>

            {/* Advantage 4 */}
            <div className="advantage-showcase-card">
              <div className="advantage-card-content">
                <div className="advantage-image">
                  <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="One Stop Shop" />
                </div>
                <div className="advantage-info">
                  <div className="advantage-badge">
                    <span className="advantage-icon"></span>
                    <span className="advantage-category">Comprehensive</span>
                  </div>
                  <h3>One Stop Shop for Business Needs</h3>
                  <p>Streamline your operations with comprehensive services under one roof. From financial management to strategic planning, we handle everything so you can focus on growing your business.</p>
                </div>
              </div>
            </div>

            {/* Advantage 5 */}
            <div className="advantage-showcase-card">
              <div className="advantage-card-content">
                <div className="advantage-info">
                  <div className="advantage-badge">
                    <span className="advantage-icon"></span>
                    <span className="advantage-category">Global Reach</span>
                  </div>
                  <h3>International Collaborations</h3>
                  <p>Leverage our global network of partners and collaborators to expand your business reach and access international markets with confidence and expertise.</p>
                </div>
                <div className="advantage-image">
                  <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="International Collaborations" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-[80px] bg-[var(--background-light)] relative">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{ backgroundImage: dottedPattern }}></div>
        </div>
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#D98832]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#002b6a]/10 to-transparent rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#002b6a]">DELIVERING</span> <span className="text-[#D98832]">EXCEPTIONAL RESULTS</span>
            </h2>
            <p className="text-xl text-[#002b6a] max-w-4xl mx-auto leading-relaxed">
              Our track record speaks volumes. With 95% client retention, 500+ satisfied clients, and 30+ years of proven expertise, we don't just provide services – we deliver transformative business solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="group">
              <div className="bg-white rounded-2xl p-8 h-full border border-gray-100 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#002b6a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#D98832] to-orange-500 opacity-10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#002b6a] to-[#1e40af] p-1 shadow-lg mb-6 transition-all duration-500 group-hover:scale-110">
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#002b6a]">
                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#002b6a] group-hover:scale-105 transition-transform duration-300">PROVEN METHODOLOGY</h3>
                  <p className="text-gray-600 leading-relaxed">Our systematic approach ensures consistent, measurable results across all engagements and industries.</p>
                  <div className="mt-6 w-0 h-1 bg-gradient-to-r from-[#002b6a] to-[#D98832] group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 h-full border border-gray-100 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#D98832]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#002b6a] to-[#1e40af] opacity-10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D98832] to-orange-500 p-1 shadow-lg mb-6 transition-all duration-500 group-hover:scale-110">
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#D98832]">
                        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#D98832] group-hover:scale-105 transition-transform duration-300">CONTINUOUS INNOVATION</h3>
                  <p className="text-gray-600 leading-relaxed">We stay ahead of industry trends and technological advances to provide cutting-edge solutions.</p>
                  <div className="mt-6 w-0 h-1 bg-gradient-to-r from-[#D98832] to-[#002b6a] group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="/contact-us" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-[#002b6a] to-[#D98832] hover:from-[#001f4d] hover:to-[#c77829] rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Experience the Advantage
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
