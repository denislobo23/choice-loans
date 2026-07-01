import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equipment Finance",
  description:
    "Compare equipment finance options for purchasing business equipment and machinery.",
  alternates: { canonical: "/loan-solutions/asset-finance/equipment-finance" },
};

const equipmentTopics = [
  "Construction equipment finance",
  "Trade tools and machinery",
  "Office and technology equipment",
  "Medical and professional equipment",
  "Agricultural equipment",
  "Specialised business equipment",
];

const considerations = [
  {
    title: "Equipment purpose",
    text: "The right finance structure depends on whether the equipment supports revenue, productivity, operations or replacement needs.",
  },
  {
    title: "Cash-flow impact",
    text: "Compare repayments, loan terms, fees and tax considerations so the equipment supports the business rather than straining it.",
  },
  {
    title: "Asset type",
    text: "Different lenders may treat vehicles, plant, tools, technology and specialised equipment differently.",
  },
];

const process = [
  "Identify the equipment need",
  "Review cost and useful life",
  "Compare finance structures",
  "Prepare business documents",
  "Apply for approval",
];

export default function EquipmentFinancePage() {
  return (
    <>
      <section className="relative min-h-[650px] overflow-hidden bg-slate-950 text-white">
        <Image
          src="/images/hero/equipment-finance-hero.jpg"
          alt="Business owners reviewing equipment finance options"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
              Equipment Finance
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Finance the equipment your business needs to grow.
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-100">
              Compare equipment finance options for tools, machinery,
              technology, professional equipment and specialised business assets.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-7 py-4 text-center font-semibold text-slate-950 shadow-lg"
              >
                Request Equipment Finance Help
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
              Business Equipment Lending
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              Equipment finance can help preserve cash while funding productive assets.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Businesses often need equipment before the full return on that
              equipment is realised. Finance can help spread the cost while the
              asset supports productivity, revenue or operational efficiency.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              ChoiceLoans helps business owners compare equipment finance
              pathways before committing to a lender or supplier finance offer.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8">
            <h3 className="text-2xl font-bold text-slate-950">
              Equipment finance topics
            </h3>

            <ul className="mt-6 space-y-4 text-slate-700">
              {equipmentTopics.map((item) => (
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
              Strong equipment finance balances cost, usefulness and business cash flow.
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
              Equipment Finance Process
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              From equipment need to finance approval.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Before applying, it is useful to understand the equipment cost,
              expected benefit, repayment structure, documentation requirements
              and lender criteria.
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
                Related Asset Finance
              </p>

              <h2 className="text-4xl font-bold">
                Compare related business asset finance options.
              </h2>
            </div>

            <Link
              href="/loan-solutions/asset-finance/machinery-finance"
              className="rounded-2xl bg-white/10 p-7 transition hover:bg-white/15"
            >
              <h3 className="text-2xl font-bold">Machinery Finance</h3>

              <p className="mt-3 text-slate-300">
                Finance machinery for construction, agriculture, logistics and
                operations.
              </p>
            </Link>

            <Link
              href="/loan-solutions/asset-finance/business-loans"
              className="rounded-2xl bg-white/10 p-7 transition hover:bg-white/15"
            >
              <h3 className="text-2xl font-bold">Business Loans</h3>

              <p className="mt-3 text-slate-300">
                Compare funding options for growth, cash flow and business
                needs.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-blue-700 px-8 py-14 text-center text-white md:px-16">
          <h2 className="text-4xl font-bold">
            Compare equipment finance options before you buy.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Review equipment finance structures based on business purpose,
            repayment comfort, asset type and lender fit.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-7 py-4 font-semibold text-blue-700"
            >
              Request Equipment Finance Help
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}