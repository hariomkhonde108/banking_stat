import React from "react";
import PageHero from "../components/PageHero";
import GalleryGrid from "../components/GalleryGrid";

export default function GalleryPage() {
  return (
    <div className="min-h-full flex flex-col font-sans bg-white text-gray-800 antialiased">
      <PageHero
        badge="Our Gallery"
        title="Jai Gajanan Cooperative Bank"
        description="A glimpse into our branches, team, and community moments."
        imageAlt="Jai Gajanan Cooperative Bank"
      />

      <section className="bg-gray-50 py-10 sm:py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>
    </div>
  );
}
