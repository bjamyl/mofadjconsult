"use client";

import { useEffect } from "react";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] items-center pt-24">
      <Container className="text-center">
        <p className="text-step--1 font-semibold text-navy">Something went wrong</p>
        <h1 className="mt-3 text-step-2 font-bold text-ink">We hit a snag loading this page</h1>
        <p className="mx-auto mt-4 max-w-md text-muted-ink">
          Try again, or reach us directly and we&apos;ll help right away.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button variant="solid" size="brand" onClick={() => reset()}>
            Try again
          </Button>
          <Button asChild variant="link-brand">
            <a href={`tel:${site.phone}`}>Call {site.phoneDisplay}</a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
