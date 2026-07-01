import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investment Property Loans",
  description:
    "Compare investment loan options, equity strategies and portfolio finance for property investors.",
  alternates: { canonical: "/loan-solutions/property-finance/investment-loans" },
};

const investmentTopics = [
  "Investment property loans",
  "Interest-only loan options",
  "Using equity to invest",
  "Principal and interest structures",
  "Portfolio lending considerations",
  "Rental income and borrowing capacity",
];

const considerations = [
  {
    title: "Cash flow",
    text: "Investment loans should be assessed against rental income, repayments, expenses, buffers and vacancy risk.",
  },
  {
    title: "Loan structure",
    text: "Investors may compare interest-only, principal and interest, offset accounts, redraw and split-loan structures.",
  },
  {
    title: "Growth strategy",
    text: "The right finance approach depends on whether you are buying one property, building a portfolio or restructuring existing debt.",
  },
];

const process = [
  "Define your investment goal",
  "Review equity and borrowing capacity",
  "Compare loan structures",
  "Assess rental and cash-flow position",
  "Prepare for lender approval",
];

export default function InvestmentLoansPage() {
  return (
    <>
      <section className="relative min-h-[650px] overflow-hidden bg-slate-950 text-white">
        <Image
          src="/images/hero/investment-loans-hero.jpg"
          alt="Property investors outside a modern apartment building"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
              Investment Loans
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Investment property loan options for wealth building.
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-100">
              Compare investment loan structures, equity strategies and lender
              pathways for purchasing or refinancing an investment property.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-7 py-4 text-center font-semibold text-slate-950 shadow-lg"
              >
                Request an Investment Loan Review
              </Link>

              <Link
                href="/learning-centre/investment-property-guides"
                className="rounded-lg border border-white px-7 py-4 text-center font-semibold text-white"
              >
                Read Investor Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
              Property Investment Finance
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              Investment lending needs more than a simple rate comparison.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Investment property finance should consider borrowing capacity,
              rental income, tax position, repayment structure, equity access,
              cash-flow risk and long-term portfolio goals.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              ChoiceLoans helps investors understand the lending pathways
              available before making a property investment decision.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8">
            <h3 className="text-2xl font-bold text-slate-950">
              Investment loan topics
            </h3>

            <ul className="mt-6 space-y-4 text-slate-700">
              {investmentTopics.map((item) => (
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
              What Investors Should Compare
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              Strong investment finance supports both cash flow and strategy.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {considerations.map((item) => (
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
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
              Investment Loan Process
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              From investment goal to lender-ready position.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Before applying, investors should understand how lenders may treat
              rental income, existing debts, equity, buffers and repayment
              structures.
            </p>
          </div>

          <div className="space-y-4">
            {process.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-700 font-bold text-white">
                  {index + 1}
                </div>
                <p className="text-lg font-semibold text-slate-900">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-300">
                Related Property Finance
              </p>
              <h2 className="text-4xl font-bold">
                Compare related lending pathways.
              </h2>
            </div>

            <Link
              href="/loan-solutions/property-finance/home-loans"
              className="rounded-2xl bg-white/10 p-7 transition hover:bg-white/15"
            >
              <h3 className="text-2xl font-bold">Home Loans</h3>
              <p className="mt-3 text-slate-300">
                Compare owner-occupier home loan options for buying or
                upgrading.
              </p>
            </Link>

            <Link
              href="/loan-solutions/property-finance/refinance"
              className="rounded-2xl bg-white/10 p-7 transition hover:bg-white/15"
            >
              <h3 className="text-2xl font-bold">Refinance</h3>
              <p className="mt-3 text-slate-300">
                Review refinancing options for restructuring or accessing
                equity.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-blue-700 px-8 py-14 text-center text-white md:px-16">
          <h2 className="text-4xl font-bold">
            Compare investment loan options before you buy.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Review your borrowing capacity, equity position and investment loan
            structure before taking the next step.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-7 py-4 font-semibold text-blue-700"
            >
              Request an Investment Loan Review
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}