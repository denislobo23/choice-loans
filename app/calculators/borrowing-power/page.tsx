import type { Metadata } from "next";
import BorrowingPowerCalculator from "@/components/calculators/BorrowingPowerCalculator";

export const metadata: Metadata = {
  title: "Borrowing Power Calculator",
  description:
    "Estimate how much you may be able to borrow based on your income, expenses and financial position.",
  alternates: { canonical: "/calculators/borrowing-power" },
};

export default function Page() {
  return <BorrowingPowerCalculator />;
}
