'use client';
import { useState, useRef, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const aboutDropdownTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
      if (aboutDropdownTimeoutRef.current) {
        clearTimeout(aboutDropdownTimeoutRef.current);
      }
    };
  }, []);

  const handleAboutMouseEnter = () => {
    if (aboutDropdownTimeoutRef.current) {
      clearTimeout(aboutDropdownTimeoutRef.current);
    }
    setAboutDropdownOpen(true);
  };

  const handleAboutMouseLeave = () => {
    aboutDropdownTimeoutRef.current = setTimeout(() => {
      setAboutDropdownOpen(false);
    }, 100);
  };

  return (
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
                  <span className="btIconWidgetTitle">233 Speers Rd Unit 5, Oakville, ON L6K 0J5</span>
                </div>
              </a>
              <a href="tel:+16478912155" title="" target="_self" className="btIconWidget btWidgetWithText">
                <div className="btIconWidgetIcon">
                  <span className="bt_bb_icon_holder">📞</span>
                </div>
                <div className="btIconWidgetContent">
                  <span className="btIconWidgetTitle">+1 (647) 891-2155</span>
                </div>
              </a>
              <a href="mailto:info@brilliongroup.com" title="" className="btIconWidget btWidgetWithText">
                <div className="btIconWidgetIcon">
                  <span className="bt_bb_icon_holder">✉️</span>
                </div>
                <div className="btIconWidgetContent">
                  <span className="btIconWidgetTitle">info@brilliongroup.com</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="bt-logo-area menu-holder bt-clear">
          <div className="port">
            <div className="bt-horizontal-menu-trigger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <div className="bt_bb_icon bt_bb_text_empty">
                <span className="bt_bb_icon_holder">☰</span>
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
                <ul id="menu-main-menu" className="menu flex items-center gap-8">
                  <li 
                    id="menu-item-8324" 
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8324 relative flex items-center"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="subToggler"></div>
                    <a href="#" className="!text-[#002b6a] !font-bold !text-sm py-3 px-2 hover:!text-[#D98832] transition-colors duration-300" style={{fontWeight: '700', fontSize: '14px', color: '#002b6a'}} onMouseEnter={(e) => e.target.style.color = '#D98832'} onMouseLeave={(e) => e.target.style.color = '#002b6a'}>OUR SERVICES</a>
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-6 w-30 h-30 transition-all duration-300 ${servicesDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto visible' : 'opacity-0 -translate-y-2 pointer-events-none invisible'}`}>
                      <div className="relative w-[650px] h-[300px] bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-xl border border-white/15 rounded-2xl shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/95 to-slate-900/90"></div>
                        <div className="relative z-10 p-3">
                          <div className="grid grid-cols-2 gap-4">
                            {/* Left Column - 3 services */}
                            <div className="space-y-3">
                              <a className="group/item relative flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 overflow-hidden" href="/digital-services/" style={{animationDelay: '0ms'}}>
                                <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500 to-blue-600" style={{mixBlendMode: 'overlay'}}></div>
                                <div className="relative">
                                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:shadow-xl transition-all duration-300 group-hover/item:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                                      <line x1="8" y1="21" x2="16" y2="21"/>
                                      <line x1="12" y1="17" x2="12" y2="21"/>
                                    </svg>
                                  </div>
                                </div>
                                <div className="relative flex-1 min-w-0">
                                  <h4 className="text-sm font-bold text-white transition-colors duration-300">DIGITAL SERVICES</h4>
                                </div>
                              </a>
                              
                              <a className="group/item relative flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 overflow-hidden" href="/incorporation-services/" style={{animationDelay: '100ms'}}>
                                <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500 to-purple-600" style={{mixBlendMode: 'overlay'}}></div>
                                <div className="relative">
                                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:shadow-xl transition-all duration-300 group-hover/item:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                  </div>
                                </div>
                                <div className="relative flex-1 min-w-0">
                                  <h4 className="text-sm font-bold text-white transition-colors duration-300">INCORPORATION SERVICES</h4>
                                </div>
                              </a>
                              
                              <a className="group/item relative flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 overflow-hidden" href="/business-brokerage/" style={{animationDelay: '200ms'}}>
                                <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-orange-500 to-orange-600" style={{mixBlendMode: 'overlay'}}></div>
                                <div className="relative">
                                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:shadow-xl transition-all duration-300 group-hover/item:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                      <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                                      <line x1="12" y1="22.08" x2="12" y2="12"/>
                                    </svg>
                                  </div>
                                </div>
                                <div className="relative flex-1 min-w-0">
                                  <h4 className="text-sm font-bold text-white transition-colors duration-300">BUSINESS BROKERAGE</h4>
                                </div>
                              </a>
                            </div>
                            
                            {/* Right Column - 3 services */}
                            <div className="space-y-3">
                              <a className="group/item relative flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 overflow-hidden" href="/bookkeeping-accounting/" style={{animationDelay: '50ms'}}>
                                <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-500 to-cyan-600" style={{mixBlendMode: 'overlay'}}></div>
                                <div className="relative">
                                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:shadow-xl transition-all duration-300 group-hover/item:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                      <polyline points="14,2 14,8 20,8"/>
                                      <line x1="16" y1="13" x2="8" y2="13"/>
                                      <line x1="16" y1="17" x2="8" y2="17"/>
                                    </svg>
                                  </div>
                                </div>
                                <div className="relative flex-1 min-w-0">
                                  <h4 className="text-sm font-bold text-white transition-colors duration-300">BOOKKEEPING & ACCOUNTING</h4>
                                </div>
                              </a>
                              
                              <a className="group/item relative flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 overflow-hidden" href="/back-office-services/" style={{animationDelay: '150ms'}}>
                                <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-slate-500 to-slate-600" style={{mixBlendMode: 'overlay'}}></div>
                                <div className="relative">
                                  <div className="w-10 h-10 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:shadow-xl transition-all duration-300 group-hover/item:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                      <path d="M8 2v4M16 2v4M3 8h18M5 12h14M7 16h10"/>
                                      <rect x="3" y="4" width="18" height="18" rx="2"/>
                                    </svg>
                                  </div>
                                </div>
                                <div className="relative flex-1 min-w-0">
                                  <h4 className="text-sm font-bold text-white transition-colors duration-300">BACK OFFICE SERVICES</h4>
                                </div>
                              </a>
                              
                              <a className="group/item relative flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 overflow-hidden" href="/tax-services/" style={{animationDelay: '250ms'}}>
                                <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-amber-500 to-amber-600" style={{mixBlendMode: 'overlay'}}></div>
                                <div className="relative">
                                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:shadow-xl transition-all duration-300 group-hover/item:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                      <line x1="12" y1="1" x2="12" y2="23"/>
                                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                                    </svg>
                                  </div>
                                </div>
                                <div className="relative flex-1 min-w-0">
                                  <h4 className="text-sm font-bold text-white transition-colors duration-300">TAX SERVICES</h4>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
                      </div>
                    </div>
                  </li>
                  <li id="menu-item-4189" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4189 flex items-center">
                    <a href="/industries/" className="!text-[#002b6a] !font-bold !text-sm py-3 px-2 hover:!text-[#D98832] transition-colors duration-300" style={{fontWeight: '700', fontSize: '14px', color: '#002b6a'}} onMouseEnter={(e) => e.target.style.color = '#D98832'} onMouseLeave={(e) => e.target.style.color = '#002b6a'}>INDUSTRIES SERVED</a>
                  </li>
                  <li id="menu-item-4251" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4251 flex items-center">
                    <a href="/advantage/" className="!text-[#002b6a] !font-bold !text-sm py-3 px-2 hover:!text-[#D98832] transition-colors duration-300" style={{fontWeight: '700', fontSize: '14px', color: '#002b6a'}} onMouseEnter={(e) => e.target.style.color = '#D98832'} onMouseLeave={(e) => e.target.style.color = '#002b6a'}>BRILLION ADVANTAGE</a>
                  </li>
                  <li
                    id="menu-item-about"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children relative flex items-center"
                    onMouseEnter={handleAboutMouseEnter}
                    onMouseLeave={handleAboutMouseLeave}
                  >
                    <div className="subToggler"></div>
                    <a href="/about-us/" className="!text-[#002b6a] !font-bold !text-sm py-3 px-2 hover:!text-[#D98832] transition-colors duration-300 flex items-center" style={{fontWeight: '700', fontSize: '14px', color: '#002b6a'}} onMouseEnter={(e) => e.target.style.color = '#D98832'} onMouseLeave={(e) => e.target.style.color = '#002b6a'}>
                      About Us
                    </a>
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-6 w-30 h-30 transition-all duration-300 ${aboutDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto visible' : 'opacity-0 -translate-y-2 pointer-events-none invisible'}`}>
                      <div className="relative w-[350px] h-[300px] bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95"></div>
                        <div className="relative z-10 p-3 grid grid-cols-1 gap-1.5">
                          <a className="group/item relative flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 overflow-hidden" href="/about-us/" style={{animationDelay: '0ms'}}>
                            <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-indigo-500 to-blue-600" style={{mixBlendMode: 'overlay'}}></div>
                            <div className="relative">
                              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:shadow-xl transition-all duration-300 group-hover/item:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                  <path d="M12 2l8 4-8 4-8-4 8-4z" />
                                  <path d="M4 10l8 4 8-4" />
                                  <path d="M4 18l8 4 8-4" />
                                </svg>
                              </div>
                            </div>
                            <div className="relative flex-1 min-w-0">
                              <h4 className="text-xs font-bold text-white transition-colors duration-300">About Brillion</h4>
                              <p className="text-[11px] text-slate-200/80">Our story, mission, and values.</p>
                            </div>
                          </a>

                          <a className="group/item relative flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 overflow-hidden" href="/profile/" style={{animationDelay: '120ms'}}>
                            <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-emerald-500 to-green-600" style={{mixBlendMode: 'overlay'}}></div>
                            <div className="relative">
                              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:shadow-xl transition-all duration-300 group-hover/item:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                  <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
                                  <path d="M4 21v-2a4 4 0 0 1 3-3.87" />
                                  <circle cx="12" cy="7" r="4" />
                                </svg>
                              </div>
                            </div>
                            <div className="relative flex-1 min-w-0">
                              <h4 className="text-xs font-bold text-white transition-colors duration-300">Profile</h4>
                              <p className="text-[11px] text-slate-200/80">Leadership spotlight.</p>
                            </div>
                          </a>

                          <a className="group/item relative flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 overflow-hidden" href="/now-hiring/" style={{animationDelay: '240ms'}}>
                            <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-orange-500 to-amber-500" style={{mixBlendMode: 'overlay'}}></div>
                            <div className="relative">
                              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:shadow-xl transition-all duration-300 group-hover/item:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                  <circle cx="9" cy="7" r="4" />
                                  <line x1="19" y1="8" x2="19" y2="14" />
                                  <line x1="16" y1="11" x2="22" y2="11" />
                                </svg>
                              </div>
                            </div>
                            <div className="relative flex-1 min-w-0">
                              <h4 className="text-xs font-bold text-white transition-colors duration-300">Now Hiring</h4>
                              <p className="text-[11px] text-slate-200/80">Career opportunities.</p>
                            </div>
                          </a>
                        </div>
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
                      </div>
                    </div>
                  </li>
                  <li id="menu-item-4310" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4310 flex items-center">
                    <a href="/consumer-brands/" className="!text-[#002b6a] !font-bold !text-sm py-3 px-2 hover:!text-[#D98832] transition-colors duration-300" style={{fontWeight: '700', fontSize: '14px', color: '#002b6a'}} onMouseEnter={(e) => e.target.style.color = '#D98832'} onMouseLeave={(e) => e.target.style.color = '#002b6a'}>Consumer Brands</a>
                  </li>
                  <li id="menu-item-6562" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6562">
                    <a href="/contact-us/" className="inline-flex items-center justify-center px-12 py-3 !text-xs !font-bold !text-white !bg-[#D98832] rounded-full hover:!bg-[#e69610] hover:!text-white transition-all duration-200 shadow-md hover:shadow-lg border-none" style={{padding: '12px 20px', fontSize: '12px', fontWeight: '700'}}>
                      CONTACT US
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <img src="/BRILLION GROUP LOGO PNG.png" alt="Brillion Group" className="mobile-menu-logo" />
              <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)}>×</button>
            </div>
            <nav className="mobile-menu-nav">
              <div className="mobile-menu-item">
                <span className="mobile-menu-title">OUR SERVICES</span>
                <div className="mobile-submenu">
                  <a href="/digital-services/" onClick={() => setMobileMenuOpen(false)}>Digital Services</a>
                  <a href="/incorporation-services/" onClick={() => setMobileMenuOpen(false)}>Incorporation Services</a>
                  <a href="/business-brokerage/" onClick={() => setMobileMenuOpen(false)}>Business Brokerage</a>
                  <a href="/bookkeeping-accounting/" onClick={() => setMobileMenuOpen(false)}>Bookkeeping & Accounting</a>
                  <a href="/back-office-services/" onClick={() => setMobileMenuOpen(false)}>Back Office Services</a>
                  <a href="/tax-services/" onClick={() => setMobileMenuOpen(false)}>Tax Services</a>
                </div>
              </div>
              <a href="/industries/" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>INDUSTRIES SERVED</a>
              <a href="/advantage/" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>BRILLION ADVANTAGE</a>
              <div className="mobile-menu-item">
                <span className="mobile-menu-title">ABOUT US</span>
                <div className="mobile-submenu">
                  <a href="/about-us/" onClick={() => setMobileMenuOpen(false)}>About Brillion</a>
                  <a href="/profile/" onClick={() => setMobileMenuOpen(false)}>Profile</a>
                  <a href="/now-hiring/" onClick={() => setMobileMenuOpen(false)}>Now Hiring</a>
                </div>
              </div>
              <a href="/consumer-brands/" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Consumer Brands</a>
              <a href="/contact-us/" className="mobile-menu-cta" onClick={() => setMobileMenuOpen(false)}>CONTACT US</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
