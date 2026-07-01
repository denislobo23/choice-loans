import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "How We Work",
  description: "How ChoiceLoans operates as a lead referral service, and how we may be paid.",
  alternates: { canonical: "/legal/credit-guide" },
};

export default function HowWeWorkPage() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Legal
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            How We Work
          </h1>
          <p className="mt-4 text-slate-400">
            Last updated: [insert date before publishing]
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-10 px-6 py-16 text-slate-700">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm leading-6 text-amber-900">
          <strong>Before publishing:</strong> fill in the &quot;How we may be
          paid&quot; section with your actual referral/commission arrangement
          once it&apos;s in place, and confirm your ABN and entity name
          throughout the legal pages. This page assumes {siteConfig.name} is a
          pure lead-referral and information service and does not itself
          arrange or provide credit — confirm this stays accurate as the
          business develops. If that ever changes (for example, if you or a
          partner becomes a credit licensee operating as ChoiceLoans), this
          page and the site&apos;s other disclosures will need updating with a
          compliance adviser.
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-950">What ChoiceLoans is</h2>
          <p className="mt-3 leading-8">
            {siteConfig.name} is a lead referral and information website. We
            publish general information, loan guides and calculators to help
            Australians understand their options, and we invite visitors to
            submit an enquiry if they&apos;d like to be connected with a
            lender, mortgage broker or finance partner.
          </p>
          <p className="mt-3 leading-8">
            {siteConfig.name} does not hold an Australian Credit Licence, does
            not provide credit assistance, and does not assess, arrange or
            approve loans. We are not a bank, lender or mortgage broker. When
            you submit an enquiry, we pass your details to a licensed lender,
            broker or finance partner, who will contact you directly and
            handle any credit assistance or lending decision themselves.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-950">
            What happens after you submit an enquiry
          </h2>
          <p className="mt-3 leading-8">
            We review your enquiry and pass it on to a lender, broker or
            finance partner who operates in the loan category you selected.
            From that point, they are responsible for contacting you, assessing
            your circumstances, and providing any credit assistance, quotes or
            recommendations. {siteConfig.name} is not involved in that
            assessment and has no role in the lending decision.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-950">Cost to you</h2>
          <p className="mt-3 leading-8">
            {siteConfig.name} does not charge you a fee to submit an enquiry or
            to be referred to a lender, broker or partner.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-950">How we may be paid</h2>
          <p className="mt-3 leading-8">
            {siteConfig.name} may receive a referral fee or commission from the
            lender, broker or finance partner your enquiry is passed to. This
            is standard for comparison and lead-referral websites, and does not
            change the price or terms you are offered. [Insert more specific
            detail once your partner/referral agreements are finalised.]
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-950">Your choice</h2>
          <p className="mt-3 leading-8">
            You&apos;re never obligated to proceed with any lender, broker or
            partner we refer you to. {siteConfig.name} lists a limited set of
            partners rather than the entire Australian lending market, so it is
            worth considering whether to compare further options independently
            as well.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-950">Resolving concerns</h2>
          <p className="mt-3 leading-8">
            If you have a complaint about {siteConfig.name} itself, see our{" "}
            <a href="/legal/complaints-process" className="text-blue-700 underline">
              Complaints Process
            </a>
            . If your complaint relates to a lender, broker or partner you were
            referred to, they are required to provide their own complaints
            process and External Dispute Resolution details (such as AFCA
            membership) directly to you.
          </p>
        </div>
      </section>
    </>
  );
}
