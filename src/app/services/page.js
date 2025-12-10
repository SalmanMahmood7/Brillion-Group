import Link from 'next/link';
import Footer from '../../components/Footer';

const DigitalAdvisoryIcon = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 1v22" />
    <path d="M5 5h14v6H5z" />
    <path d="M7 17h10" />
  </svg>
);

const DataAnalyticsIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M3 3v18h18" />
    <path d="M7 13l3-3 4 4 4-6" />
  </svg>
);

const AppDevelopmentIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <path d="M9 6h6M9 10h6M9 14h4" />
  </svg>
);

const DigitalPlatformsIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="6" cy="6" r="3" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M9 6h6M6 9v6M18 9v6M9 18h6" />
  </svg>
);

const CyberSecurityIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M12 2l8 4v6c0 5-3.6 9.4-8 10-4.4-.6-8-5-8-10V6z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const CloudServicesIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 1 1 0 9Z" />
  </svg>
);

const ArrowRightIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const AwardIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="12" cy="8" r="4" />
    <path d="M7 12v8l5-2 5 2v-8" />
  </svg>
);

const TrendingIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M3 17l6-6 4 4 7-7" />
    <path d="M21 10V3h-7" />
  </svg>
);

const services = [
  {
    Icon: DigitalAdvisoryIcon,
    title: 'Digital Advisory',
    description: 'Strategic guidance to transform your business digitally.',
    href: '/services/digital-advisory',
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    Icon: DataAnalyticsIcon,
    title: 'Data & Analytics',
    description: 'Transform data into actionable business insights.',
    href: '/services/applied-data-analytics',
    gradient: 'from-emerald-500 to-emerald-700'
  },
  {
    Icon: AppDevelopmentIcon,
    title: 'App Development',
    description: 'Custom mobile and web applications built to scale.',
    href: '/services/software-development',
    gradient: 'from-[#1e3a8a] to-[#1e40af]'
  },
  {
    Icon: DigitalPlatformsIcon,
    title: 'Digital Platforms',
    description: 'Modern platforms that drive innovation and growth.',
    href: '/services/digital-platforms',
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    Icon: CyberSecurityIcon,
    title: 'Cyber Security',
    description: 'Comprehensive security solutions to protect your assets.',
    href: '/services/cyber-security',
    gradient: 'from-[#1e3a8a] to-[#1e40af]'
  },
  {
    Icon: CloudServicesIcon,
    title: 'Cloud Services',
    description: 'Scalable cloud infrastructure and migration services.',
    href: '/services/cloud-services',
    gradient: 'from-sky-500 to-blue-600'
  }
];

const stats = [
  { label: 'Projects Delivered', value: '150+', color: 'text-[#1e3a8a]' },
  { label: 'Client Satisfaction', value: '98%', color: 'text-emerald-600' },
  { label: 'Support Available', value: '24/7', color: 'text-purple-600' }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
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
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-6 space-y-3 z-50">
                  <a href="/services" className="block text-gray-800 hover:text-blue-800 transition-colors duration-200">
                    <div className="font-semibold">All Services</div>
                    <div className="text-sm text-gray-600">Complete overview</div>
                  </a>
                  <hr className="border-gray-200" />
                  <a href="/services#digital" className="block text-gray-800 hover:text-blue-800 transition-colors duration-200">
                    <div className="font-semibold">Digital Solutions</div>
                    <div className="text-sm text-gray-600">Innovation & transformation</div>
                  </a>
                  <a href="/industries" className="block text-gray-800 hover:text-blue-800 transition-colors duration-200">
                    <div className="font-semibold">Industries</div>
                    <div className="text-sm text-gray-600">Markets we serve</div>
                  </a>
                </div>
              </div>
              <a href="/industries" className="nav-link-arch">Industries Served</a>
              <a href="/advantage" className="nav-link-arch">Brillion Advantage</a>
            </div>
          </div>
        </div>
      </nav>

      <section id="digital" className="relative min-h-screen py-20 bg-gray-50">
        <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl py-16 md:py-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-blue-50 rounded-full border border-blue-200 mb-8">
              <span className="text-[#1e3a8a] text-sm font-semibold tracking-wide">DIGITAL SOLUTIONS</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 md:mb-8">
              <span className="text-[#1e3a8a]">What We</span>{' '}
              <span className="text-[#1e3a8a]">Do</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12">
              Transforming businesses through cutting-edge technology solutions and strategic digital innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className={`text-3xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 md:mb-16">
            {services.map((service) => {
              const Icon = service.Icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.gradient} transform hover:scale-105 transition-all duration-500 cursor-pointer min-h-[280px] sm:min-h-[320px] lg:min-h-[360px] p-6 sm:p-8`}
                >
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 2px, transparent 2px), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)',
                      backgroundSize: '40px 40px, 20px 20px'
                    }}
                  ></div>
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                        <Icon className="w-3 h-3 text-white mr-2" />
                        <span className="text-xs font-semibold text-white">SERVICE</span>
                      </div>
                      <Icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white mb-4" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-2 sm:mb-3">{service.title}</h2>
                      <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">{service.description}</p>
                      <div className="flex items-center text-white font-semibold text-sm hover:text-white/80 transition-colors">
                        <span>Get Free Quote</span>
                        <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center px-8 py-4 bg-blue-50 border border-blue-200 rounded-xl mb-8">
              <AwardIcon className="h-6 w-6 text-[#1e3a8a] mr-3" />
              <span className="text-[#1e3a8a] font-semibold">Industry-Leading Solutions</span>
              <TrendingIcon className="h-6 w-6 text-[#1e3a8a] ml-3" />
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Each service is designed with scalability, security, and performance in mind, ensuring your business stays ahead in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
