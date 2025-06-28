import AboutSection from "@/components/home/about-section";
import HeroSection from "../components/home/hero-section";
import WhyChooseUs from "../components/home/our-core-beliefs";
import ServicesSection from "@/components/home/services-section";
import TestimonialSection from "@/components/home/testimonial-section";
import GetInTouch from "@/components/home/get-in-touch";
import ProjectShowcase from "@/components/home/projects-section";
import BlogShowcase from "@/components/home/blogs-section";

export default function Home() {
  return (
    <div >
      <HeroSection />
      <AboutSection/>
      <WhyChooseUs/>
      <ServicesSection/>
      <ProjectShowcase/>
      <BlogShowcase/>
      <TestimonialSection/>
      <GetInTouch/>
    </div>
  );
}
