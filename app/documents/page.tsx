import SubTitle from "@/components/SubTitle";
import Image from "next/image";
import React from "react";
import DocumentCard from "@/components/DocumentCard";

export default function Documents() {
  return (
    <section className="mb-20 lg:mb-10">
      <Image
        alt="phone"
        height={720}
        width={1280}
        src="/docs.jpg"
        className="w-full h-[40vh] object-cover"
      />
      <div className="mx-6 xl:mx-auto xl:max-w-7xl mt-10">
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <SubTitle title="Documents" />
          <h3 className="mt-10 lg:mb-10 mb-5 mx-8 text-3xl text-center lg:text-5xl font-bold">
            Our Document Collection
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DocumentCard
              fileName="application_form.pdf"
              fileSize="171 KB"
              fileType="PDF"
              filePath="/application_form.pdf"
              description="Application form for Microsoft Project Training Program"
            />

          </div>
        </div>
      </div>
    </section>
  );
}
