import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ChoiceLoans",
  description:
    "Learn about ChoiceLoans and how we help Australians compare property finance, asset finance and lending options.",
  alternates: { canonical: "/about" },
};

const propertyLinks = [
  ["Home Loans", "/loan-solutions/property-finance/home-loans"],
  ["Refinance", "/loan-solutions/property-finance/refinance"],
  ["First Home Buyers", "/loan-solutions/property-finance/first-home-buyers"],
  ["Investment Loans", "/loan-solutions/property-finance/investment-loans"],
  ["Commercial Property Loans", "/loan-solutions/property-finance/commercial-property-loans"],
];

const assetLinks = [
  ["Car Loans", "/loan-solutions/asset-finance/car-loans"],
  ["Vehicle Finance", "/loan-solutions/asset-finance/vehicle-finance"],
  ["Equipment Finance", "/loan-solutions/asset-finance/equipment-finance"],
  ["Truck Finance", "/loan-solutions/asset-finance/truck-finance"],
  ["Machinery Finance", "/loan-solutions/asset-finance/machinery-finance"],
  ["Business Loans", "/loan-solutions/asset-finance/business-loans"],
  ["Working Capital Finance", "/loan-solutions/asset-finance/working-capital-finance"],
];

const values = [
  {
    title: "Independent information",
    text: "We organise lending information clearly so borrowers can compare options with confidence.",
  },
  {
    title: "Clear comparisons",
    text: "We focus on loan types, borrower goals, lender fit and practical finance pathways.",
  },
  {
    title: "Education first",
    text: "Better borrowing decisions start with understanding the options before applying.",
  },
  {
    title: "Borrower focused",
    text: "The goal is to help Australians make more informed property and asset finance decisions.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
              About ChoiceLoans
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">
              Helping Australians compare loan options with confidence.
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-600">
              ChoiceLoans provides clear information across property finance,
              asset finance and business lending so borrowers can better
              understand their options before taking the next step.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/loan-solutions"
                className="rounded-lg bg-blue-700 px-7 py-4 text-center font-semibold text-white"
              >
                View Loan Solutions
              </Link>

              <Link
                href="/contact"
                className="rounded-lg border border-slate-300 px-7 py-4 text-center font-semibold text-slate-900"
              >
                Request a Review
              </Link>
            </div>
          </div>

          <div className="relative h-[430px] overflow-hidden rounded-3xl shadow-sm">
            <Image
              src="/images/hero/about-hero.jpg"
              alt="ChoiceLoans finance team"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
              Who We Are
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              Independent, transparent and borrower focused.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              ChoiceLoans was created to help borrowers cut through the noise
              and compare lending pathways in plain English.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              We do not pretend every loan is the same. The right option depends
              on your goal, income, deposit, cash flow, asset type, lender
              criteria and long-term plans.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {values.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
              What We Compare
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              A wide range of loan and finance options.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-950">
                Property Finance
              </h3>

              <div className="mt-6 divide-y divide-slate-200">
                {propertyLinks.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center justify-between py-4 font-semibold text-slate-700 hover:text-blue-700"
                  >
                    {label}
                    <span>→</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-950">
                Asset Finance
              </h3>

              <div className="mt-6 divide-y divide-slate-200">
                {assetLinks.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center justify-between py-4 font-semibold text-slate-700 hover:text-blue-700"
                  >
                    {label}
                    <span>→</span>
                  </Link>
                ))}
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
            Start with the loan type you need and compare pathways before making
            a lending decision.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-7 py-4 font-semibold text-blue-700"
            >
              Request a Loan Review
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}