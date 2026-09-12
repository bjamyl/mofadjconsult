"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, PhoneCall } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#approach", label: "Approach" },
  { href: "/#team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();
  const transparent = pathname === "/";

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);

  const solid = !transparent || scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-200",
        solid ? "bg-white border-b border-line" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="shrink-0">
          <Image
            src={solid ? "/mofadjconsult.png" : "/logo-white.png"}
            alt={`${site.name} logo`}
            height={44}
            width={140}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <ul className={cn("hidden xl:flex items-center gap-8 text-step-0 font-medium", solid ? "text-ink" : "text-white")}>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-colors hover:text-steel">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden xl:flex items-center gap-6">
          <a
            href={`tel:${site.phone}`}
            className={cn("flex items-center gap-2 text-step--1 font-medium", solid ? "text-ink" : "text-white")}
          >
            <PhoneCall className="h-4 w-4" aria-hidden="true" />
            {site.phoneDisplay}
          </a>
          <Button asChild variant="solid" size="brand">
            <Link href="/contact">Book a consultation</Link>
          </Button>
        </div>

        <div className="xl:hidden">
          <Sheet open={openMenu} onOpenChange={setOpenMenu}>
            <SheetTrigger aria-label="Open menu">
              <Menu className={cn("h-8 w-8", solid ? "text-navy-deep" : "text-white")} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="h-full">
                <SheetTitle>
                  <Image src="/mofadjconsult.png" alt={`${site.name} logo`} height={40} width={120} />
                </SheetTitle>
                <SheetDescription className="flex h-full flex-col justify-between">
                  <ul className="mt-6 space-y-4 border-t pt-4 text-step-1 font-semibold text-ink">
                    <li>
                      <Link href="/" onClick={() => setOpenMenu(false)}>
                        Home
                      </Link>
                    </li>
                    {links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} onClick={() => setOpenMenu(false)}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <span className="block pb-6">
                    <span className="mb-2 block border-b pb-1 text-step-0 font-semibold text-ink">Contact info</span>
                    <span className="block text-step--1 text-muted-ink">Phone</span>
                    <span className="mb-2 block text-step-0 text-ink">{site.phoneDisplay}</span>
                    <span className="block text-step--1 text-muted-ink">Email</span>
                    <span className="block text-step-0 text-ink">{site.email}</span>
                  </span>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
