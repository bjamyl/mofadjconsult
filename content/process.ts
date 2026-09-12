export type ProcessStep = {
  number: string;
  title: string;
  blurb: string;
};

// Five real phases aligned to PMBOK, used only here because this content is
// genuinely a sequence (redesign spec §4).
export const process: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    blurb: "We assess scope, constraints and stakeholders before any plan is drawn up.",
  },
  {
    number: "02",
    title: "Planning & scheduling",
    blurb: "Baselines, budgets and a working schedule are built in MS Project or Primavera P6.",
  },
  {
    number: "03",
    title: "Execution",
    blurb: "Procurement, coordination and site oversight keep delivery moving against plan.",
  },
  {
    number: "04",
    title: "Monitoring & control",
    blurb: "Progress, cost and risk are tracked continuously so issues surface early, not late.",
  },
  {
    number: "05",
    title: "Handover",
    blurb: "Close-out documentation and lessons learned are delivered alongside the finished project.",
  },
];
