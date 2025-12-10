'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import Footer from '../components/Footer';
import { useParallax, useIntersectionObserver } from '../hooks/useScrollEffects';
import { useTestimonials } from '../hooks/useTestimonials';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const parallaxOffset = useParallax();
  const { testimonials, activeTestimonial, setActiveTestimonial } = useTestimonials();
  const partnerLogoPairs = [
    [
      { src: '/Brillion tax & acounting.png', alt: 'Brillion Tax & Accounting' },
      { src: '/Brillion Digital logo.png', alt: 'Brillion Digital' }
    ],
    [
      { src: '/Screenshot 2025-11-09 005002.png', alt: 'Partner Logo' },
      { src: '/Brillion Business logo new.png', alt: 'Brillion Business' }
    ],
    [
      { src: '/Screenshot 2025-11-09 005017.png', alt: 'Partner Logo' },
      { src: '/Screenshot 2025-11-09 005032.png', alt: 'Partner Logo' }
    ],
    [
      { src: '/Screenshot 2025-11-09 005049.png', alt: 'Partner Logo' },
      { src: '/Brillion Group LOGO PNG.png', alt: 'Brillion Group' }
    ]
  ];
  const loopedPartnerLogoPairs = [...partnerLogoPairs, ...partnerLogoPairs];
  const dottedPattern = "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23002b6a' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")";
  
  // Initialize scroll effects
  useIntersectionObserver();


  return (
    <div className="robbinex-site">
      {/* Header */}
      <Header />

      {/* Hero Slider */}
      <HeroSlider />

      {/* About Section - Redesigned */}
      <section className="py-[80px] bg-[var(--background-light)] relative">
        <div className="absolute inset-x-0 top-0 h-[70vh] opacity-20">
          <div className="h-full w-full" style={{ backgroundImage: dottedPattern }}></div>
        </div>
        <div className="container relative">
          <div className="flex justify-center">
            <div className="about-content max-w-4xl text-center">
              <div className="about-text-unified">
                <h2>ABOUT <span style={{color: '#D98832'}}>BRILLION</span></h2>
                <p className="intro-text">
                  Brillion Group is a forward-thinking and dynamic organization dedicated to delivering tailored, cutting-edge solutions in accounting, finance, back-office data management, taxation, and real estate investment advisory.
                </p>
                <p>With an unwavering commitment to innovation, we craft business strategies that seamlessly align with our clients' unique needs.</p>
                <p>As trusted partners, we navigate the complexities of modern business, empowering our clients to achieve sustainable success.</p>
                
                <div className="bt_bb_button bt_bb_color_scheme_4 bt_bb_icon_position_left bt_bb_style_outline bt_bb_width_inline bt_bb_shape_inherit bt_bb_target_self bt_bb_text_transform_inherit bt_bb_size_large bt_bb_align_inherit" style={{"--primary-color": "#002b6a", "--secondary-color": "#ffffff"}}>
                  <a href="/about-brillion/" target="_self" className="bt_bb_link" title="Learn More About Us">
                    <span className="bt_bb_button_text">Learn More About Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Trusted Digital Partner Section */}
      <section className="py-[60px] bg-[var(--background-light)] relative">
        <div className="absolute inset-x-0 top-0 h-[70vh] opacity-20">
          <div className="h-full w-full" style={{ backgroundImage: dottedPattern }}></div>
        </div>
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#D98832]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#D98832]/15 to-transparent rounded-full blur-2xl"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <div className="text-center mb-20 1366:mb-12">
            <h2 className="text-3xl md:text-4xl 1366:text-3xl font-bold mb-6 1366:mb-4 uppercase">
              <span className="text-[#1e3a8a]">Your Trusted</span> <span className="text-[#D98832]">Financial Partner</span>
            </h2>
            <p className="text-xl 1366:text-lg text-[#1e3a8a] max-w-3xl 1366:max-w-2xl mx-auto leading-relaxed">
              We bring unmatched expertise, proven results, and industry-focused solutions to drive your financial transformation success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 1366:gap-6 mb-16 1366:mb-10">
            <div className="group relative">
              <div className="bg-white rounded-2xl p-8 1366:p-5 h-full border border-gray-100 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#1e3a8a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] opacity-10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6 1366:mb-4">
                    <div className="w-16 h-16 1366:w-12 1366:h-12 rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] p-1 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 1366:w-6 1366:h-6 text-[#1e3a8a]">
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                          <path d="M3 10h18"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl 1366:text-lg font-bold mb-4 1366:mb-3 text-[#1e3a8a] group-hover:scale-105 transition-transform duration-300">15+ Years Experience</h3>
                  <p className="text-gray-600 leading-relaxed text-sm 1366:text-xs">Over a decade of proven expertise in accounting, tax services, and business advisory solutions</p>
                  <div className="mt-6 1366:mt-4 w-0 h-1 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="bg-white rounded-2xl p-8 1366:p-5 h-full border border-gray-100 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#f97316]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#f97316] to-orange-500 opacity-10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6 1366:mb-4">
                    <div className="w-16 h-16 1366:w-12 1366:h-12 rounded-2xl bg-gradient-to-br from-[#f97316] to-orange-500 p-1 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 1366:w-6 1366:h-6 text-[#f97316]">
                          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                          <polyline points="16 7 22 7 22 13"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl 1366:text-lg font-bold mb-4 1366:mb-3 text-[#f97316] group-hover:scale-105 transition-transform duration-300">1000+ Successful Tax Returns</h3>
                  <p className="text-gray-600 leading-relaxed text-sm 1366:text-xs">Successfully prepared thousands of tax returns with maximum refunds and zero compliance issues</p>
                  <div className="mt-6 1366:mt-4 w-0 h-1 bg-gradient-to-r from-[#f97316] to-orange-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="bg-white rounded-2xl p-8 1366:p-5 h-full border border-gray-100 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#1e3a8a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] opacity-10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6 1366:mb-4">
                    <div className="w-16 h-16 1366:w-12 1366:h-12 rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] p-1 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 1366:w-6 1366:h-6 text-[#1e3a8a]">
                          <circle cx="12" cy="12" r="10"></circle>
                          <circle cx="12" cy="12" r="6"></circle>
                          <circle cx="12" cy="12" r="2"></circle>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl 1366:text-lg font-bold mb-4 1366:mb-3 text-[#1e3a8a] group-hover:scale-105 transition-transform duration-300">Industry-Focused Approach</h3>
                  <p className="text-gray-600 leading-relaxed text-sm 1366:text-xs">Tailored financial solutions designed specifically for your industry's unique challenges and regulations</p>
                  <div className="mt-6 1366:mt-4 w-0 h-1 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="bg-white rounded-2xl p-8 1366:p-5 h-full border border-gray-100 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#f97316]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#f97316] to-orange-500 opacity-10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6 1366:mb-4">
                    <div className="w-16 h-16 1366:w-12 1366:h-12 rounded-2xl bg-gradient-to-br from-[#f97316] to-orange-500 p-1 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 1366:w-6 1366:h-6 text-[#f97316]">
                          <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                          <circle cx="12" cy="8" r="6"></circle>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl 1366:text-lg font-bold mb-4 1366:mb-3 text-[#f97316] group-hover:scale-105 transition-transform duration-300">Certified Financial Experts</h3>
                  <p className="text-gray-600 leading-relaxed text-sm 1366:text-xs">Team of certified professionals with advanced credentials in accounting, tax, and financial planning</p>
                  <div className="mt-6 1366:mt-4 w-0 h-1 bg-gradient-to-r from-[#f97316] to-orange-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-12 1366:p-8 border-2 border-blue-100 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#f97316]/10 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#1e3a8a]/10 to-transparent rounded-full blur-2xl"></div>
            </div>
            <div className="relative z-10">
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl 1366:text-3xl font-bold mb-4 1366:mb-3">
                  <span className="text-[#1e3a8a]">Trusted by</span> <span className="text-[#f97316]">Business Leaders</span>
                </h3>
                <p className="text-xl 1366:text-lg text-[#1e3a8a] max-w-2xl mx-auto">Join hundreds of successful companies who have transformed their financial operations with our expertise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-[80px] bg-[var(--background-light)] relative">
        <div className="absolute inset-x-0 top-0 h-[70vh] opacity-20">
          <div className="h-full w-full" style={{ backgroundImage: dottedPattern }}></div>
        </div>
        <div className="container relative">
          <div className="industries-showcase">
            <div className="industries-intro">
              <h2>EMPOWERING BUSINESSES <span className="text-[#002b6a]">IN EVERY SECTOR</span></h2>
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
      <section className="py-[80px] bg-[var(--background-light)] relative">
        <div className="absolute inset-x-0 top-0 h-[70vh] opacity-20">
          <div className="h-full w-full" style={{ backgroundImage: dottedPattern }}></div>
        </div>
        <div className="ceo-quote-section">
          <div className="quote-background-image"></div>
          <div className="quote-overlay"></div>
          <div className="container relative">
            <div className="quote-container">
              <div className="quote-content">
                <p className="quote-text">
                  "Growth isn't something to leave to chance—it's a deliberate journey that requires the right expertise and a trusted partner by your side. At Brillion, we're here to help you navigate challenges, seize opportunities, and achieve your vision for success. Let us work together to build a stronger, more prosperous future for your business."
                </p>
                <div className="quote-author">
                  <span className="author-name">Tahir Sheikh</span>
                  <span className="author-title">Chairman – Brillion Group Inc</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-[80px] bg-[var(--background-light)] relative">
        <div className="absolute inset-x-0 top-0 h-[70vh] opacity-20">
          <div className="h-full w-full" style={{ backgroundImage: dottedPattern }}></div>
        </div>
        <div className="container relative">
          <div className="partners-header">
            <h2>GROUP COMPANIES</h2>
            <p>Building success through collaboration with our affiliated companies and business ventures</p>
          </div>
          
          <div className="partners-slider-container">
            <div className="partners-slider">
              {loopedPartnerLogoPairs.map((pair, pairIndex) => (
                <div className="partner-pair" key={`partner-pair-${pairIndex}`}>
                  {pair.map((logo, logoIndex) => (
                    <div className="partner-card" key={`${logo.alt}-${pairIndex}-${logoIndex}`}>
                      <div className="partner-logo-wrapper">
                        <img src={logo.src} alt={logo.alt} />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      <Footer />
    </div>
  );
}
