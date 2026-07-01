"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

function repayment(loanAmount: number, annualRate: number, years: number) {
  const monthlyRate = annualRate / 100 / 12;
  const payments = years * 12;

  if (monthlyRate === 0) return loanAmount / payments;

  return (
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, payments)) /
    (Math.pow(1 + monthlyRate, payments) - 1)
  );
}

export default function RefinanceSavingsCalculator() {
  const [currentLoan, setCurrentLoan] = useState(650000);
  const [currentRate, setCurrentRate] = useState(6.7);
  const [newRate, setNewRate] = useState(5.95);
  const [loanTerm, setLoanTerm] = useState(25);

  const currentRepayment = useMemo(
    () => repayment(currentLoan, currentRate, loanTerm),
    [currentLoan, currentRate, loanTerm]
  );

  const newRepayment = useMemo(
    () => repayment(currentLoan, newRate, loanTerm),
    [currentLoan, newRate, loanTerm]
  );

  const monthlySaving = currentRepayment - newRepayment;
  const annualSaving = monthlySaving * 12;

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Calculator
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Refinance Savings Calculator
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
            Compare your current home loan repayment with a new interest rate to
            estimate potential monthly and annual savings.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            Enter refinance details
          </h2>

          <div className="mt-8 space-y-6">
            <div>
              <label className="mb-2 block font-semibold text-slate-900">
                Current loan balance
              </label>
              <input
                type="number"
                value={currentLoan}
                onChange={(e) => setCurrentLoan(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-900">
                Current interest rate %
              </label>
              <input
                type="number"
                step="0.01"
                value={currentRate}
                onChange={(e) => setCurrentRate(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-900">
                New interest rate %
              </label>
              <input
                type="number"
                step="0.01"
                value={newRate}
                onChange={(e) => setNewRate(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-900">
                Remaining loan term in years
              </label>
              <input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 px-4 py-3"
              />
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-blue-700 p-8 text-white shadow-sm">
          <h2 className="text-3xl font-bold">Estimated refinance result</h2>

          <div className="mt-8 space-y-6">
            <div>
              <p className="text-blue-100">Current monthly repayment</p>
              <p className="mt-2 text-4xl font-bold">
                {formatCurrency(currentRepayment)}
              </p>
            </div>

            <div className="border-t border-white/20 pt-6">
              <p className="text-blue-100">New monthly repayment</p>
              <p className="mt-2 text-4xl font-bold">
                {formatCurrency(newRepayment)}
              </p>
            </div>

            <div className="border-t border-white/20 pt-6">
              <p className="text-blue-100">Estimated monthly saving</p>
              <p className="mt-2 text-5xl font-bold">
                {formatCurrency(monthlySaving)}
              </p>
            </div>

            <div className="border-t border-white/20 pt-6">
              <p className="text-blue-100">Estimated annual saving</p>
              <p className="mt-2 text-3xl font-bold">
                {formatCurrency(annualSaving)}
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm leading-6 text-blue-100">
            This is an estimate only. It does not include discharge fees,
            application fees, valuation costs, package fees, cashback offers,
            break costs or changes in loan term.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl bg-slate-50 p-8">
          <h2 className="text-3xl font-bold text-slate-950">
            Thinking about refinancing?
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Refinancing should consider more than repayment savings. Fees, loan
            term, features, debt structure and lender fit also matter.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-blue-700 px-7 py-4 font-semibold text-white"
          >
            Request a Refinance Review
          </Link>
        </div>
      </section>
    </>
  );
}