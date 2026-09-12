"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { testimonials } from "@/content/testimonials";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number>();

  const updateActiveFromScroll = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const scrollerCenter = scroller.getBoundingClientRect().left + scroller.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(cardCenter - scrollerCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    });
    setActiveIndex(closestIndex);
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    function onScroll() {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateActiveFromScroll);
    }

    updateActiveFromScroll();
    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateActiveFromScroll]);

  function goTo(index: number) {
    cardRefs.current[index]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }

  return (
    <Section tone="white">
      <Container>
        <div className="flex flex-col items-center text-center">
          <span className="rounded-full border border-navy px-6 py-2 text-step--1 font-semibold text-navy">
            Testimonials
          </span>
          <h2 className="mt-6 text-step-2 font-bold text-ink">Listening to our clients</h2>
        </div>
      </Container>

      <div
        ref={scrollerRef}
        className="no-scrollbar mx-auto mt-12 flex max-w-[1320px] snap-x snap-mandatory gap-6 overflow-x-auto px-[7%] pb-2 sm:px-[15%] lg:px-[22%]"
      >
        {testimonials.map((testimonial, i) => (
          <div
            key={testimonial.id}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className={cn(
              "w-[300px] shrink-0 snap-center rounded-brand-md border p-8 transition-all duration-300 sm:w-[440px] lg:w-[620px]",
              i === activeIndex
                ? "border-line bg-paper opacity-100 shadow-elev"
                : "border-line bg-white opacity-50"
            )}
          >
            <p className="text-center text-step-1 text-ink">&ldquo;{testimonial.quote}&rdquo;</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                <Image src={testimonial.image} alt={testimonial.author} fill className="object-cover" sizes="48px" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-ink">{testimonial.author}</p>
                <p className="text-step--1 text-muted-ink">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        {testimonials.map((testimonial, i) => (
          <button
            key={testimonial.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to testimonial ${i + 1} of ${testimonials.length}`}
            aria-current={i === activeIndex}
            className={cn(
              "h-2 rounded-full transition-all",
              i === activeIndex ? "w-6 bg-ink" : "w-2 bg-line"
            )}
          />
        ))}
      </div>
    </Section>
  );
}
