import PageWrapper from "@/components/PageWrapper";
import { Button } from "@/components/ui/button";
import { Span } from "next/dist/trace";
import Image from "next/image";

export default function Home() {
  return (
    <PageWrapper>
      <section className="container self-center flex justify-center items-center ">
        <h1 className="text-[64px] font-semibold">
          WELCOME TO THE <span className="text-destructive">LANDING PAGE</span>
        </h1>
      </section>
      {/* <section className="min-h-screen bg-slate-700"></section> */}
    </PageWrapper>
  );
}
