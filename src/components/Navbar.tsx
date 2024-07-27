"use client";
import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import { ArrowRight } from "lucide-react";
import { SignedIn, SignedOut, useClerk } from "@clerk/nextjs";

const Navbar = () => {
  const { signOut } = useClerk();

  return (
    <header className="absolute z-[10] flex h-[71px] w-full items-center bg-background shadow-sm">
      <div className="container flex items-center justify-between">
        <Link href={"/"} className="inline-block text-[32px] font-bold">
          Nexum.
        </Link>
        <div className="flex gap-[20px]">
          <SignedOut>
            <Link href={"/sign-in"} className={cn(buttonVariants())}>
              LOGIN
            </Link>
          </SignedOut>
          <SignedIn>
            <Button
              variant={"destructive"}
              onClick={() => signOut({ redirectUrl: "/" })}
            >
              LOGOUT
            </Button>
          </SignedIn>
          <Separator className="h-auto" orientation="vertical" />
          <Link href={"/sign-up"} className={cn(buttonVariants())}>
            GET STARTED <ArrowRight className="ml-[8px]" size={24} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
