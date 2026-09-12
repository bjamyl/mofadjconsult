import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export default function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <Image
        src="/hero2.jpg"
        alt="Mofad-J Consult project site in Accra"
        fill
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-navy-deep/80" aria-hidden="true" />
      <Container className="relative text-center">
        <h2 className="mx-auto max-w-2xl text-step-2 font-bold text-white">
          Ready to keep your next project on schedule and on budget?
        </h2>
        <div className="mt-8 flex items-center justify-center">
          <Button asChild variant="solid" size="brand">
            <Link href="/contact">Book a consultation</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
