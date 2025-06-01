import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { TextLoop } from "./motion-primitives/text-loop";

export default function Hero() {
  return (
    <div className="lg:clip-angular-top-curved-bottom bg-[url('/bg.jpg')] bg-cover bg-center pb-20 lg:pb-10 xl:h-[80vh]">
      <div className="mx-8 md:mx-24 lg:mx-10 pt-20 xl:pt-32 lg:grid lg:grid-cols-2 lg:gap-4 xl:gap-16 xl:max-w-7xl xl:mx-auto">
        <div>
          <h1 className=" text-4xl md:text-5xl xl:text-6xl font-bold">
            Maximize Project Success with{" "}
            <TextLoop
              className="overflow-y-clip"
              transition={{
                type: "spring",
                stiffness: 900,
                damping: 80,
                mass: 10,
              }}
              variants={{
                initial: {
                  y: 20,
                  rotateX: 90,
                  opacity: 0,
                  filter: "blur(4px)",
                },
                animate: {
                  y: 0,
                  rotateX: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                },
                exit: {
                  y: -20,
                  rotateX: -90,
                  opacity: 0,
                  filter: "blur(4px)",
                },
              }}
            >
              <span className="text-[#0D6970]">Expert <br className="md:hidden"/> Consulting</span>
              <span className="text-[#0D6970]">Project <br className="md:hidden"/> Scheduling</span>
              <span className="text-[#0D6970]">Quantity <br className="md:hidden"/> Surveying</span>
              <span className="text-[#0D6970]">Construction <br /> Expertise</span>

            </TextLoop>
          </h1>
          <p className="mt-4 xl:text-lg">
            MOFAD-J CONSULT delivers top-notch project management services
            tailored to your needs — from planning to execution.
          </p>
          <Link href="/contact">
            <Button className="my-6 bg-[#0D6970] font-bold rounded-full py-6 px-9">
              Book Appointment <ArrowUpRight size={20} />
            </Button>
          </Link>
        </div>
        <Image
          src="/hero2.jpg"
          height={720}
          width={1280}
          alt="hero-image"
          className="rounded-xl xl:rounded-2xl"
        />
      </div>
    </div>
  );
}
