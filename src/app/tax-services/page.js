'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TaxServices() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="robbinex-site">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#002b6a]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
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
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Tax Services</h1>
          <p className="max-w-3xl mx-auto text-lg text-white">
            Strategic tax planning and compliance support that keeps you ahead of regulatory change while maximizing every
            available opportunity for your business and personal filings.
          </p>
        </div>
      </section>

      {/* Tax Services Section */}
      <section className="py-[80px] bg-[var(--background-light)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          
          {/* Income Tax */}
          <section className="relative py-14 bg-gray-50 mb-20">
            <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span style={{color: 'var(--primary-blue)'}}>Income Tax </span>
                  <span style={{color: 'var(--primary-orange)'}}>Services</span>
                </h2>
                <p className="text-lg md:text-xl max-w-5xl mx-auto leading-relaxed" style={{color: 'var(--text-secondary)'}}>
                  Comprehensive income tax services for individuals and businesses, ensuring compliance and maximizing tax efficiency.
                </p>
              </div>
              <div className="relative max-w-4xl mx-auto">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2 hidden md:block" style={{backgroundColor: 'var(--primary-orange)', opacity: 0.3}}></div>
                <div className="space-y-12">
                  
                  {/* Personal Tax - Residents */}
                  <div className="relative flex items-center md:justify-center">
                    <div className="flex flex-col md:flex-row items-center w-full">
                      <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 order-2 md:order-1 ml-20 md:ml-0">
                        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl shadow-sm border border-blue-200">
                          <h3 className="text-2xl font-bold mb-3" style={{color: 'var(--primary-blue)'}}>Personal Tax - Residents</h3>
                          <p className="text-gray-700">Complete personal income tax preparation for Canadian residents</p>
                        </div>
                      </div>
                      <div className="absolute md:relative left-4 md:left-auto top-8 md:top-auto order-1 md:order-2">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg" style={{background: `linear-gradient(135deg, var(--primary-orange), #e89a44)`}}>
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                          <span className="text-xs font-bold" style={{color: 'var(--primary-orange)'}}>1</span>
                        </div>
                      </div>
                      <div className="hidden md:block md:w-1/2 md:pl-8 order-3"></div>
                    </div>
                  </div>

                  {/* Personal Tax - Non-residents */}
                  <div className="relative flex items-center md:justify-center">
                    <div className="flex flex-col md:flex-row items-center w-full">
                      <div className="hidden md:block md:w-1/2 md:pr-8 order-1"></div>
                      <div className="absolute md:relative left-4 md:left-auto top-8 md:top-auto order-1 md:order-2">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg" style={{background: `linear-gradient(135deg, var(--primary-blue), #1a4082)`}}>
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                          <span className="text-xs font-bold" style={{color: 'var(--primary-blue)'}}>2</span>
                        </div>
                      </div>
                      <div className="md:w-1/2 md:pl-8 mb-8 md:mb-0 order-2 md:order-3 ml-20 md:ml-0">
                        <div className="p-6 rounded-xl shadow-sm border" style={{background: `linear-gradient(to right, rgba(0, 43, 106, 0.05), rgba(0, 43, 106, 0.1))`, borderColor: 'rgba(0, 43, 106, 0.2)'}}>
                          <h3 className="text-2xl font-bold mb-3" style={{color: 'var(--primary-blue)'}}>Personal Tax - Non-residents</h3>
                          <p className="text-gray-700">Specialized tax services for non-resident individuals</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Corporate Tax */}
                  <div className="relative flex items-center md:justify-center">
                    <div className="flex flex-col md:flex-row items-center w-full">
                      <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 order-2 md:order-1 ml-20 md:ml-0">
                        <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl shadow-sm border border-green-200">
                          <h3 className="text-2xl font-bold mb-3" style={{color: 'var(--primary-blue)'}}>Corporate Tax</h3>
                          <p className="text-gray-700">Professional corporate income tax preparation and filing services</p>
                        </div>
                      </div>
                      <div className="absolute md:relative left-4 md:left-auto top-8 md:top-auto order-1 md:order-2">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg" style={{background: `linear-gradient(135deg, var(--primary-orange), #e89a44)`}}>
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                          <span className="text-xs font-bold" style={{color: 'var(--primary-orange)'}}>3</span>
                        </div>
                      </div>
                      <div className="hidden md:block md:w-1/2 md:pl-8 order-3"></div>
                    </div>
                  </div>

                  {/* Trust Tax */}
                  <div className="relative flex items-center md:justify-center">
                    <div className="flex flex-col md:flex-row items-center w-full">
                      <div className="hidden md:block md:w-1/2 md:pr-8 order-1"></div>
                      <div className="absolute md:relative left-4 md:left-auto top-8 md:top-auto order-1 md:order-2">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg" style={{background: `linear-gradient(135deg, var(--primary-blue), #1a4082)`}}>
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                          <span className="text-xs font-bold" style={{color: 'var(--primary-blue)'}}>4</span>
                        </div>
                      </div>
                      <div className="md:w-1/2 md:pl-8 mb-8 md:mb-0 order-2 md:order-3 ml-20 md:ml-0">
                        <div className="p-6 rounded-xl shadow-sm border" style={{background: `linear-gradient(to right, rgba(0, 43, 106, 0.05), rgba(0, 43, 106, 0.1))`, borderColor: 'rgba(0, 43, 106, 0.2)'}}>
                          <h3 className="text-2xl font-bold mb-3" style={{color: 'var(--primary-blue)'}}>Trust Tax</h3>
                          <p className="text-gray-700">Expert trust tax preparation and compliance services</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* International Tax */}
                  <div className="relative flex items-center md:justify-center">
                    <div className="flex flex-col md:flex-row items-center w-full">
                      <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 order-2 md:order-1 ml-24 md:ml-0">
                        <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl shadow-sm border border-purple-200">
                          <h3 className="text-2xl font-bold mb-3" style={{color: 'var(--primary-blue)'}}>International Tax for Foreigners</h3>
                          <p className="text-gray-700">Specialized international tax services for foreign individuals and entities</p>
                        </div>
                      </div>
                      <div className="absolute md:relative left-4 md:left-auto top-4 md:top-auto order-1 md:order-2 z-10">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg" style={{background: `linear-gradient(135deg, var(--primary-orange), #e89a44)`}}>
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                          </svg>
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                          <span className="text-xs font-bold" style={{color: 'var(--primary-orange)'}}>5</span>
                        </div>
                      </div>
                      <div className="hidden md:block md:w-1/2 md:pl-8 order-3"></div>
                    </div>
                  </div>

                  {/* Notice of Objections & Appeals */}
                  <div className="relative flex items-center md:justify-center">
                    <div className="flex flex-col md:flex-row items-center w-full">
                      <div className="hidden md:block md:w-1/2 md:pr-8 order-1"></div>
                      <div className="absolute md:relative left-4 md:left-auto top-8 md:top-auto order-1 md:order-2">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg" style={{background: `linear-gradient(135deg, var(--primary-blue), #1a4082)`}}>
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v5a4 4 0 004 4h3m-6-8l6 6m6-6a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                          <span className="text-xs font-bold" style={{color: 'var(--primary-blue)'}}>6</span>
                        </div>
                      </div>
                      <div className="md:w-1/2 md:pl-8 mb-8 md:mb-0 order-2 md:order-3 ml-20 md:ml-0">
                        <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl shadow-sm border border-red-200">
                          <h3 className="text-2xl font-bold mb-3" style={{color: 'var(--primary-blue)'}}>Notice of Objections & Appeals</h3>
                          <p className="text-gray-700">Professional representation for tax disputes and appeals</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Audit Services */}
                  <div className="relative flex items-center md:justify-center">
                    <div className="flex flex-col md:flex-row items-center w-full">
                      <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 order-2 md:order-1 ml-20 md:ml-0">
                        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-xl shadow-sm border border-yellow-200">
                          <h3 className="text-2xl font-bold mb-3" style={{color: 'var(--primary-blue)'}}>Audit Services</h3>
                          <p className="text-gray-700">Professional support during tax audits and reviews</p>
                        </div>
                      </div>
                      <div className="absolute md:relative left-4 md:left-auto top-8 md:top-auto order-1 md:order-2">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg" style={{background: `linear-gradient(135deg, var(--primary-orange), #e89a44)`}}>
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                          <span className="text-xs font-bold" style={{color: 'var(--primary-orange)'}}>7</span>
                        </div>
                      </div>
                      <div className="hidden md:block md:w-1/2 md:pl-8 order-3"></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* HST / GST */}
          <section style={{paddingTop: '30px', paddingBottom: '30px'}}>
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">HST / <span className="text-orange-500">GST</span></h2>
                <p className="text-xl text-[#1e3a8a] max-w-4xl mx-auto leading-relaxed">Expert HST/GST services to ensure compliance with sales tax regulations and maximize your input tax credit recoveries</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <div className="group bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl border border-blue-100 hover:border-orange-200 transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1e3a8a] mb-3">HST / GST Filing</h3>
                  <p className="text-gray-600 text-sm">Regular HST/GST return preparation and filing services</p>
                </div>

                <div className="group bg-gradient-to-br from-orange-50 to-blue-50 p-8 rounded-2xl border border-orange-100 hover:border-blue-200 transition-all duration-300">
                  <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1e3a8a] mb-3">HST / GST Audits</h3>
                  <p className="text-gray-600 text-sm">Professional representation during HST/GST audits and reviews</p>
                </div>

                <div className="group bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl border border-blue-100 hover:border-orange-200 transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                      <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1e3a8a] mb-3">Residential Real Estate Tax Rebates</h3>
                  <p className="text-gray-600 text-sm">Specialized rebate services for residential real estate transactions</p>
                </div>

              </div>
            </div>
          </section>

          {/* Tax Planning */}
          <section id="approach" className="relative z-10" style={{paddingTop: '30px', paddingBottom: '30px'}}>
            <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  <span className="text-[#1e3a8a]">Tax </span>
                  <span className="text-[#f97316]">Planning</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">Strategic tax planning services to minimize your tax liability and optimize your financial position through proactive planning strategies.</p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-12 bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-100/50 shadow-lg">
                <div className="lg:order-2">
                  <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
                    <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Personal Tax Planning" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="lg:order-1">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">
                    <span className="text-[#1e3a8a]">Personal Tax </span>
                    <span className="text-[#f97316]">Planning</span>
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">Comprehensive personal tax planning strategies to minimize individual tax obligations including RRSP/TFSA optimization, income splitting, and estate planning.</p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Retirement planning optimization</li>
                    <li>• Income splitting strategies</li>
                    <li>• Capital gains management</li>
                  </ul>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center mb-12 bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-100/50 shadow-lg">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">
                    <span className="text-[#1e3a8a]">Corporate Tax </span>
                    <span className="text-[#f97316]">Planning</span>
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">Strategic corporate tax planning to optimize business tax efficiency including Small Business Deduction optimization, corporate reorganization, and succession planning.</p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Small Business Deduction optimization</li>
                    <li>• Corporate structure planning</li>
                    <li>• Succession planning strategies</li>
                  </ul>
                </div>
                <div>
                  <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
                    <img src="/tax-planning-notebook-calculator-computer.jpg" alt="Corporate Tax Planning" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-100/50 shadow-lg">
                <div className="lg:order-2">
                  <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
                    <img src="/HBO-shutterstock_2407631367.avif" alt="Transaction Tax Planning" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="lg:order-1">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">
                    <span className="text-[#f97316]">Transaction Tax </span>
                    <span className="text-[#1e3a8a]">Planning</span>
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">Specialized tax planning for mergers, acquisitions, and business transactions including M&A structuring, capital gains exemption planning, and cross-border compliance.</p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• M&A transaction structuring</li>
                    <li>• Capital gains exemption planning</li>
                    <li>• Cross-border transaction compliance</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

        </div>
      </section>

      {/* CTA Section */}
      <section className="advisory-cta-section">
        <div className="container">
          <div className="cta-content-wrapper">
            <div className="cta-text-content">
              <h2>READY TO OPTIMIZE YOUR TAXES?</h2>
              <p>Let our experienced tax professionals help you navigate complex tax regulations and develop strategies to minimize your tax obligations.</p>
              <div className="cta-buttons">
                <a href="/contact-us" className="primary-cta-button">Get Tax Advice</a>
                <a href="tel:+647-891-2155" className="secondary-cta-button">Call Now</a>
              </div>
            </div>
            <div className="cta-image-content">
              <div className="cta-image-wrapper">
                <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Tax Services" />
                <div className="cta-stats">
                  <div className="stat-item">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Clients Served</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">30+</span>
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
