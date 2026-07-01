import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning Centre",
  description:
    "Plain-English loan guides for Australian borrowers covering home loans, refinancing, investment property and asset finance.",
  alternates: { canonical: "/learning-centre" },
};

const categories = [
  {
    title: "Home Loan Guides",
    href: "/learning-centre/home-loan-guides",
    text: "Understand home loan structures, repayment options, features and approval basics.",
  },
  {
    title: "Refinance Guides",
    href: "/learning-centre/refinance-guides",
    text: "Learn when refinancing may make sense and what costs or savings to compare.",
  },
  {
    title: "First Home Buyer Guides",
    href: "/learning-centre/first-home-buyer-guides",
    text: "Explore deposits, grants, pre-approval, LMI and the first home buying process.",
  },
  {
    title: "Investment Property Guides",
    href: "/learning-centre/investment-property-guides",
    text: "Compare investment loan structures, equity strategies and portfolio planning basics.",
  },
  {
    title: "Asset Finance Guides",
    href: "/learning-centre/asset-finance-guides",
    text: "Learn about car loans, equipment finance, truck finance and business asset lending.",
  },
  {
    title: "Finance Education",
    href: "/learning-centre/finance-education",
    text: "Plain-English explanations of lending terms, loan features and borrower considerations.",
  },
];

export default function LearningCentrePage() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Learning Centre
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Plain-English loan guides for Australian borrowers.
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
            Learn how different loan types work before comparing lenders,
            calculators and finance options.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h2 className="text-2xl font-bold text-slate-950">
                {category.title}
              </h2>

              <p className="mt-3 text-slate-600">{category.text}</p>

              <span className="mt-6 inline-block font-semibold text-blue-700">
                View guides →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}