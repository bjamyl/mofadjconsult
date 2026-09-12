import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { process } from "@/content/process";

export default function Process() {
  return (
    <Section tone="white">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="mt-3 text-step-2 font-bold text-ink">Five phases, start to finish</h2>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {process.map((step) => (
            <li key={step.number} className="border-t-2 border-navy pt-4">
              <span className="font-serif-display text-step-1 text-navy">{step.number}</span>
              <h3 className="mt-2 text-step-1 font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-muted-ink">{step.blurb}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
