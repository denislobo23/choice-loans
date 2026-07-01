import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finance Education",
  description:
    "Plain-English explanations of common lending terms, loan features and borrower considerations.",
  alternates: { canonical: "/learning-centre/finance-education" },
};

const sections = [
  { title: "Interest rate vs comparison rate", text: "The interest rate is what you are charged on the loan balance. The comparison rate includes most fees and charges, giving a more accurate picture of the loan's overall cost for comparison purposes." },
  { title: "Serviceability", text: "Serviceability refers to a lender's assessment of whether you can afford the loan repayments, based on your income, expenses, existing debts and a buffer for potential rate rises." },
  { title: "Credit score and credit history", text: "Your credit score reflects your credit history, including past loans, credit cards and repayment behaviour. Lenders use it, alongside other factors, to assess risk and eligibility." },
  { title: "Loan-to-value ratio (LVR)", text: "LVR compares the loan amount to the value of the asset or property securing it. A lower LVR generally means less risk for the lender and can lead to more competitive terms." },
  { title: "Fees to look out for", text: "Common fees include application fees, valuation fees, ongoing account-keeping fees, and discharge or exit fees. Understanding the full fee structure helps when comparing the true cost of different loans." }
];

export default function FinanceEducationPage() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Finance Education
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Lending terms explained in plain English.
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
            Finance terminology can be a barrier to making confident decisions. These explainers cover terms you are likely to come across when comparing loans, regardless of loan type.
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
            <h2 className="text-4xl font-bold">Have a question about a specific loan type?</h2>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-white px-7 py-4 font-semibold text-blue-700"
              >
                Get in Touch
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
