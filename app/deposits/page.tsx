import React from "react";
import Link from "next/link";
import PageHero from "@/app/components/PageHero";

const depositSchemes = [
  {
    id: "savings",
    num: "01",
    title: "Savings Accounts",
    desc: "Secure personal savings plans designed for everyday banking, dependable access, and steady financial growth.",
    bullets: ["Personal savings planning", "Convenient account access", "Safe cooperative banking"],
  },
  {
    id: "fixed",
    num: "02",
    title: "Fixed Deposit (FD)",
    desc: "Build your savings with tiered fixed-deposit options from 6 months up to 5 years, including a special 12% interest rate on 1-Year F.D.",
    bullets: ["12% interest on 1-Year F.D.", "Tenures from 6 months to 5 years", "Double your deposit in 6 years"],
  },
  {
    id: "recurring",
    num: "03",
    title: "Recurring Deposit (RD)",
    desc: "Build disciplined savings with monthly plans from ₹500 to ₹5,000 and a documented maturity schedule for each selected tenure.",
    bullets: ["Monthly options: ₹500 to ₹5,000", "Clear maturity amount at enrollment", "Flexible term-based planning"],
  },
  {
    id: "gold-loans",
    num: "04",
    title: "Gold Loans",
    desc: "Access instant funds against eligible gold with quick approval, competitive interest rates, and flexible repayment.",
    bullets: ["Quick approval process", "Lowest available interest rates", "Flexible repayment options"],
  },
  {
    id: "daily",
    num: "05",
    title: "Daily Deposit Scheme",
    desc: "Convenient collection services that help members and local businesses build consistent saving habits.",
    bullets: ["Doorstep collection convenience", "Flexible daily contributions", "Direct account crediting"],
  },
  {
    id: "monthly",
    num: "06",
    title: "Monthly Interest Scheme",
    desc: "A deposit option for members seeking regular monthly cash-flow payouts from their lump-sum deposit.",
    bullets: ["Regular monthly payouts", "Planned income support", "Secure capital protection"],
  },
];

export default function DepositsPage() {
  return (
    <div className="min-h-full flex flex-col font-sans bg-white text-gray-800 antialiased">
      <PageHero
        badge="Secure Financial Growth"
        title="Our Deposit Schemes"
        description="Choose from a wide variety of high-interest savings and investment plans structured to secure your family's future."
        imageSrc="/banner.png"
        imageAlt="Deposit schemes at Jai Gajanan"
      />

      <section className="bg-brand-lightGold/35 py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-brand-purple text-xs font-bold tracking-[0.2em] uppercase">Deposit Highlights</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-brand-darkPurple">Grow with clarity and confidence</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-700">Compare our savings, fixed deposit, recurring deposit, and instant gold loan options with our branch team.</p>
          </div>
          <div className="rounded-3xl border border-brand-gold/25 bg-white p-3 shadow-md">
            <img src="/schemes_image.jpeg" alt="Jai Gajanan deposit and loan schemes" className="block h-auto max-h-[28rem] w-full rounded-2xl object-contain" />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:px-8">
          <div>
            <span className="text-brand-purple text-xs font-bold tracking-[0.2em] uppercase">Scheme Pamphlet</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-gray-900">Explore our member plans</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">Review the complete scheme information and speak with our branch team for eligibility, documentation, and maturity details.</p>
          </div>
          <div className="rounded-3xl border border-brand-gold/30 bg-brand-lightGold/20 p-3 shadow-lg">
            <img src="/pamplet.jpeg" alt="Jai Gajanan scheme pamphlet" className="block h-auto max-h-[44rem] w-full rounded-2xl object-contain" />
          </div>
        </div>
      </section>

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
