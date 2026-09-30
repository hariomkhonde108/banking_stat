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
                Bridging Traditional Values and Modern Banking
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Jai Gajanan Souharda Credit Co-operative Ltd. is dedicated to bridging the gap between conventional institutional banking and regional rural communities. Our foundation is built on financial empowerment as the primary driver for social and economic transformation.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                We believe banking is far beyond simple transactions—it is about nurturing lifelong relationships, supporting member dreams, and building economic resilience for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-20 bg-brand-lightGold/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="overflow-hidden rounded-3xl border border-brand-gold/30 bg-brand-lightGold/20 p-4 shadow-lg">
            <img src="/president.jpeg" alt="President of Jai Gajanan Souharda Credit Co-operative Ltd." className="block h-auto max-h-[34rem] w-full object-contain" />
          </div>
          <div>
            <span className="text-brand-purple text-xs font-bold tracking-widest uppercase">Leadership & Recognition</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-gray-900">A cooperative built on trust</h2>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">Our leadership keeps member service, transparency, and responsible financial growth at the center of every decision.</p>
            <div className="mt-6 rounded-2xl border border-brand-gold/20 bg-white p-3 shadow-sm">
              <img src="/award_gallery1.jpeg" alt="Jai Gajanan award and recognition" className="block h-auto max-h-[22rem] w-full rounded-xl object-contain" />
            </div>
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
            { step: "02", title: "Our Foundation", desc: "Founded to eliminate banking barriers in regional sectors, prioritizing financial literacy and community-first empowerment." },
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
            { title: "Financial Inclusion", desc: "Expanding modern banking access to every corner of society, ensuring geography is never a barrier." },
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
