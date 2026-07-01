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

export default function LoanComparisonCalculator() {
  const [loanAAmount, setLoanAAmount] = useState(700000);
  const [loanARate, setLoanARate] = useState(6.4);
  const [loanATerm, setLoanATerm] = useState(30);

  const [loanBAmount, setLoanBAmount] = useState(700000);
  const [loanBRate, setLoanBRate] = useState(5.95);
  const [loanBTerm, setLoanBTerm] = useState(30);

  const loanARepayment = useMemo(
    () => repayment(loanAAmount, loanARate, loanATerm),
    [loanAAmount, loanARate, loanATerm]
  );

  const loanBRepayment = useMemo(
    () => repayment(loanBAmount, loanBRate, loanBTerm),
    [loanBAmount, loanBRate, loanBTerm]
  );

  const loanATotal = loanARepayment * loanATerm * 12;
  const loanBTotal = loanBRepayment * loanBTerm * 12;

  const loanAInterest = loanATotal - loanAAmount;
  const loanBInterest = loanBTotal - loanBAmount;

  const monthlyDifference = loanARepayment - loanBRepayment;
  const interestDifference = loanAInterest - loanBInterest;

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
            Loan Comparison Calculator
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
            Compare two loan scenarios side by side to estimate monthly
            repayments and total interest differences.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">Loan A</h2>

          <div className="mt-8 space-y-6">
            <div>
              <label className="mb-2 block font-semibold text-slate-900">
                Loan amount
              </label>
              <input
                type="number"
                value={loanAAmount}
                onChange={(e) => setLoanAAmount(Number(e.target.value))}
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
                value={loanARate}
                onChange={(e) => setLoanARate(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-900">
                Loan term in years
              </label>
              <input
                type="number"
                value={loanATerm}
                onChange={(e) => setLoanATerm(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 px-4 py-3"
              />
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">Loan B</h2>

          <div className="mt-8 space-y-6">
            <div>
              <label className="mb-2 block font-semibold text-slate-900">
                Loan amount
              </label>
              <input
                type="number"
                value={loanBAmount}
                onChange={(e) => setLoanBAmount(Number(e.target.value))}
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
                value={loanBRate}
                onChange={(e) => setLoanBRate(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-900">
                Loan term in years
              </label>
              <input
                type="number"
                value={loanBTerm}
                onChange={(e) => setLoanBTerm(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 px-4 py-3"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 rounded-3xl bg-blue-700 p-8 text-white shadow-sm md:grid-cols-4">
          <div>
            <p className="text-blue-100">Loan A monthly</p>
            <p className="mt-2 text-3xl font-bold">
              {formatCurrency(loanARepayment)}
            </p>
          </div>

          <div>
            <p className="text-blue-100">Loan B monthly</p>
            <p className="mt-2 text-3xl font-bold">
              {formatCurrency(loanBRepayment)}
            </p>
          </div>

          <div>
            <p className="text-blue-100">Monthly difference</p>
            <p className="mt-2 text-3xl font-bold">
              {formatCurrency(monthlyDifference)}
            </p>
          </div>

          <div>
            <p className="text-blue-100">Interest difference</p>
            <p className="mt-2 text-3xl font-bold">
              {formatCurrency(interestDifference)}
            </p>
          </div>
        </div>

        <p className="mt-6 text-sm leading-6 text-slate-500">
          Positive differences mean Loan A is estimated to cost more than Loan
          B. This calculator is an estimate only and does not include fees, rate
          changes, offset accounts, redraw, cashback offers or lender charges.
        </p>

        <div className="mt-10 rounded-3xl bg-slate-50 p-8">
          <h2 className="text-3xl font-bold text-slate-950">
            Want help comparing loan options?
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            A loan comparison should include interest, fees, flexibility,
            features, approval likelihood and lender fit.
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