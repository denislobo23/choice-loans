import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investment Property Guides",
  description:
    "Plain-English guides on investment loan structures, equity strategies and portfolio planning basics for property investors.",
  alternates: { canonical: "/learning-centre/investment-property-guides" },
};

const sections = [
  { title: "How investment loans differ", text: "Investment loans are typically priced slightly higher than owner-occupier loans and lenders assess them differently, factoring in rental income alongside your other income and expenses." },
  { title: "Interest-only for investors", text: "Some investors choose interest-only periods to manage cash flow, since rental income and tax considerations can make this appealing. It is worth understanding that this does not reduce the loan balance during the interest-only period." },
  { title: "Using equity to expand a portfolio", text: "Equity is the difference between your property's value and what you owe. Some investors use equity in an existing property as security or a deposit for an additional purchase, though this increases overall debt and risk." },
  { title: "Rental income and serviceability", text: "Lenders generally count a portion of expected or actual rental income toward your borrowing capacity, though the exact treatment varies by lender and loan type." },
  { title: "Loan structuring considerations", text: "How you structure an investment loan, including whether to cross-collateralise with other properties, can affect flexibility later. It is worth understanding the trade-offs before settling on a structure." }
];

export default function InvestmentPropertyGuidesPage() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Investment Property Guides
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Property investment loan basics.
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
            Investment loans differ from owner-occupier loans in pricing, structure and what lenders assess. These guides cover the fundamentals before you compare specific loan products.
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
            <h2 className="text-4xl font-bold">Ready to explore investment loans?</h2>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/loan-solutions/property-finance/investment-loans"
                className="inline-block rounded-lg bg-white px-7 py-4 font-semibold text-blue-700"
              >
                View Investment Loans
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
