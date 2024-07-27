"use client";
import PageWrapper from "@/components/PageWrapper";
import React from "react";
import { trpc } from "../_trpc/client";

const Page = () => {
  const t = trpc.getTodos.useQuery();

  console.log("cosnt ", t);

  return <PageWrapper>Page</PageWrapper>;
};

export default Page;
