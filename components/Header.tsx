import React from "react";
import { Phone, PhoneCall } from "lucide-react";
import NavMenu from "./NavMenu";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 border-b xl:p-4">
      <nav className="flex justify-between items-center xl:mx-auto xl:max-w-7xl ">
        <Image src='/mofadjconsult.png' alt="logo" height={150} width={150}/>
        <ul className="hidden xl:flex space-x-6">
          <li className="text-lg  hover:cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="text-lg  hover:cursor-pointer">Services</li>
          <li className="text-lg  hover:cursor-pointer">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="hidden xl:flex items-center space-x-2 xl:space-x-4">
          <PhoneCall className="" />
          <p >
            Call Us Now <br /> <span>+233-552-515-269</span>
          </p>
        </div>
        <NavMenu/>
      </nav>
    </header>
  );
}
