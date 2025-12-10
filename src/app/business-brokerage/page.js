'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function BusinessBrokerage() {
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
            backgroundImage: "url('/business.webp')",
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
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Business Brokerage</h1>
          <p className="max-w-3xl mx-auto text-lg text-white">
            Expert advisors guiding acquisitions, mergers, and exits with disciplined valuations, discreet processes, and
            end-to-end transaction management.
          </p>
        </div>
      </section>

      {/* Why Choose Our Brokerage Section */}
      <section className="py-[80px] bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">
              <span className="text-[#1e3a8a]">Why Choose Our</span> <span className="text-[#D98832]">Business Brokerage?</span>
            </h2>
            <p className="text-xl text-[#1e3a8a] max-w-3xl mx-auto leading-relaxed">
              Navigate complex business transactions with confidence through our proven expertise and comprehensive support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                  <path d="M12 17h.01"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#1e3a8a]">Expert Market Knowledge</h3>
              <p className="text-gray-600 leading-relaxed">Deep understanding of market conditions, industry trends, and valuation methodologies for optimal transaction outcomes.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#f97316] to-orange-500 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#f97316]">Extensive Buyer Network</h3>
              <p className="text-gray-600 leading-relaxed">Access to a vast network of qualified buyers and strategic investors across multiple industries and markets.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#1e3a8a]">Confidential Process</h3>
              <p className="text-gray-600 leading-relaxed">Maintain strict confidentiality throughout the transaction process to protect your business operations and reputation.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#f97316] to-orange-500 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#f97316]">Value Maximization</h3>
              <p className="text-gray-600 leading-relaxed">Strategic positioning and negotiation expertise to achieve maximum value for your business sale or acquisition.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#1e3a8a]">Due Diligence Support</h3>
              <p className="text-gray-600 leading-relaxed">Comprehensive due diligence coordination and documentation to ensure smooth and successful transaction completion.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#f97316] to-orange-500 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#f97316]">End-to-End Management</h3>
              <p className="text-gray-600 leading-relaxed">Complete transaction management from initial valuation through final closing, ensuring every detail is handled professionally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Transaction Types Section */}
      <section className="py-[80px] bg-[var(--background-light)] relative">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{ backgroundImage: dottedPattern }}></div>
        </div>
        <div className="container relative">
          <div className="industries-showcase">
            <div className="industries-intro">
              <h2>TRANSACTION <span className="text-[#002b6a]">SPECIALTIES</span></h2>
              <p>We facilitate various types of business transactions across multiple industries and business sizes.</p>
            </div>
            
            <div className="industries-masonry">
              <div className="industry-card">
                <h3>BUSINESS SALES</h3>
                <span>Complete business sale facilitation</span>
              </div>
              <div className="industry-card">
                <h3>ACQUISITIONS</h3>
                <span>Strategic buyer representation</span>
              </div>
              <div className="industry-card">
                <h3>MERGERS</h3>
                <span>Company consolidation support</span>
              </div>
              <div className="industry-card">
                <h3>ASSET PURCHASES</h3>
                <span>Selective asset transactions</span>
              </div>
              <div className="industry-card">
                <h3>SUCCESSION PLANNING</h3>
                <span>Family business transitions</span>
              </div>
              <div className="industry-card">
                <h3>RECAPITALIZATIONS</h3>
                <span>Investment & restructuring</span>
              </div>
              <div className="industry-card">
                <h3>JOINT VENTURES</h3>
                <span>Strategic partnerships</span>
              </div>
              <div className="industry-card">
                <h3>DISTRESSED SALES</h3>
                <span>Turnaround situations</span>
              </div>
            </div>
            
            <div className="industries-action">
              <a href="/contact-us" className="industries-cta-button">EXPLORE TRANSACTION OPTIONS</a>
            </div>
          </div>
        </div>
      </section>


      {/* Industry Focus Section */}
      <section className="py-[60px] bg-[var(--background-light)] relative">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{ backgroundImage: dottedPattern }}></div>
        </div>
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#D98832]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#D98832]/15 to-transparent rounded-full blur-2xl"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <div className="text-center mb-20 1366:mb-12">
            <h2 className="text-3xl md:text-4xl 1366:text-3xl font-bold mb-6 1366:mb-4 uppercase">
              <span className="text-[#1e3a8a]">Industry</span> <span className="text-[#D98832]">Expertise</span>
            </h2>
            <p className="text-xl 1366:text-lg text-[#1e3a8a] max-w-3xl 1366:max-w-2xl mx-auto leading-relaxed">
              Specialized knowledge and experience across diverse industries and business sectors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 1366:gap-6">
            <div className="group relative">
              <div className="bg-white rounded-2xl p-8 1366:p-5 h-full border border-gray-100 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#1e3a8a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6 1366:mb-4">
                    <div className="w-16 h-16 1366:w-12 1366:h-12 rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] p-1 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 1366:w-6 1366:h-6 text-[#1e3a8a]">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl 1366:text-lg font-bold mb-4 1366:mb-3 text-[#1e3a8a] group-hover:scale-105 transition-transform duration-300">Real Estate & Construction</h3>
                  <p className="text-gray-600 leading-relaxed text-sm 1366:text-xs">Property development, construction companies, and real estate investment firms</p>
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
                          <path d="M2 20h20"/>
                          <path d="M7 20v-4"/>
                          <path d="M12 20v-6"/>
                          <path d="M17 20V10"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl 1366:text-lg font-bold mb-4 1366:mb-3 text-[#f97316] group-hover:scale-105 transition-transform duration-300">Manufacturing & Distribution</h3>
                  <p className="text-gray-600 leading-relaxed text-sm 1366:text-xs">Manufacturing facilities, distribution centers, and supply chain businesses</p>
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
                          <circle cx="8" cy="21" r="2"/>
                          <circle cx="20" cy="21" r="2"/>
                          <path d="M5.67 6H23l-1.68 8.39a2 2 0 0 1-2 1.61H8.75"/>
                          <path d="M3 1H5l1.68 8.39"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl 1366:text-lg font-bold mb-4 1366:mb-3 text-[#1e3a8a] group-hover:scale-105 transition-transform duration-300">Retail & E-commerce</h3>
                  <p className="text-gray-600 leading-relaxed text-sm 1366:text-xs">Retail chains, online businesses, and consumer-focused enterprises</p>
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
                          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                          <circle cx="12" cy="13" r="3"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl 1366:text-lg font-bold mb-4 1366:mb-3 text-[#f97316] group-hover:scale-105 transition-transform duration-300">Professional Services</h3>
                  <p className="text-gray-600 leading-relaxed text-sm 1366:text-xs">Consulting firms, professional practices, and service-based businesses</p>
                  <div className="mt-6 1366:mt-4 w-0 h-1 bg-gradient-to-r from-[#f97316] to-orange-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
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
              <h2>READY TO EXPLORE YOUR OPTIONS?</h2>
              <p>Let our experienced business brokers help you navigate your next business transaction with confidence, expertise, and proven results.</p>
              <div className="cta-buttons">
                <a href="/contact-us" className="primary-cta-button">Schedule Consultation</a>
                <a href="tel:+647-891-2155" className="secondary-cta-button">Call Now</a>
              </div>
            </div>
            <div className="cta-image-content">
              <div className="cta-image-wrapper">
                <img src="/business.webp" alt="Business Brokerage Team" />
                <div className="cta-stats">
                  <div className="stat-item">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Successful Transactions</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">$2B+</span>
                    <span className="stat-label">Transaction Value</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">25+</span>
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
