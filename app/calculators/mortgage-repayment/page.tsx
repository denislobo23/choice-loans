import type { Metadata } from "next";
import MortgageRepaymentCalculator from "@/components/calculators/MortgageRepaymentCalculator";

export const metadata: Metadata = {
  title: "Mortgage Repayment Calculator",
  description:
    "Estimate your monthly home loan repayments based on loan amount, interest rate and loan term.",
  alternates: { canonical: "/calculators/mortgage-repayment" },
};

export default function Page() {
  return <MortgageRepaymentCalculator />;
}
