export type Stat = {
  value: string;
  label: string;
};

// Real, defensible numbers only (spec §4 Stats).
export const stats: Stat[] = [
  { value: "9+", label: "Years experience" },
  { value: "20+", label: "Projects delivered" },
  { value: "100%", label: "Client satisfaction" },
  { value: "On time", label: "& on budget" },
];
