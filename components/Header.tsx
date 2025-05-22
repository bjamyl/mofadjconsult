import React from "react";
import { Phone, PhoneCall } from "lucide-react";
import NavMenu from "./NavMenu";
import Image from "next/image";

export default function Header() {
  return (
    <header className="p-4 border-b xl:p-4">
      <nav className="flex justify-between items-center xl:mx-auto xl:max-w-7xl ">
        <Image src='/mofadjconsult.png' alt="logo" height={100} width={100}/>
        <ul className="hidden xl:flex space-x-6">
          <li className="text-lg  hover:cursor-pointer">Home</li>
          <li className="text-lg  hover:cursor-pointer">Services</li>
          <li className="text-lg  hover:cursor-pointer">Contact</li>
        </ul>
        <div className="hidden xl:flex items-center space-x-2 xl:space-x-4">
          <PhoneCall className="" />
          <p >
            Call Us Now <br /> <span>020-123-4567</span>
          </p>
        </div>
        <NavMenu/>
      </nav>
    </header>
  );
}
