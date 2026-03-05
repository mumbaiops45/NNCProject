// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   variable: "--font-poppins",
// });

// export const metadata = {
//   title: "NNC Digital Solutions | Web & Marketing Agency",
//   description:
//     "Professional web development and digital marketing agency helping businesses grow online.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={poppins.variable}>
//       <body className="font-[var(--font-poppins)] bg-white text-gray-900">
//         {/* <Navbar /> */}
//         {children}
//         {/* <Footer /> */}
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NNC Digital Solutions | CRM & Digital Growth Partner",
  description:
    "Full-stack technology and automation partner. We design, develop, and deploy scalable CRM, ERP, and digital systems that drive measurable business growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}