import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Working Capital Finance",
  description:
    "Compare working capital finance options to support business cash flow and operations.",
  alternates: { canonical: "/loan-solutions/asset-finance/working-capital-finance" },
};

const topics = [
  "Cash-flow funding",
  "Short-term business finance",
  "Stock and inventory funding",
  "Invoice and receivables support",
  "Seasonal trading gaps",
  "Operational expense funding",
];

const considerations = [
  {
    title: "Cash-flow timing",
    text: "Working capital finance is often used to manage timing gaps between expenses, invoices, stock purchases and customer payments.",
  },
  {
    title: "Funding purpose",
    text: "The clearer the purpose, the easier it is to compare suitable short-term finance structures.",
  },
  {
    title: "Repayment capacity",
    text: "Lenders may assess business revenue, cash-flow history, trading stability, existing debts and repayment comfort.",
  },
];

const process = [
  "Identify the cash-flow need",
  "Review business revenue and expenses",
  "Compare funding structures",
  "Prepare documents",
  "Apply for approval",
];

export default function WorkingCapitalFinancePage() {
  return (
    <>
      <section className="relative min-h-[650px] overflow-hidden bg-slate-950 text-white">
        <Image
          src="/images/hero/working-capital-finance-hero.jpg"
          alt="Business owner reviewing working capital finance documents"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
              Working Capital Finance
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Working capital finance for business cash-flow needs.
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-100">
              Compare short-term finance options to support cash flow, stock
              purchases, operating expenses, seasonal gaps and business growth.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-7 py-4 text-center font-semibold text-slate-950 shadow-lg"
              >
                Request Working Capital Help
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
              Cash-Flow Funding
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              Working capital finance can help smooth business cash-flow gaps.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Many businesses are profitable on paper but still experience cash
              pressure because expenses, stock purchases, invoices and customer
              payments do not always line up neatly.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              ChoiceLoans helps business owners compare working capital finance
              pathways before choosing a lender or short-term funding option.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8">
            <h3 className="text-2xl font-bold text-slate-950">
              Working capital topics
            </h3>

            <ul className="mt-6 space-y-4 text-slate-700">
              {topics.map((item) => (
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
              The right working capital option depends on timing, purpose and repayment capacity.
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
              Working Capital Process
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              From cash-flow need to funding comparison.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Before applying, review why the funding is needed, how long it is
              needed for, how it will be repaid and what structure best fits the
              business.
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
                Compare related business finance options.
              </h2>
            </div>

            <Link
              href="/loan-solutions/asset-finance/business-loans"
              className="rounded-2xl bg-white/10 p-7 transition hover:bg-white/15"
            >
              <h3 className="text-2xl font-bold">Business Loans</h3>
              <p className="mt-3 text-slate-300">
                Compare business funding for growth, stock, expansion and
                operations.
              </p>
            </Link>

            <Link
              href="/loan-solutions/asset-finance/equipment-finance"
              className="rounded-2xl bg-white/10 p-7 transition hover:bg-white/15"
            >
              <h3 className="text-2xl font-bold">Equipment Finance</h3>
              <p className="mt-3 text-slate-300">
                Finance tools, equipment, technology and specialised business
                assets.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-blue-700 px-8 py-14 text-center text-white md:px-16">
          <h2 className="text-4xl font-bold">
            Compare working capital finance options.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Review short-term funding pathways based on your cash-flow timing,
            business purpose and repayment capacity.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-7 py-4 font-semibold text-blue-700"
            >
              Request Working Capital Help
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}