import React from "react";
import Image from "next/image";

export const HERO_GRADIENT_OVERLAY =
  "absolute inset-0 z-[1] bg-gradient-to-r from-brand-darkPurple/82 via-brand-purple/72 to-brand-darkPurple/78";

export const HERO_DOT_PATTERN =
  "absolute inset-0 z-[2] opacity-20 bg-[radial-gradient(#C69F6D_1px,transparent_1px)] [background-size:16px_16px]";

type PageHeroProps = {
  badge: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt: string;
  align?: "center" | "left";
  children?: React.ReactNode;
  className?: string;
};

export default function PageHero({
  badge,
  title,
  description,
  imageSrc = "/banner.png",
  imageAlt,
  align = "center",
  children,
  className = "",
}: PageHeroProps) {
  return (
    <section
      className={`relative isolate overflow-hidden bg-brand-darkPurple text-white py-20 md:py-24 lg:py-32 ${className} ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className={HERO_GRADIENT_OVERLAY} aria-hidden />
      <div className={HERO_DOT_PATTERN} aria-hidden />
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <span className="inline-block rounded-full border border-brand-gold/30 bg-brand-gold/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
          {badge}
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight mt-4 mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
          {title}
        </h1>
        <p className="text-base sm:text-lg leading-relaxed text-gray-100 drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
          {description}
        </p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
