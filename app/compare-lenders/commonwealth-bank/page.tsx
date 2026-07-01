import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commonwealth Bank Loan Comparison Guide",
  description:
    "Compare Commonwealth Bank (CBA) lending options, loan features and borrower fit before choosing a finance pathway.",
  alternates: { canonical: "/compare-lenders/commonwealth-bank" },
};

const products = [
  "Home Loans",
  "Refinance",
  "First Home Buyer Loans",
  "Investment Loans",
  "Construction Loans",
];

const comparePoints = [
  {
    title: "Rates and fees",
    text: "Compare interest rates, comparison rates, upfront fees and ongoing fees.",
  },
  {
    title: "Loan features",
    text: "Offset accounts, redraw, fixed-rate options and repayment flexibility may affect suitability.",
  },
  {
    title: "Borrower profile",
    text: "A lender may suit one borrower well and another poorly depending on income, deposit and credit profile.",
  },
];

export default function CommonwealthBankPage() {
  return (
    <>
      <section className="relative min-h-[650px] overflow-hidden bg-slate-950 text-white">
        <Image
          src="/images/hero/commonwealth-bank-hero.jpg"
          alt="Borrowers discussing loan options with a finance adviser"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
              Compare Lenders
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Commonwealth Bank Loan Comparison Guide
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-100">
              Explore Commonwealth Bank lending options and compare features,
              loan types and borrower considerations before choosing a finance
              pathway.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
              Overview
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              A major Australian lender with broad home loan options.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Commonwealth Bank is one of Australia&apos;s largest lending
              institutions and provides home loan, refinance and investment loan
              options for a wide range of borrowers.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              The right lender depends on your loan purpose, financial position,
              deposit, repayment goals and policy fit.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8">
            <h3 className="text-2xl font-bold text-slate-950">
              Popular loan types
            </h3>

            <ul className="mt-6 space-y-4 text-slate-700">
              {products.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
              What To Compare
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              Compare the whole lending package, not just the brand.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {comparePoints.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-blue-700 px-8 py-14 text-center text-white md:px-16">
          <h2 className="text-4xl font-bold">
            Compare Commonwealth Bank with other lender options.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Review lender fit, loan type, features and repayment flexibility
            before choosing a finance pathway.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-7 py-4 font-semibold text-blue-700"
            >
              Request a Loan Review
            </Link>

            <Link
              href="/compare-lenders"
              className="inline-block rounded-lg border border-white px-7 py-4 font-semibold text-white"
            >
              Compare Other Lenders
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}