import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refinance Guides",
  description:
    "Plain-English guides on when refinancing makes sense, what it costs, and what to compare before switching loans.",
  alternates: { canonical: "/learning-centre/refinance-guides" },
};

const sections = [
  { title: "Common reasons to refinance", text: "Borrowers typically refinance to access a lower interest rate, consolidate other debts, switch loan features such as an offset account, or access equity for renovations or investment. The right reason depends on your financial goals." },
  { title: "Costs to weigh up", text: "Refinancing can involve discharge fees from your current lender, application or valuation fees with the new lender, and potentially lenders mortgage insurance if your equity position has changed. These costs should be weighed against the potential savings." },
  { title: "Break costs on fixed loans", text: "If you are on a fixed rate and refinance before the fixed period ends, you may be charged a break cost. This can be significant, so it is worth checking with your current lender before starting the refinance process." },
  { title: "Equity and loan-to-value ratio", text: "Your loan-to-value ratio (LVR) compares your loan balance to your property's value. A lower LVR generally gives you access to more competitive rates and can affect whether lenders mortgage insurance applies when refinancing." },
  { title: "What to compare beyond the rate", text: "A lower rate is not the only factor. Loan features, fees, flexibility, and how well the new lender's policies fit your circumstances all affect whether refinancing is genuinely worthwhile." }
];

export default function RefinanceGuidesPage() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Refinance Guides
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            When refinancing may be worth considering.
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
            Refinancing means replacing your current home loan with a new one, either with your existing lender or a different one. It can be worth exploring, but the right decision depends on your costs, goals and current loan terms.
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
            <h2 className="text-4xl font-bold">Ready to explore refinancing?</h2>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/loan-solutions/property-finance/refinance"
                className="inline-block rounded-lg bg-white px-7 py-4 font-semibold text-blue-700"
              >
                View Refinance Options
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
