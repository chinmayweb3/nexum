import { currentUser } from "@clerk/nextjs/server";
import { initTRPC, TRPCError } from "@trpc/server";

const t = initTRPC.create();

const isAuth = t.middleware(async (opts) => {
  const user = await currentUser();

  if (!user?.id || !user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return opts.next({
    ctx: { userId: user.id, user: user },
  });
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(isAuth);
