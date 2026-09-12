import { cn } from "@/lib/utils";

type Tone = "paper" | "white" | "navy";

const toneClasses: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  white: "bg-white text-ink",
  navy: "bg-navy-deep text-white",
};

export default function Section({
  children,
  tone = "white",
  className,
  id,
  as: As = "section",
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
  as?: "section" | "div";
}) {
  return (
    <As
      id={id}
      className={cn(toneClasses[tone], className)}
      style={{ paddingTop: "var(--section-pad)", paddingBottom: "var(--section-pad)" }}
    >
      {children}
    </As>
  );
}
