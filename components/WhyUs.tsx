import React from "react";
import SubTitle from "./SubTitle";
import Card from "./Card";
import { SERVICES } from '@/data/cardContent';

export default function WhyUs() {
  return (
    <section className="flex flex-col items-center mt-20 mb-32">
      <SubTitle title="Why Choose Us" />
      <h3 className="mt-10 text-3xl text-center lg:text-5xl font-bold">
        Expert-Led Solutions for <br /> Transformational Growth
      </h3>
      <div className="mt-5 lg:mt-10 xl:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 lg:px-10 xl:max-w-7xl xl:mx-auto">
          {SERVICES.map((service, index) => (
          <Card
            key={index}
            icon={service.icon}
            title={service.title}
            content={service.content}
            className={service.className}
          />
        ))}
      </div>
     
    </section>
  );
}
