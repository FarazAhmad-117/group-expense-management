import CallToAction from "./_components/CallToAction";
import FAQSection from "./_components/FAQSection";
import FeaturesSection from "./_components/FeaturesSection";
import HeroSection from "./_components/HeroSection";
import PricingSection from "./_components/PricingSection";
import TestimonialSection from "./_components/TestimonialSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialSection />
      <FAQSection />
      <CallToAction />
    </>
  );
}
