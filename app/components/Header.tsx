'use client';

import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/deposits', label: 'Deposits' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/careers', label: 'Career' },
  { href: '/contactus', label: 'Contact Us' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-brand-purple text-white py-2 w-full flex items-center overflow-hidden shadow-sm">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(100vw); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: inline-block;
            white-space: nowrap;
            animation: marquee 30s linear infinite;
          }
        `}</style>
        <div className="animate-marquee text-sm font-medium tracking-wide">
          <span className="px-4">
            Jai Gajanan Souharda Credit Co-operative Ltd. • High FD Interest Rates • Secure Savings • Flexible Daily & Recurring Deposits • Trusted Financial Security
          </span>
        </div>
      </div>

      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 min-w-0">
            <img
              src="/logo.jpeg"
              alt="Jai Gajanan Souharda Credit Co-operative Ltd."
              className="h-11 w-auto object-contain sm:h-12"
            />
            <div className="hidden sm:block leading-tight">
              <span className="block text-sm font-bold uppercase text-brand-purple">Jai Gajanan</span>
              <span className="block text-[10px] text-gray-500 tracking-wider">Souharda Credit Co-Op Ltd.</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7 font-medium text-sm text-gray-700">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-brand-purple">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:+919448275999"
              className="flex items-center gap-2 bg-brand-purple text-white px-5 py-2.5 rounded-full text-[11px] font-semibold hover:bg-brand-darkPurple transition-all shadow-md"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              +91 9448275999
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="lg:hidden inline-flex items-center justify-center rounded-lg border border-gray-200 p-2 text-gray-700 shadow-sm"
            onClick={() => setMobileOpen((value) => !value)}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <nav className="lg:hidden border-t border-gray-100 bg-white px-4 py-4">
            <div className="flex flex-col gap-3 text-sm font-medium text-gray-700">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="py-2 hover:text-brand-purple transition-colors" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:+919448275999"
                className="btn-brand-purple mt-2 w-full rounded-full py-3 text-center text-xs"
              >
                Call +91 9448275999
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
