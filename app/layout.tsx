import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "ChoiceLoans | Property & Asset Finance",
    template: "%s | ChoiceLoans",
  },
  description:
    "ChoiceLoans helps Australians compare lending options including home loans, refinancing, investment loans, business finance and asset finance.",
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "ChoiceLoans",
    title: "ChoiceLoans | Property & Asset Finance",
    description:
      "Compare home loans, refinancing, investment loans, business finance and asset finance options across Australia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChoiceLoans | Property & Asset Finance",
    description:
      "Compare home loans, refinancing, investment loans, business finance and asset finance options across Australia.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ChoiceLoans",
  url: siteConfig.url,
  description:
    "ChoiceLoans helps Australians compare lending options including home loans, refinancing, investment loans, business finance and asset finance.",
  areaServed: "AU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}