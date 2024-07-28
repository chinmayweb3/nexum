"use client";

import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import { ArrowRight, Moon, Sun } from "lucide-react";
import { SignedIn, SignedOut, useClerk } from "@clerk/nextjs";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { signOut } = useClerk();

  return (
    <header className="absolute z-[10] flex h-[71px] w-full items-center bg-background shadow-sm">
      <div className="container flex items-center justify-between">
        <Link href={"/"} className="inline-block text-[32px] font-bold">
          Nexum.
        </Link>
        <div className="flex items-center gap-[20px]">
          <SignedOut>
            <Link
              href={"/sign-in"}
              prefetch={false}
              className={cn(buttonVariants())}
            >
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
          <Separator
            className="h-auto self-stretch bg-primary/20"
            orientation="vertical"
          />
          <Link
            href={"/dashboard"}
            prefetch={false}
            className={cn(buttonVariants())}
          >
            GET STARTED <ArrowRight className="ml-[8px]" size={20} />
          </Link>
          <Theme />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const Theme = React.memo(() => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => setMounted(true), []);

  return (
    <Button
      variant={"secondary"}
      onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
      size={"icon"}
    >
      {mounted ? (
        theme == "light" ? (
          <Sun size={16} />
        ) : (
          <Moon size={16} />
        )
      ) : (
        <Sun size={16} />
      )}
    </Button>
  );
});
