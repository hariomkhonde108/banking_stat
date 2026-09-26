"use client";

import React from "react";

export default function CareerApplyForm() {
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg lg:p-10">
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Application submitted successfully!");
        }}
      >
        <h3 className="font-serif text-xl font-bold text-brand-purple mb-2">Submit Your Resume</h3>
        <p className="text-gray-500 text-xs mb-4">Send your details to apply for open positions.</p>
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            required
            placeholder="Enter your full name"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-gold/30"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number</label>
          <input
            type="text"
            required
            placeholder="Enter your mobile number"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-gold/30"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Position Applied For</label>
          <input
            type="text"
            required
            placeholder="e.g. Field Executive"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-gold/30"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Cover Note / Experience</label>
          <textarea
            rows={3}
            required
            placeholder="Briefly describe your background..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-gold/30"
          />
        </div>
        <button type="submit" className="btn-brand-purple w-full py-3.5 text-sm">
          APPLY NOW
        </button>
      </form>
    </div>
  );
}
