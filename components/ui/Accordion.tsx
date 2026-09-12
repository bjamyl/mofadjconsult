"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type AccordionItemData = {
  id: string;
  title: string;
  content: React.ReactNode;
};

export default function Accordion({
  items,
  defaultOpenId,
  onOpenChange,
  className,
  itemClassName,
}: {
  items: AccordionItemData[];
  defaultOpenId?: string;
  onOpenChange?: (id: string) => void;
  className?: string;
  itemClassName?: string;
}) {
  const [openId, setOpenId] = useState<string | undefined>(defaultOpenId ?? items[0]?.id);
  const baseId = useId();

  function toggle(id: string) {
    const next = openId === id ? undefined : id;
    setOpenId(next);
    if (next) onOpenChange?.(next);
  }

  return (
    <div className={cn("divide-y divide-line", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const buttonId = `${baseId}-${item.id}-trigger`;
        const panelId = `${baseId}-${item.id}-panel`;
        return (
          <div key={item.id} className={itemClassName}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-step-1 font-semibold text-ink"
              >
                {item.title}
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-navy transition-transform",
                    isOpen && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-6 text-muted-ink"
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
