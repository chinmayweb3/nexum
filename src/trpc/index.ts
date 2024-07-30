import { currentUser } from "@clerk/nextjs/server";
import { privateProcedure, publicProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";
import db from "@/lib/prisma";

export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    console.log("getTodes");

    return { success: [10, 20, 30] };
  }),
  authCallback: publicProcedure.query(async () => {
    console.log("starting");
    const curUser = await currentUser();

    if (!curUser?.id || !curUser?.primaryEmailAddress?.emailAddress)
      throw new TRPCError({ code: "UNAUTHORIZED" });

    const findUser = await db.user.findFirst({
      where: { id: curUser.id },
    });

    console.log("authCallback ", findUser?.id);

    if (!findUser?.id) {
      await db.user.create({
        data: {
          email: curUser.primaryEmailAddress.emailAddress,
          id: curUser.id,
        },
      });
    }

    return { success: true };
  }),

  getUserFiles: privateProcedure.query(async ({ ctx }) => {
    const { userId } = ctx;

    const files = await db.file.findMany({
      where: { userId },
    });
    return files;
  }),
});

export type AppRouter = typeof appRouter;
