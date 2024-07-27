"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { trpc } from "../_trpc/client";

const Page = () => {
  const router = useRouter();
  const params = useSearchParams();
  const origin = params.get("origin");

  const t = trpc.authCallback.useQuery(undefined);
};

export default Page;
