"use client";

import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { LogIn, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "./ui/button";
import { auth } from "@/firebse/firebase.config";
import { useUserAuth } from "@/context/UserAuthConext";

const { signOut } = require("firebase/auth");

const Navbar = () => {
  const pathname = usePathname();

  const { user } = useUserAuth();
  // const userJSON = localStorage.getItem("user");
  // const user = JSON.parse(userJSON!);
  // const user = auth().currentUser;
  console.log(user);

  const handleClick = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out");
        localStorage.removeItem("user");
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const data = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "Shop",
    },
    {
      id: 3,
      name: "Tutorial",
    },
    {
      id: 4,
      name: "Dashboard",
    },
  ];

  const routes = data.map((route) => ({
    href: `${route.name === "Home" ? `${"/"}` : `/${route.name}`}`,
    label: route.name,
    active:
      pathname === `${route.name === "Home" ? `${"/"}` : `/${route.name}`}`,
  }));

  return (
    <div className="border-b-2 border-primaryLight sticky top-0 bg-white z-40">
      <div className="relative flex py-4 items-center container mx-auto justify-between">
        <div className="flex items-center">
          <div className="sm:hidden mr-8">
            <Sheet>
              <SheetTrigger asChild>
                <Menu className="sm:hidden" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/" className="flex lg:ml-0">
                      {" "}
                      <Image
                        src="/Logo.png"
                        width="150"
                        height="100"
                        alt="logo"
                      />
                    </Link>
                  </SheetTitle>
                  <SheetDescription>
                    <nav className="my-8 flex sm:flex-row flex-col space-y-6 sm:space-x-4 sm:space-y-0  lg:space-x-6">
                      {routes.map((route) => (
                        <SheetClose asChild>
                          <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                              "text-sm font-medium transition-colors hover:text-primaryLight",
                              route.active ? "text-primaryLight" : "text-black"
                            )}
                          >
                            {route.label}
                          </Link>
                        </SheetClose>
                      ))}
                    </nav>
                    <Link href="/login">
                      <Button
                        className="font-bold text-white"
                        variant="custom"
                        size="custom"
                      >
                        Log-in
                        <LogIn className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <Link href="/" className="flex lg:ml-0">
            {" "}
            <Image src="/Logo.png" width="150" height="100" alt="logo" />
          </Link>
        </div>

        <div className="max-sm:hidden flex ">
          <nav className="mx-6 flex sm:flex-row flex-col space-y-6 items-center sm:space-x-4 sm:space-y-0  lg:space-x-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primaryLight",
                  route.active ? "text-primaryLight" : "text-black"
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        {user ? (
          <Button
            onClick={handleClick}
            className="text-sm max-sm:hidden"
            variant="custom"
            size="custom"
          >
            Log out
            <LogIn className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Link href="/login" className="max-sm:hidden">
            <Button className="text-sm" variant="custom" size="custom">
              Log-in
              <LogIn className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
