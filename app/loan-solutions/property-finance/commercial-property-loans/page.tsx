import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Property Loans",
  description:
    "Compare commercial property loan options for purchasing or refinancing business premises and investment property.",
  alternates: { canonical: "/loan-solutions/property-finance/commercial-property-loans" },
};

const commercialTopics = [
  "Owner-occupied commercial property loans",
  "Commercial investment property finance",
  "Business premises finance",
  "Refinance commercial property debt",
  "SMSF commercial property lending",
  "Equity and cash-flow considerations",
];

const considerations = [
  {
    title: "Business purpose",
    text: "Commercial property finance may be used to buy premises, refinance business property debt or invest in income-producing assets.",
  },
  {
    title: "Security and servicing",
    text: "Lenders may assess the property, business income, rental income, deposit, security position and borrower profile.",
  },
  {
    title: "Loan structure",
    text: "Commercial loans can differ from residential lending across terms, fees, repayment structures and approval requirements.",
  },
];

const process = [
  "Clarify the property purpose",
  "Review deposit and security position",
  "Assess business or rental income",
  "Compare commercial lender options",
  "Prepare documents for approval",
];

export default function CommercialPropertyLoansPage() {
  return (
    <>
      <section className="relative min-h-[650px] overflow-hidden bg-slate-950 text-white">
        <Image
          src="/images/hero/commercial-property-loans-hero.jpg"
          alt="Business owners outside a modern commercial building"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
              Commercial Property Loans
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Commercial property finance for business and investment.
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-100">
              Compare commercial property loan pathways for business premises,
              commercial investments, refinancing and property-backed funding.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-7 py-4 text-center font-semibold text-slate-950 shadow-lg"
              >
                Request Commercial Finance Help
              </Link>

              <Link
                href="/loan-solutions/property-finance"
                className="rounded-lg border border-white px-7 py-4 text-center font-semibold text-white"
              >
                View Property Finance
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
              Commercial Lending Pathways
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              Commercial property loans need a different lending lens.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Commercial property finance can involve different approval
              requirements, security assessments, loan terms and servicing rules
              compared with standard residential lending.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              ChoiceLoans helps organise the main commercial property lending
              pathways so borrowers can compare options before speaking with a
              broker or lender.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8">
            <h3 className="text-2xl font-bold text-slate-950">
              Commercial property topics
            </h3>

            <ul className="mt-6 space-y-4 text-slate-700">
              {commercialTopics.map((item) => (
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
              What To Consider
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              The right commercial property loan depends on purpose, security and income.
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
              Commercial Finance Process
            </p>

            <h2 className="text-4xl font-bold text-slate-950">
              From property purpose to lender-ready position.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A commercial property loan application often requires clearer
              documentation around income, asset position, loan purpose, property
              security and repayment capacity.
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
                Related Finance
              </p>
              <h2 className="text-4xl font-bold">
                Explore related loan pathways.
              </h2>
            </div>

            <Link
              href="/loan-solutions/property-finance/investment-loans"
              className="rounded-2xl bg-white/10 p-7 transition hover:bg-white/15"
            >
              <h3 className="text-2xl font-bold">Investment Loans</h3>
              <p className="mt-3 text-slate-300">
                Compare investment property finance for portfolio growth and
                income-producing assets.
              </p>
            </Link>

            <Link
              href="/loan-solutions/asset-finance/business-loans"
              className="rounded-2xl bg-white/10 p-7 transition hover:bg-white/15"
            >
              <h3 className="text-2xl font-bold">Business Loans</h3>
              <p className="mt-3 text-slate-300">
                Review business funding options for growth, stock, cash flow and
                expansion.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-blue-700 px-8 py-14 text-center text-white md:px-16">
          <h2 className="text-4xl font-bold">
            Compare commercial property loan options.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Review lending pathways for business premises, commercial
            investment assets and commercial property refinancing.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-7 py-4 font-semibold text-blue-700"
            >
              Request Commercial Finance Help
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}