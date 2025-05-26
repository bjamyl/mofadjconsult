"use client";
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
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation"; // Add this import

export default function NavMenu() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const pathname = usePathname(); // Get current route

  // Close menu when route changes
  React.useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);

 

  return (
    <div className="xl:hidden">
      <Sheet open={openMenu} onOpenChange={setOpenMenu}>
        <SheetTrigger>
          <Menu size={45} className="text-defaultGreen" />
        </SheetTrigger>
        <SheetContent className="">
          <SheetHeader className="h-full">
            <SheetTitle>
              <Image
                src="/mofadjconsult.png"
                alt="logo"
                height={100}
                width={100}
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
                  <li className="mt-2">
                    <Link href="/" onClick={() => setOpenMenu(false)}>
                      Home
                    </Link>
                  </li>
                  <li className="">
                    <Link 
                      href="/#services" 
                      onClick={() => {
                        setOpenMenu(false);
                      }}
                      scroll={false}
                    >
                      Services
                    </Link>
                  </li>
                  <li className="">
                    <Link 
                      href="/contact" 
                      onClick={() => setOpenMenu(false)}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Rest of your content remains the same */}
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
                <p className="mt-4 text-xl border-b pb-1">Follow Us On</p>
                <div>
                  <p className="text-sm">Facebook</p>
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
