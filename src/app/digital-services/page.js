'use client';
import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function DigitalServices() {
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
            backgroundImage: "url('/software-house-adalah.webp')",
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
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Digital Services</h1>
          <p className="max-w-3xl mx-auto text-lg text-white">
            Comprehensive transformation and technology solutions designed to modernize your operations, empower your teams, and
            drive innovation across every part of your organization.
          </p>
        </div>
      </section>

      {/* Digital Services Sections */}
      <section id="solutions" style={{paddingTop: '30px', paddingBottom: '30px'}}>
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6 uppercase">Digital <span className="text-[#f97316]">Solutions</span></h2>
            <p className="text-xl text-[#1e3a8a] max-w-3xl mx-auto leading-relaxed">Leverage cutting-edge digital technologies to automate processes, gain insights, and create exceptional business experiences</p>
          </div>
          <div className="space-y-20 mb-12">
            {/* Dynamics 365 & Microsoft */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img src="/software-house-adalah.webp" alt="Microsoft Dynamics 365" className="rounded-2xl shadow-xl w-[520px] h-[350px] object-cover" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#f97316] to-orange-600 rounded-2xl opacity-20"></div>
              </div>
              <div className="space-y-6">
                <div className="inline-block p-4 rounded-xl shadow-lg" style={{background: 'linear-gradient(to right, rgb(249, 115, 22), rgb(234, 88, 12))'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-[#1e3a8a]">Dynamics 365 & Microsoft</h3>
                <p className="text-lg text-gray-600 leading-relaxed">Integrate your business processes with Microsoft's comprehensive ecosystem solutions. Transform your operations with enterprise-grade applications that scale with your business needs.</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: 'rgb(249, 115, 22)'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
                        <path d="m9 11 3 3L22 4"/>
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[#1e3a8a]">Enterprise Resource Planning (ERP)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: 'rgb(249, 115, 22)'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
                        <path d="m9 11 3 3L22 4"/>
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[#1e3a8a]">Customer Relationship Management (CRM)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: 'rgb(249, 115, 22)'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
                        <path d="m9 11 3 3L22 4"/>
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[#1e3a8a]">Business Intelligence and Analytics</span>
                  </li>
                </ul>
                <Link href="/digital-services/dynamics-365-microsoft" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-9 px-3 py-1.5 text-white" style={{backgroundColor: 'rgb(249, 115, 22)'}}>
                  Learn More 
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* AI & Smart Solutions */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <div className="inline-block p-4 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] rounded-xl shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-[#1e3a8a]">AI & Smart Solutions</h3>
                <p className="text-lg text-gray-600 leading-relaxed">Harness the power of artificial intelligence to automate complex business processes and create intelligent workflows. Drive efficiency with AI-powered automation that adapts and learns.</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#1e3a8a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
                        <path d="m9 11 3 3L22 4"/>
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[#1e3a8a]">Machine Learning & Predictive Analytics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#1e3a8a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
                        <path d="m9 11 3 3L22 4"/>
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[#1e3a8a]">Intelligent Process Automation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#1e3a8a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
                        <path d="m9 11 3 3L22 4"/>
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[#1e3a8a]">Natural Language Processing</span>
                  </li>
                </ul>
                <Link href="/digital-services/ai-smart-solutions" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-[#1e3a8a] hover:bg-[#1e40af] text-white">
                  Learn More 
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </Link>
              </div>
              <div className="relative order-1 lg:order-2">
                <img src="/is-data-analytics-hard-.webp" alt="AI Smart Solutions" className="rounded-2xl shadow-xl w-[520px] h-[350px] object-cover" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] rounded-2xl opacity-20"></div>
              </div>
            </div>

            {/* Digital Advisory */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img src="/advisory-services-banner.webp" alt="Digital Advisory" className="rounded-2xl shadow-xl w-[520px] h-[350px] object-cover" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#f97316] to-orange-600 rounded-2xl opacity-20"></div>
              </div>
              <div className="space-y-6">
                <div className="inline-block p-4 rounded-xl shadow-lg" style={{background: 'linear-gradient(to right, rgb(249, 115, 22), rgb(234, 88, 12))'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-[#1e3a8a]">Digital Advisory</h3>
                <p className="text-lg text-gray-600 leading-relaxed">Get strategic guidance for your digital transformation journey. Our experts help you navigate complex technology decisions and develop roadmaps for sustainable digital growth.</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: 'rgb(249, 115, 22)'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
                        <path d="m9 11 3 3L22 4"/>
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[#1e3a8a]">Digital Transformation Strategy</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: 'rgb(249, 115, 22)'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
                        <path d="m9 11 3 3L22 4"/>
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[#1e3a8a]">Technology Assessment & Planning</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: 'rgb(249, 115, 22)'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
                        <path d="m9 11 3 3L22 4"/>
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[#1e3a8a]">Change Management & Training</span>
                  </li>
                </ul>
                <Link href="/digital-services/digital-advisory" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-9 px-3 py-1.5 text-white" style={{backgroundColor: 'rgb(249, 115, 22)'}}>
                  Discover Advisory Solutions 
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Data & Analytics */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <div className="inline-block p-4 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] rounded-xl shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-[#1e3a8a]">Data & Analytics</h3>
                <p className="text-lg text-gray-600 leading-relaxed">Transform raw data into actionable business insights with advanced analytics platforms. Make data-driven decisions that propel your business forward with confidence.</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#1e3a8a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
                        <path d="m9 11 3 3L22 4"/>
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[#1e3a8a]">Business Intelligence Dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#1e3a8a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
                        <path d="m9 11 3 3L22 4"/>
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[#1e3a8a]">Data Integration & ETL Processes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#1e3a8a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
                        <path d="m9 11 3 3L22 4"/>
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[#1e3a8a]">Real-time Analytics & Reporting</span>
                  </li>
                </ul>
                <Link href="/digital-services/data-analytics" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-[#1e3a8a] hover:bg-[#1e40af] text-white">
                  Learn More 
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </Link>
              </div>
              <div className="relative order-1 lg:order-2">
                <img src="/software-house-adalah.webp" alt="Data Analytics" className="rounded-2xl shadow-xl w-[520px] h-[350px] object-cover" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] rounded-2xl opacity-20"></div>
              </div>
            </div>

            {/* Software Development */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img src="/edocument-business-transactions-businessman-efficiently-260nw-2460920747.webp" alt="Software Development" className="rounded-2xl shadow-xl w-[520px] h-[350px] object-cover" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#f97316] to-orange-600 rounded-2xl opacity-20"></div>
              </div>
              <div className="space-y-6">
                <div className="inline-block p-4 rounded-xl shadow-lg" style={{background: 'linear-gradient(to right, rgb(249, 115, 22), rgb(234, 88, 12))'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-[#1e3a8a]">Software Development</h3>
                <p className="text-lg text-gray-600 leading-relaxed">Build custom software solutions tailored to your specific business requirements. From web applications to enterprise systems, we deliver scalable and maintainable code.</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: 'rgb(249, 115, 22)'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
                        <path d="m9 11 3 3L22 4"/>
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[#1e3a8a]">Custom Web & Mobile Applications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: 'rgb(249, 115, 22)'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
                        <path d="m9 11 3 3L22 4"/>
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[#1e3a8a]">API Development & Integration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: 'rgb(249, 115, 22)'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
                        <path d="m9 11 3 3L22 4"/>
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[#1e3a8a]">Legacy System Modernization</span>
                  </li>
                </ul>
                <Link href="/digital-services/software-development" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-9 px-3 py-1.5 text-white" style={{backgroundColor: 'rgb(249, 115, 22)'}}>
                  Discover Development Solutions 
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Digital Platforms */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <div className="inline-block p-4 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] rounded-xl shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/>
                    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/>
                    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-[#1e3a8a]">Digital Platforms</h3>
                <p className="text-lg text-gray-600 leading-relaxed">Create scalable digital ecosystems that connect your business processes, customers, and partners. Build platforms that grow with your business and adapt to changing market demands.</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#1e3a8a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
                        <path d="m9 11 3 3L22 4"/>
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[#1e3a8a]">E-commerce & Digital Marketplaces</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#1e3a8a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
                        <path d="m9 11 3 3L22 4"/>
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[#1e3a8a]">Customer Portals & Self-Service Platforms</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#1e3a8a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
                        <path d="m9 11 3 3L22 4"/>
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[#1e3a8a]">Integration & API Management</span>
                  </li>
                </ul>
                <Link href="/digital-services/digital-platforms" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-[#1e3a8a] hover:bg-[#1e40af] text-white">
                  Learn More 
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </Link>
              </div>
              <div className="relative order-1 lg:order-2">
                <img src="/shop-layout-desktop-stage-4-1200x900.jpeg" alt="Digital Platforms" className="rounded-2xl shadow-xl w-[520px] h-[350px] object-cover" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] rounded-2xl opacity-20"></div>
              </div>
            </div>

            {/* Cyber Security */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img src="/adobestock_440670513.webp" alt="Cyber Security" className="rounded-2xl shadow-xl w-[520px] h-[350px] object-cover" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#f97316] to-orange-600 rounded-2xl opacity-20"></div>
              </div>
              <div className="space-y-6">
                <div className="inline-block p-4 rounded-xl shadow-lg" style={{background: 'linear-gradient(to right, rgb(249, 115, 22), rgb(234, 88, 12))'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-[#1e3a8a]">Cyber Security</h3>
                <p className="text-lg text-gray-600 leading-relaxed">Protect your digital assets with comprehensive security frameworks. Ensure compliance with industry standards while defending against evolving cyber threats.</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: 'rgb(249, 115, 22)'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
                        <path d="m9 11 3 3L22 4"/>
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[#1e3a8a]">Security Assessment & Penetration Testing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: 'rgb(249, 115, 22)'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
                        <path d="m9 11 3 3L22 4"/>
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[#1e3a8a]">Identity & Access Management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: 'rgb(249, 115, 22)'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
                        <path d="m9 11 3 3L22 4"/>
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[#1e3a8a]">Compliance & Risk Management</span>
                  </li>
                </ul>
                <Link href="/digital-services/cyber-security" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-9 px-3 py-1.5 text-white" style={{backgroundColor: 'rgb(249, 115, 22)'}}>
                  Discover Security Solutions 
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Cloud Services */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <div className="inline-block p-4 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] rounded-xl shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-[#1e3a8a]">Cloud Services</h3>
                <p className="text-lg text-gray-600 leading-relaxed">Leverage modern cloud infrastructure to scale your operations efficiently. From migration to optimization, we ensure your cloud journey maximizes performance and cost-effectiveness.</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#1e3a8a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
                        <path d="m9 11 3 3L22 4"/>
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[#1e3a8a]">Cloud Migration & Modernization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#1e3a8a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
                        <path d="m9 11 3 3L22 4"/>
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[#1e3a8a]">Infrastructure as Code (IaC)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#1e3a8a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
                        <path d="m9 11 3 3L22 4"/>
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[#1e3a8a]">Multi-Cloud & Hybrid Solutions</span>
                  </li>
                </ul>
                <Link href="/digital-services/cloud-services" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-[#1e3a8a] hover:bg-[#1e40af] text-white">
                  Learn More 
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </Link>
              </div>
              <div className="relative order-1 lg:order-2">
                <img src="/GhEe2EE19wP6BQKtRI55NPsaW1LQesgAvhh8ygmv.jpg" alt="Cloud Services" className="rounded-2xl shadow-xl w-[520px] h-[350px] object-cover" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] rounded-2xl opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Digital Process Section - New design */}
      <section className="py-[80px] bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">
              <span className="text-[#1e3a8a]">Our Digital</span> <span className="text-[#D98832]">Transformation Process</span>
            </h2>
            <p className="text-xl text-[#1e3a8a] max-w-3xl mx-auto leading-relaxed">
              A proven methodology to ensure successful digital transformation from strategy to implementation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] flex items-center justify-center relative">
                <span className="text-2xl font-bold text-white">1</span>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#D98832] rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#1e3a8a]">Discovery & Assessment</h3>
              <p className="text-gray-600 leading-relaxed">Comprehensive analysis of your current systems, business processes, and digital maturity to identify opportunities.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#f97316] to-orange-500 flex items-center justify-center relative">
                <span className="text-2xl font-bold text-white">2</span>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#1e3a8a] rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#f97316]">Strategy & Planning</h3>
              <p className="text-gray-600 leading-relaxed">Development of a comprehensive digital roadmap aligned with your business objectives and technology requirements.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] flex items-center justify-center relative">
                <span className="text-2xl font-bold text-white">3</span>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#D98832] rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#1e3a8a]">Development & Integration</h3>
              <p className="text-gray-600 leading-relaxed">Agile development and seamless integration of new digital solutions with your existing business infrastructure.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#f97316] to-orange-500 flex items-center justify-center relative">
                <span className="text-2xl font-bold text-white">4</span>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#1e3a8a] rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#f97316]">Launch & Optimization</h3>
              <p className="text-gray-600 leading-relaxed">Deployment, training, and ongoing optimization to ensure maximum ROI and continuous improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="advisory-cta-section">
        <div className="container">
          <div className="cta-content-wrapper">
            <div className="cta-text-content">
              <h2>READY TO TRANSFORM YOUR BUSINESS DIGITALLY?</h2>
              <p>Let our digital transformation experts help you leverage technology to drive innovation, efficiency, and growth across your organization.</p>
              <div className="cta-buttons">
                <a href="/contact-us" className="primary-cta-button">Start Your Digital Journey</a>
                <a href="tel:+647-891-2155" className="secondary-cta-button">Call Now</a>
              </div>
            </div>
            <div className="cta-image-content">
              <div className="cta-image-wrapper">
                <img src="/software-house-adalah.webp" alt="Digital Services Team" className="w-[520px] h-[350px] object-cover rounded-2xl shadow-xl" />
                <div className="cta-stats">
                  <div className="stat-item">
                    <span className="stat-number">150+</span>
                    <span className="stat-label">Digital Projects</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">98%</span>
                    <span className="stat-label">Client Satisfaction</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">15+</span>
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
