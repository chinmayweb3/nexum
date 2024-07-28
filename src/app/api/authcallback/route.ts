import db from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const curUser = await currentUser();

  const findUser = await db.user.findFirst({
    where: { id: curUser?.id },
  });

  if (!findUser?.id && curUser) {
    await db.user.create({
      data: {
        email: curUser.primaryEmailAddress?.emailAddress ?? "",
        id: curUser?.id,
      },
    });
  }

  return NextResponse.json({ curUser });
}
