import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-full flex flex-col font-sans bg-white text-gray-800 antialiased">
      {/* 1. TOP ANNOUNCEMENT TICKER */}
      <div className="bg-brand-purple text-white py-2 w-full fixed top-0 left-0 z-[1001] flex items-center overflow-hidden shadow-sm">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(100vw); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: inline-block;
            white-space: nowrap;
            animation: marquee 35s linear infinite;
          }
        `}</style>
        <div className="animate-marquee text-sm font-medium tracking-wide">
          <span className="px-4"> Jai Gajanan Souharda Credit Co-operative Ltd. • High FD Interest Rates • Secure Savings • Flexible Daily & Recurring Deposits • Trusted Financial Security </span>
        </div>
      </div>

      {/* 2. STICKY HEADER & NAVIGATION */}
      <header className="sticky top-[37px] z-[1000] bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="font-bold text-xl tracking-tight text-brand-purple flex items-center gap-2">
              {/* Replace with your actual logo image asset path */}
              <div className="w-10 h-10 rounded-full bg-brand-purple flex items-center justify-center text-brand-gold font-serif text-xl border border-brand-gold">
                JG
              </div>
              <div className="leading-tight">
                <span className="block text-base font-bold uppercase">Jai Gajanan</span>
                <span className="block text-[10px] text-gray-500 tracking-wider">Souharda Credit Co-Op Ltd.</span>
              </div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-gray-700">
            <Link href="/" className="hover:text-brand-purple transition-colors">Home</Link>
            <Link href="/about" className="hover:text-brand-purple transition-colors">About Us</Link>
            
            {/* Deposits Dropdown */}
            <div className="relative group py-2">
              <button className="flex items-center gap-1 hover:text-brand-purple transition-colors">
                Deposits 
                <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col gap-2">
                <Link href="/deposits#savings" className="text-xs font-medium text-gray-600 hover:text-brand-purple py-1 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>Savings Deposit</Link>
                <Link href="/deposits#fixed" className="text-xs font-medium text-gray-600 hover:text-brand-purple py-1 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>Fixed Deposit (FD)</Link>
                <Link href="/deposits#recurring" className="text-xs font-medium text-gray-600 hover:text-brand-purple py-1 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>Recurring Deposit (RD)</Link>
                <Link href="/deposits#daily" className="text-xs font-medium text-gray-600 hover:text-brand-purple py-1 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>Daily Deposit</Link>
              </div>
            </div>

            <Link href="/services" className="hover:text-brand-purple transition-colors">Services</Link>
            <Link href="/gallery" className="hover:text-brand-purple transition-colors">Gallery</Link>
            <Link href="/career" className="hover:text-brand-purple transition-colors">Career</Link>
            <Link href="/contactus" className="hover:text-brand-purple transition-colors">Contact Us</Link>
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <a href="tel:+919448275999" className="flex items-center gap-2 bg-brand-purple text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-brand-darkPurple transition-all shadow-md">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              +91 9448275999
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO SLIDER SECTION */}
      <section className="relative bg-gradient-to-r from-brand-darkPurple to-brand-purple text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C69F6D_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/20 text-brand-gold text-xs font-semibold tracking-wider uppercase mb-6 border border-brand-gold/30">
            JGSCCOOPL Bhalki
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Empowering Prosperity Through Trusted Co-operative Banking
          </h1>
          <p className="text-gray-200 text-base sm:text-lg mb-10 leading-relaxed">
            Delivering safe savings, competitive returns, and accessible financial assistance designed to uplift every member of our community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contactus" className="bg-brand-gold text-brand-darkPurple font-semibold px-8 py-3.5 rounded-full hover:bg-white transition-all shadow-lg text-sm">
              Open an Account
            </Link>
            <Link href="/services" className="bg-white/10 hover:bg-white/25 text-white border border-white/30 font-semibold px-8 py-3.5 rounded-full transition-all text-sm">
              Explore Schemes
            </Link>
          </div>
        </div>
      </section>

      {/* 4. INSTITUTIONAL INTRO SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-purple text-xs font-bold tracking-widest uppercase mb-3 block">Our Institutional Legacy</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Building a Secure Financial Future Together</h2>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                At Jai Gajanan Souharda Credit Co-operative Ltd., we operate on the fundamental belief that robust financial services should be transparent, accessible, and community-centric. From flexible daily deposits to personalized loan assistance, we stand by you at every step of your growth.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                  <div className="text-brand-purple font-bold text-2xl mb-1">100%</div>
                  <div className="text-gray-500 text-xs font-medium">Member Transparency</div>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                  <div className="text-brand-purple font-bold text-2xl mb-1">Secure</div>
                  <div className="text-gray-500 text-xs font-medium">Deposit Safeguards</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-brand-gold/20 rounded-3xl p-4 absolute -inset-2 transform -rotate-2"></div>
              <div className="relative bg-brand-purple rounded-3xl p-8 text-white shadow-xl">
                <h3 className="font-serif text-2xl font-bold mb-4 text-brand-gold">Core Guiding Pillars</h3>
                <ul className="space-y-4 text-sm text-gray-200">
                  <li className="flex items-center gap-3">✓ Member-First Financial Planning</li>
                  <li className="flex items-center gap-3">✓ Absolute Transparency in Transactions</li>
                  <li className="flex items-center gap-3">✓ Community-Driven Agricultural & Business Support</li>
                  <li className="flex items-center gap-3">✓ Sustainable Local Economic Development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES GRID SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <span className="text-brand-purple text-xs font-bold tracking-widest uppercase mb-3 block">What We Offer</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">Specialized Banking Solutions</h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Savings Accounts", desc: "Tailored savings plans with steady interest rates to help your personal savings multiply securely." },
            { title: "Loan Assistance", desc: "Flexible credit options for agriculture, micro-enterprises, and personal needs with minimal documentation." },
            { title: "Daily Deposit Collection", desc: "Doorstep collection services designed for businesses and daily wage earners to cultivate consistent saving habits." },
            { title: "Fixed & Recurring Deposits", desc: "High-yield term deposit plans structured to guarantee long-term financial security and peace of mind." },
            { title: "Agri-Finance Support", desc: "Dedicated financial packages built specifically to empower local farmers and boost agricultural productivity." },
            { title: "Member Support Services", desc: "Reliable, personalized advisory and support to ensure seamless day-to-day banking experiences." },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-50 hover:bg-brand-lightGold/30 border border-gray-100 rounded-3xl p-8 transition-all hover:-translate-y-1 hover:shadow-lg text-left">
              <div className="w-12 h-12 rounded-2xl bg-brand-purple text-brand-gold flex items-center justify-center font-bold text-lg mb-6">
                0{idx + 1}
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TRUST & INQUIRY FORM SECTION */}
      <section className="py-20 bg-brand-purple text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-3 block">Get In Touch</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">Have Questions About Our Schemes?</h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Reach out to our team directly by filling out the quick inquiry form. Our branch representatives will get back to you promptly with complete guidance on interest rates and documentation.
              </p>
              <div className="text-brand-gold font-semibold text-sm">
                📍 Main Branch: Bhalki, Bidar, Karnataka - 585328
              </div>
            </div>

            <div className="bg-white text-gray-800 rounded-3xl p-8 shadow-2xl">
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Inquiry submitted successfully! We will contact you soon."); }}>
                <h3 className="font-serif text-xl font-bold text-brand-purple mb-2">Quick Inquiry Form</h3>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Full Name</label>
                  <input type="text" required placeholder="Enter your name" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-purple" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Phone Number</label>
                  <input type="text" required placeholder="Enter 10-digit number" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-purple" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Your Message / Scheme Interest</label>
                  <textarea rows={3} required placeholder="Write your inquiry here..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-purple"></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-purple hover:bg-brand-darkPurple text-white py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md">
                  SUBMIT INQUIRY
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-brand-darkPurple text-white pt-16 pb-8 border-t border-brand-purple/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="font-serif text-lg font-bold text-brand-gold mb-4">Jai Gajanan Credit</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Jai Gajanan Souharda Credit Co-operative Ltd. is committed to elevating rural and regional development through inclusive, ethical, and dependable financial services.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-brand-gold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/deposits" className="hover:text-white transition-colors">Deposits & Schemes</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/contactus" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-brand-gold mb-4">Contact Info</h3>
            <p className="text-xs text-gray-400 mb-2 leading-relaxed">Bhalki, Bidar District, Karnataka - 585328</p>
            <p className="text-xs text-gray-400 mb-2">📞 +91 9448275999</p>
            <p className="text-xs text-gray-400">✉️ info@jaigajanan.com</p>
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-brand-gold mb-4">Branch Location</h3>
            <div className="rounded-xl overflow-hidden border border-gray-700 h-32">
              <iframe 
                src="https://maps.google.com/maps?q=Bhalki,%20Bidar,%20Karnataka-585328&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          © 2026 Jai Gajanan Souharda Credit Co-operative Ltd. All Rights Reserved.
        </div>
      </footer>

      {/* 8. FLOATING WIDGETS (WhatsApp & Phone) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a href="https://wa.me/919448275999" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-green-700 transition-all">
          <svg viewBox="0 0 448 512" width="20" height="20" fill="currentColor"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.1-3.2-5.5-.3-8.4 2.4-11.2 2.5-2.5 5.5-6.4 8.3-9.6 2.8-3.2 3.7-5.5 5.6-9.3 1.9-3.7 1-7-0.5-9.8-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-0.2-6.9-0.2-10.6-0.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.7 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.5 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
        </a>
        <a href="tel:+919448275999" className="w-12 h-12 bg-brand-purple text-white rounded-full flex items-center justify-center shadow-xl hover:bg-brand-darkPurple transition-all">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
        </a>
      </div>
    </div>
  );
}