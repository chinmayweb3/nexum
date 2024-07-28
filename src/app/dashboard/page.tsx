import PageWrapper from "@/components/PageWrapper";
import React from "react";
import { redirect, RedirectType } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import db from "@/lib/prisma";
import { toast } from "sonner";

export const revalidate = 0; // revalidate at most every hour

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
      <section className="container h-[calc(100vh-71px)] w-full">
        <div className="flex items-center justify-center">Dashboard Page</div>
      </section>
    </PageWrapper>
  );
};

export default Page;
