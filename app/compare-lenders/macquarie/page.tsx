import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Macquarie Loan Comparison Guide",
  description:
    "Compare Macquarie Bank lending options, loan features and borrower fit before choosing a finance pathway.",
  alternates: { canonical: "/compare-lenders/macquarie" },
};

const products = [
  "Home Loans",
  "Refinance",
  "Investment Loans",
  "Offset Home Loans",
  "Fixed and Variable Loans",
];

const comparePoints = [
  {
    title: "Loan structure",
    text: "Compare fixed, variable, split loan, offset and repayment options.",
  },
  {
    title: "Borrower fit",
    text: "Different lenders may suit different borrowers depending on income, deposit, property type and financial goals.",
  },
  {
    title: "Features and flexibility",
    text: "Look at redraw, offset, repayment flexibility, digital servicing and loan management options.",
  },
];

export default function MacquariePage() {
  return (
    <>
      <section className="relative min-h-[650px] overflow-hidden bg-slate-950 text-white">
        <Image
          src="/images/hero/macquarie-hero.jpg"
          alt="Borrowers reviewing loan options with a finance adviser"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-slate-950/15 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
              Compare Lenders
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Macquarie Loan Comparison Guide
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-100">
              Compare Macquarie lending options, loan features, borrower fit and
              finance pathways before choosing a lender.
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
              A lender often considered for digital home loan and refinance options.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Macquarie offers a range of home lending options, including loans
              commonly considered by borrowers comparing refinance, owner
              occupier and investment lending pathways.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              The best lender depends on your goals, loan amount, deposit,
              income position, property type and desired loan features.
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
              Compare features, fit and long-term flexibility.
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
            Compare Macquarie with other lender options.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Review loan features, repayment structure and borrower fit before
            choosing a finance pathway.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-white px-7 py-4 font-semibold text-blue-700"
            >
              Request a Loan Review
            </Link>

            <Link
              href="/compare-lenders"
              className="rounded-lg border border-white px-7 py-4 font-semibold text-white"
            >
              Compare Other Lenders
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}