"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, PiggyBank, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const NavLinks = () => (
    <>
      <Link
        href="#features"
        className="text-gray-500 hover:text-gray-700 text-sm font-medium"
      >
        Features
      </Link>
      <Link
        href="#pricing"
        className="text-gray-500 hover:text-gray-700 text-sm font-medium"
      >
        Pricing
      </Link>
      <Link
        href="#faq"
        className="text-gray-500 hover:text-gray-700 text-sm font-medium"
      >
        FAQ
      </Link>
    </>
  );

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <PiggyBank className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">
                SplitSmart
              </span>
            </Link>
            <div className="hidden items-center sm:ml-6 sm:flex sm:space-x-8">
              <NavLinks />
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button variant="outline" className="mr-2">
              Log in
            </Button>
            <Button>Sign up</Button>
          </div>
          <div className="flex items-center sm:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" onClick={toggleSidebar}>
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center py-4">
                    <Link
                      href="/"
                      className="flex items-center"
                      onClick={toggleSidebar}
                    >
                      <PiggyBank className="h-8 w-8 text-indigo-600" />
                      <span className="ml-2 text-xl font-bold text-gray-800">
                        SplitSmart
                      </span>
                    </Link>
                  </div>
                  <div className="flex flex-col space-y-4 mt-8">
                    <NavLinks />
                  </div>
                  <div className="mt-auto pb-8">
                    <Button
                      variant="outline"
                      className="w-full mb-2"
                      onClick={toggleSidebar}
                    >
                      Log in
                    </Button>
                    <Button className="w-full" onClick={toggleSidebar}>
                      Sign up
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
