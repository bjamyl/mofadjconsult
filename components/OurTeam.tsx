import React from "react";
import SubTitleWhite from "./SubTitleWhite";
import { TextEffect } from "./motion-primitives/text-effect";
import { TeamMember } from "./TeamMateCard";
import { TeamMateCard } from "./TeamMateCard";

export default function OurTeam() {
  const teamMembers: TeamMember[] = [
    {
      id: "1",
      name: "Mohammed Fadeel Froko Jamaldeen, PMP",
      position: "Project Management Consultant",
      image: "/team/bow.jpg",
      alt: "Mohammed Fadeel - Project Management Consultant",
    },
    {
      id: "2",
      name: "Surv. Qamar Abdul-Razak",
      position: "Senior Quantity Surveyor",
      image: "/team/qamar.png",
      alt: " Qamar Abdul-Razak - Quantity Surveyor",
    },
    {
      id: "3",
      name: "Abdul-Wahab Abdulai",
      position: "Junior Quantity Surveyor",
      image: "/team/wahab.jpg",
      alt: "Abdul-Wahab Abdulai - Junior Quantity Surveyor",
    },
    {
      id: "4",
      name: "Salim Issah",
      position: "Civil Engineer",
      image: "/team/jako.jpg",
      alt: "Salim Issah - Civil Engineer",
    },
    {
      id: "5",
      name: "Jamil B. Alhassan",
      position: "IT Expert",
      image: "/team/jamil.jpg",
      alt: "Jamil B. Alhassan - IT Expert",
    },
  ];
  return (
    <section className="flex flex-col items-center  bg-defaultGreen bg-[url('/bgg.jpg')] bg-blend-multiply  bg-cover bg-center  py-32">
      <div className=" flex flex-col items-center px-4  md:px-24 lg:px-10 xl:max-w-7xl xl:mx-auto">
        <SubTitleWhite title="Our Team" />
        <TextEffect
          className="mt-10 lg:mb-10 mb-5 text-3xl text-white text-left lg:text-5xl font-bold"
          per="word"
          as="h3"
          preset="slide"
        >
          Meet Our Experts
        </TextEffect>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member) => (
            <TeamMateCard
              key={member.id}
              member={member}
              className="mx-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
