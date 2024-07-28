"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import PageWrapper from "@/components/PageWrapper";
import { useAuth } from "@clerk/nextjs";
import { wait } from "@/lib/wait";

const Page = () => {
  const { userId } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  console.log("useAuth ", userId);

  useEffect(() => {
    (async () => {
      await wait();
      const f = await fetch("/api/authcallback", { method: "GET" });
      router.back();
    })();
  }, []);

  return (
    <PageWrapper>
      <section className="container h-[calc(100vh-71px)] w-full">
        <div className="flex items-center justify-center">
          Redirecting in 5 seconds
        </div>
      </section>
    </PageWrapper>
  );
};

export default Page;
