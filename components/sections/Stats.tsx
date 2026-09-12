import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { stats } from "@/content/stats";
import { cn } from "@/lib/utils";

export default function Stats() {
  return (
    <Section tone="paper">
      <Container>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-brand-lg bg-line sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "flex flex-col justify-center px-8 py-12",
                i % 2 === 0 ? "bg-white text-ink" : "bg-navy-deep text-white"
              )}
            >
              <p className="font-serif-display text-step-stat font-medium leading-none">{stat.value}</p>
              <p className={cn("mt-3 text-step-0", i % 2 === 0 ? "text-muted-ink" : "text-white/75")}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
