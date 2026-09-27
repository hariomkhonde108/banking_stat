"use client";

import React, { useEffect, useState } from "react";

type GalleryItem = {
  title: string;
  desc: string;
  image: string;
};

const galleryItems: GalleryItem[] = [
  { title: "Bhalki Branch", desc: "Our welcoming branch workspace in Bhalki ready to serve members.", image: "/bhalki_branch.jpeg" },
  { title: "Bidar Branch", desc: "Visit our Bidar team near Traffic Signal in Shiv Nagar.", image: "/bidar_branch.jpeg" },
  { title: "Basavakalyan Branch", desc: "Our growing regional presence at Holkunde Complex.", image: "/banner.png" },
  { title: "Award & Recognition", desc: "Celebrating the cooperative's achievements and commitment to members.", image: "/award_gallery1.jpeg" },
  { title: "Community Financial Awareness Camp", desc: "Sharing practical guidance on secure savings and financial planning.", image: "/gallery2.jpeg" },
  { title: "Member Annual General Meeting", desc: "Celebrating cooperative milestones together with our valued members.", image: "/gallery3.jpeg" },
  { title: "Staff & Customer Service Desk", desc: "Dedicated personnel ensuring seamless daily deposit and account handling.", image: "/staff_gallery.jpeg" },
  { title: "Staff & Leadership", desc: "The people behind Jai Gajanan's trusted member service.", image: "/staff_gallery2.jpeg" },
  { title: "Our President", desc: "Leadership grounded in cooperative values and community partnership.", image: "/president.jpeg" },
];

export default function GalleryGrid() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (!selectedItem) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedItem(null);
    };

    document.body.classList.add("overflow-hidden");
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedItem]);

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <article key={item.title} className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
            <div className="h-48 overflow-hidden bg-brand-darkPurple/10">
              <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="flex items-center justify-between gap-4 p-6">
              <h3 className="font-serif text-lg font-bold text-brand-purple">{item.title}</h3>
              <button
                type="button"
                onClick={() => setSelectedItem(item)}
                className="shrink-0 rounded-full bg-brand-purple px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-darkPurple"
              >
                View
              </button>
            </div>
          </article>
        ))}
      </div>

      {selectedItem ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-darkPurple/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          onClick={() => setSelectedItem(null)}
        >
          <div className="relative max-h-full w-full max-w-5xl overflow-auto rounded-3xl bg-white p-4 shadow-2xl sm:p-6" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              aria-label="Close image preview"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-brand-darkPurple text-xl text-white shadow-lg hover:bg-brand-purple"
            >
              ×
            </button>
            <img src={selectedItem.image} alt={`${selectedItem.title} full view`} className="max-h-[72vh] w-full rounded-2xl bg-gray-50 object-contain" />
            <h2 className="mt-5 font-serif text-2xl font-bold text-brand-purple">{selectedItem.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{selectedItem.desc}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}