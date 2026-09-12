export type Faq = {
  question: string;
  answer: string;
};

// Source of truth for both the on-page FAQ accordion and the FAQPage JSON-LD.
export const faqs: Faq[] = [
  {
    question: "What industries do you serve?",
    answer:
      "We work primarily with construction, infrastructure and built-environment clients in Ghana, covering everything from residential and commercial developments to institutional projects.",
  },
  {
    question: "How do you charge?",
    answer:
      "Pricing depends on project scope and engagement type — advisory retainer, project-based delivery, or training. We provide a proposal after an initial consultation rather than fixed online pricing.",
  },
  {
    question: "Do you handle international or local procurement?",
    answer:
      "Yes. Our procurement and logistics service covers sourcing, tendering and materials coordination for both local and international suppliers.",
  },
  {
    question: "How long does an engagement typically take?",
    answer:
      "It varies with project size and phase — from a few weeks for a scheduling or QS review to the full duration of a project for ongoing PM oversight. We scope timelines during the initial consultation.",
  },
  {
    question: "Do you offer Microsoft Project or Primavera P6 training?",
    answer:
      "Yes. We run hands-on MS Project and Primavera P6 training, available per-seat or as an in-house session for your team.",
  },
  {
    question: "Do you provide ongoing support after handover?",
    answer:
      "Yes, ongoing monitoring and control support can be arranged as part of an advisory retainer, so schedules and budgets stay on track after the initial engagement ends.",
  },
];
