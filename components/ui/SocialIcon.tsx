import type { ComponentType } from "react";
import { cn } from "@/lib/utils";

export default function SocialIcon({
  href,
  label,
  icon: Icon,
  className,
  iconClassName,
}: {
  href: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  className?: string;
  iconClassName?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "flex h-16 w-16 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-steel hover:bg-steel hover:text-white",
        className
      )}
    >
      <Icon className={cn("h-7 w-7", iconClassName)} />
    </a>
  );
}
