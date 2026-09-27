import React from "react";
import GalleryGrid from "../components/GalleryGrid";
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
          <GalleryGrid />
        </div>
      </section>
    </div>
  );
}
