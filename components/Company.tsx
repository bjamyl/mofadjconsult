import React from "react";
import SubTitleWhite from "./SubTitleWhite";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { TextEffect } from "./motion-primitives/text-effect";

export default function Company() {
  const headings = [
    "Client Satisfaction",
    "Quality and excellence",
    "Innovation and creativity",
    "Teamwork and collaboration",
    "Integrity and professionalism",
  ];
  return (
    <section className="flex flex-col items-start px-4 bg-defaultGreen bg-[url('/bgg.jpg')] bg-blend-multiply  bg-cover bg-center  py-32">
      <div className="mx-4 md:mx-24 mb-6 lg:hidden ">
        <Image
          alt="company"
          src="/company.jpg"
          height={1280}
          width={720}
          className="rounded-xl"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 md:px-24 lg:px-10 xl:max-w-7xl xl:mx-auto">
        <div className="hidden lg:block">
          <Image
            alt="company"
            src="/company.jpg"
            height={1280}
            width={720}
            className="rounded-xl xl:rounded-2xl"
          />
        </div>
        <div>
          <SubTitleWhite title="Our Company" />

          <TextEffect
            className="mt-10 text-3xl text-white text-left lg:text-5xl font-bold"
            per="word"
            as="h3"
            preset="slide"
          >
            Building Lasting Change in Industry
          </TextEffect>

          <p className=" mt-10 text-slate-200">
            MOFAD-J CONSULT is a project management consultancy firm dedicated
            to delivering top notch quality and exceptional services to our
            clients. With expertise in construction management, project
            management, engineering and project scheduling tools (Microsoft Project and
            Primavera P6), we provide innovative solutions to complex projects
            challenges and also provide MS Project training.
          </p>

          <div>
            <h4 className="text-2xl font-bold text-white mt-5 mb-2">
              Our Values
            </h4>
            <ul className="flex flex-col gap-2">
              {headings.map((heading, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="text-white" />
                  <span className="text-slate-200">{heading}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
