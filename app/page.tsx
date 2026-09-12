import Hero from "@/components/sections/Hero";
import CredibilityStrip from "@/components/sections/CredibilityStrip";
import Services from "@/components/sections/Services";
import Approach from "@/components/sections/Approach";
import Stats from "@/components/sections/Stats";
import Process from "@/components/sections/Process";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import Engagement from "@/components/sections/Engagement";
import Faq from "@/components/sections/Faq";
import ClosingCta from "@/components/sections/ClosingCta";
import { faqJsonLd } from "@/lib/jsonld";

export default function Home() {
  const faqLd = faqJsonLd();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Hero />
      <CredibilityStrip />
      <Services />
      <Approach />
      <Stats />
      <Process />
      <Team />
      <Testimonials />
      <Engagement />
      <Faq />
      <ClosingCta />
    </>
  );
}
