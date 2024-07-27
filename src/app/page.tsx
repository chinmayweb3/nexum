"use client";
import PageWrapper from "@/components/PageWrapper";
import { trpc } from "./_trpc/client";

export default function Home() {
  // const getTodos = trpc.getTodos.useQuery();

  // console.log("pages ", getTodos.data);

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
