import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

type ServiceCardProps = {
  title: string;
  imageDir: string;
  listNumber: number;
  alt: string;
};

export default function ServiceCard({
  title,
  imageDir,
  listNumber,
  alt,
}: ServiceCardProps) {
  return (
    <div className="h-[80vh] flex flex-col lg:grid lg:grid-cols-2">
      <div className="bg-defaultGreen p-4 h-1/2">
        <p>
          1/ <span>3</span>
        </p>
        <h4>{title}</h4>
        <Button className="font-bold rounded-full py-6 px-9">Book Appointment</Button>
      </div>
      <div className=" lg:col-span-1">
        <Image src={imageDir} alt={alt} height={1280} width={720} />
      </div>
    </div>
  );
}
