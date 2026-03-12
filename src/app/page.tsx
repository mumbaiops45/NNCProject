// // src/app/page.tsx
// import Navbar          from "./components/Navbar";
// import HeroSection     from "./components/HeroSection";
// import ClientLogos     from "./components/ClientLogos";
// import SuccessStories  from "./components/SuccessStories";
// import ServicesSection from "./components/ServicesSection";
// import KeyBenefits     from "./components/KeyBenefits";
// import PlatformTools   from "./components/PlatformTools";
// import AIFeatures      from "./components/AIFeatures";
// import CTABanner       from "./components/CTABanner";
// import WhyChooseUs     from "./components/WhyChooseUs";
// import GlobalPresence  from "./components/GlobalPresence";
// import FAQSection      from "./components/FAQSection";
// import ContactForm     from "./components/ContactForm";

// export default function Home() {
//   return (
//     <main>
//       <Navbar />
//       <HeroSection />
//       <ClientLogos />
//       <SuccessStories />
//       <ServicesSection />
//       <KeyBenefits />
//       <PlatformTools />
//       <AIFeatures />
//       <CTABanner />
//       <WhyChooseUs />
//       <GlobalPresence />
//       <FAQSection />
//       <ContactForm />
//     </main>
//   );
// }

// src/app/page.tsx
import Navbar          from "./components/Navbar";
import HeroSection     from "./components/HeroSection";
import StatsBar        from "./components/StatsBar";
import ClientLogos     from "./components/ClientLogos";
import SuccessStories  from "./components/SuccessStories";
import ServicesSection from "./components/ServicesSection";
import KeyBenefits     from "./components/KeyBenefits";
import CTABanner       from "./components/CTABanner";
import WhyChooseUs     from "./components/WhyChooseUs";
import GlobalPresence  from "./components/GlobalPresence";
import FAQSection      from "./components/FAQSection";
import ContactForm     from "./components/ContactForm";
import CRMTabs from "./components/CRMTabs";
import CRMAccordion from "./components/CRMAccordion";
import HireCRMDev from "./components/HireCRMDev";
import AIPowred from "./components/AIPowered";
import PlatformToolsSection from "./components/PlatformToolsSection";
import BlogSection from "./components/BlogSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <ClientLogos />
      <ServicesSection />
      <CRMTabs/>
      <CRMAccordion/>
       <AIPowred/>
      <PlatformToolsSection/>
      <HireCRMDev/>
      <CTABanner />
       <KeyBenefits />
      <SuccessStories />
      <WhyChooseUs />
      <GlobalPresence />
      <FAQSection />
      <ContactForm />
      <BlogSection/>
    </main>
  );
}