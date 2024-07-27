import { auth, currentUser } from "@clerk/nextjs/server";
import { publicProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";

export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    return [10, 20, 30];
  }),
  authCallback: publicProcedure.query(async () => {
    console.log("starting");

    const user = await currentUser();

    if (!user?.id || !user?.primaryEmailAddress?.emailAddress)
      throw new TRPCError({ code: "UNAUTHORIZED" });

    console.log("\n\nuser ", user);
    console.log("\n\nuser ");

    return "auth callback";
  }),
});

export type AppRouter = typeof appRouter;
