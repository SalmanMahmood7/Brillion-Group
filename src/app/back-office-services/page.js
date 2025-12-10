'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function BackOfficeServices() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const auditServices = [
    {
      title: "Internal & External Audit Support",
      description: "Professional audit support for both internal and external audit requirements to ensure compliance and accuracy.",
      image: "/caseware-blog-internal-vs-external-auditing.webp"
    },
    {
      title: "Compliance Services", 
      description: "Ensuring your business complies with all applicable regulations and industry standards for seamless operations.",
      image: "/compliance-services.jpg"
    },
    {
      title: "Internal Control Assessment",
      description: "Assessment and improvement of internal control systems to enhance operational efficiency and risk management.",
      image: "/1711443911609.jpeg"
    },
    {
      title: "Business Process Re-engineering",
      description: "Optimization of business processes for improved efficiency and streamlined operations across all departments.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Process Documentation (SOPs)",
      description: "Standard Operating Procedures documentation and implementation for consistent and efficient business operations.",
      image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(auditServices.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(auditServices.length / 3)) % Math.ceil(auditServices.length / 3));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

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
              "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
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
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Back Office Services</h1>
          <p className="max-w-3xl mx-auto text-lg text-white">
            Streamlined back-office operations—from bookkeeping to analytics—that free your teams to focus on strategy, growth,
            and high-value client work.
          </p>
        </div>
      </section>

      {/* Back Office Services Section */}
      <section className="back-office-services-section">
        <div className="container">

          <div className="services-columns">
            {/* Left Column */}
            <div className="services-column">
              {/* Bookkeeping & Accounting */}
              <div style={{paddingTop: '30px', paddingBottom: '30px'}}>
                <div className="text-center mb-10">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="text-[#1e3a8a]">Bookkeeping &</span> <span className="text-[#f97316]">Accounting</span>
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
                    <div className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#f97316]">
                          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#1e3a8a] mb-4 group-hover:text-[#f97316] transition-colors">Bookkeeping Services</h3>
                    <p className="text-gray-600 leading-relaxed">Complete bookkeeping solutions for accurate financial record management and business operations.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
                    <div className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#f97316]">
                          <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#1e3a8a] mb-4 group-hover:text-[#f97316] transition-colors">Bank Reconciliations</h3>
                    <p className="text-gray-600 leading-relaxed">Monthly bank reconciliation services to ensure accuracy and consistency in financial reporting.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
                    <div className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#1e3a8a]">
                          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#1e3a8a] mb-4 group-hover:text-[#f97316] transition-colors">Monthly or Quarterly Financial Statements</h3>
                    <p className="text-gray-600 leading-relaxed">Professional preparation of comprehensive financial statements for informed business decisions.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
                    <div className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#1e3a8a]">
                          <path d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#1e3a8a] mb-4 group-hover:text-[#f97316] transition-colors">Cash Flow & Other Management Reporting</h3>
                    <p className="text-gray-600 leading-relaxed">Detailed cash flow analysis and management reports to optimize business performance.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
                    <div className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#1e3a8a]">
                          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#1e3a8a] mb-4 group-hover:text-[#f97316] transition-colors">Payroll Processing</h3>
                    <p className="text-gray-600 leading-relaxed">Complete payroll processing and management services for efficient employee compensation.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
                    <div className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#f97316]">
                          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#1e3a8a] mb-4 group-hover:text-[#f97316] transition-colors">Compilation Services</h3>
                    <p className="text-gray-600 leading-relaxed">Professional compilation services for accurate financial reporting and regulatory compliance.</p>
                  </div>
                </div>
              </div>

              {/* Audit & Compliance */}
              <section className="relative" style={{paddingTop: '30px', paddingBottom: '30px'}}>
                <div className="container mx-auto px-6 md:px-8 lg:px-16 xl:px-20 max-w-7xl xl:max-w-8xl">
                  <div className="text-center mb-10">
                    <h5 className="text-orange-500 font-semibold mb-4 uppercase tracking-wider text-sm">Professional audit services</h5>
                    <h3 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">Audit & Compliance Solutions</h3>
                  </div>
                  <div className="relative">
                    {/* Desktop Carousel */}
                    <div className="hidden lg:block">
                      <div className="overflow-x-hidden">
                        <div className="flex transition-transform duration-500 ease-in-out" style={{transform: `translateX(-${currentSlide * 100}%)`}}>
                          {auditServices.map((service, index) => (
                            <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3">
                              <div className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                                <div className="relative h-48 overflow-hidden">
                                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                  <div className="absolute top-6 left-6">
                                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                      <span className="text-xl font-bold text-white">{String(index + 1).padStart(2, '0')}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="p-8 flex-grow">
                                  <h4 className="text-xl font-bold text-[#1e3a8a] mb-3">{service.title}</h4>
                                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-center mt-12 lg:mt-8 space-x-8 lg:space-x-6">
                        <button 
                          onClick={prevSlide}
                          className="p-4 lg:p-3 rounded-full bg-blue-50 text-[#1e3a8a] hover:bg-orange-100 hover:text-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" 
                          disabled={currentSlide === 0}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 lg:w-5 lg:h-5">
                            <path d="m15 18-6-6 6-6"></path>
                          </svg>
                        </button>
                        <div className="flex space-x-2 lg:space-x-1.5">
                          {Array.from({ length: Math.ceil(auditServices.length / 3) }).map((_, index) => (
                            <button 
                              key={index}
                              onClick={() => goToSlide(index)}
                              className={`w-3 h-3 lg:w-2.5 lg:h-2.5 rounded-full transition-all duration-300 ${
                                currentSlide === index ? 'bg-orange-600' : 'bg-blue-300 hover:bg-blue-400'
                              }`}
                            ></button>
                          ))}
                        </div>
                        <button 
                          onClick={nextSlide}
                          className="p-4 lg:p-3 rounded-full bg-blue-50 text-[#1e3a8a] hover:bg-orange-100 hover:text-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={currentSlide === Math.ceil(auditServices.length / 3) - 1}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 lg:w-5 lg:h-5">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Mobile Grid */}
                    <div className="block lg:hidden">
                      <div className="grid gap-6 md:grid-cols-2">
                        {auditServices.map((service, index) => (
                          <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                            <div className="relative h-48 overflow-hidden">
                              <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                              <div className="absolute top-6 left-6">
                                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                  <span className="text-xl font-bold text-white">{String(index + 1).padStart(2, '0')}</span>
                                </div>
                              </div>
                            </div>
                            <div className="p-6 flex-grow">
                              <h4 className="text-lg font-bold text-[#1e3a8a] mb-3">{service.title}</h4>
                              <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Additional Back Office Services */}
              <section id="solutions" style={{paddingTop: '30px', paddingBottom: '30px'}}>
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                  <div className="space-y-20 mb-12">
                    
                    {/* Document & Transaction Processing */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div className="relative">
                        <img src="/edocument-business-transactions-businessman-efficiently-260nw-2460920747.png" alt="Document & Transaction Processing" className="rounded-2xl shadow-xl h-96 w-full object-cover" />
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl opacity-20"></div>
                      </div>
                      <div className="space-y-6">
                        <div className="inline-block p-4 rounded-xl shadow-lg" style={{background: 'linear-gradient(to right, rgb(249, 115, 22), rgb(234, 88, 12))'}}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                            <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <h3 className="text-3xl font-bold text-[#1e3a8a]">Document & Transaction Processing</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">Streamline your document workflows and transaction processing with efficient systems that ensure accuracy and compliance across all business operations.</p>
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: 'rgb(249, 115, 22)'}}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                <path d="m9 11 3 3L22 4"></path>
                              </svg>
                            </div>
                            <span className="ml-3 text-lg text-[#1e3a8a]">Invoicing Services</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: 'rgb(249, 115, 22)'}}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                <path d="m9 11 3 3L22 4"></path>
                              </svg>
                            </div>
                            <span className="ml-3 text-lg text-[#1e3a8a]">Payables & Receivables</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: 'rgb(249, 115, 22)'}}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                <path d="m9 11 3 3L22 4"></path>
                              </svg>
                            </div>
                            <span className="ml-3 text-lg text-[#1e3a8a]">Document Management</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Customized Staffing */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div className="space-y-6 order-2 lg:order-1">
                        <div className="inline-block p-4 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] rounded-xl shadow-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                        </div>
                        <h3 className="text-3xl font-bold text-[#1e3a8a]">Customized Staffing</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">Specialized financial professionals tailored to your business needs.</p>
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <div className="w-6 h-6 bg-[#1e3a8a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                <path d="m9 11 3 3L22 4"></path>
                              </svg>
                            </div>
                            <span className="ml-3 text-lg text-[#1e3a8a]">Financial Controllers</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-6 h-6 bg-[#1e3a8a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                <path d="m9 11 3 3L22 4"></path>
                              </svg>
                            </div>
                            <span className="ml-3 text-lg text-[#1e3a8a]">Senior Accountants</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-6 h-6 bg-[#1e3a8a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                <path d="m9 11 3 3L22 4"></path>
                              </svg>
                            </div>
                            <span className="ml-3 text-lg text-[#1e3a8a]">Business Analysts</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-6 h-6 bg-[#1e3a8a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                <path d="m9 11 3 3L22 4"></path>
                              </svg>
                            </div>
                            <span className="ml-3 text-lg text-[#1e3a8a]">Taxation Specialists</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-6 h-6 bg-[#1e3a8a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                <path d="m9 11 3 3L22 4"></path>
                              </svg>
                            </div>
                            <span className="ml-3 text-lg text-[#1e3a8a]">Specialised Staffing Solutions</span>
                          </li>
                        </ul>
                      </div>
                      <div className="relative order-1 lg:order-2">
                        <img src="/aa856e0b51dc4adf97c8d7202ad0c255.jpg" alt="Customized Staffing" className="rounded-2xl shadow-xl h-96 w-full object-cover" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] rounded-2xl opacity-20"></div>
                      </div>
                    </div>

                    {/* Data Analytics */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div className="relative">
                        <img src="/is-data-analytics-hard-.webp" alt="Data Analytics" className="rounded-2xl shadow-xl" />
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl opacity-20"></div>
                      </div>
                      <div className="space-y-6">
                        <div className="inline-block p-4 rounded-xl shadow-lg" style={{background: 'linear-gradient(to right, rgb(249, 115, 22), rgb(234, 88, 12))'}}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                            <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                            <path d="m19 9-5 5-4-4-3 3"></path>
                          </svg>
                        </div>
                        <h3 className="text-3xl font-bold text-[#1e3a8a]">Data Analytics</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">Transform your business data into actionable insights with advanced analytics and AI-powered solutions that drive informed decision-making and strategic planning.</p>
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: 'rgb(249, 115, 22)'}}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                <path d="m9 11 3 3L22 4"></path>
                              </svg>
                            </div>
                            <span className="ml-3 text-lg text-[#1e3a8a]">Valuable Business Intelligence</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: 'rgb(249, 115, 22)'}}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                <path d="m9 11 3 3L22 4"></path>
                              </svg>
                            </div>
                            <span className="ml-3 text-lg text-[#1e3a8a]">Predictive AI</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: 'rgb(249, 115, 22)'}}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                <path d="m9 11 3 3L22 4"></path>
                              </svg>
                            </div>
                            <span className="ml-3 text-lg text-[#1e3a8a]">Informed Decision Making</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="advisory-cta-section">
        <div className="container">
          <div className="cta-content-wrapper">
            <div className="cta-text-content">
              <h2>READY TO OPTIMIZE YOUR BACK OFFICE?</h2>
              <p>Let our expert team handle your back-office operations while you focus on growing your core business and serving your customers.</p>
              <div className="cta-buttons">
                <a href="/contact-us" className="primary-cta-button">Get Started Today</a>
                <a href="tel:+647-891-2155" className="secondary-cta-button">Call Now</a>
              </div>
            </div>
            <div className="cta-image-content">
              <div className="cta-image-wrapper">
                <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Back Office Services" />
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
