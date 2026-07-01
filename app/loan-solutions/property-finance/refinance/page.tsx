import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refinance Loans",
  description:
    "Compare refinancing options to potentially reduce your interest rate, repayments or access equity.",
  alternates: { canonical: "/loan-solutions/property-finance/refinance" },
};

const refinanceReasons = [
  "Review your current interest rate",
  "Reduce monthly repayments",
  "Access equity for future plans",
  "Consolidate debts into one loan",
  "Switch loan features or lender",
  "Prepare for investment or renovation goals",
];

const comparisonPoints = [
  {
    title: "Current loan position",
    text: "Start by reviewing your balance, rate, repayments, loan term, fees and remaining fixed-rate conditions.",
  },
  {
    title: "Potential savings",
    text: "A refinance may reduce repayments, but total cost, fees and long-term interest should also be considered.",
  },
  {
    title: "Loan purpose",
    text: "Refinancing for a lower rate is different from refinancing to access equity, consolidate debt or restructure cash flow.",
  },
];

const process = [
  "Review your current mortgage",
  "Clarify your refinance goal",
  "Estimate savings and costs",
  "Compare lender options",
  "Prepare for approval and settlement",
];

export default function RefinancePage() {
  return (
    <>
      <section className="relative min-h-[650px] overflow-hidden bg-slate-950 text-white">
        <Image
          src="/images/hero/refinance-hero.jpg"
          alt="Couple reviewing refinance documents at home"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
              Refinance
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Review your mortgage and compare refinance options.
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-100">
              Refinancing may help reduce repayments, access equity, consolidate
              debt or restructure your loan to better suit your current goals.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-7 py-4 text-center font-semibold text-slate-950 shadow-lg"
              >
                Request a Refinance Review
              </Link>

              <Link
                href="/calculators/refinance-savings"
                className="rounded-lg border border-white px-7 py-4 text-center font-semibold text-white"
              >
                Estimate Refinance Savings
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
              Refinance Home Loans
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              Refinancing is not just about chasing a lower rate.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A refinance decision should consider interest rates, lender fees,
              loan term, repayment flexibility, equity position, cash flow and
              long-term cost. A cheaper-looking loan is not always the better
              loan if the structure does not suit your goals.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              ChoiceLoans helps borrowers think through the main refinance
              pathways before speaking with a broker or lender.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8">
            <h3 className="text-2xl font-bold text-slate-950">
              Common refinance goals
            </h3>

            <ul className="mt-6 space-y-4 text-slate-700">
              {refinanceReasons.map((item) => (
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
              The real refinance question is whether the new structure improves your position.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {comparisonPoints.map((point) => (
              <div key={point.title} className="rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-950">
                  {point.title}
                </h3>
                <p className="mt-3 text-slate-600">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
              Refinance Process
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              Move from current loan review to informed comparison.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A refinance works best when the purpose is clear. Before applying,
              compare the cost of staying put against the cost and benefit of
              moving to a different lender or loan structure.
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
                Compare other property finance pathways.
              </h2>
            </div>

            <Link
              href="/loan-solutions/property-finance/home-loans"
              className="rounded-2xl bg-white/10 p-7 transition hover:bg-white/15"
            >
              <h3 className="text-2xl font-bold">Home Loans</h3>
              <p className="mt-3 text-slate-300">
                Compare home loan options for buying, upgrading or changing your
                property finance.
              </p>
            </Link>

            <Link
              href="/loan-solutions/property-finance/investment-loans"
              className="rounded-2xl bg-white/10 p-7 transition hover:bg-white/15"
            >
              <h3 className="text-2xl font-bold">Investment Loans</h3>
              <p className="mt-3 text-slate-300">
                Explore finance options for property investors and portfolio
                growth.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-blue-700 px-8 py-14 text-center text-white md:px-16">
          <h2 className="text-4xl font-bold">
            Ready to review your current mortgage?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Compare refinance options based on your repayment goals, equity
            position and long-term financial plans.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-7 py-4 font-semibold text-blue-700"
            >
              Request a Refinance Review
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}