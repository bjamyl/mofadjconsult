import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";

export default function NavMenu() {
  return (
    <div className="xl:hidden">
      <Sheet>
        <SheetTrigger>Menu</SheetTrigger>
        <SheetContent className="">
          <SheetHeader className="h-full">
            <SheetTitle>
              <Image
                src="/mofadjconsult.png"
                alt="logo"
                height={70}
                width={70}
              />
            </SheetTitle>
            <SheetDescription className="flex flex-col justify-between h-full">
              <div>
                <p>
                  We are dedicated to helping clients achieve their goals and
                  drive success through strategic planning, operational
                  efficiency, and innovative problem-solving.
                </p>
                <ul className="mt-4 space-y-2 border-t text-2xl font-bold">
                  <li className="mt-2"><Link href='/'>Home</Link> </li>
                  <li className="">Services</li>
                  <li className="">
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="mt-4 text-2xl border-b pb-1">Contact Info</p>
                <div className="flex flex-col">
                  <p className="font-bold">Phone</p>
                  <p className="text-sm">020-123-4567</p>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold">Email</p>
                  <p className="text-sm">mofad@mofadjconsult.com</p>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold">Location</p>
                  <p className="text-sm">Tamale</p>
                </div>
                <p className="mt-4 text-xl border-b pb-1">Follow us</p>
                <div>
                  <p className="text-lg">Facebook</p>
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
