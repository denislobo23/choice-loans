import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using the ChoiceLoans website.",
  alternates: { canonical: "/legal/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Legal
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-slate-400">
            Last updated: [insert date before publishing]
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-10 px-6 py-16 text-slate-700">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm leading-6 text-amber-900">
          <strong>Draft notice:</strong> This is a general website terms template.
          It has not been reviewed by a lawyer. Confirm the entity name, ABN, and
          governing state before publishing.
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-950">1. Acceptance of terms</h2>
          <p className="mt-3 leading-8">
            By accessing or using {siteConfig.domain} (the &quot;Website&quot;),
            you agree to be bound by these Terms &amp; Conditions. If you do not
            agree, please do not use the Website.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-950">2. General information only</h2>
          <p className="mt-3 leading-8">
            Content on this Website, including loan guides, calculators and
            lender comparisons, is general information only. It does not
            constitute financial advice, credit advice, or a recommendation
            that any particular loan or lender is suitable for you. You should
            consider your own circumstances and, where appropriate, seek advice
            from a licensed financial adviser, mortgage broker or credit
            provider before making a decision.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-950">3. Calculators</h2>
          <p className="mt-3 leading-8">
            Calculators on this Website provide estimates only, based on the
            figures you enter. They do not take into account your full
            financial situation, do not constitute a loan offer or
            pre-approval, and actual loan terms offered by a lender may differ.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-950">4. No guarantee of lending outcomes</h2>
          <p className="mt-3 leading-8">
            Submitting an enquiry through this Website does not guarantee loan
            approval, a specific interest rate, or that any lender will
            contact you. Lending decisions are made solely by the relevant
            lender or credit provider, subject to their own criteria.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-950">5. Intellectual property</h2>
          <p className="mt-3 leading-8">
            All content on this Website, including text, graphics and design,
            is owned by or licensed to {siteConfig.name} and may not be
            reproduced without permission, except as permitted for personal,
            non-commercial use.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-950">6. Limitation of liability</h2>
          <p className="mt-3 leading-8">
            To the extent permitted by law, {siteConfig.name} excludes all
            liability for any loss or damage arising from your use of this
            Website or reliance on its content, except where liability cannot
            be excluded under the Australian Consumer Law.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-950">7. Third-party links and lenders</h2>
          <p className="mt-3 leading-8">
            This Website may reference or link to third-party lenders or
            service providers. We do not control and are not responsible for
            the content, products, services or practices of any third party.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-950">8. Changes to these terms</h2>
          <p className="mt-3 leading-8">
            We may update these Terms &amp; Conditions from time to time.
            Continued use of the Website after changes are posted constitutes
            acceptance of the updated terms.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-950">9. Governing law</h2>
          <p className="mt-3 leading-8">
            These terms are governed by the laws of Victoria, Australia, and
            you submit to the non-exclusive jurisdiction of its courts.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-950">10. Contact us</h2>
          <p className="mt-3 leading-8">
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-blue-700 underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
