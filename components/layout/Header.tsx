"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const propertyLinks = [
  {
    label: "Property Finance",
    href: "/loan-solutions/property-finance",
  },
  {
    label: "Home Loans",
    href: "/loan-solutions/property-finance/home-loans",
  },
  {
    label: "Refinance",
    href: "/loan-solutions/property-finance/refinance",
  },
  {
    label: "First Home Buyers",
    href: "/loan-solutions/property-finance/first-home-buyers",
  },
  {
    label: "Investment Loans",
    href: "/loan-solutions/property-finance/investment-loans",
  },
  {
    label: "Commercial Property Loans",
    href: "/loan-solutions/property-finance/commercial-property-loans",
  },
];

const assetLinks = [
  {
    label: "Asset Finance",
    href: "/loan-solutions/asset-finance",
  },
  {
    label: "Car Loans",
    href: "/loan-solutions/asset-finance/car-loans",
  },
  {
    label: "Vehicle Finance",
    href: "/loan-solutions/asset-finance/vehicle-finance",
  },
  {
    label: "Equipment Finance",
    href: "/loan-solutions/asset-finance/equipment-finance",
  },
  {
    label: "Truck Finance",
    href: "/loan-solutions/asset-finance/truck-finance",
  },
  {
    label: "Machinery Finance",
    href: "/loan-solutions/asset-finance/machinery-finance",
  },
  {
    label: "Business Loans",
    href: "/loan-solutions/asset-finance/business-loans",
  },
  {
    label: "Working Capital Finance",
    href: "/loan-solutions/asset-finance/working-capital-finance",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileLoansOpen, setMobileLoansOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="text-3xl font-bold tracking-tight text-slate-950">
            ChoiceLoans
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 lg:flex">
            <Link href="/" className="hover:text-blue-700">
              Home
            </Link>

            <div className="group relative">
              <Link href="/loan-solutions" className="hover:text-blue-700">
                Loan Solutions
              </Link>

              <div className="invisible absolute left-1/2 top-full z-50 mt-4 w-[760px] -translate-x-1/2 rounded-3xl border border-slate-200 bg-white p-8 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:mt-2 group-hover:opacity-100">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                      Property Finance
                    </p>

                    <div className="grid gap-3">
                      {propertyLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="rounded-xl px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                      Asset Finance
                    </p>

                    <div className="grid gap-3">
                      {assetLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="rounded-xl px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/compare-lenders" className="hover:text-blue-700">
              Compare Lenders
            </Link>

            <Link href="/calculators" className="hover:text-blue-700">
              Calculators
            </Link>

            <Link href="/learning-centre" className="hover:text-blue-700">
              Learning Centre
            </Link>

            <Link href="/about" className="hover:text-blue-700">
              About
            </Link>

            <Link href="/contact" className="hover:text-blue-700">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.phoneHref}
              className="hidden items-center gap-2 font-semibold text-slate-900 hover:text-blue-700 md:flex"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phoneDisplay}
            </a>

            <Link
              href="/contact"
              className="hidden rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800 lg:inline-block"
            >
              Request Review
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-900 lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4 text-sm font-semibold text-slate-800">
            <Link href="/" onClick={() => setMobileOpen(false)} className="rounded-lg px-2 py-3 hover:bg-slate-50">
              Home
            </Link>

            <button
              type="button"
              onClick={() => setMobileLoansOpen((open) => !open)}
              className="flex items-center justify-between rounded-lg px-2 py-3 text-left hover:bg-slate-50"
              aria-expanded={mobileLoansOpen}
            >
              Loan Solutions
              <span className="text-slate-400">{mobileLoansOpen ? "−" : "+"}</span>
            </button>

            {mobileLoansOpen && (
              <div className="ml-2 grid gap-4 border-l border-slate-100 pl-4 pb-2">
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                    Property Finance
                  </p>
                  <div className="grid gap-1">
                    {propertyLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="rounded-lg px-2 py-2 font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                    Asset Finance
                  </p>
                  <div className="grid gap-1">
                    {assetLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="rounded-lg px-2 py-2 font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <Link href="/compare-lenders" onClick={() => setMobileOpen(false)} className="rounded-lg px-2 py-3 hover:bg-slate-50">
              Compare Lenders
            </Link>
            <Link href="/calculators" onClick={() => setMobileOpen(false)} className="rounded-lg px-2 py-3 hover:bg-slate-50">
              Calculators
            </Link>
            <Link href="/learning-centre" onClick={() => setMobileOpen(false)} className="rounded-lg px-2 py-3 hover:bg-slate-50">
              Learning Centre
            </Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="rounded-lg px-2 py-3 hover:bg-slate-50">
              About
            </Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="rounded-lg px-2 py-3 hover:bg-slate-50">
              Contact
            </Link>

            <a
              href={siteConfig.phoneHref}
              className="mt-2 flex items-center gap-2 rounded-lg bg-slate-50 px-2 py-3 font-semibold text-slate-900"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phoneDisplay}
            </a>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-1 rounded-lg bg-blue-700 px-4 py-3 text-center font-semibold text-white"
            >
              Request Review
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}