import React from "react";
import InquiryForm from "@/app/components/InquiryForm";
import PageHero from "@/app/components/PageHero";
import { siteContact } from "@/app/site-config";

export default function ContactUsPage() {
  return (
    <div className="min-h-full flex flex-col font-sans bg-white text-gray-800 antialiased">
      <PageHero
        badge="Get In Touch"
        title="Contact Our Branch"
        description="We are here to assist you with your savings, deposits, and financial advisory needs."
        imageAlt="Contact Jai Gajanan branch"
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <span className="text-brand-purple text-xs font-bold tracking-widest uppercase mb-2 block">Reach Out Directly</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">We&apos;d Love to Hear From You</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Whether you have questions regarding our high-interest fixed deposits, daily collection services, or loan assistance, our team in Bhalki is ready to guide you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 rounded-2xl bg-brand-purple text-brand-gold flex items-center justify-center shrink-0 font-bold text-lg">📍</div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-gray-900 mb-1">Main Branch Address</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">Bhalki, Bidar District, Karnataka - 585328</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 rounded-2xl bg-brand-purple text-brand-gold flex items-center justify-center shrink-0 font-bold text-lg">📞</div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-gray-900 mb-1">Direct Helpline</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{siteContact.primaryPhoneDisplay} (Available during working hours)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 rounded-2xl bg-brand-purple text-brand-gold flex items-center justify-center shrink-0 font-bold text-lg">✉️</div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-gray-900 mb-1">Official Email</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{siteContact.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <InquiryForm />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-brand-purple text-xs font-bold tracking-widest uppercase mb-2 block">Visit Us</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Branches</h2>
            <p className="text-gray-600 text-sm leading-relaxed">Find the Jai Gajanan team at a branch near you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Bhalki",
                address: "Near SBI Bank Sirse Complex, Bidar Road, Bhalki, Dist. Bidar",
              },
              {
                name: "Bidar",
                address: "Near Traffic Signal, Shiv Nagar, Bidar",
              },
              {
                name: "Basavakalyan",
                address: "Tourist Lodge, Holkunde Complex, Basavakalyan",
              },
            ].map((branch) => (
              <article key={branch.name} className="rounded-3xl border border-gray-100 bg-gray-50 p-6 text-center shadow-sm">
                <h3 className="font-serif text-xl font-bold text-brand-purple">{branch.name} Branch</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{branch.address}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm h-[280px] sm:h-[360px] lg:h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3615.6518127743147!2d77.21833727518039!3d18.04974908295489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDAyJzU5LjEiTiA3N8KwMTMnMTUuMyJF!5e1!3m2!1sen!2sin!4v1790783487192!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Branch Location Map"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
