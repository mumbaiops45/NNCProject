import HeroSection from "@/components/HeroSection";
// import AboutSection from "./about/page"; 
// import ProblemsSection from "@/components/ProblemsSection";
// import OurSolutionsSection from "@/components/OurSolutionsSection";
// import ElementsOfValueSection from "@/components/ElementsOfValueSection";
// import FeaturedWorkSection from "@/components/FeaturedWorkSection";
// import HowWeWorkSection from "@/components/HowWeWorkSection";
// import LatestPostsS  ection from "@/components/LatestPostsSection";
import Contact from "../app/contact/page";
import CoreSolutions from "@/components/CoreSolutions";
import EnterprisePositioning from "@/components/EnterprisePositioning";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import SuccessStories from "@/components/SuccessStories";
import OurProcess from "@/components/OurProcess";
import GlobalReach from "@/components/GlobalReach";
import BlogInsights from "@/components/BlogInsights";
import FinalCTA from "@/components/FinalCTA";
import FAQPage from "@/components/Faqs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CoreSolutions/>
      <EnterprisePositioning/>
      <IndustriesWeServe/>
      <SuccessStories/>
      <OurProcess/>
      <GlobalReach/>
      <BlogInsights/>
      <FinalCTA/>
      <FAQPage/>
      {/* <AboutSection/> */}
      {/* <ProblemsSection/> */}
      {/* <OurSolutionsSection/> */}
      {/* <ElementsOfValueSection/> */}
      {/* <FeaturedWorkSection/> */}
      {/* <HowWeWorkSection/> */}
      {/* <LatestPostsSection/> */}
      {/* <Contact/> */}
    </>
  );
}