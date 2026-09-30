import React from "react";
import CareerApplyForm from "@/app/components/CareerApplyForm";
import PageHero from "@/app/components/PageHero";
import { siteContact } from "@/app/site-config";

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
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Build Trust Through Better Banking</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                At Jai Gajanan Souharda Credit Co-operative Ltd., we foster an environment of continuous learning, ethical responsibility, and teamwork. If you are passionate about finance and community service, we would love to connect with you.
              </p>
              <div className="mb-6 overflow-hidden rounded-3xl border border-brand-gold/30 bg-white shadow-sm">
                <img src="/handshake_image_for_Careeer_page.webp" alt="Professional handshake representing cooperative partnership" className="h-56 w-full object-cover" />
              </div>
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
          <div className="mt-8 rounded-2xl border border-brand-gold/30 bg-white p-5 text-center text-sm text-gray-600">
            Applications: <a className="font-semibold text-brand-purple hover:text-brand-gold" href={`mailto:${siteContact.email}`}>{siteContact.email}</a>
            <span className="mx-2 text-brand-gold">•</span>
            Call <a className="font-semibold text-brand-purple hover:text-brand-gold" href={`tel:+91${siteContact.primaryPhone}`}>{siteContact.primaryPhoneDisplay}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
