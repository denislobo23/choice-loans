import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Finance",
  description:
    "Compare home loans, refinancing, first home buyer loans, investment loans and commercial property finance.",
  alternates: { canonical: "/loan-solutions/property-finance" },
};

const propertyServices = [
  {
    title: "Home Loans",
    href: "/loan-solutions/property-finance/home-loans",
    text: "Compare home loan pathways for buying, upgrading or restructuring your property finance.",
  },
  {
    title: "Refinance",
    href: "/loan-solutions/property-finance/refinance",
    text: "Review refinancing options to reduce repayments, access equity or consolidate debt.",
  },
  {
    title: "First Home Buyers",
    href: "/loan-solutions/property-finance/first-home-buyers",
    text: "Understand deposit options, grants, loan structures and first home buyer pathways.",
  },
  {
    title: "Investment Loans",
    href: "/loan-solutions/property-finance/investment-loans",
    text: "Explore lending options for investors building or restructuring a property portfolio.",
  },
  {
    title: "Commercial Property Loans",
    href: "/loan-solutions/property-finance/commercial-property-loans",
    text: "Compare finance options for business premises, commercial property and investment assets.",
  },
];

const benefits = [
  {
    title: "Clearer loan comparison",
    text: "Understand the major differences between loan types, repayment structures, features and lender requirements.",
  },
  {
    title: "Support across buyer stages",
    text: "From first home buyers to refinancers and investors, property finance depends on your goal, deposit, income and risk profile.",
  },
  {
    title: "Pathways beyond the major banks",
    text: "Different lenders may suit different borrowers. ChoiceLoans helps organise the options before you make decisions.",
  },
];

export default function PropertyFinancePage() {
  return (
    <>
      <section className="relative min-h-[620px] overflow-hidden bg-slate-950 text-white">
        <Image
          src="/images/hero/property-finance-hero.jpg"
          alt="Couple viewing a modern home for property finance"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
              Property Finance
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Compare property loan options with confidence.
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-100">
              Explore home loans, refinancing, first home buyer loans,
              investment property loans and commercial property finance options
              in one organised place.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-7 py-4 text-center font-semibold text-slate-950 shadow-lg"
              >
                Request a Loan Review
              </Link>

              <Link
                href="/loan-solutions"
                className="rounded-lg border border-white px-7 py-4 text-center font-semibold text-white"
              >
                View All Loan Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
            Property Loan Categories
          </p>

          <h2 className="text-4xl font-bold text-slate-950">
            Lending pathways for buyers, owners, investors and businesses.
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Property finance is not one product. The right pathway depends on
            whether you are buying, refinancing, investing, consolidating debt
            or funding a commercial property purchase.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {propertyServices.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-2xl font-bold text-slate-950">
                {service.title}
              </h3>

              <p className="mt-3 text-slate-600">{service.text}</p>

              <span className="mt-6 inline-block font-semibold text-blue-700">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
              Why Property Finance Matters
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              The loan structure can matter as much as the loan amount.
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              A property loan decision affects cash flow, flexibility, future
              borrowing capacity and long-term wealth planning. That is why
              comparison and structure matter.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl bg-white p-8 shadow-sm"
              >
                <h3 className="text-2xl font-bold text-slate-950">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-slate-600">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-blue-700 px-8 py-14 text-center text-white md:px-16">
          <h2 className="text-4xl font-bold">
            Need help comparing property loan options?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Start with the type of property finance you need, then compare
            lending options based on your situation and goals.
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