import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChoiceLoans | Compare Home Loans, Refinance & Asset Finance in Australia",
  description:
    "Compare home loans, refinancing, investment loans, business finance and asset finance across Australia. Start your loan review with ChoiceLoans.",
  alternates: { canonical: "/" },
};

const propertyServices = [
  "Home Loans",
  "Refinance",
  "First Home Buyers",
  "Investment Loans",
  "Commercial Property Loans",
];

const assetServices = [
  "Car Loans",
  "Vehicle Finance",
  "Equipment Finance",
  "Truck Finance",
  "Machinery Finance",
  "Business Loans",
];

export default function Home() {
  return (
    <>
    <section className="relative min-h-[720px] overflow-hidden bg-slate-950 text-white">
  <Image
    src="/images/hero/choiceloans-hero.jpg"
    alt="Australian borrowers comparing loan options"
    fill
    priority
    className="object-cover"
  />

<div className="absolute inset-0 bg-slate-950/20" />
<div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/20 to-transparent" />

  <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-6">
    <div className="max-w-3xl">
      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
        Property Finance • Asset Finance • Business Lending
      </p>

      <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
        Compare loan options with confidence.
      </h1>

      <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-100">
        ChoiceLoans helps Australians explore home loans, refinancing,
        investment loans, commercial property finance, asset finance and
        business lending options from leading Australian lenders.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/loan-solutions"
          className="rounded-lg bg-white px-7 py-4 text-center font-semibold text-slate-950 shadow-lg"
        >
          Explore Loan Solutions
        </Link>

        <Link
          href="/contact"
          className="rounded-lg border border-white px-7 py-4 text-center font-semibold text-white"
        >
          Request a Loan Review
        </Link>
      </div>
    </div>
  </div>
</section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
            Loan Solutions
          </p>

          <h2 className="text-4xl font-bold text-slate-950">
            Lending options for property, business and assets.
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Whether you are buying a home, refinancing, investing, purchasing a
            vehicle, funding equipment or growing a business, ChoiceLoans is
            designed to help borrowers understand their options clearly.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="relative h-64">
              <Image
                src="/images/services/property-finance.jpg"
                alt="Family looking at a modern home"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-950">
                Property Finance
              </h3>

              <p className="mt-3 text-slate-600">
                Compare loan pathways for residential, investment and commercial
                property needs.
              </p>

              <ul className="mt-6 space-y-3 text-slate-700">
                {propertyServices.map((service) => (
                  <li key={service} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-blue-700" />
                    {service}
                  </li>
                ))}
              </ul>

              <Link
                href="/loan-solutions/property-finance"
                className="mt-8 inline-block font-semibold text-blue-700"
              >
                View property finance →
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="relative h-64">
              <Image
                src="/images/services/asset-finance.jpg"
                alt="Commercial vehicles and machinery for asset finance"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-950">
                Asset Finance
              </h3>

              <p className="mt-3 text-slate-600">
                Finance vehicles, equipment, machinery and business assets with
                clearer comparison pathways.
              </p>

              <ul className="mt-6 space-y-3 text-slate-700">
                {assetServices.map((service) => (
                  <li key={service} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-blue-700" />
                    {service}
                  </li>
                ))}
              </ul>

              <Link
                href="/loan-solutions/asset-finance"
                className="mt-8 inline-block font-semibold text-blue-700"
              >
                View asset finance →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <div className="relative h-[380px] overflow-hidden rounded-3xl">
            <Image
              src="/images/services/loan-review.jpg"
              alt="Loan review consultation"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
              Why ChoiceLoans
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              Understand your options before making a lending decision.
            </h2>

            <div className="mt-8 grid gap-6">
              <div>
                <h3 className="text-xl font-bold text-slate-950">
                  Compare lenders
                </h3>
                <p className="mt-2 text-slate-600">
                  Learn how major Australian lenders differ across loan types,
                  features and borrower profiles.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-950">
                  Use smart calculators
                </h3>
                <p className="mt-2 text-slate-600">
                  Estimate borrowing power, repayments, refinance savings and
                  loan comparison scenarios.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-950">
                  Read plain-English guides
                </h3>
                <p className="mt-2 text-slate-600">
                  Understand home loans, refinancing, first home buyer options,
                  investment loans and finance basics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-blue-700 px-8 py-14 text-center text-white md:px-16">
          <h2 className="text-4xl font-bold">
            Ready to compare your loan options?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Start with the loan type you need, compare your options and request
            help when you are ready.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-7 py-4 font-semibold text-blue-700"
            >
              Request a Call Back
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}