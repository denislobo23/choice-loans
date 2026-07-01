import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Complaints Process",
  description: "How to raise a complaint with ChoiceLoans and what happens next.",
  alternates: { canonical: "/legal/complaints-process" },
};

const steps = [
  {
    title: "1. Contact us directly",
    text: `Email ${siteConfig.email} or call ${siteConfig.phoneDisplay} with details of your complaint, including your contact details and what happened.`,
  },
  {
    title: "2. Acknowledgement",
    text: "We aim to acknowledge your complaint within [insert timeframe, e.g. 2 business days] of receiving it.",
  },
  {
    title: "3. Review",
    text: "We will review your complaint and may contact you for more information. We aim to resolve most complaints within [insert timeframe, e.g. 30 days].",
  },
  {
    title: "4. Outcome",
    text: "We will let you know the outcome of our review and any steps we are taking in response.",
  },
];

export default function ComplaintsProcessPage() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Legal
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Complaints Process
          </h1>
          <p className="mt-4 text-slate-400">
            Last updated: [insert date before publishing]
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-10 px-6 py-16 text-slate-700">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm leading-6 text-amber-900">
          <strong>Draft notice:</strong> Fill in the bracketed timeframes below
          with figures you can realistically commit to, and confirm the AFCA
          section applies to your business model before publishing.
        </div>

        <div>
          <p className="leading-8">
            If something has not met your expectations, we want to know about
            it. Here is how to raise a complaint with {siteConfig.name} and
            what you can expect from us.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-bold text-slate-950">{step.title}</h2>
              <p className="mt-2 leading-7 text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-950">
            If you are not satisfied with our response
          </h2>
          <p className="mt-3 leading-8">
            {siteConfig.name} is a lead referral and information service and
            does not hold an Australian Credit Licence, so we are not a member
            of the Australian Financial Complaints Authority (AFCA) in our own
            right. If your complaint is about {siteConfig.name}&apos;s own
            conduct and remains unresolved, you can contact Consumer Affairs
            Victoria or the ACCC for general guidance on your options. [Confirm
            the right escalation body once your business structure is
            finalised.]
          </p>
          <p className="mt-3 leading-8">
            If your complaint relates to a lender, broker or partner you were
            referred to, they are required to provide you with their own
            complaints process and AFCA membership details directly, since
            they hold the relevant credit licence.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-950">Privacy complaints</h2>
          <p className="mt-3 leading-8">
            For complaints specifically about how we have handled your
            personal information, see our{" "}
            <a href="/legal/privacy-policy" className="text-blue-700 underline">
              Privacy Policy
            </a>
            . You can also contact the Office of the Australian Information
            Commissioner (OAIC) if you remain unsatisfied.
          </p>
        </div>
      </section>
    </>
  );
}
