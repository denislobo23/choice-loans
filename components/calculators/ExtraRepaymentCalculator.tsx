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

function monthsToPayoff(
  loanAmount: number,
  annualRate: number,
  monthlyPayment: number
) {
  const monthlyRate = annualRate / 100 / 12;

  if (monthlyPayment <= loanAmount * monthlyRate) return Infinity;

  let balance = loanAmount;
  let months = 0;

  while (balance > 0 && months < 1200) {
    balance = balance * (1 + monthlyRate) - monthlyPayment;
    months++;
  }

  return months;
}

export default function ExtraRepaymentCalculator() {
  const [loanAmount, setLoanAmount] = useState(700000);
  const [interestRate, setInterestRate] = useState(6.2);
  const [loanTerm, setLoanTerm] = useState(30);
  const [extraRepayment, setExtraRepayment] = useState(300);

  const standardMonthly = useMemo(
    () => repayment(loanAmount, interestRate, loanTerm),
    [loanAmount, interestRate, loanTerm]
  );

  const newMonthly = standardMonthly + extraRepayment;

  const standardTotal = standardMonthly * loanTerm * 12;
  const standardInterest = standardTotal - loanAmount;

  const newMonths = useMemo(
    () => monthsToPayoff(loanAmount, interestRate, newMonthly),
    [loanAmount, interestRate, newMonthly]
  );

  const newTotal = newMonthly * newMonths;
  const newInterest = newTotal - loanAmount;

  const interestSaved = standardInterest - newInterest;
  const monthsSaved = loanTerm * 12 - newMonths;

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      maximumFractionDigits: 0,
    }).format(value);

  const formatTime = (months: number) => {
    if (!Number.isFinite(months)) return "Not available";
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    return `${years} years ${remainingMonths} months`;
  };

  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Calculator
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Extra Repayment Calculator
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
            Estimate how extra monthly repayments may reduce interest and
            shorten the life of your loan.
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

            <div>
              <label className="mb-2 block font-semibold text-slate-900">
                Extra monthly repayment
              </label>
              <input
                type="number"
                value={extraRepayment}
                onChange={(e) => setExtraRepayment(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 px-4 py-3"
              />
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-blue-700 p-8 text-white shadow-sm">
          <h2 className="text-3xl font-bold">Estimated impact</h2>

          <div className="mt-8 space-y-6">
            <div>
              <p className="text-blue-100">Standard monthly repayment</p>
              <p className="mt-2 text-4xl font-bold">
                {formatCurrency(standardMonthly)}
              </p>
            </div>

            <div className="border-t border-white/20 pt-6">
              <p className="text-blue-100">New monthly repayment</p>
              <p className="mt-2 text-4xl font-bold">
                {formatCurrency(newMonthly)}
              </p>
            </div>

            <div className="border-t border-white/20 pt-6">
              <p className="text-blue-100">Estimated interest saved</p>
              <p className="mt-2 text-4xl font-bold">
                {formatCurrency(interestSaved)}
              </p>
            </div>

            <div className="border-t border-white/20 pt-6">
              <p className="text-blue-100">Estimated time saved</p>
              <p className="mt-2 text-3xl font-bold">
                {formatTime(monthsSaved)}
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm leading-6 text-blue-100">
            This calculator provides an estimate only. It does not include fees,
            rate changes, offset accounts, redraw, repayment restrictions or
            lender-specific rules.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl bg-slate-50 p-8">
          <h2 className="text-3xl font-bold text-slate-950">
            Want to compare repayment strategies?
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Extra repayments can be powerful, but loan features and flexibility
            also matter.
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