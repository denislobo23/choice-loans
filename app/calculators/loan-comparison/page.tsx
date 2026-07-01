import type { Metadata } from "next";
import LoanComparisonCalculator from "@/components/calculators/LoanComparisonCalculator";

export const metadata: Metadata = {
  title: "Loan Comparison Calculator",
  description:
    "Compare two loan scenarios side by side to see the difference in repayments and total cost.",
  alternates: { canonical: "/calculators/loan-comparison" },
};

export default function Page() {
  return <LoanComparisonCalculator />;
}
