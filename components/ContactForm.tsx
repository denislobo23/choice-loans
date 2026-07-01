"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";

const loanTypes = [
  "Home Loans",
  "Refinance",
  "First Home Buyers",
  "Investment Loans",
  "Commercial Property Loans",
  "Car Loans",
  "Vehicle Finance",
  "Equipment Finance",
  "Truck Finance",
  "Business Loans",
  "Working Capital Finance",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(siteConfig.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-8 rounded-3xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-emerald-900">
          Thanks — your enquiry has been sent.
        </h3>
        <p className="mt-3 text-emerald-800">
          We&apos;ll review your details and get back to you about the right
          next step.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block font-semibold text-slate-900">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-700"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block font-semibold text-slate-900">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-700"
            placeholder="Your phone number"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block font-semibold text-slate-900">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-700"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="loanType" className="mb-2 block font-semibold text-slate-900">
            Loan type
          </label>
          <select
            id="loanType"
            name="loanType"
            required
            defaultValue=""
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-700"
          >
            <option value="" disabled>
              Select loan type
            </option>
            {loanTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="mb-2 block font-semibold text-slate-900">
          What are you trying to do?
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-700"
          placeholder="Briefly describe your loan goal or question."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 rounded-lg bg-blue-700 px-7 py-4 font-semibold text-white hover:bg-blue-800 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Submit Enquiry"}
      </button>

      {status === "error" && (
        <p className="mt-4 text-sm leading-6 text-red-600">
          Something went wrong sending your enquiry. Please try again, or
          call us directly on {siteConfig.phoneDisplay}.
        </p>
      )}

      <p className="mt-4 text-sm leading-6 text-slate-500">
        By submitting this form you agree to be contacted about your
        enquiry. See our{" "}
        <a href="/legal/privacy-policy" className="underline hover:text-slate-700">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
