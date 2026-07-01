import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asset Finance",
  description:
    "Compare car loans, equipment finance, truck finance, machinery finance and business asset lending.",
  alternates: { canonical: "/loan-solutions/asset-finance" },
};

const assetServices = [
  {
    title: "Car Loans",
    href: "/loan-solutions/asset-finance/car-loans",
    text: "Compare personal and business car loan options for new and used vehicles.",
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
    text: "Explore truck finance options for owner operators, logistics businesses and transport fleets.",
  },
  {
    title: "Machinery Finance",
    href: "/loan-solutions/asset-finance/machinery-finance",
    text: "Finance construction, agricultural and industrial machinery with structured lending options.",
  },
  {
    title: "Business Loans",
    href: "/loan-solutions/asset-finance/business-loans",
    text: "Access funding for growth, stock purchases, expansion projects and operational needs.",
  },
  {
    title: "Working Capital Finance",
    href: "/loan-solutions/asset-finance/working-capital-finance",
    text: "Support cash flow and short-term funding requirements for business operations.",
  },
];

const benefits = [
  {
    title: "Preserve cash flow",
    text: "Asset finance can help businesses acquire equipment and vehicles while maintaining working capital.",
  },
  {
    title: "Support growth",
    text: "Businesses often use finance to expand fleets, purchase machinery and invest in productivity improvements.",
  },
  {
    title: "Flexible funding options",
    text: "Different lenders offer structures that may suit different industries, asset types and business goals.",
  },
];

export default function AssetFinancePage() {
  return (
    <>
      <section className="relative min-h-[620px] overflow-hidden bg-slate-950 text-white">
        <Image
          src="/images/services/asset-finance.jpg"
          alt="Commercial vehicles and machinery"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
              Asset Finance
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Finance vehicles, equipment and business assets.
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-100">
              Explore lending options for cars, commercial vehicles,
              equipment, machinery, business expansion and working capital
              requirements.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-7 py-4 text-center font-semibold text-slate-950 shadow-lg"
              >
                Request a Finance Review
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
            Asset Finance Solutions
          </p>

          <h2 className="text-4xl font-bold text-slate-950">
            Lending options for vehicles, equipment and business growth.
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Asset finance can support businesses and individuals seeking to
            acquire vehicles, machinery, equipment or additional working
            capital while preserving cash flow.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {assetServices.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-2xl font-bold text-slate-950">
                {service.title}
              </h3>

              <p className="mt-3 text-slate-600">
                {service.text}
              </p>

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
              Why Asset Finance
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              Access the assets you need without tying up capital.
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Whether you operate a trade business, logistics company,
              professional practice or growing enterprise, finance solutions
              may help support expansion and operational efficiency.
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

                <p className="mt-3 text-slate-600">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-blue-700 px-8 py-14 text-center text-white md:px-16">
          <h2 className="text-4xl font-bold">
            Need help comparing asset finance options?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Explore lending solutions for vehicles, equipment, machinery and
            business funding requirements.
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