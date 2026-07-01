import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Loans",
  description:
    "Compare car loan options and finance pathways for purchasing a new or used vehicle.",
  alternates: { canonical: "/loan-solutions/asset-finance/car-loans" },
};

const carLoanTopics = [
  "New car loans",
  "Used car loans",
  "Personal car finance",
  "Business vehicle loans",
  "Dealer finance comparison",
  "Refinance existing car finance",
];

const considerations = [
  {
    title: "Loan purpose",
    text: "Car finance may be structured differently depending on whether the vehicle is for personal use, business use or mixed use.",
  },
  {
    title: "Repayment comfort",
    text: "Compare repayments, loan term, balloon payments, fees and the total cost of finance before committing.",
  },
  {
    title: "Lender fit",
    text: "Different lenders may suit different borrower profiles, vehicle types, employment situations and credit histories.",
  },
];

const process = [
  "Choose the vehicle type",
  "Estimate your borrowing position",
  "Compare repayment structures",
  "Review lender options",
  "Prepare for approval",
];

export default function CarLoansPage() {
  return (
    <>
      <section className="relative min-h-[650px] overflow-hidden bg-slate-950 text-white">
        <Image
          src="/images/hero/car-loans-hero.jpg"
          alt="Couple receiving car keys at a dealership"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
              Car Loans
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Compare car loan options before you buy.
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-100">
              Explore car finance pathways for new cars, used vehicles,
              personal borrowing, business use and refinancing existing vehicle
              finance.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-7 py-4 text-center font-semibold text-slate-950 shadow-lg"
              >
                Request a Car Loan Review
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
              Vehicle Finance Options
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              A car loan should be judged on more than the monthly repayment.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The right car loan depends on the vehicle, loan term, interest
              rate, fees, balloon payment, repayment flexibility and whether the
              vehicle is being used personally or for business.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              ChoiceLoans helps borrowers compare car finance options before
              signing dealership paperwork or applying with a lender.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8">
            <h3 className="text-2xl font-bold text-slate-950">
              Car loan topics
            </h3>

            <ul className="mt-6 space-y-4 text-slate-700">
              {carLoanTopics.map((item) => (
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
              Smart car finance compares total cost, structure and flexibility.
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
              Car Loan Process
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              From vehicle choice to lender-ready position.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Before applying, compare the vehicle price, loan amount, repayment
              structure, fees and approval requirements so the finance supports
              the purchase rather than stretching it.
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
                Compare related vehicle and business finance options.
              </h2>
            </div>

            <Link
              href="/loan-solutions/asset-finance/vehicle-finance"
              className="rounded-2xl bg-white/10 p-7 transition hover:bg-white/15"
            >
              <h3 className="text-2xl font-bold">Vehicle Finance</h3>
              <p className="mt-3 text-slate-300">
                Compare finance options for cars, vans, utes and commercial
                vehicles.
              </p>
            </Link>

            <Link
              href="/loan-solutions/asset-finance/business-loans"
              className="rounded-2xl bg-white/10 p-7 transition hover:bg-white/15"
            >
              <h3 className="text-2xl font-bold">Business Loans</h3>
              <p className="mt-3 text-slate-300">
                Review funding options for business growth, cash flow and
                operational needs.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-blue-700 px-8 py-14 text-center text-white md:px-16">
          <h2 className="text-4xl font-bold">
            Compare car loan options before signing.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Review repayment structures, lender options and total finance cost
            before choosing your car loan.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-7 py-4 font-semibold text-blue-700"
            >
              Request a Car Loan Review
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}