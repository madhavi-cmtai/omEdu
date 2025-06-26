import AboutSection from "@/components/home/about-section";
import HeroSection from "../components/home/hero-section";
import WhyChooseUs from "../components/home/our-core-beliefs";
import ServicesSection from "@/components/home/services-section";
import TestimonialSection from "@/components/home/testimonial-section";
import GetInTouch from "@/components/home/get-in-touch";

export default function Home() {
  return (
    <div className="w-full min-h-[50vh] sm:min-h-[70vh] lg:min-h-[80vh]">
      <HeroSection />
      <AboutSection/>
      <WhyChooseUs/>
      <ServicesSection/>
      <TestimonialSection/>
      <GetInTouch/>
    </div>
  );
}
