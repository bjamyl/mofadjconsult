import React from "react";
import SubTitle from "./SubTitle";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section className="lg:clip-angular-top-curved-bottom bg-cover bg-center pb-20 lg:pb-10">
      <div className="flex flex-col items-center pt-20 pb-32">
        <SubTitle title="Services" />
        <h3 className="mt-10 text-3xl text-center lg:text-5xl font-bold">
          Transformative Solutions
        </h3>
        <div>
            <ServiceCard alt="image" imageDir="/hero2.jpg" listNumber={2} title="Project Management Consulting"/>
            <ServiceCard alt="image" imageDir="/hero2.jpg" listNumber={2} title="Project Management Consulting"/>

        </div>
      </div>
    </section>
  );
}
