import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asset Finance Guides",
  description:
    "Plain-English guides on car loans, equipment finance, truck finance and business asset lending in Australia.",
  alternates: { canonical: "/learning-centre/asset-finance-guides" },
};

const sections = [
  { title: "Chattel mortgage vs finance lease", text: "A chattel mortgage means you own the asset from the start while the lender holds it as security, common for business purchases. A finance lease means the lender owns the asset and you lease it, which can suit businesses wanting to preserve cash flow." },
  { title: "Novated leases explained", text: "A novated lease is a three-way arrangement between an employee, employer and financier, often used for vehicles, where repayments can be drawn from pre-tax salary in some circumstances." },
  { title: "New vs used asset finance", text: "Lenders often price and assess new and used asset finance differently, with used assets sometimes attracting different terms depending on age, condition and depreciation." },
  { title: "Balloon payments", text: "Some asset finance products include a balloon or residual payment at the end of the term, which lowers regular repayments but leaves a lump sum owing when the loan matures." },
  { title: "Business vs personal asset finance", text: "Business asset finance is generally assessed against business financials and purpose, while personal asset finance, such as a car loan, is assessed against personal income and expenses." }
];

export default function AssetFinanceGuidesPage() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Asset Finance Guides
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Understand asset finance before you borrow.
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
            Asset finance covers a wide range of loan types used to purchase vehicles, equipment and machinery for personal or business use. The right structure depends on the asset, its use and your financial position.
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
            <h2 className="text-4xl font-bold">Ready to explore asset finance?</h2>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/loan-solutions/asset-finance"
                className="inline-block rounded-lg bg-white px-7 py-4 font-semibold text-blue-700"
              >
                View Asset Finance
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
