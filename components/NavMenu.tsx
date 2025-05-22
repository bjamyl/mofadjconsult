import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function NavMenu() {
  return (
    <div className="xl:hidden">
      <Sheet>
        <SheetTrigger>Menu</SheetTrigger>
        <SheetContent className="">
          <SheetHeader className="h-full">
            <SheetTitle>Mofadj Consult</SheetTitle>
            <SheetDescription className="flex flex-col justify-between h-full">
              <div>
                <p>
                  We are dedicated to helping clients achieve their goals and
                  drive success through strategic planning, operational
                  efficiency, and innovative problem-solving.
                </p>
                <ul className="mt-4 space-y-2 border-t text-2xl font-bold">
                  <li className="mt-2">Home</li>
                  <li className="">Services</li>
                  <li className="">Contact</li>
                </ul>
              </div>
              <div>
                <p className="mt-4 text-2xl border-b pb-1">Contact Info</p>
                <div className="flex flex-col">
                  <p>Phone</p>
                  <p className="text-xl">020-123-4567</p>
                </div>
                <div className="flex flex-col">
                  <p>Email</p>
                  <p className="text-xl">mofad@mofadjconsult.com</p>
                </div>
                <div className="flex flex-col">
                  <p>Location</p>
                  <p className="text-xl">Tamale</p>
                </div>
                <p className="mt-4 text-2xl border-b pb-1">Follow us</p>
                <div>
                  <p className="text-lg">Facebook</p>
                  <p className="text-lg">Twitter</p>
                  <p className="text-lg">LinkedIn</p>
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
