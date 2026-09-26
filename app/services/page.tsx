import React from "react";
import Link from "next/link";
import PageHero from "@/app/components/PageHero";

export default function ServicesPage() {
  return (
    <div className="min-h-full flex flex-col font-sans bg-white text-gray-800 antialiased">
      <PageHero
        badge="Comprehensive Offerings"
        title="Our Financial Services"
        description="Specialized banking products designed to foster growth, financial stability, and prosperity for our members."
        imageAlt="Financial services at Jai Gajanan"
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Savings Accounts", desc: "Tailored personal savings plans with competitive interest rates to help your money grow securely day by day." },
              { title: "Loan Assistance", desc: "Flexible credit and loan options customized for agriculture, business expansion, and personal needs with minimal documentation." },
              { title: "Daily Deposit Collection", desc: "Reliable doorstep collection services designed for businesses and daily earners to cultivate consistent saving habits." },
              { title: "Secure Term Deposits", desc: "Fixed and recurring deposit schemes formulated for long-term financial stability and guaranteed peace of mind." },
              { title: "Agri-Finance Support", desc: "Specialized financial packages structured to support local farmers, crop production, and agricultural development." },
              { title: "Member Advisory Support", desc: "Dedicated guidance and customer assistance to ensure a smooth, transparent, and personalized banking experience." },
            ].map((srv, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:border-brand-gold transition-all">
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
          <h3 className="font-serif text-2xl font-bold mb-3">Looking for Custom Financial Solutions?</h3>
          <p className="text-gray-300 text-sm mb-6">Speak with our representatives at our Bhalki branch to discuss your specific requirements.</p>
          <Link href="/contactus" className="btn-brand-gold px-8 py-3 rounded-full text-sm shadow-md inline-block">
            Visit or Call Us
          </Link>
        </div>
      </div>
    </div>
  );
}
