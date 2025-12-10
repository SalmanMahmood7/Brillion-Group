import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { digitalServiceDetails } from '../../../data/digitalServiceDetails';

export default function DigitalServiceDetail({ params }) {
  const service = digitalServiceDetails[params.slug];

  if (!service) {
    notFound();
  }

  const {
    title,
    heroImage,
    accentColor,
    summary,
    description,
    highlights,
    outcomes,
    insights,
    needsStatement,
    partnerBadge,
    benefitsIntro,
    benefits,
    body,
    features
  } = service;

  return (
    <div className="robbinex-site bg-white">
      <Header />

      <section
        className="relative min-h-[70vh] flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(7, 13, 29, 0.92), rgba(7, 13, 29, 0.65)), url('${heroImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-orange-500 to-red-500 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl relative z-10 py-14 lg:py-24 text-center md:text-left">
          <div className="mb-6 space-y-3 sm:space-y-0 sm:flex sm:items-center sm:justify-center md:justify-start">
            <div className="w-8 h-8 rounded-full inline-flex items-center justify-center mr-3" style={{ backgroundColor: accentColor }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                <path d="M12 2L2 7h10l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-200 font-semibold">Digital Solutions</p>
          </div>
          
          <h1 className="text-[clamp(32px,8vw,64px)] font-bold leading-tight mb-6 sm:mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {title}
          </h1>

          {partnerBadge && (
            <div className="hidden md:inline-flex items-center rounded-full border border-white/30 px-6 py-2 text-sm font-semibold tracking-wide text-white/90 mb-8 bg-white/10 backdrop-blur-sm mx-auto md:mx-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2 text-yellow-400">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              {partnerBadge}
            </div>
          )}
          
          <p className="hidden md:block text-[clamp(16px,4.8vw,22px)] text-gray-100 max-w-3xl md:max-w-4xl leading-relaxed mb-8 sm:mb-10 mx-auto md:mx-0">
            {summary}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: accentColor }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Talk to Our Experts
            </Link>
            <Link
              href="/digital-services"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold border-2 border-white/40 text-white hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to Services
            </Link>
          </div>
        </div>
      </section>

      {(needsStatement || (insights && insights.length > 0)) && (
        <section className="bg-[#0f1b44] text-white py-14">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-[#f97316] mb-4">What you need</p>
              {needsStatement && <p className="text-xl leading-relaxed text-gray-100">{needsStatement}</p>}
            </div>
            {insights && insights.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#f97316] mb-4">Industry Insights</h3>
                {insights.map(({ quote, source }) => (
                  <blockquote key={quote} className="bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 hover:border-white/30 transition-all">
                    <div className="flex items-start">
                      <span className="text-3xl text-[#f97316] mr-4 mt-1 leading-none">"</span>
                      <div>
                        <p className="text-lg leading-relaxed text-white/95">{quote}</p>
                        {source && <cite className="mt-4 block text-sm tracking-wide text-white/70 font-medium">— {source}</cite>}
                      </div>
                    </div>
                  </blockquote>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-3xl font-bold text-[#0f1b44] mb-4">What we deliver</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">{description}</p>
            {highlights && highlights.length > 0 && (
              <ul className="space-y-3 text-base text-[#0f1b44]">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="mt-1 mr-3 inline-flex w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }}></span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {benefits && benefits.length > 0 && (
              <div className="mt-8">
                {benefitsIntro && <p className="text-sm font-semibold tracking-widest text-[#f97316] mb-3 uppercase">Benefits</p>}
                <div className="space-y-4 text-gray-600">
                  {benefits.map(({ title: benefitTitle, description: benefitDescription }) => (
                    <div key={benefitTitle}>
                      <p className="text-base font-semibold text-[#0f1b44]">{benefitTitle}</p>
                      <p className="text-sm leading-relaxed">{benefitDescription}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {features && features.length > 0 && (
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-[#0f1b44] mb-4">Key features</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {features.map(({ category, items }) => (
                    <div key={category} className="border border-gray-100 rounded-2xl p-5">
                      <p className="text-base font-semibold text-[#0f1b44] mb-3">{category}</p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        {items.map((item) => (
                          <li key={item} className="leading-relaxed">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {body && <p className="mt-8 text-base leading-relaxed text-gray-600">{body}</p>}
          </div>

          {outcomes && outcomes.length > 0 && (
            <div className="sticky top-8">
              <div className="bg-[#111b3d] text-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-semibold mb-6">Business impact</h3>
                <div className="space-y-4">
                  {outcomes.map((item) => (
                    <div key={item} className="flex items-start bg-white/5 border border-white/10 rounded-2xl p-4">
                      <span className="mt-1 mr-3 inline-flex w-6 h-6 items-center justify-center rounded-full text-sm font-semibold text-white" style={{ backgroundColor: accentColor }}>
                        •
                      </span>
                      <span className="text-base leading-relaxed text-gray-100">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="flex-1">
              <p className="text-sm font-semibold text-[#f97316] uppercase tracking-widest mb-3">Why Brillion Group</p>
              <h3 className="text-3xl font-bold text-[#0f1b44] mb-4">Dedicated squads for every digital initiative</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We partner with your stakeholders across discovery, implementation, and adoption. Expect transparent timelines, proactive communication, and measurable KPIs for every sprint.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: accentColor }}></span>
                  Cross-functional experts in strategy, design, and engineering
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: accentColor }}></span>
                  Embedded governance to manage risk and compliance
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: accentColor }}></span>
                  Clear success criteria with dashboards to track value realization
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full">
              <div className="grid sm:grid-cols-2 gap-6">
                {['150+ digital programs delivered', '98% client satisfaction', '15+ years of enterprise expertise', 'Global delivery with local leadership'].map((stat) => (
                  <div key={stat} className="rounded-2xl bg-white p-6 shadow">
                    <p className="text-lg font-semibold text-[#0f1b44]">{stat}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
