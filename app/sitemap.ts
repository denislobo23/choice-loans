import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const routes = [
    "",
    "/about",
    "/contact",
    "/compare-lenders",
    "/compare-lenders/anz",
    "/compare-lenders/commonwealth-bank",
    "/compare-lenders/ing",
    "/compare-lenders/macquarie",
    "/compare-lenders/nab",
    "/compare-lenders/westpac",
    "/calculators",
    "/calculators/borrowing-power",
    "/calculators/extra-repayment",
    "/calculators/loan-comparison",
    "/calculators/mortgage-repayment",
    "/calculators/refinance-savings",
    "/calculators/stamp-duty",
    "/loan-solutions",
    "/loan-solutions/property-finance",
    "/loan-solutions/property-finance/commercial-property-loans",
    "/loan-solutions/property-finance/first-home-buyers",
    "/loan-solutions/property-finance/home-loans",
    "/loan-solutions/property-finance/investment-loans",
    "/loan-solutions/property-finance/refinance",
    "/loan-solutions/asset-finance",
    "/loan-solutions/asset-finance/business-loans",
    "/loan-solutions/asset-finance/car-loans",
    "/loan-solutions/asset-finance/equipment-finance",
    "/loan-solutions/asset-finance/machinery-finance",
    "/loan-solutions/asset-finance/truck-finance",
    "/loan-solutions/asset-finance/vehicle-finance",
    "/loan-solutions/asset-finance/working-capital-finance",
    "/learning-centre",
    "/learning-centre/home-loan-guides",
    "/learning-centre/refinance-guides",
    "/learning-centre/first-home-buyer-guides",
    "/learning-centre/investment-property-guides",
    "/learning-centre/asset-finance-guides",
    "/learning-centre/finance-education",
    "/legal/privacy-policy",
    "/legal/terms-and-conditions",
    "/legal/credit-guide",
    "/legal/complaints-process",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
