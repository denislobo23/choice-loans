import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare Lenders",
  description:
    "Compare major Australian lenders including ANZ, CBA, NAB, Westpac, ING and Macquarie before choosing a loan.",
  alternates: { canonical: "/compare-lenders" },
};

const lenders = [
  {
    name: "ANZ",
    href: "/compare-lenders/anz",
    text: "Compare ANZ home loan, refinance and lending options.",
  },
  {
    name: "Commonwealth Bank",
    href: "/compare-lenders/commonwealth-bank",
    text: "Review CommBank loan options, features and comparison points.",
  },
  {
    name: "Westpac",
    href: "/compare-lenders/westpac",
    text: "Compare Westpac property finance and lending pathways.",
  },
  {
    name: "NAB",
    href: "/compare-lenders/nab",
    text: "Explore NAB home loan, refinance and lending options.",
  },
  {
    name: "Macquarie",
    href: "/compare-lenders/macquarie",
    text: "Compare Macquarie lending options and borrower fit.",
  },
  {
    name: "ING",
    href: "/compare-lenders/ing",
    text: "Review ING loan options, features and comparison factors.",
  },
];

const comparePoints = [
  "Interest rates and comparison rates",
  "Fees and upfront costs",
  "Offset and redraw features",
  "Fixed, variable and split options",
  "Approval policy and borrower fit",
  "Loan purpose and repayment flexibility",
];

export default function CompareLendersPage() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Compare Lenders
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Compare major Australian lender options.
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
            Explore lender comparison pages for major Australian banks and
            finance providers before choosing a loan pathway.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
            Lender Pages
          </p>

          <h2 className="text-4xl font-bold text-slate-950">
            Start with the lender you want to compare.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lenders.map((lender) => (
            <Link
              key={lender.href}
              href={lender.href}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-2xl font-bold text-slate-950">
                {lender.name}
              </h3>

              <p className="mt-3 text-slate-600">{lender.text}</p>

              <span className="mt-6 inline-block font-semibold text-blue-700">
                Compare lender →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
              What To Compare
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              The best lender depends on the borrower, not just the brand.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Major lenders can differ across pricing, policy, loan features,
              approval criteria, turnaround time and borrower suitability.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <ul className="space-y-4 text-slate-700">
              {comparePoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-700" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-blue-700 px-8 py-14 text-center text-white md:px-16">
          <h2 className="text-4xl font-bold">
            Need help comparing lender options?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Compare lenders based on your loan type, borrower profile and
            lending goals.
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