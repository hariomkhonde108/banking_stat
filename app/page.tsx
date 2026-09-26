import React from "react";
import Link from "next/link";
import FloatingContact from "@/app/components/FloatingContact";
import PageHero from "@/app/components/PageHero";
import InquiryForm from "@/app/components/InquiryForm";

export default function HomePage() {
  return (
    <div className="min-h-full flex flex-col font-sans bg-white text-gray-800 antialiased">
      <PageHero
        badge="JGSCCOOPL Bhalki"
        title="Empowering Prosperity Through Trusted Co-operative Banking"
        description="Delivering safe savings, competitive returns, and accessible financial assistance designed to uplift every member of our community."
        imageSrc="/banner.png"
        imageAlt="Jai Gajanan cooperative banking"
        overlayStrength="light"
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contactus"
            className="btn-brand-gold rounded-full px-6 py-3.5 text-sm tracking-wide shadow-[0_14px_30px_rgba(198,159,109,0.35)] sm:px-8"
          >
            Open an Account
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg transition-all hover:bg-white/20 sm:px-8"
          >
            Explore Schemes
          </Link>
        </div>
      </PageHero>

      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-purple text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Our Institutional Legacy</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-gray-900 mb-6 leading-tight">
                Building a Secure Financial Future Together
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                At Jai Gajanan Souharda Credit Co-operative Ltd., we operate on the fundamental belief that robust financial services should be transparent, accessible, and community-centric. From flexible daily deposits to personalized loan assistance, we stand by you at every step of your growth.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-2xl shadow-[0_10px_25px_rgba(74,21,75,0.06)] border border-gray-100">
                  <div className="text-brand-purple font-bold text-2xl mb-1">100%</div>
                  <div className="text-gray-500 text-xs font-medium">Member Transparency</div>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-[0_10px_25px_rgba(74,21,75,0.06)] border border-gray-100">
                  <div className="text-brand-purple font-bold text-2xl mb-1">Secure</div>
                  <div className="text-gray-500 text-xs font-medium">Deposit Safeguards</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-brand-gold/20 rounded-[28px] p-4 absolute -inset-2 transform -rotate-2" aria-hidden />
              <div className="relative bg-brand-purple rounded-[28px] p-8 text-white shadow-[0_20px_40px_rgba(45,12,46,0.18)]">
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

      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <span className="text-brand-purple text-xs font-bold tracking-[0.2em] uppercase mb-3 block">What We Offer</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-gray-900 leading-tight">Specialized Banking Solutions</h2>
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
            <div
              key={item.title}
              className="bg-gray-50 hover:bg-brand-lightGold/30 border border-gray-100 rounded-[28px] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(74,21,75,0.09)] text-left"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-purple text-brand-gold flex items-center justify-center font-bold text-lg mb-6 shadow-sm">
                0{idx + 1}
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-24 bg-brand-purple text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Get In Touch</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-bold mb-6 leading-tight">Have Questions About Our Schemes?</h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Reach out to our team directly by filling out the quick inquiry form. Our branch representatives will get back to you promptly with complete guidance on interest rates and documentation.
              </p>
              <div className="mb-8 overflow-hidden rounded-3xl border border-white/20 bg-white/5 p-2 shadow-lg">
                <img src="/homelastsec.png" alt="Customer trust and community support" className="h-48 sm:h-56 w-full rounded-2xl object-cover" />
              </div>
              <div className="text-brand-gold font-semibold text-sm">📍 Main Branch: Bhalki, Bidar, Karnataka - 585328</div>
            </div>

            <InquiryForm variant="compact" />
          </div>
        </div>
      </section>

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
                loading="lazy"
                title="Branch location map"
              />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          © 2026 Jai Gajanan Souharda Credit Co-operative Ltd. All Rights Reserved.
        </div>
      </footer>

      <FloatingContact />
    </div>
  );
}
