import Link from "next/link";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center pt-24">
      <Container className="text-center">
        <p className="text-step--1 font-semibold text-navy">404</p>
        <h1 className="mt-3 text-step-2 font-bold text-ink">That page moved — here&apos;s how to reach us</h1>
        <p className="mx-auto mt-4 max-w-md text-muted-ink">
          The page you were looking for doesn&apos;t exist anymore. Try the homepage, or get in touch directly.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button asChild variant="solid" size="brand">
            <Link href="/">Back to homepage</Link>
          </Button>
          <Button asChild variant="link-brand">
            <a href={`tel:${site.phone}`}>Call {site.phoneDisplay}</a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
