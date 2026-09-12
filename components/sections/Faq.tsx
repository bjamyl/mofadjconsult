"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Accordion from "@/components/ui/Accordion";
import { faqs } from "@/content/faqs";

export default function Faq() {
  const items = faqs.map((faq, i) => ({
    id: `faq-${i}`,
    title: faq.question,
    content: <p>{faq.answer}</p>,
  }));

  return (
    <Section tone="white">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-3 text-step-2 font-bold text-ink">Frequently asked questions</h2>
        </div>

        <Accordion items={items} defaultOpenId={undefined} className="mt-10 max-w-3xl" />
      </Container>
    </Section>
  );
}
