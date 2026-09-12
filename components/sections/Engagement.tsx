import Link from "next/link";
import { Check } from "lucide-react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/button";
import { engagementModels } from "@/content/engagement";
import { cn } from "@/lib/utils";

export default function Engagement() {
  return (
    <Section tone="paper">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Ways to work with us</Eyebrow>
          <h2 className="mt-3 text-step-2 font-bold text-ink">Three ways to engage</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {engagementModels.map((model) => (
            <div
              key={model.id}
              className={cn(
                "flex flex-col rounded-brand-lg p-8",
                model.highlight
                  ? "bg-navy-deep text-white shadow-elev"
                  : "border border-line bg-white text-ink"
              )}
            >
              <h3 className="text-step-1 font-semibold">{model.title}</h3>
              <p className={cn("mt-2", model.highlight ? "text-white/75" : "text-muted-ink")}>{model.blurb}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {model.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <Check
                      className={cn("mt-0.5 h-4 w-4 shrink-0", model.highlight ? "text-steel" : "text-navy")}
                      aria-hidden="true"
                    />
                    <span className={model.highlight ? "text-white/90" : "text-slate"}>{point}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant={model.highlight ? "outline-light" : "solid"} size="brand" className="mt-8">
                <Link href="/contact">Request a proposal</Link>
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
