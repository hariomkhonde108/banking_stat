import React from "react";
import CareerApplyForm from "@/app/components/CareerApplyForm";
import PageHero from "@/app/components/PageHero";

export default function CareerPage() {
  return (
    <div className="min-h-full flex flex-col font-sans bg-white text-gray-800 antialiased">
      <PageHero
        badge="Join Our Team"
        title="Careers at Jai Gajanan"
        description="Build a rewarding professional career in cooperative banking and community development."
        imageAlt="Career opportunities at Jai Gajanan"
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-purple text-xs font-bold tracking-widest uppercase mb-2 block">Grow With Us</span>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">Shape the Future of Rural Banking</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                At Jai Gajanan Souharda Credit Co-operative Ltd., we foster an environment of continuous learning, ethical responsibility, and teamwork. If you are passionate about finance and community service, we would love to connect with you.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="font-serif font-bold text-base text-brand-purple mb-1">Field Collection Executives</h3>
                  <p className="text-gray-500 text-xs">Responsible for daily deposit collections and member relationship management in local sectors.</p>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="font-serif font-bold text-base text-brand-purple mb-1">Branch Operations Assistant</h3>
                  <p className="text-gray-500 text-xs">Managing customer accounts, documentation, and routine branch transaction processing.</p>
                </div>
              </div>
            </div>

            <CareerApplyForm />
          </div>
        </div>
      </section>
    </div>
  );
}
