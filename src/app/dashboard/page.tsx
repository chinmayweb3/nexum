import PageWrapper from "@/components/PageWrapper";
import React from "react";
import { trpc } from "../_trpc/client";
import { redirect } from "next/navigation";
import { auth, currentUser } from "@clerk/nextjs/server";

const Page = async () => {
  const user = await currentUser();

  // if(user?.primaryEmailAddress?.emailAddress) redirect("auth-callback?origin=dashboard")

  return <PageWrapper>Page</PageWrapper>;
};

export default Page;
