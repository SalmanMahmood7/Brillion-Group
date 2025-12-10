'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function NowHiringPage() {
  return (
    <div className="robbinex-site">
      <Header />

      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#002b6a]">
        <div className="absolute inset-0" style={{
          backgroundImage: "url('/business.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.25
        }} />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(0, 43, 106, 0.45) 0%, rgba(0, 43, 106, 0.65) 100%)' }}
        ></div>
        <div className="relative z-10 container text-center text-white py-24">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Now Hiring</h1>
          <p className="max-w-3xl mx-auto text-lg text-white">
            Join a high-performance team shaping Brillion Group’s next chapter. We’re building with purpose, innovation, and
            people-first leadership.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#002b6a]">Why Work With Brillion</h2>
            <p className="text-gray-600 leading-relaxed">
              We operate at the intersection of finance, technology, and advisory services — empowering our teams to deliver bold
              results for clients worldwide. At Brillion, you will collaborate with specialists who are passionate about
              measurable impact, continuous learning, and meaningful client partnerships.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From digital transformation to global tax strategy, our teams solve complex challenges through ingenuity, data,
              and high accountability. If you thrive in fast-paced, high-trust environments, we want to meet you.
            </p>
          </div>
          <div className="space-y-6 bg-[var(--background-light)] rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-[#002b6a]">Current Focus Areas</h3>
            <ul className="space-y-4 text-gray-700">
              <li>- Digital transformation specialists</li>
              <li>- Tax & compliance advisors</li>
              <li>- Client success & relationship managers</li>
              <li>- Data analytics & automation leads</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--background-light)]">
        <div className="container max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-3xl font-bold text-[#002b6a]">Ready to Apply?</h3>
          <p className="text-gray-700 leading-relaxed">
            Email your resume and a brief intro to <a href="mailto:careers@brilliongroup.com" className="text-[#D98832] font-semibold">careers@brilliongroup.com</a>.
            Share the role you’re targeting and why you believe Brillion is the right platform for your growth.
          </p>
          <a
            href="mailto:careers@brilliongroup.com"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-white bg-[#D98832] hover:bg-[#e69610] transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Send Your Profile
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
