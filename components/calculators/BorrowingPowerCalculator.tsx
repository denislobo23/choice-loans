"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function BorrowingPowerCalculator() {
  const [annualIncome, setAnnualIncome] = useState(120000);
  const [partnerIncome, setPartnerIncome] = useState(0);
  const [monthlyExpenses, setMonthlyExpenses] = useState(3500);
  const [monthlyDebts, setMonthlyDebts] = useState(800);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      maximumFractionDigits: 0,
    }).format(value);

  const borrowingEstimate = useMemo(() => {
    const monthlyIncome = (annualIncome + partnerIncome) / 12;
    const availableMonthly = monthlyIncome * 0.7 - monthlyExpenses - monthlyDebts;

    if (availableMonthly <= 0) return 0;

    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const loanAmount =
      (availableMonthly * (Math.pow(1 + monthlyRate, numberOfPayments) - 1)) /
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments));

    return Math.max(0, loanAmount);
  }, [
    annualIncome,
    partnerIncome,
    monthlyExpenses,
    monthlyDebts,
    interestRate,
    loanTerm,
  ]);

  const monthlyRepaymentBuffer = useMemo(() => {
    const monthlyIncome = (annualIncome + partnerIncome) / 12;
    return Math.max(0, monthlyIncome * 0.7 - monthlyExpenses - monthlyDebts);
  }, [annualIncome, partnerIncome, monthlyExpenses, monthlyDebts]);

  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Calculator
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Borrowing Power Calculator
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
            Estimate how much you may be able to borrow based on income,
            expenses, existing debts, interest rate and loan term.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            Enter your details
          </h2>

          <div className="mt-8 space-y-6">
            <div>
              <label className="mb-2 block font-semibold text-slate-900">
                Your annual income
              </label>
              <input
                type="number"
                value={annualIncome}
                onChange={(e) => setAnnualIncome(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-900">
                Partner annual income
              </label>
              <input
                type="number"
                value={partnerIncome}
                onChange={(e) => setPartnerIncome(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-900">
                Monthly living expenses
              </label>
              <input
                type="number"
                value={monthlyExpenses}
                onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-900">
                Existing monthly debt repayments
              </label>
              <input
                type="number"
                value={monthlyDebts}
                onChange={(e) => setMonthlyDebts(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-900">
                Assessment interest rate %
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
          <h2 className="text-3xl font-bold">
            Estimated borrowing power
          </h2>

          <div className="mt-8 space-y-6">
            <div>
              <p className="text-blue-100">Estimated maximum loan</p>
              <p className="mt-2 text-5xl font-bold">
                {formatCurrency(borrowingEstimate)}
              </p>
            </div>

            <div className="border-t border-white/20 pt-6">
              <p className="text-blue-100">
                Estimated monthly repayment capacity
              </p>
              <p className="mt-2 text-3xl font-bold">
                {formatCurrency(monthlyRepaymentBuffer)}
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm leading-6 text-blue-100">
            This is a simplified estimate only. Real lender borrowing capacity
            calculations include buffers, tax, household type, dependants,
            credit cards, existing debts, property type and lender policy.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl bg-slate-50 p-8">
          <h2 className="text-3xl font-bold text-slate-950">
            Want a clearer borrowing position?
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Borrowing power can vary significantly between lenders. A full
            assessment depends on income type, expenses, debts, deposit and
            lender policy.
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