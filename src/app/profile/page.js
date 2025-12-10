'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ProfilePage() {
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
          <p className="tracking-[0.35em] uppercase text-sm mb-4">Leadership Profile</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Profile Name</h1>
          <p className="max-w-3xl mx-auto text-lg text-white">
            Discover the vision, experience, and accomplishments that define our leadership. This profile highlights the journey,
            core values, and strategic direction championed for Brillion Group.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container max-w-5xl mx-auto grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#002b6a]">About Profile Name</h2>
            <p className="text-gray-600 leading-relaxed">
              Profile Name is a visionary leader with deep expertise in finance, strategic operations, and enterprise growth. With
              years of experience guiding organizations, the focus remains on building agile teams, leveraging technology, and
              cultivating long-term client trust.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Under this leadership, Brillion Group continues to expand its global footprint, embrace innovation, and deliver
              exceptional results across all service lines.
            </p>
          </div>
          <div className="space-y-6 bg-[var(--background-light)] rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-[#002b6a]">Key Highlights</h3>
            <ul className="space-y-4 text-gray-700">
              <li>- 15+ years of executive experience across digital and financial services</li>
              <li>- Passionate about empowering teams and building high-trust partnerships</li>
              <li>- Advocate for continuous innovation and client-centric strategy</li>
              <li>- Leads cross-border initiatives for Brillion Group&apos;s growth</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--background-light)]">
        <div className="container max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-3xl font-bold text-[#002b6a]">Leadership Philosophy</h3>
          <p className="text-gray-700 leading-relaxed">
            "Leadership is about setting bold priorities, empowering teams to excel, and ensuring that every client experience is
            built on trust, responsiveness, and measurable impact."
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
