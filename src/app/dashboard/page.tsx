import PageWrapper from "@/components/PageWrapper";
import React from "react";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import db from "@/lib/prisma";
import { toast } from "sonner";
import Dashboard from "./dashboard";

// export const revalidate = 60;

const Page = async () => {
  const user = await currentUser();
  if (!user?.id) {
    toast("User not Logged In");
    redirect("/");
  }

  const prUser = await db.user.findFirst({
    where: {
      id: user.id,
    },
  });

  if (!prUser) {
    await db.user.create({
      data: {
        id: user.id,
        email: user.primaryEmailAddress?.emailAddress ?? "",
      },
    });
  }

  return (
    <PageWrapper>
      <Dashboard />
    </PageWrapper>
  );
};

export default Page;
