// data/cardContent.ts
import { Briefcase, Trophy, UserCheck, Cpu } from 'lucide-react';

export const SERVICES = [
  {
    icon: Briefcase,
    title: "Experienced Professionals",
    content: "Our team brings 9+ years of industry expertise with certified specialists in every domain. We've successfully guided companies through complex transformations.",
    className: "border-blue-100"
  },
  {
    icon: Trophy,
    title: "Proven Success",
    content: "100% client satisfaction rate with 20+ projects delivered on time and budget.",
    className: "border-emerald-100"
  },
  {
    icon: UserCheck,
    title: "Tailored Approach",
    content: "Every solution is custom-built after in-depth analysis. Your dedicated account manager ensures seamless communication at every stage.",
    className: "border-purple-100"
  },
  {
    icon: Cpu,
    title: "Innovative Solutions",
    content: "We leverage advanced analytics and cutting-edge frameworks to solve problems traditional methods can't.",
    className: "border-amber-100"
  }
] as const;