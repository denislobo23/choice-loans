import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How ChoiceLoans collects, uses and protects your personal information.",
  alternates: { canonical: "/legal/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Legal
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-slate-400">
            Last updated: [insert date before publishing]
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-10 px-6 py-16 text-slate-700">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm leading-6 text-amber-900">
          <strong>Draft notice:</strong> This is a general-purpose privacy policy
          template appropriate for a website that collects contact and enquiry
          details. It has not been reviewed by a lawyer. Before publishing, confirm
          it accurately reflects what {siteConfig.name} actually does with
          enquiry data (including whether enquiries are shared with lenders or
          brokers), and update the ABN, entity name and contact details below.
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-950">1. Who we are</h2>
          <p className="mt-3 leading-8">
            {siteConfig.name} ({siteConfig.domain}) provides general information
            to help Australians compare property finance and asset finance
            options. This policy explains how we collect, use, store and disclose
            personal information in accordance with the Privacy Act 1988 (Cth)
            and the Australian Privacy Principles (APPs).
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-950">2. Information we collect</h2>
          <p className="mt-3 leading-8">
            When you submit an enquiry through our contact form, we collect the
            information you provide, which may include your name, phone number,
            email address, the type of loan you are enquiring about, and any
            details you include in your message. We do not ask for sensitive
            financial documents, passwords, or identity documents through the
            website, and you should not include these in your enquiry.
          </p>
          <p className="mt-3 leading-8">
            We may also automatically collect limited technical information,
            such as general location, browser type and how you interact with the
            website, to help us understand site usage and improve the experience.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-950">3. How we use your information</h2>
          <p className="mt-3 leading-8">
            We use the information you provide to respond to your enquiry, direct
            it to an appropriate lending pathway, and, where relevant, share your
            enquiry details with a lender, broker or finance partner so they can
            follow up with you directly. We may also use your information to
            improve our website and services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-950">4. Disclosure of information</h2>
          <p className="mt-3 leading-8">
            We may disclose your information to third parties for the purpose of
            progressing your enquiry, such as lenders, mortgage brokers or finance
            partners you have expressed interest in being connected with. We do
            not sell personal information to third parties for unrelated marketing
            purposes.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-950">5. Data security</h2>
          <p className="mt-3 leading-8">
            We take reasonable steps to protect the personal information we hold
            from misuse, interference, loss, unauthorised access, modification or
            disclosure. No method of transmission or storage is completely secure,
            and we cannot guarantee absolute security.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-950">6. Access and correction</h2>
          <p className="mt-3 leading-8">
            You can request access to the personal information we hold about you,
            or ask us to correct it, by contacting us using the details below.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-950">7. Complaints</h2>
          <p className="mt-3 leading-8">
            If you have concerns about how we have handled your personal
            information, please see our{" "}
            <a href="/legal/complaints-process" className="text-blue-700 underline">
              Complaints Process
            </a>{" "}
            page. You may also contact the Office of the Australian Information
            Commissioner (OAIC) if you are not satisfied with our response.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-950">8. Contact us</h2>
          <p className="mt-3 leading-8">
            For any privacy-related questions, contact us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-blue-700 underline">
              {siteConfig.email}
            </a>{" "}
            or {siteConfig.phoneDisplay}.
          </p>
        </div>
      </section>
    </>
  );
}
