import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import Container from "./Container";
import SocialIcon from "@/components/ui/SocialIcon";
import { site } from "@/content/site";
import { services } from "@/content/services";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-6 text-step-0 font-semibold">Services</h3>
            <ul className="space-y-3 text-white/70">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href="/#services" className="transition-colors hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-step-0 font-semibold">Company</h3>
            <ul className="space-y-3 text-white/70">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#approach" className="transition-colors hover:text-white">
                  Approach
                </Link>
              </li>
              <li>
                <Link href="/#team" className="transition-colors hover:text-white">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-step-0 font-semibold">Resources</h3>
            <ul className="space-y-3 text-white/70">
              <li>
                <Link href="/contact" className="transition-colors hover:text-white">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/documents" className="transition-colors hover:text-white">
                  Documents
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-step-0 font-semibold">Office</h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-steel" aria-hidden="true" />
                <span>
                  {site.address.streetAddress}, {site.address.addressLocality}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-steel" aria-hidden="true" />
                <a href={`tel:${site.phone}`} className="transition-colors hover:text-white">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-steel" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-10">
          <p className="mb-5 text-step-0 font-semibold">Get in touch</p>
          <div className="flex flex-wrap items-center gap-5">
            <SocialIcon href={`tel:${site.phone}`} label="Call us" icon={Phone} />
            <SocialIcon href={`mailto:${site.email}`} label="Email us" icon={Mail} />
            <SocialIcon href={site.whatsapp} label="Chat with us on WhatsApp" icon={FaWhatsapp} />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center">
          <p className="text-step--1 text-white/60">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <Link href="#top" className="text-step--1 font-medium text-white/60 transition-colors hover:text-white">
            Back to top
          </Link>
        </div>
      </Container>
    </footer>
  );
}
