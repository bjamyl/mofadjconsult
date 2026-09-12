import Container from "@/components/layout/Container";

const chips = [
  "PMP-certified",
  "Primavera P6",
  "Microsoft Project",
  "9+ years experience",
  "20+ projects delivered",
  "Construction",
  "Infrastructure",
];

export default function CredibilityStrip() {
  return (
    <div className="border-b border-line bg-white py-6">
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-3">
          {chips.map((chip) => (
            <li
              key={chip}
              className="rounded-full border border-line px-4 py-2 text-step--1 font-medium text-slate"
            >
              {chip}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
