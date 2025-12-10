'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function BookkeepingAccounting() {
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
              "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
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
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Bookkeeping & Accounting</h1>
          <p className="max-w-3xl mx-auto text-lg text-white">
            Comprehensive bookkeeping and accounting support that keeps every ledger accurate, every filing compliant, and every
            decision backed by reliable financial insight.
          </p>
        </div>
      </section>


      {/* Detailed Services Section */}
      <section className="py-[80px] bg-[var(--background-light)]">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="space-y-20 mb-12">
            
            {/* Cloud Based Bookkeeping Support */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img src="/adobestock_440670513.webp" alt="Cloud Based Bookkeeping" className="rounded-2xl shadow-xl w-full h-[500px] object-cover" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[var(--primary-orange)] to-[#e89a44] rounded-2xl opacity-20"></div>
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-[var(--primary-blue)]">Cloud Based Bookkeeping Support</h3>
                <p className="text-lg text-gray-600 leading-relaxed">Modern cloud technology meets traditional bookkeeping expertise to deliver seamless financial management for your business.</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 bg-[var(--primary-orange)]">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[var(--primary-blue)]">Cloud Software Setup - Complete setup and configuration of cloud-based accounting software tailored to your business needs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 bg-[var(--primary-orange)]">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[var(--primary-blue)]">Digital Document Processing - Efficient handling of scanned documents and digital receipts for accurate record keeping</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 bg-[var(--primary-orange)]">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[var(--primary-blue)]">HST Filing Support - Regular data entry and preparation by certified bookkeeping professionals for timely HST submissions</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Cloud Based Payroll Services */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <h3 className="text-3xl font-bold text-[var(--primary-blue)]">Cloud Based Payroll Services</h3>
                <p className="text-lg text-gray-600 leading-relaxed">Comprehensive payroll management that handles everything from processing to compliance, giving you peace of mind.</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[var(--primary-blue)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[var(--primary-blue)]">Payroll Processing - Preparation of payroll based on the hours and terms of your permanent and contract-based employees</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[var(--primary-blue)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[var(--primary-blue)]">Pay Stubs & Tax Information - Providing pay-stubs and withholding tax information</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[var(--primary-blue)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[var(--primary-blue)]">Direct Deposits - Arranging direct deposits</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[var(--primary-blue)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[var(--primary-blue)]">T4 Preparation & Filing - Providing T4s, T4As for employees and filing annual payroll return</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[var(--primary-blue)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[var(--primary-blue)]">Online Access - Online access to paystubs and T4s to your employees</span>
                  </li>
                </ul>
              </div>
              <div className="relative order-1 lg:order-2">
                <img src="/image-7.png" alt="Payroll Services" className="rounded-2xl shadow-xl w-full h-[500px] object-cover" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-[var(--primary-blue)] to-[#1e40af] rounded-2xl opacity-20"></div>
              </div>
            </div>

            {/* Accounting Support Month-end & Year-end */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img src="/Debits-and-Credits-Cheat-Sheet-A-Handy-Beginner_s-Guide.webp" alt="Accounting Support" className="rounded-2xl shadow-xl w-full h-[500px] object-cover" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[var(--primary-orange)] to-[#e89a44] rounded-2xl opacity-20"></div>
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-[var(--primary-blue)]">Accounting Support Month-end & Year-end</h3>
                <p className="text-lg text-gray-600 leading-relaxed">Comprehensive accounting support ensuring your financial records are accurate and compliant for all reporting periods.</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 bg-[var(--primary-orange)]">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[var(--primary-blue)]">Financial Statement Finalization - Finalization of Trial Balance, General Ledgers and Sub-Ledgers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 bg-[var(--primary-orange)]">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[var(--primary-blue)]">Compilation Services - Compilation Services i.e Notice to Readers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 bg-[var(--primary-orange)]">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[var(--primary-blue)]">Bank Reconciliations - Monthly Bank and Cash position statement reconciliation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 bg-[var(--primary-orange)]">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[var(--primary-blue)]">Receivables & Payables - Receivables and Payables reporting</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 bg-[var(--primary-orange)]">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[var(--primary-blue)]">HST Filings - HST filings and compliance management</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Customized Value-Added Reporting */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <h3 className="text-3xl font-bold text-[var(--primary-blue)]">Customized Value-Added Reporting</h3>
                <p className="text-lg text-gray-600 leading-relaxed">Tailored reporting solutions that provide insights and analytics customized to your business needs and industry requirements.</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[var(--primary-blue)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[var(--primary-blue)]">Monthly Management Reporting - Monthly management reporting as per selected package</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[var(--primary-blue)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[var(--primary-blue)]">Expense & Income Analysis - A comprehensive breakdown of expenses and incomes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[var(--primary-blue)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-[var(--primary-blue)]">Custom Services - Other services as agreed upon based on your specific requirements</span>
                  </li>
                </ul>
              </div>
              <div className="relative order-1 lg:order-2">
                <img src="/coach-speaking-1024x683.jpeg" alt="Value-Added Reporting" className="rounded-2xl shadow-xl w-full h-[500px] object-cover" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-[var(--primary-blue)] to-[#1e40af] rounded-2xl opacity-20"></div>
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
              <h2>READY TO STREAMLINE YOUR FINANCES?</h2>
              <p>Let our experienced bookkeeping and accounting team handle your financial records while you focus on growing your business.</p>
              <div className="cta-buttons">
                <a href="/contact-us" className="primary-cta-button">Get Started Today</a>
                <a href="tel:+647-891-2155" className="secondary-cta-button">Call Now</a>
              </div>
            </div>
            <div className="cta-image-content">
              <div className="cta-image-wrapper">
                <img src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Bookkeeping and Accounting Services" />
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
