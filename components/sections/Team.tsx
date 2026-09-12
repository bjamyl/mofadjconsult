import Image from "next/image";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { team } from "@/content/team";

export default function Team() {
  return (
    <Section id="team" tone="paper">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Our team</Eyebrow>
          <h2 className="mt-3 text-step-2 font-bold text-ink">Meet the experts</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.id} className="text-center">
              <div className="relative aspect-square w-full overflow-hidden rounded-brand-lg">
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover grayscale"
                />
              </div>
              <h3 className="mt-5 text-step-1 font-semibold text-ink">{member.name}</h3>
              <p className="text-muted-ink">{member.position}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
