import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "First Home Buyer Loans",
  description:
    "Compare first home buyer loan options, deposits, grants and pathways into the property market.",
  alternates: { canonical: "/loan-solutions/property-finance/first-home-buyers" },
};

const firstHomeTopics = [
  "Deposit size and savings history",
  "First home owner grants and schemes",
  "Borrowing capacity and repayments",
  "Stamp duty and upfront costs",
  "Loan pre-approval",
  "Lenders Mortgage Insurance",
];

const keyConsiderations = [
  {
    title: "Deposit and genuine savings",
    text: "Your deposit, savings pattern and available funds after purchase can affect lender choice and approval strength.",
  },
  {
    title: "Government support",
    text: "First home buyers may be eligible for grants, concessions or government schemes depending on their state and circumstances.",
  },
  {
    title: "Repayment comfort",
    text: "A loan may be approved on paper, but the real question is whether repayments remain comfortable after moving in.",
  },
];

const buyingSteps = [
  "Understand your budget",
  "Check deposit and upfront costs",
  "Compare loan options",
  "Get pre-approval",
  "Make an offer or bid",
  "Move through approval and settlement",
];

export default function FirstHomeBuyersPage() {
  return (
    <>
      <section className="relative min-h-[650px] overflow-hidden bg-slate-950 text-white">
        <Image
          src="/images/hero/first-home-buyers-hero.jpg"
          alt="First home buyers standing outside their new home"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
              First Home Buyers
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              First home buyer loan options made clearer.
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-100">
              Compare first home buyer pathways, understand deposits, grants,
              lender requirements and the key steps before applying for your
              first home loan.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-7 py-4 text-center font-semibold text-slate-950 shadow-lg"
              >
                Request First Home Buyer Help
              </Link>

              <Link
                href="/learning-centre/first-home-buyer-guides"
                className="rounded-lg border border-white px-7 py-4 text-center font-semibold text-white"
              >
                Read First Home Buyer Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
              Buying Your First Home
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              Your first loan decision should be clear, not rushed.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Buying your first home involves more than finding a property and
              choosing a lender. Your deposit, income, expenses, government
              support, borrowing capacity, upfront costs and loan structure all
              influence what is possible.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              ChoiceLoans helps first home buyers understand the main lending
              pathways before taking the next step toward approval.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8">
            <h3 className="text-2xl font-bold text-slate-950">
              First home buyer topics
            </h3>

            <ul className="mt-6 space-y-4 text-slate-700">
              {firstHomeTopics.map((item) => (
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
              What Matters Most
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              Strong first home buyer planning starts before the application.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {keyConsiderations.map((item) => (
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
              First Home Buyer Process
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              From budget check to settlement.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A clear process can help first home buyers avoid surprises. Before
              making offers, it is important to understand borrowing limits,
              upfront costs, approval requirements and repayment comfort.
            </p>
          </div>

          <div className="space-y-4">
            {buyingSteps.map((step, index) => (
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
                Compare related home loan pathways.
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
              href="/loan-solutions/property-finance/refinance"
              className="rounded-2xl bg-white/10 p-7 transition hover:bg-white/15"
            >
              <h3 className="text-2xl font-bold">Refinance</h3>
              <p className="mt-3 text-slate-300">
                Review options for reducing repayments, restructuring debt or
                switching lenders.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-blue-700 px-8 py-14 text-center text-white md:px-16">
          <h2 className="text-4xl font-bold">
            Ready to understand your first home loan options?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Compare first home buyer pathways and prepare for a stronger loan
            conversation before you apply.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-7 py-4 font-semibold text-blue-700"
            >
              Request First Home Buyer Help
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}