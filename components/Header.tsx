import React from "react";
import { Phone, PhoneCall } from "lucide-react";
import NavMenu from "./NavMenu";

export default function Header() {
  return (
    <header className="p-4 border-b xl:p-4">
      <nav className="flex justify-between items-center xl:mx-auto xl:max-w-7xl ">
        <h1 className="text-lg font-bold">Mofadj Consult</h1>
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
