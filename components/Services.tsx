"use client";
import React from "react";
import SubTitle from "./SubTitle";
import ServiceCard from "./ServiceCard";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { Navigation } from "swiper/modules";
// Services.tsx
export default function Services() {
  return (
    <section className="pb-20 lg:pb-10">
      <div className="flex flex-col items-center pt-20 pb-32">
        <SubTitle title="Services" />
        <h3 className="mt-10 lg:mb-10 mb-5 mx-8 text-3xl text-center lg:text-5xl font-bold">
          Transformative Solutions
        </h3>
        <div className="lg:hidden px-8 md:px-24 w-full max-w-[1280px] grid gap-8 lg:gap-10">
          <ServiceCard
            alt="image"
            imageDir="/consult.jpg"
            listNumber={1}
            title="Project Management Consulting"
          />
          <ServiceCard
            alt="image"
            imageDir="/procurement.jpg"
            listNumber={2}
            title="Procurement and Logistics"
          />
          <ServiceCard
            alt="image"
            imageDir="/qs.jpg"
            listNumber={3}
            title="Quantity Survey Works"
          />
          <ServiceCard
            alt="image"
            imageDir="/ms.jpg"
            listNumber={4}
            title="MS Project Training"
          />
          <ServiceCard
            alt="image"
            imageDir="/ms.jpg"
            listNumber={5}
            title="Plan, Schedule, Monitor and Control Projects"
          />
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
                title="MS Project Training"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceCard
                alt="image"
                imageDir="/ms.jpg"
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
