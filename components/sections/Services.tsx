import Link from "next/link";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import SiteCard from "@/components/ui/SiteCard";
import { services } from "@/content/services";

export default function Services() {
  return (
    <Section id="services" tone="paper">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="mt-3 text-step-2 font-bold text-ink">Services built for how real projects run</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <SiteCard key={service.slug} emphasis="flat" className="flex flex-col">
                <Icon className="h-10 w-10 text-navy" aria-hidden="true" />
                <h3 className="mt-5 text-step-1 font-semibold text-ink">{service.title}</h3>
                <p className="mt-2 flex-1 text-muted-ink">{service.blurb}</p>
                <Link
                  href="/contact"
                  className="mt-5 inline-block text-step--1 font-semibold text-navy underline underline-offset-4 hover:text-navy-deep"
                >
                  Book a consultation
                </Link>
              </SiteCard>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
