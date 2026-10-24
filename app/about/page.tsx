import React from "react";
import Link from "next/link";
import PageHero from "@/app/components/PageHero";
import { siteMission, siteVision } from "@/app/site-config";

export default function AboutPage() {
  return (
    <div className="min-h-full flex flex-col font-sans bg-white text-gray-800 antialiased">
      <PageHero
        badge="Institutional Profile"
        title="About Jai Gajanan"
        description="Empowering our communities through accessible, transparent, and inclusive cooperative financial services."
        imageSrc="/about.png"
        imageAlt="About Jai Gajanan"
      />

      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <img
                  src="/about.png"
                  alt="Jai Gajanan Headquarters"
                  className="w-full h-[400px] object-cover bg-gray-50 p-1"
                />
              </div>
            </div>
            <div>
              <div className="bg-brand-lightGold/55 border-l-4 border-brand-gold p-6 rounded-r-2xl mb-6">
                <p className="font-serif italic text-brand-darkPurple text-base font-medium">
                  &ldquo;A vision-driven institution focused on financial inclusion, mutual trust, and sustainable regional development.&rdquo;
                </p>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Bridging Traditional Values and Modern society
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Jai Gajanan Souharda Credit Co-operative Ltd. is dedicated to bridging the gap between conventional institutional society and regional rural communities. Our foundation is built on financial empowerment as the primary driver for social and economic transformation.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                We believe society is far beyond simple transactions—it is about nurturing lifelong relationships, supporting member dreams, and building economic resilience for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-20 bg-brand-lightGold/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="overflow-hidden rounded-3xl border border-brand-gold/30 bg-brand-lightGold/20 p-4 shadow-lg">
            <img src="/president.jpeg" alt="President of Jai Gajanan Souharda Credit Co-operative Ltd." className="block h-auto max-h-[34rem] w-full object-contain" />
            <div className="pt-4 text-center">
              <h3 className="font-serif text-xl font-bold text-brand-purple">Mr. Vijaykumar Shinde</h3>
              <p className="mt-1 text-sm font-medium text-gray-600">Founder &amp; Chairman</p>
            </div>
          </div>
          <div>
            <span className="text-brand-purple text-xs font-bold tracking-widest uppercase">About Us</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-gray-900">Founded on Trust, Built for the Community</h2>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              Jai Gajanan Souharda Credit Co-operative Ltd. was established in 2018 with a vision to promote financial growth, trust, and community development. Founded under the leadership of Mr. Vijaykumar Shinde, Founder and Chairman, the society is committed to providing reliable, transparent, and customer-focused financial services.
            </p>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              Since its establishment, the institution has focused on building strong relationships with its members and customers by encouraging savings, supporting financial needs, and promoting economic development. With a commitment to integrity, accountability, and service excellence, Jai Gajanan continues to work toward a financially secure and prosperous future for the community.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <span className="text-brand-purple text-xs font-bold tracking-widest uppercase mb-3 block">Our Roadmap</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">Foundational Milestones</h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Our Vision", desc: siteVision },
            { step: "02", title: "Our Foundation", desc: "Founded to eliminate society barriers in regional sectors, prioritizing financial literacy and community-first empowerment." },
            { step: "03", title: "Our Mission", desc: siteMission },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 relative text-left">
              <div className="text-4xl font-serif font-bold text-brand-gold/40 mb-4">{item.step}</div>
              <h3 className="font-serif text-xl font-bold text-brand-purple mb-3">{item.title}</h3>
              <div className="w-12 h-1 bg-brand-gold mb-4" />
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <span className="text-brand-purple text-xs font-bold tracking-widest uppercase mb-3 block">OUR CORE VALUES</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">Guiding Principles of Jai Gajanan</h2>
          <p className="text-gray-500 text-sm mt-2">The ethical baseline driving our commitment to community empowerment.</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Financial Inclusion", desc: "Expanding modern society access to every corner of society, ensuring geography is never a barrier." },
            { title: "Absolute Transparency", desc: "Honesty is our cornerstone, maintaining absolute clarity in every member policy and transaction." },
            { title: "Unwavering Trust", desc: "Safeguarding your financial future with robust institutional stability and personalized security." },
            { title: "Community Growth", desc: "Investing in collective prosperity through accessible financial services and responsible member support." },
          ].map((val, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-100 rounded-3xl p-6 hover:border-brand-gold transition-all">
              <h3 className="font-serif text-lg font-bold text-brand-purple mb-2">{val.title}</h3>
              <p className="text-gray-600 text-xs leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-brand-purple text-white py-12 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">Ready to Join Our Cooperative Family?</h3>
          <p className="text-gray-300 text-sm mb-6">Discover our deposit schemes and loan options tailored for your financial goals.</p>
          <Link href="/contactus" className="btn-brand-gold px-8 py-3 rounded-full text-sm shadow-md inline-block">
            Contact Branch Today
          </Link>
        </div>
      </div>
    </div>
  );
}
