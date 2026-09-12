"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Accordion from "@/components/ui/Accordion";
import { approach } from "@/content/approach";
import { cn } from "@/lib/utils";

const rows = [
  { label: "Discovery", width: "35%" },
  { label: "Planning & scheduling", width: "70%" },
  { label: "Execution", width: "95%" },
  { label: "Monitoring & control", width: "60%" },
  { label: "Handover", width: "25%" },
];

export default function Approach() {
  const [activeId, setActiveId] = useState(approach[0].id);
  const active = approach.find((a) => a.id === activeId) ?? approach[0];

  const items = approach.map((item) => ({
    id: item.id,
    title: item.title,
    content: <p>{item.blurb}</p>,
  }));

  return (
    <Section id="approach" tone="white">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>Our approach</Eyebrow>
            <h2 className="mt-3 text-step-2 font-bold text-ink">Why teams work with us</h2>
            <p className="mt-4 max-w-[52ch] text-muted-ink">
              MOFAD-J CONSULT is a project management consultancy dedicated to delivering quality outcomes
              through disciplined planning, scheduling and cost control &mdash; backed by Microsoft Project and
              Primavera P6.
            </p>
            <Accordion items={items} defaultOpenId={activeId} onOpenChange={setActiveId} className="mt-8" />
          </div>

          <div className="rounded-brand-lg bg-navy-deep p-8 text-white shadow-elev">
            <p className="text-step--1 font-semibold text-steel">{active.visualLabel}</p>
            <p className="mt-1 text-step-1 font-semibold">Sample project schedule</p>
            <div className="mt-8 space-y-5">
              {rows.map((row, i) => (
                <div key={row.label}>
                  <div className="mb-1.5 flex items-center justify-between text-step--1 text-white/70">
                    <span>{row.label}</span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className={cn(
                        "h-full rounded-full transition-colors",
                        i === active.rowIndex ? "bg-steel" : "bg-white/30"
                      )}
                      style={{ width: row.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
