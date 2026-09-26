"use client";

import React from "react";

type InquiryFormProps = {
  variant?: "default" | "compact";
};

export default function InquiryForm({ variant = "default" }: InquiryFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent successfully.");
  };

  const isCompact = variant === "compact";

  return (
    <div
      className={
        isCompact
          ? "rounded-[28px] border border-gray-100 bg-white p-8 text-gray-800 shadow-[0_20px_40px_rgba(45,12,46,0.16)]"
          : "rounded-3xl border border-gray-100 bg-white p-8 shadow-lg lg:p-10"
      }
    >
      <form className={isCompact ? "space-y-4" : "space-y-5"} onSubmit={handleSubmit}>
        <h3 className={`font-serif font-bold text-brand-purple mb-2 ${isCompact ? "text-xl" : "text-2xl"}`}>
          {isCompact ? "Quick Inquiry Form" : "Send Us a Message"}
        </h3>
        {!isCompact && (
          <p className="text-gray-500 text-xs mb-6">Fill out the form below and our customer representative will respond shortly.</p>
        )}

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
            type="tel"
            required
            placeholder="Enter your 10-digit mobile number"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-gold/30"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            {isCompact ? "Your Message / Scheme Interest" : "Inquiry Type / Subject"}
          </label>
          {isCompact ? (
            <textarea
              rows={3}
              required
              placeholder="Write your inquiry here..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-gold/30"
            />
          ) : (
            <input
              type="text"
              required
              placeholder="e.g. Fixed Deposit Schemes"
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-gold/30"
            />
          )}
        </div>

        {!isCompact && (
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Your Message</label>
            <textarea
              rows={4}
              required
              placeholder="Write your message or query here..."
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-gold/30"
            />
          </div>
        )}

        <button type="submit" className={`btn-brand-purple w-full text-sm ${isCompact ? "py-3.5 rounded-xl" : "py-4 rounded-xl"}`}>
          SUBMIT INQUIRY
        </button>
      </form>
    </div>
  );
}
