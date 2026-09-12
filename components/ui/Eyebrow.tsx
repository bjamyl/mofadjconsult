import { cn } from "@/lib/utils";

export default function Eyebrow({
  children,
  className,
  light,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <p
      className={cn(
        "text-step--1 font-semibold tracking-wide",
        light ? "text-steel" : "text-navy",
        className
      )}
    >
      {children}
    </p>
  );
}
