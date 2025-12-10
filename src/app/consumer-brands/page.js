'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ConsumerBrands() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dottedPattern = "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23002b6a' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")";

  return (
    <div className="robbinex-site">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="consumer-brands-hero-section">
        <div className="hero-background" style={{
          backgroundImage: "url('/shop-layout-desktop-stage-4-1200x900.jpeg')"
        }}></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="consumer-brands-hero-content">
            <div className="hero-text-centered">
              <h1>CONSUMER<br />BRANDS</h1>
              <p>Brillion Group extends its reach into vibrant consumer markets with brands dedicated to quality and customer satisfaction.</p>
              <p>Our consumer-focused ventures represent our commitment to excellence, innovation, and delivering exceptional value to customers across diverse markets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Overview Section */}
      <section className="brands-overview-section">
        <div className="container">
          <div className="brands-intro">
            <h2><span style={{color:'#D98832'}}>OUR</span> CONSUMER BRANDS</h2>
            <p>Quality, innovation, and customer satisfaction drive our consumer-focused ventures</p>
          </div>
          
          <div className="brands-showcase">
            
            {/* Happy Goat Coffee */}
            <a href="/contact-us" className="brand-showcase-card block">
              <div className="brand-card-content">
                <div className="brand-info">
                  <div className="brand-badge">
                    <span className="brand-category">Coffee Brand</span>
                  </div>
                  <h3>Happy Goat Coffee</h3>
                  <p>A premium coffee brand dedicated to delivering exceptional coffee experiences through ethically sourced beans and innovative brewing methods.</p>
                  
                  <div className="brand-highlights">
                    <div className="highlight-item">
                      <div className="highlight-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V7l-10-5z"/>
                          <path d="m9 12 2 2 4-4"/>
                        </svg>
                      </div>
                      <span>Ethically sourced beans</span>
                    </div>
                    <div className="highlight-item">
                      <div className="highlight-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="3"/>
                          <path d="m12 1 0 6m0 6 0 6"/>
                          <path d="m21 12-6 0m-6 0-6 0"/>
                        </svg>
                      </div>
                      <span>Exceptional brewing experiences</span>
                    </div>
                    <div className="highlight-item">
                      <div className="highlight-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                          <circle cx="12" cy="12" r="4"/>
                        </svg>
                      </div>
                      <span>Targeting coffee enthusiasts</span>
                    </div>
                  </div>
                </div>
                <div className="brand-image">
                  <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Happy Goat Coffee" />
                </div>
              </div>
            </a>

            {/* HoneyLand Organics */}
            <a href="/contact-us" className="brand-showcase-card block">
              <div className="brand-card-content">
                <div className="brand-image">
                  <img src="/benefits-raw-white-honey.jpg" alt="HoneyLand Organics" />
                </div>
                <div className="brand-info">
                  <div className="brand-badge">
                    <span className="brand-category">Organic Products</span>
                  </div>
                  <h3>HoneyLand Organics</h3>
                  <p>Dedicated to providing high-quality, organic honey products promoting natural wellness and sustainable beekeeping practices.</p>
                  
                  <div className="brand-highlights">
                    <div className="highlight-item">
                      <div className="highlight-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M7 13h3v3H7z"/>
                          <path d="M13 21v-8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8"/>
                          <circle cx="18" cy="6" r="3"/>
                          <path d="m22 22-1.5-1.5"/>
                        </svg>
                      </div>
                      <span>Organic honey production</span>
                    </div>
                    <div className="highlight-item">
                      <div className="highlight-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                        </svg>
                      </div>
                      <span>Promoting natural wellness</span>
                    </div>
                    <div className="highlight-item">
                      <div className="highlight-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 6h18l-1.68 7.56a2 2 0 0 1-1.95 1.44H6.63a2 2 0 0 1-1.95-1.44L3 6Z"/>
                          <path d="M6 6V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/>
                          <path d="M9 17h6"/>
                        </svg>
                      </div>
                      <span>Sustainable practices</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* Brand Philosophy Section */}
      <section className="py-[80px] bg-[var(--background-light)] relative">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{ backgroundImage: dottedPattern }}></div>
        </div>
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#D98832]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#002b6a]/10 to-transparent rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#002b6a]">BUILDING EXCEPTIONAL</span> <span className="text-[#D98832]">BRANDS</span>
            </h2>
            <p className="text-xl text-[#002b6a] max-w-4xl mx-auto leading-relaxed">
              Our consumer brands reflect our commitment to quality, innovation, and customer satisfaction. Each brand is built on the foundation of excellence that defines Brillion Group.
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
                  <h3 className="text-2xl font-bold mb-4 text-[#002b6a] group-hover:scale-105 transition-transform duration-300">QUALITY FIRST</h3>
                  <p className="text-gray-600 leading-relaxed">Every product and service meets the highest standards of quality and reliability.</p>
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
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#D98832] group-hover:scale-105 transition-transform duration-300">CUSTOMER FOCUSED</h3>
                  <p className="text-gray-600 leading-relaxed">Understanding and exceeding customer expectations drives everything we do.</p>
                  <div className="mt-6 w-0 h-1 bg-gradient-to-r from-[#D98832] to-[#002b6a] group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="/contact-us" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-[#002b6a] to-[#D98832] hover:from-[#001f4d] hover:to-[#c77829] rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Connect With Our Brands
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
