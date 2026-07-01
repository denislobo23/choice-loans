import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact ChoiceLoans | Request a Loan Review",
  description:
    "Get in touch with ChoiceLoans to compare home loans, refinancing, investment loans, business finance and asset finance options across Australia.",
  alternates: { canonical: "/contact" },
};

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

const nextSteps = [
  "Tell us what type of loan you are comparing",
  "Share your goal and preferred contact details",
  "We review the enquiry and identify the right pathway",
  "You receive a response about the next step",
];

export default function ContactPage() {
  return (
    <>
      <section className="relative min-h-[560px] overflow-hidden bg-slate-950 text-white">
        <Image
          src="/images/hero/contact-hero.jpg"
          alt="Finance adviser meeting with a customer"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/45 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
              Contact ChoiceLoans
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Request a loan review.
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-100">
              Tell us what type of finance you are comparing and we will help
              direct your enquiry to the right lending pathway.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
            Enquiry Form
          </p>

          <h2 className="text-4xl font-bold text-slate-950">
            Start with a few details.
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            This form is designed for general loan enquiries. Do not include
            sensitive financial documents, passwords, account numbers or identity
            documents.
          </p>

          <ContactForm />
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl bg-slate-50 p-8">
            <h3 className="text-2xl font-bold text-slate-950">
              What happens next?
            </h3>

            <div className="mt-6 space-y-4">
              {nextSteps.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-700 font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-slate-950 p-8 text-white">
            <h3 className="text-2xl font-bold">Loan categories</h3>

            <div className="mt-6 flex flex-wrap gap-3">
              {loanTypes.map((type) => (
                <span
                  key={type}
                  className="rounded-full bg-white/10 px-4 py-2 text-sm"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8">
            <h3 className="text-2xl font-bold text-slate-950">
              Important note
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              ChoiceLoans provides general information only. Content on this
              website does not constitute financial advice, credit advice or a
              loan approval. Borrowers should consider their own circumstances
              and seek professional advice where appropriate.
            </p>
          </div>
        </aside>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-3xl bg-blue-700 px-8 py-14 text-center text-white md:px-16">
            <h2 className="text-4xl font-bold">
              Not sure which loan type applies?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Start with your goal. We can help you identify the most relevant
              loan category before you compare options.
            </p>

            <div className="mt-8">
              <Link
                href="/loan-solutions"
                className="inline-block rounded-lg bg-white px-7 py-4 font-semibold text-blue-700"
              >
                View Loan Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
