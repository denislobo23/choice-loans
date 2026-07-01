import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Truck Finance",
  description:
    "Compare truck and heavy vehicle finance options for business and commercial use.",
  alternates: { canonical: "/loan-solutions/asset-finance/truck-finance" },
};

const truckTopics = [
  "Prime mover finance",
  "Rigid truck finance",
  "Trailer finance",
  "Transport business lending",
  "Fleet expansion finance",
  "Refinance existing truck loans",
];

const considerations = [
  {
    title: "Vehicle type",
    text: "Truck finance may vary depending on whether you are financing a prime mover, rigid truck, trailer or specialised transport vehicle.",
  },
  {
    title: "Business cash flow",
    text: "Repayment structures should align with freight contracts, revenue cycles, operating costs and working capital needs.",
  },
  {
    title: "Asset and lender fit",
    text: "Different lenders may assess age, mileage, business history, deposit, ABN status and transport industry risk differently.",
  },
];

const process = [
  "Identify the truck or fleet need",
  "Review business cash flow",
  "Compare finance structures",
  "Prepare vehicle and business details",
  "Apply for approval",
];

export default function TruckFinancePage() {
  return (
    <>
      <section className="relative min-h-[650px] overflow-hidden bg-slate-950 text-white">
        <Image
          src="/images/hero/truck-finance-hero.jpg"
          alt="Truck operator reviewing finance options in a transport yard"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
              Truck Finance
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Truck finance for operators, fleets and transport businesses.
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-100">
              Compare truck finance options for prime movers, rigid trucks,
              trailers, fleet expansion and refinancing existing transport debt.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-7 py-4 text-center font-semibold text-slate-950 shadow-lg"
              >
                Request Truck Finance Help
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
              Transport Finance
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              Truck finance should match the asset, route, contracts and cash flow.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Transport businesses often depend on reliable vehicles to produce
              income. Finance should be structured around the type of truck,
              expected use, repayment capacity and business cash-flow cycle.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              ChoiceLoans helps operators compare finance pathways before
              committing to a lender, dealer finance offer or fleet purchase.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8">
            <h3 className="text-2xl font-bold text-slate-950">
              Truck finance topics
            </h3>

            <ul className="mt-6 space-y-4 text-slate-700">
              {truckTopics.map((item) => (
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
              Strong truck finance supports cash flow, uptime and business growth.
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
              Truck Finance Process
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              From transport need to finance approval.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Before applying, it is useful to understand the truck price,
              deposit, income position, business history, asset condition and
              repayment structure.
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
                Compare related commercial finance options.
              </h2>
            </div>

            <Link
              href="/loan-solutions/asset-finance/vehicle-finance"
              className="rounded-2xl bg-white/10 p-7 transition hover:bg-white/15"
            >
              <h3 className="text-2xl font-bold">Vehicle Finance</h3>

              <p className="mt-3 text-slate-300">
                Finance cars, vans, utes and commercial vehicles for business
                use.
              </p>
            </Link>

            <Link
              href="/loan-solutions/asset-finance/equipment-finance"
              className="rounded-2xl bg-white/10 p-7 transition hover:bg-white/15"
            >
              <h3 className="text-2xl font-bold">Equipment Finance</h3>

              <p className="mt-3 text-slate-300">
                Compare finance options for equipment, tools and business
                assets.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-blue-700 px-8 py-14 text-center text-white md:px-16">
          <h2 className="text-4xl font-bold">
            Compare truck finance before you commit.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Review transport finance pathways based on asset type, business
            cash flow, repayment structure and lender fit.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-7 py-4 font-semibold text-blue-700"
            >
              Request Truck Finance Help
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}