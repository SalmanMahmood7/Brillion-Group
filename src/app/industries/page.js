'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Industries() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dottedPattern = "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23002b6a' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")";

  const industries = [
    {
      id: 0,
      title: "CONSTRUCTION",
      description: "Comprehensive financial management and advisory services for construction companies, contractors, and developers. We understand project-based accounting, cash flow management, and regulatory compliance specific to the construction industry.",
      icon: "M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 14v3m4-3v3m4-3v3"
    },
    {
      id: 1,
      title: "REAL ESTATE", 
      description: "Strategic real estate investment services including property analysis, market research, and portfolio optimization. Our expertise helps investors maximize returns while minimizing risks in today's dynamic real estate market.",
      icon: "M3 21h18M5 21V7l7-4 7 4v14M9 9h6v6H9z"
    },
    {
      id: 2,
      title: "FINANCIAL INSTITUTIONS",
      description: "Specialized financial services for banks, credit unions, and financial institutions. We provide regulatory compliance support, risk management solutions, and comprehensive financial reporting that meets industry standards.",
      icon: "M1 3h15v13H1zM16 8h2v8H9l3-4.5L16 8z"
    },
    {
      id: 3,
      title: "FRANCHISING",
      description: "Multi-location franchise success through standardized processes, performance tracking, and scalable solutions. We help franchisors and franchisees maintain consistency while driving growth across all locations.",
      icon: "M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0M12 1l0 6m0 6l0 6M21 12l-6 0m-6 0l-6 0"
    },
    {
      id: 4,
      title: "STAFFING",
      description: "Workforce optimization strategies for staffing agencies and HR departments. Our services include payroll management, compliance monitoring, and strategic workforce planning to help you manage human capital effectively.",
      icon: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
    },
    {
      id: 5,
      title: "LOGISTICS",
      description: "Supply chain mastery for logistics and transportation companies. We provide inventory management solutions, distribution optimization, and comprehensive supply chain analytics to streamline operations and reduce costs.",
      icon: "M1 3h15v13H1zM16 8h2v8H9l3-4.5L16 8z"
    },
    {
      id: 6,
      title: "MANUFACTURING",
      description: "Production efficiency solutions for manufacturing companies. We offer cost optimization, quality control systems, and manufacturing analytics to help you improve productivity while maintaining the highest quality standards.",
      icon: "M2 3h20v14H2zM8 21h8M12 17v4"
    },
    {
      id: 7,
      title: "RETAIL",
      description: "Customer experience focused solutions for retail businesses. We provide inventory management, sales analytics, and multi-channel retail strategies to help you deliver exceptional customer experiences and drive sales growth.",
      icon: "M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM20 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
    }
  ];

  return (
    <div className="robbinex-site">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="industries-hero-section-new min-h-[70vh] flex items-center">
        <div className="hero-background" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
        }}></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="industries-hero-content-centered">
            <div className="hero-text-centered">
              <h1>INDUSTRIES<br />WE SERVE</h1>
              <p>From construction to retail, manufacturing to finance – we understand the unique challenges each industry faces. Our specialized expertise delivers tailored solutions that drive real results for your business.</p>
              <p>With three decades of experience across diverse sectors, we bring industry-specific insights and proven strategies to help your organization thrive in today's competitive landscape.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-[60px] bg-[var(--background-light)] relative">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{ backgroundImage: dottedPattern }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] items-start px-6 md:px-10 pt-12">
            <aside className="lg:sticky lg:top-36 lg:pr-8">
              <div className="space-y-6" style={{color: 'var(--primary-blue)'}}>
                <h2 className="text-3xl md:text-4xl font-bold leading-relaxed" style={{color: '#1e3a8a'}}>
                  EMPOWERING BUSINESSES IN{' '}
                  <span style={{color: '#D98832'}}>EVERY SECTOR</span>
                </h2>
                <p className="text-base md:text-lg leading-relaxed" style={{color: 'var(--text-secondary)'}}>Your success is our mission. We bring industry-specific insights and proven strategies to drive growth across all business landscapes.</p>
                <ul className="space-y-3 text-sm" style={{color: 'var(--text-secondary)'}}>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full" style={{backgroundColor: 'var(--primary-orange)'}}></span>
                    Industry-specific expertise and specialized solutions
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full" style={{backgroundColor: 'var(--primary-orange)'}}></span>
                    Proven track record across diverse business sectors
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full" style={{backgroundColor: 'var(--primary-orange)'}}></span>
                    Comprehensive support and strategic guidance
                  </li>
                </ul>
              </div>
            </aside>
            <div className="grid gap-6 md:gap-8 lg:pt-4">
              {industries.map((industry, index) => (
                <article key={industry.id} className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-48 md:h-56 w-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent"></div>
                    <div className="relative h-full p-6 md:p-8 flex flex-col justify-between text-white">
                      <div className="flex items-start justify-between">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm shrink-0">
                            <span className="text-lg font-bold text-white">{String(index + 1).padStart(2, '0')}</span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-xs font-semibold uppercase tracking-wider text-blue-200">INDUSTRY FOCUS</div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold break-words" style={{color: '#D98832'}}>{industry.title}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-blue-200">
                        <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium">Expert Solutions</span>
                        <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium">Proven Results</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 space-y-4">
                    <p className="text-sm md:text-base leading-relaxed" style={{color: 'var(--text-secondary)'}}>{industry.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
