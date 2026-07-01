import type { Metadata } from "next";
import RefinanceSavingsCalculator from "@/components/calculators/RefinanceSavingsCalculator";

export const metadata: Metadata = {
  title: "Refinance Savings Calculator",
  description:
    "Estimate how much you could save by refinancing to a lower interest rate.",
  alternates: { canonical: "/calculators/refinance-savings" },
};

export default function Page() {
  return <RefinanceSavingsCalculator />;
}
