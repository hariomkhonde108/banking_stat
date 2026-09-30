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

      <section className="bg-gray-50 px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <GalleryGrid />
        </div>
      </section>
    </div>
  );
}
