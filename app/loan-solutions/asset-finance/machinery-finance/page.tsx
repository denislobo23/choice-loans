import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Machinery Finance",
  description:
    "Compare machinery finance options for agricultural, construction and industrial equipment.",
  alternates: { canonical: "/loan-solutions/asset-finance/machinery-finance" },
};

const machineryTopics = [
  "Construction machinery finance",
  "Excavator finance",
  "Loader and earthmoving equipment",
  "Agricultural machinery finance",
  "Industrial machinery loans",
  "Refinance existing machinery debt",
];

const considerations = [
  {
    title: "Machinery type",
    text: "Lenders may assess machinery differently depending on age, condition, resale value, industry use and business purpose.",
  },
  {
    title: "Business productivity",
    text: "Machinery finance should support income, efficiency or capacity rather than simply adding debt to the business.",
  },
  {
    title: "Repayment structure",
    text: "Compare loan term, repayments, balloon payments, seasonal cash flow and total finance cost before committing.",
  },
];

const process = [
  "Identify the machinery requirement",
  "Review cost and asset condition",
  "Compare finance structures",
  "Prepare business and asset details",
  "Apply for approval",
];

export default function MachineryFinancePage() {
  return (
    <>
      <section className="relative min-h-[650px] overflow-hidden bg-slate-950 text-white">
        <Image
          src="/images/hero/machinery-finance-hero.jpg"
          alt="Business owner reviewing machinery finance options on a worksite"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
              Machinery Finance
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Finance machinery that keeps your business moving.
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-100">
              Compare machinery finance options for construction, agriculture,
              transport, industrial operations and specialised business assets.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-7 py-4 text-center font-semibold text-slate-950 shadow-lg"
              >
                Request Machinery Finance Help
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
              Machinery Lending
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              Machinery finance should match the asset, industry and cash flow.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Machinery can be essential for business productivity, but the
              finance structure needs to suit the way the asset is used, the
              income it supports and the business cash-flow cycle.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              ChoiceLoans helps business owners compare machinery finance
              pathways before committing to a lender, supplier or dealer finance
              arrangement.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8">
            <h3 className="text-2xl font-bold text-slate-950">
              Machinery finance topics
            </h3>

            <ul className="mt-6 space-y-4 text-slate-700">
              {machineryTopics.map((item) => (
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
              Strong machinery finance supports productivity without damaging cash flow.
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
              Machinery Finance Process
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              From machinery need to finance approval.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Before applying, it is useful to understand the machinery cost,
              asset age, condition, business purpose, repayment structure and
              lender documentation requirements.
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
                Compare related asset finance options.
              </h2>
            </div>

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

            <Link
              href="/loan-solutions/asset-finance/truck-finance"
              className="rounded-2xl bg-white/10 p-7 transition hover:bg-white/15"
            >
              <h3 className="text-2xl font-bold">Truck Finance</h3>

              <p className="mt-3 text-slate-300">
                Compare truck finance for operators, fleets and transport
                businesses.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-blue-700 px-8 py-14 text-center text-white md:px-16">
          <h2 className="text-4xl font-bold">
            Compare machinery finance before you invest.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Review machinery finance pathways based on asset type, business
            purpose, repayment structure and lender fit.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-7 py-4 font-semibold text-blue-700"
            >
              Request Machinery Finance Help
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}