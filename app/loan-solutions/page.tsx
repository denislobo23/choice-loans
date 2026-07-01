import Link from "next/link";
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loan Solutions",
  description:
    "Explore property finance and asset finance loan solutions available to Australian borrowers.",
  alternates: { canonical: "/loan-solutions" },
};

const propertyFinance = [
  {
    title: "Property Finance",
    href: "/loan-solutions/property-finance",
    text: "Explore home loans, refinancing, first home buyer loans, investment loans and commercial property finance.",
  },
  {
    title: "Home Loans",
    href: "/loan-solutions/property-finance/home-loans",
    text: "Compare home loan pathways for buying, upgrading or restructuring your property finance.",
  },
  {
    title: "Refinance",
    href: "/loan-solutions/property-finance/refinance",
    text: "Review refinance options to reduce repayments, access equity or consolidate debt.",
  },
  {
    title: "First Home Buyers",
    href: "/loan-solutions/property-finance/first-home-buyers",
    text: "Understand deposits, grants, loan structures and first home buyer pathways.",
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

const assetFinance = [
  {
    title: "Asset Finance",
    href: "/loan-solutions/asset-finance",
    text: "Finance vehicles, equipment, machinery and business assets with clearer comparison pathways.",
  },
  {
    title: "Car Loans",
    href: "/loan-solutions/asset-finance/car-loans",
    text: "Compare personal and business car loan options.",
  },
  {
    title: "Vehicle Finance",
    href: "/loan-solutions/asset-finance/vehicle-finance",
    text: "Finance cars, vans, utes and commercial vehicles for business use.",
  },
  {
    title: "Equipment Finance",
    href: "/loan-solutions/asset-finance/equipment-finance",
    text: "Fund equipment purchases for trades, healthcare, professional services and business operations.",
  },
  {
    title: "Truck Finance",
    href: "/loan-solutions/asset-finance/truck-finance",
    text: "Explore truck finance options for operators, fleets and logistics businesses.",
  },
  {
    title: "Business Loans",
    href: "/loan-solutions/asset-finance/business-loans",
    text: "Access funding for growth, cash flow, stock, expansion and business needs.",
  },
];

export default function LoanSolutionsPage() {
  return (
    <>
      <section className="relative min-h-[650px] overflow-hidden bg-slate-950 text-white">
  <Image
    src="/images/hero/loan-solutions-hero.jpg"
    alt="Clients reviewing loan options with a finance adviser"
    fill
    priority
    className="object-cover"
  />

  <div className="absolute inset-0 bg-slate-950/20" />
  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-transparent" />

  <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-6">
    <div className="max-w-3xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
        Loan Solutions
      </p>

      <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
        Compare property, business and asset finance options.
      </h1>

      <p className="mt-6 text-xl leading-8 text-slate-100">
        Explore home loans, refinancing, first home buyer loans, investment
        loans, commercial property finance, vehicle finance, equipment finance
        and business lending solutions.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/contact"
          className="rounded-lg bg-white px-7 py-4 text-center font-semibold text-slate-950 shadow-lg"
        >
          Request a Loan Review
        </Link>

        <Link
          href="/compare-lenders"
          className="rounded-lg border border-white px-7 py-4 text-center font-semibold text-white"
        >
          Compare Lenders
        </Link>
      </div>
    </div>
  </div>
</section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
            Property Finance
          </p>

          <h2 className="text-4xl font-bold text-slate-950">
            Home, investment and commercial property loans.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {propertyFinance.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-2xl font-bold text-slate-950">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-600">{item.text}</p>

              <span className="mt-6 inline-block font-semibold text-blue-700">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
              Asset Finance
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              Finance vehicles, equipment, machinery and business assets.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {assetFinance.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-2xl font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600">{item.text}</p>

                <span className="mt-6 inline-block font-semibold text-blue-700">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}