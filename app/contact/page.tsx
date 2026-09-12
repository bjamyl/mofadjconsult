import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import Container from "@/components/layout/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";
import { breadcrumbJsonLd } from "@/lib/jsonld";

const OfficeMap = dynamic(() => import("@/components/contact/OfficeMap"), {
  ssr: false,
  loading: () => <div className="h-full min-h-[280px] animate-pulse rounded-brand-md bg-line" aria-hidden="true" />,
});

export const metadata: Metadata = {
  title: "Contact us",
  description: "Talk to Mofad-J Consult about your project — call, email, or WhatsApp our Accra office.",
  alternates: { canonical: "/contact" },
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  about: { "@id": `${site.url}/#organization` },
};

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Contact us", path: "/contact" },
]);

export default function Contact() {
  return (
    <section className="pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Container className="py-16 md:py-20">
        <Eyebrow>Contact us</Eyebrow>
        <h1 className="mt-3 max-w-xl text-step-2 font-bold text-ink">Let&apos;s talk about your project</h1>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="h-6 w-6 shrink-0 text-navy" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-ink">Our office</p>
                  <p className="text-muted-ink">
                    {site.address.streetAddress}, {site.address.addressLocality}
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="h-6 w-6 shrink-0 text-navy" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-ink">Call us</p>
                  <a href={`tel:${site.phone}`} className="text-muted-ink hover:text-navy">
                    {site.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="h-6 w-6 shrink-0 text-navy" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-ink">Email us</p>
                  <a href={`mailto:${site.email}`} className="text-muted-ink hover:text-navy">
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <FaWhatsapp className="h-6 w-6 shrink-0 text-navy" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-ink">WhatsApp</p>
                  <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-muted-ink hover:text-navy">
                    Chat with us directly
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-8 h-72">
              <OfficeMap />
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
