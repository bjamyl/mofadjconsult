import type { LucideIcon } from "lucide-react";
import { ClipboardList, Truck, Ruler, GraduationCap, Activity } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  blurb: string;
  icon: LucideIcon;
  image: string;
};

// Single render source for the services list — fixes the duplicate-DOM bug
// where the services carousel previously rendered every card twice.
export const services: Service[] = [
  {
    slug: "pm-consulting",
    title: "Project management consulting",
    blurb:
      "Independent PM oversight from feasibility to closeout, so your project stays on scope, on schedule and on budget.",
    icon: ClipboardList,
    image: "/consult.jpg",
  },
  {
    slug: "procurement",
    title: "Procurement & logistics",
    blurb:
      "Sourcing, tendering and materials logistics managed to keep supply chains predictable and costs under control.",
    icon: Truck,
    image: "/procurement.jpg",
  },
  {
    slug: "quantity-survey",
    title: "Quantity survey works",
    blurb:
      "Accurate cost estimation, measurement and valuation so every stakeholder works from the same numbers.",
    icon: Ruler,
    image: "/qs.jpg",
  },
  {
    slug: "ms-project",
    title: "Microsoft Project training",
    blurb:
      "Hands-on MS Project and Primavera P6 training that gets your team scheduling and tracking work confidently.",
    icon: GraduationCap,
    image: "/ms.jpg",
  },
  {
    slug: "control",
    title: "Plan, schedule, monitor & control",
    blurb:
      "End-to-end schedule development and progress control, from baseline to handover, so risk is caught early.",
    icon: Activity,
    image: "/planning.jpg",
  },
];
