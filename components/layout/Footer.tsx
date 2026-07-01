import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const propertyLinks = [
  ["Property Finance", "/loan-solutions/property-finance"],
  ["Home Loans", "/loan-solutions/property-finance/home-loans"],
  ["Refinance", "/loan-solutions/property-finance/refinance"],
  ["First Home Buyers", "/loan-solutions/property-finance/first-home-buyers"],
  ["Investment Loans", "/loan-solutions/property-finance/investment-loans"],
  ["Commercial Property Loans", "/loan-solutions/property-finance/commercial-property-loans"],
];

const assetLinks = [
  ["Asset Finance", "/loan-solutions/asset-finance"],
  ["Car Loans", "/loan-solutions/asset-finance/car-loans"],
  ["Vehicle Finance", "/loan-solutions/asset-finance/vehicle-finance"],
  ["Equipment Finance", "/loan-solutions/asset-finance/equipment-finance"],
  ["Truck Finance", "/loan-solutions/asset-finance/truck-finance"],
  ["Machinery Finance", "/loan-solutions/asset-finance/machinery-finance"],
  ["Business Loans", "/loan-solutions/asset-finance/business-loans"],
  ["Working Capital Finance", "/loan-solutions/asset-finance/working-capital-finance"],
];

const siteLinks = [
  ["Compare Lenders", "/compare-lenders"],
  ["Calculators", "/calculators"],
  ["Learning Centre", "/learning-centre"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

const legalLinks = [
  ["Privacy Policy", "/legal/privacy-policy"],
  ["Terms & Conditions", "/legal/terms-and-conditions"],
  ["How We Work", "/legal/credit-guide"],
  ["Complaints Process", "/legal/complaints-process"],
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_0.8fr]">
          <div>
            <Link href="/" className="text-3xl font-bold">
              ChoiceLoans
            </Link>

            <p className="mt-5 max-w-sm text-slate-300">
              Property finance, asset finance and lending information for
              Australians comparing loan options.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-block rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white"
            >
              Request a Loan Review
            </Link>

            <div className="mt-6 space-y-2 text-sm text-slate-300">
              <a href={siteConfig.phoneHref} className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4" />
                {siteConfig.phoneDisplay}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white">Property Finance</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {propertyLinks.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white">Asset Finance</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {assetLinks.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white">Site</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {siteLinks.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-bold text-white">Legal</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {legalLinks.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="max-w-5xl text-xs leading-6 text-slate-400">
            ChoiceLoans provides general information only. The content on this
            website does not constitute financial advice, credit advice or loan
            approval. Borrowers should consider their personal circumstances and
            seek professional advice where appropriate.
          </p>

          <p className="mt-6 text-sm text-slate-500">
            © {new Date().getFullYear()} ChoiceLoans. All rights reserved.
            {siteConfig.abn ? ` ABN ${siteConfig.abn}.` : ""}
          </p>
        </div>
      </div>
    </footer>
  );
}