import { auth } from "@clerk/nextjs/server";
import { publicProcedure, router } from "./trpc";
import { useClerk } from "@clerk/nextjs";

export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    return [10, 20, 30];
  }),
  authCallback: publicProcedure.query(async () => {
    try {
      console.log("starting");

      const { userId } = auth();
      // const { user } = useClerk();

      console.log("\n\nuser ", userId);
      console.log("\n\nuser ");

      return "auth callback";
    } catch (er: any) {
      console.log("errror ", er);

      return "sdf";
    }
  }),
});

export type AppRouter = typeof appRouter;
