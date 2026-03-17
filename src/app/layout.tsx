import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SchemaMarkup from "./components/SchemaMarkup";
import Footer from "./components/Footer";
import { getOrganisationSchema } from "./lib/schema"; // 👈 ADD THIS IMPORT
// import ScrollToTopButton from "@/styles/ScrollToTopButton";
// import CookieConsentPopup from "./cookies-policy/cookiespop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NNC Digital Solutions — Custom CRM, ERP & Software | Canada · USA · UK",
  description:
    "NNC Digital builds custom CRM, ERP, web, and mobile systems for businesses in Canada, USA, and the UK. 10+ years of expertise. 100+ projects delivered.",
  openGraph: {
    title: "NNC Digital Solutions",
    description:
      "Build. Scale. Automate. — 10+ years of enterprise software excellence.",
    url: "https://nncdigital.com",
    siteName: "NNC Digital",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = getOrganisationSchema(); // Now this works with the import
  
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* 👈 MOVE SchemaMarkup INSIDE head tag */}
        <SchemaMarkup schema={orgSchema} id="organization-schema" />
      </head>
      <body
        style={{
          fontFamily: "var(--font-poppins), sans-serif",
        }}
      >
        {children}
        <Footer />
        {/* <ScrollToTopButton /> */}
        {/* <CookieConsentPopup/> */}
      </body>
    </html>
  );
}