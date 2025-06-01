"use client";
import React from "react";
import SubTitle from "./SubTitle";
import ServiceCard from "./ServiceCard";
import { InView } from "./ui/in-view";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { TextEffect } from "./motion-primitives/text-effect";
// Services.tsx
export default function Services() {
  return (
    <section id="services" className="pb-20 lg:pb-10">
      <div className="flex flex-col items-center pt-20 pb-32">
        <SubTitle title="Services" />
        <TextEffect
          per="word"
          as="h3"
          preset="slide"
          className="mt-10 lg:mb-10 mb-5 mx-8 text-3xl text-center lg:text-5xl font-bold"
        >
          Transformative Solutions
        </TextEffect>
        <div className="lg:hidden px-8 md:px-24 w-full max-w-[1280px] grid gap-8 lg:gap-10">
          <InView
            variants={{
              hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ServiceCard
              alt="image"
              imageDir="/consult.jpg"
              listNumber={1}
              title="Project Management Consulting"
            />
          </InView>
          <InView
            variants={{
              hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ServiceCard
              alt="image"
              imageDir="/procurement.jpg"
              listNumber={2}
              title="Procurement and Logistics"
            />
          </InView>
          <InView
            variants={{
              hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ServiceCard
              alt="image"
              imageDir="/qs.jpg"
              listNumber={3}
              title="Quantity Survey Works"
            />
          </InView>
          <InView
            variants={{
              hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ServiceCard
              alt="image"
              imageDir="/ms.jpg"
              listNumber={4}
              title="Microsoft Project Training"
            />
          </InView>
          <InView
            variants={{
              hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ServiceCard
              alt="image"
              imageDir="/planning.jpg"
              listNumber={5}
              title="Plan, Schedule, Monitor and Control Projects"
            />
          </InView>
        </div>
        <div className="hidden lg:block w-full max-w-[1280px]">
          <Swiper navigation={true} modules={[Navigation]}>
            <SwiperSlide>
              <ServiceCard
                alt="image"
                imageDir="/consult.jpg"
                listNumber={1}
                title="Project Management Consulting"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceCard
                alt="image"
                imageDir="/procurement.jpg"
                listNumber={2}
                title="Procurement and Logistics"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceCard
                alt="image"
                imageDir="/qs.jpg"
                listNumber={3}
                title="Quantity Survey Works"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceCard
                alt="image"
                imageDir="/ms.jpg"
                listNumber={4}
                title="Microsoft Project Training"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceCard
                alt="image"
                imageDir="/planning.jpg"
                listNumber={5}
                title="Plan, Schedule, Monitor and Control Projects"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
