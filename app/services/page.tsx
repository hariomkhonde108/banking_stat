import React from "react";
import Link from "next/link";
import PageHero from "@/app/components/PageHero";

export default function ServicesPage() {
  return (
    <div className="min-h-full flex flex-col font-sans bg-white text-gray-800 antialiased">
      <PageHero
        badge="Comprehensive Offerings"
        title="Our Financial Services"
        description="Specialized society products designed to foster growth, financial stability, and prosperity for our members."
        imageAlt="Financial services at Jai Gajanan"
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-brand-purple">Special deposit milestones</span>
            <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">Featured Deposit Benefits</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              <article className="rounded-3xl border border-brand-gold/60 bg-brand-lightGold/35 p-8 shadow-sm transition-all hover:border-brand-gold hover:shadow-md">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-purple text-2xl font-bold text-brand-gold">12%</div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-purple">12% Interest on 1-Year F.D.</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">Our special 12% interest rate on 1-year fixed deposits helps your one-time savings grow with a clear, secure maturity plan.</p>
                <Link href="/contactus" className="mt-6 inline-flex text-xs font-semibold text-brand-purple transition-colors hover:text-brand-gold">Enquire About This Deposit →</Link>
              </article>
              <article className="rounded-3xl border border-brand-gold/60 bg-brand-purple p-8 text-white shadow-lg transition-all hover:bg-brand-darkPurple">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gold text-2xl font-bold text-brand-darkPurple">2×</div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">Double Your Deposit in 6 Years</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">A distinct long-term deposit milestone designed to double the value of your original deposit over six years.</p>
                <Link href="/contactus" className="mt-6 inline-flex text-xs font-semibold text-brand-gold transition-colors hover:text-white">Enquire About This Deposit →</Link>
              </article>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Savings Accounts", desc: "Tailored personal savings plans with competitive interest rates to help your money grow securely day by day." },
              { title: "Gold Loans", desc: "Instant gold loans with the lowest available interest rates, quick approval, and flexible repayment options." },
              { title: "Daily Deposit Collection", desc: "Reliable doorstep collection services designed for businesses and daily earners to cultivate consistent saving habits." },
              { title: "Secure Term Deposits", desc: "Fixed and recurring deposit schemes formulated for long-term financial stability and guaranteed peace of mind." },
              { title: "Personal Financial Services", desc: "Practical financial guidance and support for members managing everyday money needs." },
              { title: "Member Advisory Support", desc: "Dedicated guidance and customer assistance to ensure a smooth, transparent, and personalized society experience." },
            ].map((srv, idx) => (
              <div key={srv.title} className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:border-brand-gold">
                <div className="w-12 h-12 rounded-2xl bg-brand-purple text-brand-gold flex items-center justify-center font-bold text-lg mb-6">
                  0{idx + 1}
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-purple mb-3">{srv.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{srv.desc}</p>
                <Link href="/contactus" className="text-xs font-semibold text-brand-purple hover:text-brand-gold transition-colors flex items-center gap-1">
                  Enquire About Service →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-brand-purple text-white py-12 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">Looking for Custom Financial Solutions?</h3>
          <p className="text-gray-300 text-sm mb-6">Speak with our representatives at our Bhalki branch to discuss your specific requirements.</p>
          <Link href="/contactus" className="btn-brand-gold px-8 py-3 rounded-full text-sm shadow-md inline-block">
            Visit or Call Us
          </Link>
        </div>
      </div>
    </div>
  );
}
