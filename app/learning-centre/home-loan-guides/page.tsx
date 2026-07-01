import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Loan Guides",
  description:
    "Plain-English guides to home loan structures, repayment types, features and the approval process in Australia.",
  alternates: { canonical: "/learning-centre/home-loan-guides" },
};

const sections = [
  { title: "Principal and interest vs interest-only", text: "Most home loans are principal and interest, meaning each repayment reduces the amount you owe as well as covering interest. Interest-only loans keep repayments lower for a set period but do not reduce the loan balance, which usually means higher total interest over the life of the loan." },
  { title: "Fixed vs variable rates", text: "A fixed rate locks in your interest rate for a set period, giving repayment certainty but usually less flexibility to make extra repayments. A variable rate can move up or down with the market and generally allows more flexibility, including offset accounts and unlimited extra repayments." },
  { title: "Comparison rate vs advertised rate", text: "The advertised interest rate does not include fees. The comparison rate factors in most upfront and ongoing fees to give a more complete picture of the loan's true cost, which is why it is worth comparing rather than relying on the headline rate alone." },
  { title: "Offset and redraw", text: "An offset account is a transaction account linked to your loan, where the balance reduces the interest charged. Redraw allows you to access extra repayments you have already made. Both can reduce interest paid, but they work differently and are not available on every loan." },
  { title: "What lenders assess", text: "Lenders typically look at income, expenses, existing debts, credit history, deposit size and the property itself. Understanding this before applying can help you present a stronger application and identify which loan types you are likely to be eligible for." }
];

export default function HomeLoanGuidesPage() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Home Loan Guides
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Understand how home loans actually work.
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
            Before comparing lenders or rates, it helps to understand the building blocks of a home loan: how repayments work, what features actually matter, and what lenders look at when assessing an application.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-950">{section.title}</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">{section.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm leading-6 text-slate-500">
          This information is general in nature and does not take into account your
          personal circumstances. It is not financial advice or credit advice.
          Consider seeking professional advice before making a decision.
        </p>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-3xl bg-blue-700 px-8 py-14 text-center text-white md:px-16">
            <h2 className="text-4xl font-bold">Ready to compare home loan options?</h2>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/loan-solutions/property-finance/home-loans"
                className="inline-block rounded-lg bg-white px-7 py-4 font-semibold text-blue-700"
              >
                View Home Loans
              </Link>

              <Link
                href="/learning-centre"
                className="inline-block rounded-lg border border-white/40 px-7 py-4 font-semibold text-white hover:bg-white/10"
              >
                Back to Learning Centre
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
