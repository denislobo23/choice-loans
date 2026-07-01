import type { Metadata } from "next";
import ExtraRepaymentCalculator from "@/components/calculators/ExtraRepaymentCalculator";

export const metadata: Metadata = {
  title: "Extra Repayment Calculator",
  description:
    "See how extra mortgage repayments can reduce your loan term and total interest paid.",
  alternates: { canonical: "/calculators/extra-repayment" },
};

export default function Page() {
  return <ExtraRepaymentCalculator />;
}
