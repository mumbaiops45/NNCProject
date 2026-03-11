// // // // import "./globals.css";
// // // // import Navbar from "@/components/Navbar";
// // // // import Footer from "@/components/Footer";
// // // // import { Poppins } from "next/font/google";

// // // // const poppins = Poppins({
// // // //   subsets: ["latin"],
// // // //   weight: ["300", "400", "500", "600", "700"],
// // // //   variable: "--font-poppins",
// // // // });

// // // // export const metadata = {
// // // //   title: "NNC Digital Solutions | Web & Marketing Agency",
// // // //   description:
// // // //     "Professional web development and digital marketing agency helping businesses grow online.",
// // // // };

// // // // export default function RootLayout({
// // // //   children,
// // // // }: {
// // // //   children: React.ReactNode;
// // // // }) {
// // // //   return (
// // // //     <html lang="en" className={poppins.variable}>
// // // //       <body className="font-[var(--font-poppins)] bg-white text-gray-900">
// // // //         {/* <Navbar /> */}
// // // //         {children}
// // // //         {/* <Footer /> */}
// // // //       </body>
// // // //     </html>
// // // //   );
// // // // }

// // // import type { Metadata } from "next";
// // // import "./globals.css";

// // // export const metadata: Metadata = {
// // //   title: "NNC Digital Solutions | CRM & Digital Growth Partner",
// // //   description:
// // //     "Full-stack technology and automation partner. We design, develop, and deploy scalable CRM, ERP, and digital systems that drive measurable business growth.",
// // // };

// // // export default function RootLayout({
// // //   children,
// // // }: {
// // //   children: React.ReactNode;
// // // }) {
// // //   return (
// // //     <html lang="en">
// // //       <body>{children}</body>
// // //     </html>
// // //   );
// // // }

// // import type { Metadata } from "next";
// // import { Syne, DM_Sans } from "next/font/google";
// // import "./globals.css";

// // const syne = Syne({
// //   subsets: ["latin"],
// //   weight: ["400", "600", "700", "800"],
// //   variable: "--font-syne",
// //   display: "swap",
// // });

// // const dmSans = DM_Sans({
// //   subsets: ["latin"],
// //   weight: ["300", "400", "500", "600", "700"],
// //   variable: "--font-dm",
// //   display: "swap",
// // });

// // export const metadata: Metadata = {
// //   title: "NNC Digital Solutions — Custom CRM, ERP & Software Development | Canada · USA · UK",
// //   description:
// //     "NNC Digital builds custom CRM, ERP, web, and mobile systems for businesses in Canada, USA, and the UK. 10+ years of expertise. 100+ projects delivered.",
// //   openGraph: {
// //     title: "NNC Digital Solutions",
// //     description: "Build. Scale. Automate. — 10+ years of enterprise software excellence.",
// //     url: "https://nncdigital.com",
// //     siteName: "NNC Digital",
// //     type: "website",
// //   },
// // };

// // export default function RootLayout({ children }: { children: React.ReactNode }) {
// //   return (
// //     <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
// //       <body>{children}</body>
// //     </html>
// //   );


// // }





// import type { Metadata } from "next";
// import { Syne, DM_Sans } from "next/font/google";
// import "./globals.css";

// const syne = Syne({
//   subsets: ["latin"],
//   weight: ["400", "600", "700", "800"],
//   variable: "--font-syne-next",
//   display: "swap",
// });

// const dmSans = DM_Sans({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   variable: "--font-dm-next",
//   display: "swap",
// });

// export const metadata: Metadata = {
//   title: "NNC Digital Solutions — Custom CRM, ERP & Software | Canada · USA · UK",
//   description:
//     "NNC Digital builds custom CRM, ERP, web, and mobile systems for businesses in Canada, USA, and the UK. 10+ years of expertise. 100+ projects delivered.",
//   openGraph: {
//     title: "NNC Digital Solutions",
//     description: "Build. Scale. Automate. — 10+ years of enterprise software excellence.",
//     url: "https://nncdigital.com",
//     siteName: "NNC Digital",
//     type: "website",
//   },
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
//       <body style={{ fontFamily: "var(--font-dm-next, 'DM Sans', sans-serif)" }}>
//         {children}
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

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
  return (
    <html lang="en" className={poppins.variable}>
      <body
        style={{
          fontFamily: "var(--font-poppins), sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}