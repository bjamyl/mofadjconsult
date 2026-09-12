import { cn } from "@/lib/utils";

export default function SiteCard({
  children,
  emphasis = "flat",
  className,
}: {
  children: React.ReactNode;
  emphasis?: "flat" | "elevated";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-brand-md bg-white p-6 md:p-8",
        emphasis === "flat" && "border border-line",
        emphasis === "elevated" && "shadow-elev",
        className
      )}
    >
      {children}
    </div>
  );
}
