export type EngagementModel = {
  id: string;
  title: string;
  blurb: string;
  points: string[];
  highlight?: boolean;
};

// Replaces subscription-pricing cards with real engagement models,
// no invented figures (spec §6.2).
export const engagementModels: EngagementModel[] = [
  {
    id: "retainer",
    title: "Advisory retainer",
    blurb: "Ongoing PM oversight for teams who want a consultant embedded through the life of a project.",
    points: [
      "Scheduling, monitoring & control",
      "Regular progress and risk reporting",
      "Direct access to a senior consultant",
    ],
  },
  {
    id: "project",
    title: "Project-based",
    blurb: "Scoped delivery for a defined piece of work — consulting, procurement or quantity surveying.",
    points: [
      "Fixed scope and deliverables",
      "Procurement & logistics management",
      "Quantity survey & cost reporting",
    ],
    highlight: true,
  },
  {
    id: "training",
    title: "Training",
    blurb: "Hands-on MS Project / Primavera P6 workshops for individuals or in-house teams.",
    points: [
      "Per-seat or in-house sessions",
      "Practical, project-based curriculum",
      "Certificate of completion",
    ],
  },
];
