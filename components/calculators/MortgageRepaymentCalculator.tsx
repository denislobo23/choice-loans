"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function MortgageRepaymentCalculator() {
  const [loanAmount, setLoanAmount] = useState(750000);
  const [interestRate, setInterestRate] = useState(6.2);
  const [loanTerm, setLoanTerm] = useState(30);

  const monthlyRepayment = useMemo(() => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (monthlyRate === 0) {
      return principal / numberOfPayments;
    }

    return (
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    );
  }, [loanAmount, interestRate, loanTerm]);

  const totalRepayments = monthlyRepayment * loanTerm * 12;
  const totalInterest = totalRepayments - loanAmount;

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
            Mortgage Repayment Calculator
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
            Estimate monthly home loan repayments based on loan amount, interest
            rate and loan term.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            Enter your loan details
          </h2>

          <div className="mt-8 space-y-6">
            <div>
              <label className="mb-2 block font-semibold text-slate-900">
                Loan amount
              </label>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-900">
                Interest rate %
              </label>
              <input
                type="number"
                step="0.01"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-900">
                Loan term in years
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
          <h2 className="text-3xl font-bold">Estimated repayments</h2>

          <div className="mt-8 space-y-6">
            <div>
              <p className="text-blue-100">Monthly repayment</p>
              <p className="mt-2 text-5xl font-bold">
                {formatCurrency(monthlyRepayment)}
              </p>
            </div>

            <div className="border-t border-white/20 pt-6">
              <p className="text-blue-100">Total repayments</p>
              <p className="mt-2 text-3xl font-bold">
                {formatCurrency(totalRepayments)}
              </p>
            </div>

            <div className="border-t border-white/20 pt-6">
              <p className="text-blue-100">Estimated interest paid</p>
              <p className="mt-2 text-3xl font-bold">
                {formatCurrency(totalInterest)}
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm leading-6 text-blue-100">
            This calculator provides an estimate only. It does not include fees,
            lender charges, offset accounts, redraw, rate changes or individual
            lender assessment.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl bg-slate-50 p-8">
          <h2 className="text-3xl font-bold text-slate-950">
            Want help comparing repayment options?
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            A repayment estimate is only one part of the decision. Loan
            structure, lender policy and borrower fit also matter.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-blue-700 px-7 py-4 font-semibold text-white"
          >
            Request a Loan Review
          </Link>
        </div>
      </section>
    </>
  );
}