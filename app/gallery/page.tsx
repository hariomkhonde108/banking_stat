import React from "react";
import PageHero from "@/app/components/PageHero";

export default function GalleryPage() {
  return (
    <div className="min-h-full flex flex-col font-sans bg-white text-gray-800 antialiased">
      <PageHero
        badge="Moments & Events"
        title="Our Gallery"
        description="Glimpses of our branch activities, community outreach programs, and member celebrations."
        imageAlt="Jai Gajanan gallery cover"
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Main Branch Inauguration & Office", desc: "Our welcoming branch workspace in Bhalki ready to serve members." },
              { title: "Community Financial Awareness Camp", desc: "Educating rural communities on secure savings and structured financial planning." },
              { title: "Member Annual General Meeting", desc: "Celebrating cooperative milestones together with our valued members." },
              { title: "Agricultural Loan Distribution", desc: "Supporting local farmers with prompt financial resources for crop seasons." },
              { title: "Staff & Customer Service Desk", desc: "Dedicated personnel ensuring seamless daily deposit and account handling." },
              { title: "Regional Outreach Program", desc: "Connecting directly with local small businesses and entrepreneurs." },
            ].map((imgItem, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
                <div className="h-48 bg-brand-darkPurple/10 relative overflow-hidden flex items-center justify-center">
                  <img src="/logo.jpeg" alt={imgItem.title} className="w-24 h-24 object-contain opacity-70" />
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-brand-purple mb-2">{imgItem.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{imgItem.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
