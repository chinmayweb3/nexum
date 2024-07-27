import PageWrapper from "@/components/PageWrapper";
import { Button } from "@/components/ui/button";
import { Span } from "next/dist/trace";
import Image from "next/image";

export default function Home() {
  return (
    <PageWrapper>
      <section className="container flex h-[80vh] items-center justify-center self-center">
        <h1 className="w-[700px] text-center text-[56px] font-semibold leading-[1]">
          WELCOME TO THE <span className="text-destructive">LANDING PAGE</span>
        </h1>
      </section>
    </PageWrapper>
  );
}
