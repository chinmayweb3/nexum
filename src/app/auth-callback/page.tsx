"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { trpc } from "../_trpc/client";
import PageWrapper from "@/components/PageWrapper";
import { useAuth } from "@clerk/nextjs";

const Page = () => {
  const router = useRouter();

  const { userId } = useAuth();

  const params = useSearchParams();
  const origin = params.get("origin");

  console.log("useAuth ", userId);
  useEffect(() => {
    (async () => {
      const f = await fetch("/api/authcallback", { method: "GET" });
      router.push("/dashboard");
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
