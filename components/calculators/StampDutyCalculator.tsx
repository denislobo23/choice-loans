"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const stateRates: Record<string, number> = {
  VIC: 0.055,
  NSW: 0.052,
  QLD: 0.045,
  SA: 0.05,
  WA: 0.0475,
  TAS: 0.04,
  ACT: 0.05,
  NT: 0.0495,
};

export default function StampDutyCalculator() {
  const [propertyPrice, setPropertyPrice] = useState(850000);
  const [state, setState] = useState("VIC");
  const [firstHomeBuyer, setFirstHomeBuyer] = useState(false);

  const estimatedStampDuty = useMemo(() => {
    const baseRate = stateRates[state] ?? 0.05;
    let estimate = propertyPrice * baseRate;

    if (firstHomeBuyer) {
      estimate = estimate * 0.7;
    }

    return Math.max(0, estimate);
  }, [propertyPrice, state, firstHomeBuyer]);

  const estimatedTotalCost = propertyPrice + estimatedStampDuty;

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
            Stamp Duty Calculator
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
            Estimate potential stamp duty and upfront property purchase costs.
            This is a broad estimate only.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            Enter property details
          </h2>

          <div className="mt-8 space-y-6">
            <div>
              <label className="mb-2 block font-semibold text-slate-900">
                Property price
              </label>
              <input
                type="number"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-900">
                State or territory
              </label>
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-4 py-3"
              >
                <option value="VIC">Victoria</option>
                <option value="NSW">New South Wales</option>
                <option value="QLD">Queensland</option>
                <option value="SA">South Australia</option>
                <option value="WA">Western Australia</option>
                <option value="TAS">Tasmania</option>
                <option value="ACT">ACT</option>
                <option value="NT">Northern Territory</option>
              </select>
            </div>

            <label className="flex items-center gap-3 font-semibold text-slate-900">
              <input
                type="checkbox"
                checked={firstHomeBuyer}
                onChange={(e) => setFirstHomeBuyer(e.target.checked)}
                className="h-5 w-5"
              />
              First home buyer estimate
            </label>
          </div>
        </div>

        <div className="rounded-3xl bg-blue-700 p-8 text-white shadow-sm">
          <h2 className="text-3xl font-bold">Estimated costs</h2>

          <div className="mt-8 space-y-6">
            <div>
              <p className="text-blue-100">Estimated stamp duty</p>
              <p className="mt-2 text-5xl font-bold">
                {formatCurrency(estimatedStampDuty)}
              </p>
            </div>

            <div className="border-t border-white/20 pt-6">
              <p className="text-blue-100">
                Property price plus estimated duty
              </p>
              <p className="mt-2 text-3xl font-bold">
                {formatCurrency(estimatedTotalCost)}
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm leading-6 text-blue-100">
            This is a simplified estimate only. Actual stamp duty varies by
            state, property type, buyer type, concessions, grants, thresholds and
            government rules. Always check official state revenue sources.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl bg-slate-50 p-8">
          <h2 className="text-3xl font-bold text-slate-950">
            Planning a property purchase?
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Stamp duty is only one part of the upfront cost. Buyers may also
            need to allow for deposit, conveyancing, inspections, lender fees and
            moving costs.
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