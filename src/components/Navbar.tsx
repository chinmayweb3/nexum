import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <header className="relative flex items-center bg-background h-[91px] shadow-sm ">
      <div className="container flex items-center justify-between">
        <Link href={"/"} className="inline-block text-[32px] font-bold ">
          Nexum.
        </Link>
        <div className="flex gap-[20px]">
          <Link
            href={"/about"}
            className={cn(buttonVariants(), "text-[16px] py-[22px]")}
          >
            LOGIN
          </Link>
          <Separator className="h-auto" orientation="vertical" />
          <Link
            href={"/about"}
            className={cn(buttonVariants(), "text-[16px] py-[22px]")}
          >
            GET STARTED <ArrowRight className="ml-[8px]" size={24} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
