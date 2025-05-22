import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

type ServiceCardProps = {
  title: string;
  imageDir: string;
  listNumber: number;
  alt: string;
};

// ServiceCard.tsx
export default function ServiceCard({
  title,
  imageDir,
  listNumber,
  alt,
}: ServiceCardProps) {
  return (
    <div className="rounded-2xl flex flex-col lg:h-[650px]  lg:grid lg:grid-cols-2 overflow-hidden">
      <div className="bg-defaultGreen bg-[url('/bgg.jpg')] bg-blend-multiply  bg-cover bg-center  p-6 lg:p-16 h-1/2 lg:h-full">
        <p className="text-white text-lg">
          {listNumber}<span className="pt-3 text-gray-400 text-sm">/4</span>
        </p>
        <h4 className="my-5 text-2xl md:text-4xl text-white font-bold">{title}</h4>
        <Button className="font-bold bg-white text-defaultGreen rounded-full py-6 px-9">Book Appointment</Button>
      </div>
      <div className="lg:col-span-1 h-1/2 lg:h-full">
        <Image 
          className="w-full h-full object-cover" 
          src={imageDir} 
          alt={alt} 
          height={1280} 
          width={720} 
        />
      </div>
    </div>
  );
}