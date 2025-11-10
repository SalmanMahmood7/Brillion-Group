export default function Advantage() {
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
                <button className="nav-link-arch flex items-center">
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
              <a href="/advantage" className="nav-link-arch active">Brillion Advantage</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="building-bg hero-section" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
      }}>
        <div className="container-arch">
          <div className="hero-content">
            <h1 className="heading-xl text-gray-900 mb-6">
              THE BRILLION
              <br />
              <span className="text-orange-500">ADVANTAGE</span>
            </h1>
            <div className="arch-accent mx-auto mb-6"></div>
            <p className="text-body mb-8">
              Discover how Brillion Group delivers exceptional results through our unique approach, 
              proven expertise, and unwavering commitment to your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-arch-primary">
                See Our Difference
              </button>
              <button className="btn-arch-secondary">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="wave-divider wave-blue"></div>

      {/* Core Advantages */}
      <section className="bg-light py-24 relative">
        <div className="container-arch">
          <div className="text-center mb-20">
            <h2 className="heading-md text-center mb-8">WHAT SETS US APART</h2>
            <div className="arch-accent mx-auto"></div>
            <p className="text-body max-w-2xl mx-auto mt-8">
              Our unique combination of expertise, innovation, and client-focused approach creates unmatched value
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="arch-card transform hover:scale-105">
              <div className="arch-card-body flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="heading-sm text-gray-900 mb-4">Trusted Partners in Complex Solutions</h3>
                  <p className="text-body leading-relaxed">We tackle your most challenging business problems with innovative approaches and proven methodologies, becoming your strategic partner for long-term success.</p>
                </div>
              </div>
            </div>
            
            <div className="arch-card transform hover:scale-105">
              <div className="arch-card-body flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="heading-sm text-gray-900 mb-4">30+ Years of Global Experience</h3>
                  <p className="text-body leading-relaxed">Three decades of expertise spanning Accounting, Taxation, Consulting, Banking & Finance, IT Implementation, Real Estate & Business Acquisitions Advisory across international markets.</p>
                </div>
              </div>
            </div>
            
            <div className="arch-card transform hover:scale-105">
              <div className="arch-card-body flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="heading-sm text-gray-900 mb-4">Customized & Client-Oriented Solutions</h3>
                  <p className="text-body leading-relaxed">Every business is unique. We craft tailored solutions that align perfectly with your specific needs, goals, and industry requirements, ensuring maximum impact and efficiency.</p>
                </div>
              </div>
            </div>
            
            <div className="arch-card transform hover:scale-105">
              <div className="arch-card-body flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="heading-sm text-gray-900 mb-4">One-Stop Shop for Business Needs</h3>
                  <p className="text-body leading-relaxed">Streamline your operations with comprehensive services under one roof. From financial management to strategic planning, we handle everything so you can focus on growing your business.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagonal Divider */}
      <div className="diagonal-divider diagonal-orange diagonal-bottom"></div>

      {/* Performance Metrics */}
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
            <h2 className="heading-md text-white mb-8">OUR TRACK RECORD SPEAKS VOLUMES</h2>
            <div className="arch-accent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="arch-card bg-white bg-opacity-10 backdrop-blur-lg border-white border-opacity-20 text-center">
              <div className="arch-card-body">
                <div className="w-28 h-28 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl">
                  <span className="text-4xl font-bold text-white">95%</span>
                </div>
                <h3 className="heading-sm text-white mb-4">Client Retention</h3>
                <p className="text-body text-white leading-relaxed">
                  Long-term partnerships built on trust, results, and exceptional service delivery
                </p>
              </div>
            </div>
            
            <div className="arch-card bg-white bg-opacity-10 backdrop-blur-lg border-white border-opacity-20 text-center">
              <div className="arch-card-body">
                <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl">
                  <span className="text-4xl font-bold text-white">500+</span>
                </div>
                <h3 className="heading-sm text-white mb-4">Satisfied Clients</h3>
                <p className="text-body text-white leading-relaxed">
                  Businesses transformed across multiple industries and market segments
                </p>
              </div>
            </div>
            
            <div className="arch-card bg-white bg-opacity-10 backdrop-blur-lg border-white border-opacity-20 text-center">
              <div className="arch-card-body">
                <div className="w-28 h-28 bg-gradient-to-br from-green-500 to-green-700 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl">
                  <span className="text-4xl font-bold text-white">30+</span>
                </div>
                <h3 className="heading-sm text-white mb-4">Years Experience</h3>
                <p className="text-body text-white leading-relaxed">
                  Decades of proven expertise navigating complex global markets
                </p>
              </div>
            </div>
            
            <div className="arch-card bg-white bg-opacity-10 backdrop-blur-lg border-white border-opacity-20 text-center">
              <div className="arch-card-body">
                <div className="w-28 h-28 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl">
                  <span className="text-4xl font-bold text-white">24/7</span>
                </div>
                <h3 className="heading-sm text-white mb-4">Support Available</h3>
                <p className="text-body text-white leading-relaxed">
                  Round-the-clock assistance and strategic guidance when you need it most
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geometric Divider */}
      <div className="geometric-divider"></div>

      {/* CEO Quote */}
      <section className="bg-primary">
        <div className="container-arch section-arch">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed text-white">
              "Growth isn't something to leave to chance—it's a deliberate journey that requires the right expertise and a 
              trusted partner by your side. At Brillion, we're here to help you navigate challenges, seize opportunities, and achieve 
              your vision for success. Let us work together to build a stronger, more prosperous future for your business."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-white">TS</span>
              </div>
              <div className="text-left">
                <cite className="text-orange-400 font-semibold text-lg block">Tahir Sheikh</cite>
                <span className="text-white opacity-90">Chairman, Brillion Group Inc.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curve Divider */}
      <div className="curve-divider diagonal-primary curve-bottom"></div>

      {/* Call to Action */}
      <section className="section-arch bg-light">
        <div className="container-arch text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-gray-900 mb-8">Experience the Brillion Advantage Today</h2>
            <div className="arch-accent bg-orange-400 mx-auto mb-8"></div>
            <p className="text-body mb-12">
              Ready to transform your business with solutions that deliver real, measurable results? 
              Let's start the conversation that will change your business trajectory.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="btn-arch-primary">
                Schedule Free Strategic Consultation
              </button>
              <button className="btn-arch-secondary">
                Download Success Stories
              </button>
            </div>
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
                Your strategic partner for sustainable business transformation and growth.
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
                Ready to unlock your business potential? Connect with our strategic experts today.
              </p>
              <button className="btn-arch-primary bg-orange-600 hover:bg-orange-700">
                CONTACT US NOW
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