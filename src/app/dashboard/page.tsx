import PageWrapper from "@/components/PageWrapper";
import React from "react";
import { trpc } from "../_trpc/client";

const Page = async () => {
  // const user = await currentUser();
  // const u = auth();

  trpc.authCallback.useQuery();

  return <PageWrapper>Page</PageWrapper>;
};

export default Page;
