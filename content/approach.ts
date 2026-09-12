export type ApproachItem = {
  id: string;
  title: string;
  blurb: string;
  // Label shown on the schedule/Gantt-style visual for this item.
  visualLabel: string;
  // Index into the schedule visual's row list (Discovery=0 ... Handover=4).
  rowIndex: number;
};

// The former "Why Choose Us" points, now framed as an accordion (spec §4 Approach).
export const approach: ApproachItem[] = [
  {
    id: "experience",
    title: "Experienced professionals",
    blurb:
      "Our team brings 9+ years of industry expertise with certified specialists across PM, QS and scheduling.",
    visualLabel: "Baseline schedule",
    rowIndex: 1,
  },
  {
    id: "success",
    title: "Proven success",
    blurb: "100% client satisfaction with 20+ projects delivered on time and on budget.",
    visualLabel: "Progress tracking",
    rowIndex: 3,
  },
  {
    id: "tailored",
    title: "Tailored approach",
    blurb:
      "Every engagement is scoped after in-depth analysis, with a dedicated point of contact throughout.",
    visualLabel: "Resource allocation",
    rowIndex: 2,
  },
  {
    id: "innovative",
    title: "Innovative solutions",
    blurb:
      "We use Microsoft Project and Primavera P6 to keep planning, monitoring and control data-driven.",
    visualLabel: "Monitoring & control",
    rowIndex: 3,
  },
];
