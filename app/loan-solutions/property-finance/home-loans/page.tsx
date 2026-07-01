import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Loans",
  description:
    "Compare home loan options, structures and features to find the right fit for your property purchase.",
  alternates: { canonical: "/loan-solutions/property-finance/home-loans" },
};

const loanTypes = [
  "Owner-occupier home loans",
  "First home buyer loans",
  "Refinance home loans",
  "Investment property loans",
  "Construction loans",
  "Guarantor loan pathways",
];

const comparisonPoints = [
  {
    title: "Borrowing capacity",
    text: "Understand how income, debts, living expenses, credit history and deposit size can affect how much you may be able to borrow.",
  },
  {
    title: "Loan structure",
    text: "Compare principal and interest, interest-only, fixed, variable, split loans, offset accounts and redraw features.",
  },
  {
    title: "Lender fit",
    text: "Different lenders assess borrowers differently. The right lender often depends on your income type, deposit, property goal and risk profile.",
  },
];

const process = [
  "Clarify your property goal",
  "Estimate your borrowing position",
  "Compare suitable loan structures",
  "Review lender options",
  "Prepare for approval",
];

export default function HomeLoansPage() {
  return (
    <>
      <section className="relative min-h-[650px] overflow-hidden bg-slate-950 text-white">
        <Image
          src="/images/hero/home-loans-hero.jpg"
          alt="Family standing outside a modern Australian home"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
              Home Loans
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Home loan options for buyers, owners and refinancers.
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-100">
              Compare home loan pathways for buying a property, upgrading your
              home, refinancing an existing mortgage or preparing for your next
              move.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-7 py-4 text-center font-semibold text-slate-950 shadow-lg"
              >
                Request a Home Loan Review
              </Link>

              <Link
                href="/calculators/mortgage-repayment"
                className="rounded-lg border border-white px-7 py-4 text-center font-semibold text-white"
              >
                Estimate Repayments
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
              Compare Home Loan Pathways
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              A good home loan is not just about the lowest advertised rate
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The right home loan depends on your borrowing position, deposit,
              repayment comfort, lender policy, property goal and future plans.
              ChoiceLoans helps organise those moving parts so borrowers can
              compare options with more confidence before applying.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Whether you are buying your first home, upgrading, refinancing or
              investing, the loan structure can affect cash flow, flexibility
              and long-term financial outcomes.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8">
            <h3 className="text-2xl font-bold text-slate-950">
              Common home loan needs
            </h3>

            <ul className="mt-6 space-y-4 text-slate-700">
              {loanTypes.map((item) => (
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
              The strongest loan choice usually balances rate, structure and lender fit              
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
              Home Loan Process
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              From borrowing position to lender selection.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A clear process helps borrowers avoid rushed decisions. Before
              applying, it is useful to understand what lenders may look at and
              how different loan structures could affect your repayments and
              flexibility.
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
                Explore the next step in your property finance journey.
              </h2>
            </div>

            <Link
              href="/loan-solutions/property-finance/refinance"
              className="rounded-2xl bg-white/10 p-7 transition hover:bg-white/15"
            >
              <h3 className="text-2xl font-bold">Refinance</h3>
              <p className="mt-3 text-slate-300">
                Review options for reducing repayments, restructuring debt or
                accessing equity.
              </p>
            </Link>

            <Link
              href="/loan-solutions/property-finance/first-home-buyers"
              className="rounded-2xl bg-white/10 p-7 transition hover:bg-white/15"
            >
              <h3 className="text-2xl font-bold">First Home Buyers</h3>
              <p className="mt-3 text-slate-300">
                Understand deposits, grants, loan structures and buying your
                first property.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-blue-700 px-8 py-14 text-center text-white md:px-16">
          <h2 className="text-4xl font-bold">
            Compare home loan options before you apply.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Review your borrowing position, compare lending pathways and choose
            a structure that suits your property goals.
          </p>


          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-7 py-4 font-semibold text-blue-700"
            >
              Request a Home Loan Review
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}