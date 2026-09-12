import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-ink pt-24">
      <Image
        src="/hero.jpg"
        alt="Mofad-J Consult team reviewing a project schedule on a construction site in Accra"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(16,20,26,0.88) 0%, rgba(16,20,26,0.6) 55%, rgba(16,20,26,0.35) 100%)",
        }}
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="max-w-2xl">
          <h1 className="text-step-3 font-bold leading-[1.05] text-white">
            Maximize project success with expert consulting.
          </h1>
          <p className="mt-6 max-w-[42ch] text-step-1 text-white/85">
            From planning to execution, we keep your construction and infrastructure projects on schedule and on budget.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild variant="solid" size="brand">
              <Link href="/contact">
                Book a consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline-light" size="brand">
              <Link href="#services">See our work</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
