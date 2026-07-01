import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ANZ Loan Comparison Guide",
  description:
    "Compare ANZ lending options, loan features and borrower fit before choosing a finance pathway.",
  alternates: { canonical: "/compare-lenders/anz" },
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
    title: "Interest Rates",
    text: "Compare both advertised rates and comparison rates when evaluating loan options.",
  },
  {
    title: "Features",
    text: "Offset accounts, redraw facilities and repayment flexibility may influence suitability.",
  },
  {
    title: "Borrower Fit",
    text: "Different lenders may suit different income types, deposit levels and borrowing scenarios.",
  },
];

export default function ANZPage() {
  return (
    <>
      <section className="relative min-h-[650px] overflow-hidden bg-slate-950 text-white">
        <Image
          src="/images/hero/anz-hero.jpg"
          alt="Borrowers discussing finance options"
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
              ANZ Loan Comparison Guide
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-100">
              Explore ANZ lending options and compare features, loan types and
              borrower considerations before choosing a finance pathway.
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
              One of Australia&apos;s major banking institutions.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              ANZ is one of Australia&apos;s largest lenders and provides a broad
              range of home lending, refinance and investment finance options.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              The suitability of any lender depends on your circumstances,
              borrowing objectives, deposit position and loan requirements.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8">
            <h3 className="text-2xl font-bold text-slate-950">
              Popular Loan Types
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
              Compare more than just the interest rate.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {comparePoints.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-blue-700 px-8 py-14 text-center text-white md:px-16">
          <h2 className="text-4xl font-bold">
            Compare lender options with confidence.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Review loan features, lender fit and borrowing pathways before
            making a lending decision.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-7 py-4 font-semibold text-blue-700"
            >
              Request a Loan Review
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}