import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import DocumentCard from "@/components/DocumentCard";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Documents",
  description: "Download forms and documents from Mofad-J Consult, including the Microsoft Project training application form.",
  alternates: { canonical: "/documents" },
};

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Documents", path: "/documents" },
]);

export default function Documents() {
  return (
    <section className="pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Container className="py-16 md:py-20">
        <Eyebrow>Documents</Eyebrow>
        <h1 className="mt-3 max-w-xl text-step-2 font-bold text-ink">Our document collection</h1>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <DocumentCard
            fileName="application_form.pdf"
            fileSize="171 KB"
            fileType="PDF"
            filePath="/application_form.pdf"
            description="Application form for the Microsoft Project training program."
          />
        </div>
      </Container>
    </section>
  );
}
