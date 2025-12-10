'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function IncorporationServices() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dottedPattern = "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23002b6a' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")";

  return (
    <div className="robbinex-site">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#002b6a]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/why-incorporation.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.25,
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(0, 43, 106, 0.45) 0%, rgba(0, 43, 106, 0.65) 100%)' }}
        ></div>
        <div className="relative z-10 container text-center text-white py-24">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Incorporation Services</h1>
          <p className="max-w-3xl mx-auto text-lg text-white">
            End-to-end incorporation guidance that establishes the right structure, safeguards your interests, and keeps every
            filing compliant from day one.
          </p>
        </div>
      </section>

      {/* Why Incorporate Section */}
      <section className="py-[80px] bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">
              <span className="text-[#1e3a8a]">Why Choose</span> <span className="text-[#D98832]">Incorporation?</span>
            </h2>
            <p className="text-xl text-[#1e3a8a] max-w-3xl mx-auto leading-relaxed">
              Discover the strategic advantages of incorporating your business and protecting your assets.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#1e3a8a]">Limited Liability Protection</h3>
              <p className="text-gray-600 leading-relaxed">Protect your personal assets from business liabilities and lawsuits with corporate legal structure.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#f97316] to-orange-500 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#f97316]">Tax Advantages</h3>
              <p className="text-gray-600 leading-relaxed">Access lower corporate tax rates and various tax deductions available only to incorporated businesses.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
                  <polyline points="16 7 22 7 22 13"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#1e3a8a]">Enhanced Credibility</h3>
              <p className="text-gray-600 leading-relaxed">Build trust with customers, suppliers, and investors through professional corporate status.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#f97316] to-orange-500 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="6"/>
                  <circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#f97316]">Business Continuity</h3>
              <p className="text-gray-600 leading-relaxed">Ensure your business continues to operate independently of ownership changes or personal circumstances.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#1e3a8a]">Access to Capital</h3>
              <p className="text-gray-600 leading-relaxed">Easier access to business loans, investment opportunities, and government funding programs.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#f97316] to-orange-500 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#f97316]">Professional Structure</h3>
              <p className="text-gray-600 leading-relaxed">Establish clear governance, ownership structure, and operational frameworks for business growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Entity Types Section */}
      <section className="py-[80px] bg-[var(--background-light)] relative">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{ backgroundImage: dottedPattern }}></div>
        </div>
        <div className="container relative">
          <div className="industries-showcase">
            <div className="industries-intro">
              <h2>BUSINESS ENTITY <span className="text-[#002b6a]">OPTIONS</span></h2>
              <p>Choose the right business structure that aligns with your goals, tax strategy, and operational requirements.</p>
            </div>
            
            <div className="industries-masonry">
              <div className="industry-card">
                <h3>CORPORATION</h3>
                <span>Limited liability & tax benefits</span>
              </div>
              <div className="industry-card">
                <h3>PROFESSIONAL CORP</h3>
                <span>For licensed professionals</span>
              </div>
              <div className="industry-card">
                <h3>HOLDING COMPANY</h3>
                <span>Investment & asset protection</span>
              </div>
              <div className="industry-card">
                <h3>PARTNERSHIP</h3>
                <span>Joint business ventures</span>
              </div>
              <div className="industry-card">
                <h3>LIMITED LIABILITY</h3>
                <span>Hybrid structure benefits</span>
              </div>
              <div className="industry-card">
                <h3>NON-PROFIT ORG</h3>
                <span>Charitable & social purposes</span>
              </div>
              <div className="industry-card">
                <h3>SOLE PROPRIETORSHIP</h3>
                <span>Simple business registration</span>
              </div>
              <div className="industry-card">
                <h3>JOINT VENTURE</h3>
                <span>Strategic partnerships</span>
              </div>
            </div>
            
            <div className="industries-action">
              <a href="/contact-us" className="industries-cta-button">FIND YOUR IDEAL STRUCTURE</a>
            </div>
          </div>
        </div>
      </section>

      {/* Incorporation Process Section */}
      <section className="py-[80px] bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">
              <span className="text-[#1e3a8a]">Our Proven</span> <span className="text-[#D98832]">Incorporation Process</span>
            </h2>
            <p className="text-xl text-[#1e3a8a] max-w-3xl mx-auto leading-relaxed">
              A comprehensive step-by-step approach to ensure your business is properly incorporated and compliant.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] flex items-center justify-center relative">
                <span className="text-2xl font-bold text-white">1</span>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#D98832] rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#1e3a8a]">Consultation & Planning</h3>
              <p className="text-gray-600 leading-relaxed">Comprehensive consultation to determine the optimal corporate structure and strategy for your business goals.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#f97316] to-orange-500 flex items-center justify-center relative">
                <span className="text-2xl font-bold text-white">2</span>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#1e3a8a] rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#f97316]">Name Search & Registration</h3>
              <p className="text-gray-600 leading-relaxed">Comprehensive name search and reservation to ensure your chosen corporate name is available and compliant.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] flex items-center justify-center relative">
                <span className="text-2xl font-bold text-white">3</span>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#D98832] rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#1e3a8a]">Documentation & Filing</h3>
              <p className="text-gray-600 leading-relaxed">Preparation and filing of all required incorporation documents including articles of incorporation and bylaws.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#f97316] to-orange-500 flex items-center justify-center relative">
                <span className="text-2xl font-bold text-white">4</span>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#1e3a8a] rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#f97316]">Ongoing Compliance</h3>
              <p className="text-gray-600 leading-relaxed">Continuous support for corporate compliance including annual filings, minute books, and regulatory requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="py-[60px] bg-[var(--background-light)] relative">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{ backgroundImage: dottedPattern }}></div>
        </div>
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#D98832]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#D98832]/15 to-transparent rounded-full blur-2xl"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <div className="text-center mb-20 1366:mb-12">
            <h2 className="text-3xl md:text-4xl 1366:text-3xl font-bold mb-6 1366:mb-4 uppercase">
              <span className="text-[#1e3a8a]">Specialized</span> <span className="text-[#D98832]">Incorporation Services</span>
            </h2>
            <p className="text-xl 1366:text-lg text-[#1e3a8a] max-w-3xl 1366:max-w-2xl mx-auto leading-relaxed">
              Tailored incorporation solutions for specific industries and business requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 1366:gap-6">
            <div className="group relative">
              <div className="bg-white rounded-2xl p-8 1366:p-5 h-full border border-gray-100 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#1e3a8a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6 1366:mb-4">
                    <div className="w-16 h-16 1366:w-12 1366:h-12 rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] p-1 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 1366:w-6 1366:h-6 text-[#1e3a8a]">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                          <polyline points="9,22 9,12 15,12 15,22"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl 1366:text-lg font-bold mb-4 1366:mb-3 text-[#1e3a8a] group-hover:scale-105 transition-transform duration-300">Real Estate Incorporation</h3>
                  <p className="text-gray-600 leading-relaxed text-sm 1366:text-xs">Specialized incorporation services for real estate investors, landlords, and property management companies</p>
                  <div className="mt-6 1366:mt-4 w-0 h-1 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="bg-white rounded-2xl p-8 1366:p-5 h-full border border-gray-100 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#f97316]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6 1366:mb-4">
                    <div className="w-16 h-16 1366:w-12 1366:h-12 rounded-2xl bg-gradient-to-br from-[#f97316] to-orange-500 p-1 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 1366:w-6 1366:h-6 text-[#f97316]">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                          <polyline points="14,2 14,8 20,8"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl 1366:text-lg font-bold mb-4 1366:mb-3 text-[#f97316] group-hover:scale-105 transition-transform duration-300">Professional Corporations</h3>
                  <p className="text-gray-600 leading-relaxed text-sm 1366:text-xs">Incorporation services for licensed professionals including doctors, lawyers, accountants, and consultants</p>
                  <div className="mt-6 1366:mt-4 w-0 h-1 bg-gradient-to-r from-[#f97316] to-orange-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="bg-white rounded-2xl p-8 1366:p-5 h-full border border-gray-100 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#1e3a8a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6 1366:mb-4">
                    <div className="w-16 h-16 1366:w-12 1366:h-12 rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] p-1 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 1366:w-6 1366:h-6 text-[#1e3a8a]">
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl 1366:text-lg font-bold mb-4 1366:mb-3 text-[#1e3a8a] group-hover:scale-105 transition-transform duration-300">Holding Companies</h3>
                  <p className="text-gray-600 leading-relaxed text-sm 1366:text-xs">Strategic holding company structures for investment management, asset protection, and tax optimization</p>
                  <div className="mt-6 1366:mt-4 w-0 h-1 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="advisory-cta-section">
        <div className="container">
          <div className="cta-content-wrapper">
            <div className="cta-text-content">
              <h2>READY TO PROTECT YOUR BUSINESS?</h2>
              <p>Let our incorporation specialists help you establish the right corporate structure for your business needs and protect your personal assets.</p>
              <div className="cta-buttons">
                <a href="/contact-us" className="primary-cta-button">Start Your Incorporation</a>
                <a href="tel:+647-891-2155" className="secondary-cta-button">Call Now</a>
              </div>
            </div>
            <div className="cta-image-content">
              <div className="cta-image-wrapper">
                <img src="/why-incorporation.webp" alt="Incorporation Services Team" />
                <div className="cta-stats">
                  <div className="stat-item">
                    <span className="stat-number">2000+</span>
                    <span className="stat-label">Successful Incorporations</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">95%</span>
                    <span className="stat-label">Client Satisfaction</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">20+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
