"use client";

import Link from "next/link";
import { useState } from "react";

type SchemeType = "FD" | "RD" | "Piggy";

type Scheme = {
  label: string;
  description: string;
  rate: number;
  rateLabel: string;
};

const schemes: Record<SchemeType, Scheme> = {
  FD: {
    label: "Fixed Deposit",
    description: "Grow a one-time deposit with our special fixed deposit rate.",
    rate: 12,
    rateLabel: "12% p.a.",
  },
  RD: {
    label: "Recurring Deposit",
    description: "Build your savings steadily with a regular monthly deposit.",
    rate: 10,
    rateLabel: "10% p.a.",
  },
  Piggy: {
    label: "Piggy Schemes",
    description: "Save consistently toward a meaningful goal with a flexible plan.",
    rate: 8,
    rateLabel: "8% p.a.",
  },
};

const tenureOptions = [12, 24, 36, 60];
const minimumAmount = 5_000;
const maximumAmount = 1_000_000;
const amountStep = 5_000;

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.round(value));

const calculateMaturity = (scheme: SchemeType, amount: number, months: number, rate: number) => {
  const years = months / 12;
  const annualRate = rate / 100;

  if (scheme === "FD") {
    const maturity = amount * (1 + annualRate) ** years;
    return { principal: amount, interest: maturity - amount, maturity };
  }

  const principal = amount * months;
  const monthlyRate = annualRate / 12;
  const maturity = monthlyRate === 0
    ? principal
    : amount * (((1 + monthlyRate) ** months - 1) / monthlyRate) * (1 + monthlyRate);

  return { principal, interest: maturity - principal, maturity };
};

export default function DepositCalculator() {
  const [schemeType, setSchemeType] = useState<SchemeType>("FD");
  const [amount, setAmount] = useState(minimumAmount);
  const [tenure, setTenure] = useState(12);
  const scheme = schemes[schemeType];
  const summary = calculateMaturity(schemeType, amount, tenure, scheme.rate);
  const amountLabel = schemeType === "FD" ? "Deposit amount" : "Monthly deposit";
  const principalLabel = schemeType === "FD" ? "Deposited amount" : "Total deposited";

  return (
    <div className="overflow-hidden rounded-3xl border border-brand-gold/30 bg-white shadow-[0_22px_60px_rgba(74,21,75,0.12)]">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="bg-brand-purple p-6 text-white sm:p-8 lg:p-10">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Choose a scheme</span>
            <div className="mt-4 grid grid-cols-3 rounded-2xl bg-brand-darkPurple/70 p-1" role="tablist" aria-label="Deposit scheme type">
              {(Object.keys(schemes) as SchemeType[]).map((type) => (
                <button
                  key={type}
                  type="button"
                  role="tab"
                  aria-selected={schemeType === type}
                  onClick={() => setSchemeType(type)}
                  className={`rounded-xl px-2 py-3 text-sm font-semibold transition-colors ${
                    schemeType === type ? "bg-brand-gold text-brand-darkPurple shadow-sm" : "text-white/75 hover:text-white"
                  }`}
                >
                  {type === "Piggy" ? "Piggy" : type}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <div className="mb-3 flex items-end justify-between gap-4">
              <label htmlFor="deposit-amount" className="text-sm font-medium text-white/80">{amountLabel}</label>
              <span className="text-2xl font-bold text-brand-gold">{formatCurrency(amount)}</span>
            </div>
            <input
              id="deposit-amount"
              type="range"
              min={minimumAmount}
              max={maximumAmount}
              step={amountStep}
              value={amount}
              onChange={(event) => setAmount(Number(event.target.value))}
              className="h-2 w-full cursor-pointer accent-brand-gold"
            />
            <div className="mt-2 flex justify-between text-xs text-white/60">
              <span>{formatCurrency(minimumAmount)}</span>
              <span>{formatCurrency(maximumAmount)}</span>
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between gap-4">
              <span className="text-sm font-medium text-white/80">Tenure</span>
              <label className="flex items-center gap-2 text-xs text-white/70">
                <span>Custom months</span>
                <input
                  type="number"
                  min={1}
                  max={120}
                  value={tenure}
                  onChange={(event) => setTenure(Math.min(120, Math.max(1, Number(event.target.value) || 1)))}
                  className="w-16 rounded-lg border border-white/20 bg-white/10 px-2 py-1 text-center text-white outline-none focus:border-brand-gold"
                  aria-label="Custom tenure in months"
                />
              </label>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {tenureOptions.map((months) => (
                <button
                  key={months}
                  type="button"
                  onClick={() => setTenure(months)}
                  className={`rounded-xl border px-2 py-3 text-xs font-semibold transition-colors ${
                    tenure === months ? "border-brand-gold bg-brand-gold text-brand-darkPurple" : "border-white/20 text-white/75 hover:border-brand-gold/70 hover:text-white"
                  }`}
                >
                  {months / 12} {months === 12 ? "Year" : "Years"}
                </button>
              ))}
            </div>
          </div>

          <p className="mt-8 text-sm leading-relaxed text-white/70">{scheme.description}</p>
        </div>

        <div className="flex flex-col justify-between bg-brand-lightGold/35 p-6 sm:p-8 lg:p-10">
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-purple">Estimated returns</span>
                <h3 className="mt-2 font-serif text-2xl font-bold text-gray-900">{scheme.label}</h3>
              </div>
              <span className="rounded-full bg-brand-purple px-3 py-1.5 text-xs font-bold text-brand-gold">{scheme.rateLabel}</span>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between border-b border-brand-gold/25 pb-4 text-sm">
                <span className="text-gray-600">{principalLabel}</span>
                <span className="font-semibold text-gray-900">{formatCurrency(summary.principal)}</span>
              </div>
              <div className="flex items-center justify-between border-b border-brand-gold/25 pb-4 text-sm">
                <span className="text-gray-600">Interest earned</span>
                <span className="font-semibold text-green-700">+{formatCurrency(summary.interest)}</span>
              </div>
              <div className="rounded-2xl bg-brand-purple p-5 text-white shadow-lg">
                <span className="text-xs uppercase tracking-[0.18em] text-brand-gold">Maturity amount</span>
                <strong className="mt-2 block font-serif text-3xl font-bold sm:text-4xl">{formatCurrency(summary.maturity)}</strong>
                <span className="mt-2 block text-xs text-white/70">After {tenure} months at an illustrative {scheme.rateLabel}.</span>
              </div>
            </div>
          </div>

          <Link href="/contactus" className="btn-brand-gold mt-8 w-full rounded-2xl px-6 py-4 text-center text-sm shadow-[0_12px_24px_rgba(198,159,109,0.28)]">
            Apply Now
          </Link>

          <div className="mt-6 rounded-2xl border border-brand-gold/40 bg-white/70 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-purple">Special milestone</span>
                <h4 className="mt-1 font-serif text-lg font-bold text-gray-900">Double Your Deposit in 6 Years</h4>
              </div>
              <span className="rounded-full bg-brand-gold px-2.5 py-1 text-xs font-bold text-brand-darkPurple">72 months</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-gray-600">A long-term deposit milestone designed to turn your original deposit into twice its value.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
