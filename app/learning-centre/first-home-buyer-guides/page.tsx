import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "First Home Buyer Guides",
  description:
    "Plain-English guides for first home buyers covering deposits, government grants, pre-approval and lenders mortgage insurance.",
  alternates: { canonical: "/learning-centre/first-home-buyer-guides" },
};

const sections = [
  { title: "Deposit basics", text: "Most lenders prefer a deposit of at least 20% of the property price to avoid lenders mortgage insurance, though many first home buyers borrow with a smaller deposit using LMI or eligible government schemes." },
  { title: "Lenders mortgage insurance (LMI)", text: "LMI protects the lender, not the borrower, if you default on the loan. It is generally required when your deposit is below 20% and can be paid upfront or added to your loan amount." },
  { title: "Government grants and schemes", text: "Various federal and state schemes exist to help first home buyers, such as grants, stamp duty concessions and low-deposit guarantee schemes. Eligibility and availability change over time, so it is worth checking current settings before assuming you qualify." },
  { title: "Pre-approval vs formal approval", text: "Pre-approval gives an indication of what a lender may lend you, based on the information provided, and is useful when house hunting. Formal approval happens after you have a specific property and the lender has completed full checks, including a valuation." },
  { title: "Costs beyond the deposit", text: "Stamp duty, legal fees, building and pest inspections, and moving costs all add up. Budgeting for these alongside your deposit avoids surprises late in the process." }
];

export default function FirstHomeBuyerGuidesPage() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            First Home Buyer Guides
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            A first home buyer&apos;s starting point.
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
            Buying your first home involves terms and processes that can feel unfamiliar. These guides break down the key concepts so you know what to expect before you start looking.
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
            <h2 className="text-4xl font-bold">Ready to look at first home buyer loans?</h2>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/loan-solutions/property-finance/first-home-buyers"
                className="inline-block rounded-lg bg-white px-7 py-4 font-semibold text-blue-700"
              >
                View First Home Buyer Loans
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
