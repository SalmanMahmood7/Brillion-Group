'use client';

const serviceLinks = [
  { title: 'DIGITAL SERVICES', href: '/digital-services/' },
  { title: 'INCORPORATION SERVICES', href: '/incorporation-services/' },
  { title: 'BUSINESS BROKERAGE', href: '/business-brokerage/' },
  { title: 'BOOKKEEPING & ACCOUNTING', href: '/bookkeeping-accounting/' },
  { title: 'BACK OFFICE SERVICES', href: '/back-office-services/' },
  { title: 'TAX SERVICES', href: '/tax-services/' }
];

const companyLinks = [
  { title: 'About Us', href: '/about-us' },
  { title: 'Brillion Advantage', href: '/advantage' },
  { title: 'Consumer Brands', href: '/consumer-brands' },
  { title: 'Industries Served', href: '/industries' },
  { title: 'Contact', href: '/contact-us' },
  { title: 'Careers', href: '/careers' }
];

const contactInfo = [
  '+1 (647) 891-2155',
  'info@brilliongroup.com',
  '233 Speers Rd Unit 5, Oakville, ON'
];

const backgroundPattern = "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23002b6a' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")";

export default function Footer() {
  return (
    <footer className="py-[60px] bg-[var(--background-light)] relative">
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full" style={{ backgroundImage: backgroundPattern }}></div>
      </div>
      <div className="container relative">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-logo-section">
              <img src="/BRILLION GROUP LOGO PNG.png" alt="Brillion Group" className="footer-logo" />
            </div>
            <div className="footer-links-section">
              <div className="footer-links-group">
                <h4>Services</h4>
                {serviceLinks.map((link) => (
                  <a key={link.title} href={link.href}>{link.title}</a>
                ))}
              </div>
              <div className="footer-links-group">
                <h4>Company</h4>
                {companyLinks.map((link) => (
                  <a key={link.title} href={link.href}>{link.title}</a>
                ))}
              </div>
              <div className="footer-links-group">
                <h4>Contact</h4>
                {contactInfo.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Brillion Group. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
