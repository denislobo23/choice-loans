import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vehicle Finance",
  description:
    "Compare vehicle finance options for cars, utes and light commercial vehicles.",
  alternates: { canonical: "/loan-solutions/asset-finance/vehicle-finance" },
};

const vehicleFinanceTopics = [
  "Cars and SUVs",
  "Commercial vehicles",
  "Vans and delivery vehicles",
  "Utes and trade vehicles",
  "Fleet finance",
  "Novated lease options",
];

const considerations = [
  {
    title: "Total cost",
    text: "Compare interest rates, fees, loan terms and repayment structures to understand the total cost of finance.",
  },
  {
    title: "Repayment flexibility",
    text: "Look at loan terms, balloon payments, seasonal repayments and early payout options.",
  },
  {
    title: "Business use",
    text: "Vehicle finance structures may differ depending on whether the vehicle is used personally, commercially or for fleet operations.",
  },
];

const process = [
  "Identify the vehicle requirement",
  "Review your financial position",
  "Compare finance structures",
  "Prepare documentation",
  "Obtain approval and settlement",
];

export default function VehicleFinancePage() {
  return (
    <>
      <section className="relative min-h-[650px] overflow-hidden bg-slate-950 text-white">
        <Image
          src="/images/hero/vehicle-finance-hero.jpg"
          alt="Commercial vehicles and business owners"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
              Vehicle Finance
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Finance vehicles that help your business move forward.
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-100">
              Compare vehicle finance options for cars, vans, utes, commercial
              vehicles and fleet purchases with structures designed around your
              business needs.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-7 py-4 text-center font-semibold text-slate-950 shadow-lg"
              >
                Request Vehicle Finance Help
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
              Flexible Vehicle Finance
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              Solutions for business vehicles and commercial fleets.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Vehicle finance can help businesses preserve working capital while
              acquiring the cars, vans, utes and commercial vehicles needed for
              growth and productivity.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Whether you need one vehicle or an entire fleet, comparing finance
              structures can help align repayments with your business goals.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8">
            <h3 className="text-2xl font-bold text-slate-950">
              Vehicle finance options
            </h3>

            <ul className="mt-6 space-y-4 text-slate-700">
              {vehicleFinanceTopics.map((item) => (
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
              What To Consider
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              Key factors in choosing vehicle finance.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {considerations.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
              The Process
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              From vehicle needs to finance approval.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Understanding the vehicle requirement, repayment structure and
              business objectives can help create a stronger finance application.
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

                <p className="text-lg font-semibold text-slate-900">
                  {step}
                </p>
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
                Compare related finance solutions.
              </h2>
            </div>

            <Link
              href="/loan-solutions/asset-finance/car-loans"
              className="rounded-2xl bg-white/10 p-7 transition hover:bg-white/15"
            >
              <h3 className="text-2xl font-bold">Car Loans</h3>

              <p className="mt-3 text-slate-300">
                Explore personal and business car loan options.
              </p>
            </Link>

            <Link
              href="/loan-solutions/asset-finance/business-loans"
              className="rounded-2xl bg-white/10 p-7 transition hover:bg-white/15"
            >
              <h3 className="text-2xl font-bold">Business Loans</h3>

              <p className="mt-3 text-slate-300">
                Compare funding options for growth and cash flow.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-blue-700 px-8 py-14 text-center text-white md:px-16">
          <h2 className="text-4xl font-bold">
            Ready to finance your next vehicle?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Compare vehicle finance options and choose a structure that supports
            your business goals.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-7 py-4 font-semibold text-blue-700"
            >
              Request Vehicle Finance Help
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}