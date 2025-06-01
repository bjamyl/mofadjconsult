import Company from "@/components/Company";
import Hero from "@/components/Hero";
import OurTeam from "@/components/OurTeam";
import Services from "@/components/Services";
import TestimonialSection from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Hero/>
    <WhyUs/>
    <Company/>
    <Services/>
    <OurTeam/>
    <TestimonialSection/>
   </div>
  );
}
