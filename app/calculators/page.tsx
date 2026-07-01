import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loan Calculators",
  description:
    "Free Australian loan calculators for mortgage repayments, borrowing power, stamp duty, refinance savings and more.",
  alternates: { canonical: "/calculators" },
};

const calculators = [
  {
    title: "Borrowing Power Calculator",
    href: "/calculators/borrowing-power",
    text: "Estimate how much you may be able to borrow based on income, expenses and debts.",
  },
  {
    title: "Mortgage Repayment Calculator",
    href: "/calculators/mortgage-repayment",
    text: "Estimate monthly repayments based on loan amount, interest rate and loan term.",
  },
  {
    title: "Refinance Savings Calculator",
    href: "/calculators/refinance-savings",
    text: "Compare your current loan with a new loan to estimate potential repayment savings.",
  },
  {
    title: "Loan Comparison Calculator",
    href: "/calculators/loan-comparison",
    text: "Compare two loan scenarios side by side.",
  },
  {
    title: "Extra Repayment Calculator",
    href: "/calculators/extra-repayment",
    text: "Estimate how extra repayments may reduce interest and shorten your loan term.",
  },
  {
    title: "Stamp Duty Calculator",
    href: "/calculators/stamp-duty",
    text: "Estimate property purchase costs and stamp duty planning considerations.",
  },
];

export default function CalculatorsPage() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Calculators
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Loan calculators to help compare your options.
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
            Use simple calculators to estimate repayments, borrowing power,
            refinance savings and other loan scenarios before making a lending
            decision.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {calculators.map((calculator) => (
            <Link
              key={calculator.href}
              href={calculator.href}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h2 className="text-2xl font-bold text-slate-950">
                {calculator.title}
              </h2>

              <p className="mt-3 text-slate-600">{calculator.text}</p>

              <span className="mt-6 inline-block font-semibold text-blue-700">
                Open calculator →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-3xl bg-blue-700 px-8 py-14 text-center text-white md:px-16">
            <h2 className="text-4xl font-bold">
              Need help interpreting the numbers?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Calculators provide estimates only. A full loan assessment depends
              on lender policy, income, expenses, debts and property details.
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
        </div>
      </section>
    </>
  );
}