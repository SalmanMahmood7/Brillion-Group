export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="nav-arch">
        <div className="container-arch">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <div className="brand-logo">
                  <span className="brand-b">B</span>
                  <span className="brand-rillion">RILLION</span>
                </div>
                <div className="brand-group">GROUP</div>
              </a>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/about" className="nav-link-arch">About Our Company</a>
              
              <div className="relative group">
                <button className="nav-link-arch active flex items-center">
                  <span>Our Services</span>
                  <svg className="ml-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-6 space-y-3 z-50">
                  <a href="/services" className="block text-gray-800 hover:text-blue-800 transition-colors duration-200">
                    <div className="font-semibold">All Services</div>
                    <div className="text-sm text-gray-600">Complete overview</div>
                  </a>
                  <hr className="border-gray-200" />
                  <a href="/services#advisory" className="block text-gray-800 hover:text-blue-800 transition-colors duration-200">
                    <div className="font-semibold">Advisory Services</div>
                    <div className="text-sm text-gray-600">Strategic business guidance</div>
                  </a>
                  <a href="/services#accounting" className="block text-gray-800 hover:text-blue-800 transition-colors duration-200">
                    <div className="font-semibold">Bookkeeping & Accounting</div>
                    <div className="text-sm text-gray-600">Financial management</div>
                  </a>
                  <a href="/services#backoffice" className="block text-gray-800 hover:text-blue-800 transition-colors duration-200">
                    <div className="font-semibold">Back Office Services</div>
                    <div className="text-sm text-gray-600">Operational support</div>
                  </a>
                  <a href="/services#tax" className="block text-gray-800 hover:text-blue-800 transition-colors duration-200">
                    <div className="font-semibold">Tax Services</div>
                    <div className="text-sm text-gray-600">Tax planning & compliance</div>
                  </a>
                </div>
              </div>
              
              <a href="/industries" className="nav-link-arch">Industries Served</a>
              <a href="/advantage" className="nav-link-arch">Brillion Advantage</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="building-bg hero-section" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
      }}>
        <div className="container-arch">
          <div className="hero-content">
            <h1 className="heading-xl text-gray-900 mb-6">
              OUR
              <br />
              <span className="text-orange-500">SERVICES</span>
            </h1>
            <div className="arch-accent mx-auto mb-6"></div>
            <p className="text-body mb-8">
              Comprehensive business solutions tailored to drive growth, efficiency, and success across all aspects of your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-arch-primary">
                Explore Services
              </button>
              <button className="btn-arch-secondary">
                Get Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Diagonal Divider */}
      <div className="diagonal-divider diagonal-blue diagonal-top"></div>

      {/* Advisory Services Section */}
      <section className="bg-light py-24 relative">
        <div className="container-arch">
          <div className="text-center mb-20">
            <h2 className="heading-md text-center mb-8">ADVISORY SERVICES</h2>
            <div className="arch-accent mx-auto"></div>
            <p className="text-body max-w-2xl mx-auto mt-8">
              Strategic guidance and expert consultation to help your business thrive in today's competitive landscape
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="arch-card text-center transform hover:scale-105">
              <div className="arch-card-body">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="heading-sm text-gray-900 mb-4">Business Plans</h3>
                <p className="text-small text-gray-600 leading-relaxed">
                  Comprehensive strategic planning to guide your business growth and success.
                </p>
              </div>
            </div>

            <div className="arch-card text-center transform hover:scale-105">
              <div className="arch-card-body">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="heading-sm text-gray-900 mb-4">Business Valuations</h3>
                <p className="text-small text-gray-600 leading-relaxed">
                  Expert valuation services for mergers, acquisitions, and investment decisions.
                </p>
              </div>
            </div>

            <div className="arch-card text-center transform hover:scale-105">
              <div className="arch-card-body">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="heading-sm text-gray-900 mb-4">Business Purchase & Sale</h3>
                <p className="text-small text-gray-600 leading-relaxed">
                  End-to-end support for business transactions and ownership transitions.
                </p>
              </div>
            </div>

            <div className="arch-card text-center transform hover:scale-105">
              <div className="arch-card-body">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h4a2 2 0 012 2v2a2 2 0 01-2 2H8a2 2 0 01-2-2v-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="heading-sm text-gray-900 mb-4">Business Loans & Lending</h3>
                <p className="text-small text-gray-600 leading-relaxed">
                  Financial advisory and assistance with securing optimal lending solutions.
                </p>
              </div>
            </div>

            <div className="arch-card text-center transform hover:scale-105">
              <div className="arch-card-body">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-pink-500 to-pink-700 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="heading-sm text-gray-900 mb-4">Human Resource Advisory</h3>
                <p className="text-small text-gray-600 leading-relaxed">
                  Strategic HR consulting to optimize your workforce and organizational structure.
                </p>
              </div>
            </div>

            <div className="arch-card text-center transform hover:scale-105">
              <div className="arch-card-body">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="heading-sm text-gray-900 mb-4">Real Estate Advisory</h3>
                <p className="text-small text-gray-600 leading-relaxed">
                  Expert guidance for real estate investments and property management strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="wave-divider"></div>

      {/* Bookkeeping & Accounting Section */}
      <section className="building-bg relative py-24" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
      }}>
        {/* Corner Design Elements */}
        <div className="hero-corner-design corner-tr">
          <div className="corner-bracket bracket-tr"></div>
          <div className="corner-accent corner-accent-tr"></div>
        </div>
        
        <div className="hero-corner-design corner-bl">
          <div className="corner-bracket bracket-bl"></div>
          <div className="corner-accent corner-accent-bl"></div>
        </div>
        
        <div className="container-arch relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-md text-white mb-8">BOOKKEEPING & ACCOUNTING</h2>
            <div className="arch-accent mx-auto"></div>
            <p className="text-body text-white max-w-2xl mx-auto mt-8">
              Comprehensive financial management solutions to keep your business running smoothly
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="arch-card bg-white bg-opacity-10 backdrop-blur-lg border-white border-opacity-20">
              <div className="arch-card-header">
                <h3 className="text-lg font-bold text-white text-center">CLOUD BASED BOOKKEEPING SUPPORT</h3>
              </div>
              <div className="arch-card-body">
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-white">Setting up your company on a cloud-based accounting software</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-white">Receiving input data from clients as scanned documents</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-white">Periodic completion of data entry by our bookkeeping staff for HST filing</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="arch-card bg-white bg-opacity-10 backdrop-blur-lg border-white border-opacity-20">
              <div className="arch-card-header">
                <h3 className="text-lg font-bold text-white text-center">CLOUD BASED PAYROLL SERVICES</h3>
              </div>
              <div className="arch-card-body">
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-white">Preparation of payroll based on hours and terms of employees</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-white">Providing pay-stubs and withholding tax information</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-white">Arranging direct deposits</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-white">Providing T4s, T4As and filing annual payroll returns</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="arch-card bg-white bg-opacity-10 backdrop-blur-lg border-white border-opacity-20">
              <div className="arch-card-header">
                <h3 className="text-lg font-bold text-white text-center">ACCOUNTING SUPPORT</h3>
              </div>
              <div className="arch-card-body">
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-white">Trial Balance & General Ledger finalization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-white">Compilation Services & Notice to Readers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-white">Bank Reconciliations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-white">Receivables & Payables reports</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-white">HST filings</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="arch-card bg-white bg-opacity-10 backdrop-blur-lg border-white border-opacity-20">
              <div className="arch-card-header">
                <h3 className="text-lg font-bold text-white text-center">CUSTOMIZED REPORTING</h3>
              </div>
              <div className="arch-card-body">
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-white">Monthly management reporting as per selected package</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-white">Comprehensive breakdown of expenses and incomes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-white">Additional services as agreed upon</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geometric Divider */}
      <div className="geometric-divider"></div>

      {/* Call to Action */}
      <section className="bg-primary">
        <div className="container-arch section-arch text-center">
          <h2 className="heading-lg text-white mb-8">Ready to Streamline Your Business Operations?</h2>
          <div className="arch-accent bg-orange-400 mx-auto mb-8"></div>
          <p className="text-body text-white mb-12 max-w-2xl mx-auto">
            Let our experienced team help you optimize your business processes with our comprehensive 
            service solutions tailored to your industry and specific needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="btn-arch-primary bg-orange-400 hover:bg-orange-500">
              Schedule Consultation
            </button>
            <button className="btn-arch-secondary border-white text-white hover:bg-white hover:text-blue-800">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container-arch section-arch">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="brand-logo text-white">
                  <span className="brand-b">B</span>
                  <span className="text-white">RILLION</span>
                </div>
                <div className="brand-group text-gray-400">GROUP</div>
              </div>
              <div className="brand-tagline text-gray-400">Growth Simplified, Success Amplified</div>
              <p className="text-small text-gray-400 mt-4">
                Empowering businesses with innovative solutions and expert guidance for sustainable growth.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">OUR SERVICES</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/services#advisory" className="nav-link-arch text-gray-400 hover:text-white p-0">Advisory Services</a></li>
                <li><a href="/services#accounting" className="nav-link-arch text-gray-400 hover:text-white p-0">Bookkeeping & Accounting</a></li>
                <li><a href="/services#backoffice" className="nav-link-arch text-gray-400 hover:text-white p-0">Back Office Services</a></li>
                <li><a href="/services#tax" className="nav-link-arch text-gray-400 hover:text-white p-0">Tax Services</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">INDUSTRIES</h4>
              <ul className="space-y-2 text-gray-400 text-small">
                <li>Construction</li>
                <li>Real Estate</li>
                <li>Financial Services</li>
                <li>Manufacturing</li>
                <li>Retail & Logistics</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">GET STARTED</h4>
              <p className="text-gray-400 mb-4 text-small">
                Ready to unlock your business potential? Connect with our experts today.
              </p>
              <button className="btn-arch-primary bg-orange-600 hover:bg-orange-700">
                CONTACT US
              </button>
            </div>
          </div>
          
          <div className="arch-divider"></div>
          
          <div className="text-center text-gray-400 text-small">
            <p>&copy; 2024 Brillion Group. All rights reserved. | Empowering businesses worldwide through strategic excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}