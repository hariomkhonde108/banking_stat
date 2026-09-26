import React from "react";
import Link from "next/link";
import PageHero from "@/app/components/PageHero";

const depositSchemes = [
  {
    id: "savings",
    num: "01",
    title: "Savings Deposit",
    desc: "Flexible liquid savings accounts designed for everyday financial transactions with attractive interest rates and zero hassle.",
    bullets: ["Low minimum balance requirements", "Easy member liquidity & access", "Safe & reliable security safeguards"],
  },
  {
    id: "fixed",
    num: "02",
    title: "Fixed Deposit (FD)",
    desc: "Lock in high interest rates over custom tenure periods to watch your lump-sum investments multiply securely over time.",
    bullets: ["High competitive interest returns", "Flexible tenure lengths (Months to Years)", "Guaranteed principal safety"],
  },
  {
    id: "recurring",
    num: "03",
    title: "Recurring Deposit (RD)",
    desc: "Build structured wealth step-by-step by depositing a fixed manageable amount every single month.",
    bullets: ["Small monthly installments", "Encourages disciplined savings habits", "Attractive compounding interest"],
  },
  {
    id: "daily",
    num: "04",
    title: "Daily Deposit Scheme",
    desc: "Convenient doorstep collection service built specially for local shopkeepers, small businesses, and daily earners.",
    bullets: ["Doorstep collection convenience", "Flexible daily contribution sums", "Direct account crediting"],
  },
  {
    id: "monthly",
    num: "05",
    title: "Monthly Interest Scheme",
    desc: "Designed for members seeking regular monthly cash flow payouts derived from their lump-sum principal deposits.",
    bullets: ["Regular monthly payouts", "Ideal for post-retirement income", "Secure capital protection"],
  },
  {
    id: "double",
    num: "06",
    title: "Double Deposit Scheme",
    desc: "A high-performing growth scheme configured to systematically double your deposited capital over a defined tenure.",
    bullets: ["Capital appreciation focus", "Secure long-term milestone planning", "High cooperative yield rates"],
  },
];

export default function DepositsPage() {
  return (
    <div className="min-h-full flex flex-col font-sans bg-white text-gray-800 antialiased">
      <PageHero
        badge="Secure Financial Growth"
        title="Our Deposit Schemes"
        description="Choose from a wide variety of high-interest savings and investment plans structured to secure your family's future."
        imageAlt="Deposit schemes at Jai Gajanan"
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {depositSchemes.map((scheme) => (
              <div
                key={scheme.id}
                id={scheme.id}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-purple text-brand-gold flex items-center justify-center font-bold text-lg mb-6">
                    {scheme.num}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-brand-purple mb-3">{scheme.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{scheme.desc}</p>
                  <ul className="space-y-2 text-xs text-gray-500 mb-8">
                    {scheme.bullets.map((bullet) => (
                      <li key={bullet}>✓ {bullet}</li>
                    ))}
                  </ul>
                </div>
                <Link href="/contactus" className="btn-brand-gold-block py-3 rounded-xl text-xs">
                  Enquire Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-brand-purple text-white py-12 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="font-serif text-2xl font-bold mb-3">Have Questions Regarding Interest Rates?</h3>
          <p className="text-gray-300 text-sm mb-6">Get in touch with our branch team or visit us in Bhalki for complete scheme documentation.</p>
          <Link href="/contactus" className="btn-brand-gold px-8 py-3 rounded-full text-sm shadow-md inline-block">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
