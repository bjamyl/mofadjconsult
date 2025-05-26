import SubTitle from "@/components/SubTitle";
import Image from "next/image";
import React from "react";
import ContactSection from "@/components/Contact";
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <section className="mb-20 lg:mb-10">
      <Image
        alt="phone"
        height={720}
        width={1280}
        src="/phone.jpg"
        className="w-full h-[40vh] object-cover"
      />
      <div className="mx-6 xl:mx-auto xl:max-w-7xl mt-10">
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <SubTitle title="Contact Us" />
          <h3 className="mt-10 lg:mb-10 mb-5 mx-8 text-3xl text-center lg:text-5xl font-bold">
            Our Contact Information
          </h3>
          <ContactSection />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
