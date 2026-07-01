import type { Metadata } from "next";
import StampDutyCalculator from "@/components/calculators/StampDutyCalculator";

export const metadata: Metadata = {
  title: "Stamp Duty Calculator",
  description:
    "Estimate stamp duty costs on your property purchase across Australian states and territories.",
  alternates: { canonical: "/calculators/stamp-duty" },
};

export default function Page() {
  return <StampDutyCalculator />;
}
