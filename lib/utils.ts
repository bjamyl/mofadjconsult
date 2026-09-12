import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// Without this, tailwind-merge doesn't recognize our custom fluid type-scale
// classes (text-step-0, text-step-1, ...) as font-size utilities and lumps
// them into the same conflict group as text-color classes (text-white,
// text-ink, ...), silently stripping the color class whenever both appear.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-step--1",
        "text-step-0",
        "text-step-1",
        "text-step-2",
        "text-step-3",
        "text-step-stat",
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
