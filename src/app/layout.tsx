import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import TrpcProvider from "./_trpc/trpcProvider";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(workSans.className, "bg-muted text-primary")}>
        <ThemeProvider attribute="class">
          {/* <TrpcProvider> */}
          <ClerkProvider>
            <Navbar />
            {children}
          </ClerkProvider>
          {/* </TrpcProvider> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
