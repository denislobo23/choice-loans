import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Loans",
  description:
    "Compare business loan options to fund growth, cash flow or new equipment for your company.",
  alternates: { canonical: "/loan-solutions/asset-finance/business-loans" },
};

const businessLoanTopics = [
  "Business expansion loans",
  "Cash flow finance",
  "Stock and inventory funding",
  "Equipment and asset purchases",
  "Debt consolidation for business",
  "Short-term working capital needs",
];

const considerations = [
  {
    title: "Loan purpose",
    text: "Business lending works best when the funding purpose is clear, measurable and connected to revenue, cash flow or operational needs.",
  },
  {
    title: "Repayment capacity",
    text: "Lenders may review business revenue, trading history, expenses, existing debts, cash flow and director profile.",
  },
  {
    title: "Security position",
    text: "Some business loans may be unsecured, while others may require property, assets or other security depending on the amount and risk profile.",
  },
];

const process = [
  "Clarify the business funding goal",
  "Review revenue and cash flow",
  "Compare secured and unsecured options",
  "Prepare business documents",
  "Apply with a suitable lender",
];

export default function BusinessLoansPage() {
  return (
    <>
      <section className="relative min-h-[650px] overflow-hidden bg-slate-950 text-white">
        <Image
          src="/images/hero/business-loans-hero.jpg"
          alt="Business owners reviewing finance documents"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
              Business Loans
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Business loan options for growth, cash flow and operations.
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-100">
              Compare business finance pathways for expansion, working capital,
              stock purchases, equipment, debt restructuring and operational
              funding.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-7 py-4 text-center font-semibold text-slate-950 shadow-lg"
              >
                Request Business Finance Help
              </Link>

              <Link
                href="/loan-solutions/asset-finance"
                className="rounded-lg border border-white px-7 py-4 text-center font-semibold text-white"
              >
                View Asset Finance
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
              Business Funding Pathways
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              Business loans should match the purpose, timing and cash flow of the business.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Business finance can support growth, operations, stock purchases,
              cash-flow gaps, equipment, hiring, premises, restructuring and
              short-term working capital needs.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              ChoiceLoans helps business owners understand the main loan
              pathways before approaching a lender or broker.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8">
            <h3 className="text-2xl font-bold text-slate-950">
              Business loan topics
            </h3>

            <ul className="mt-6 space-y-4 text-slate-700">
              {businessLoanTopics.map((item) => (
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
              Business finance depends on revenue, risk, purpose and structure.
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
              Business Loan Process
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              From funding need to lender-ready application.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A stronger business finance application usually starts with a
              clear funding purpose, current financial position, repayment plan
              and suitable lender pathway.
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
                Related Finance
              </p>
              <h2 className="text-4xl font-bold">
                Compare related business and asset finance options.
              </h2>
            </div>

            <Link
              href="/loan-solutions/asset-finance/working-capital-finance"
              className="rounded-2xl bg-white/10 p-7 transition hover:bg-white/15"
            >
              <h3 className="text-2xl font-bold">Working Capital Finance</h3>
              <p className="mt-3 text-slate-300">
                Review short-term funding options for cash-flow and operational
                needs.
              </p>
            </Link>

            <Link
              href="/loan-solutions/asset-finance/equipment-finance"
              className="rounded-2xl bg-white/10 p-7 transition hover:bg-white/15"
            >
              <h3 className="text-2xl font-bold">Equipment Finance</h3>
              <p className="mt-3 text-slate-300">
                Finance equipment purchases for productivity, operations and
                business growth.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-blue-700 px-8 py-14 text-center text-white md:px-16">
          <h2 className="text-4xl font-bold">
            Compare business loan options before you apply.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Review business funding pathways based on cash flow, loan purpose,
            repayment capacity and lender fit.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-7 py-4 font-semibold text-blue-700"
            >
              Request Business Finance Help
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}