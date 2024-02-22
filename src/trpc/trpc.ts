import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { TRPCError, initTRPC } from '@trpc/server'

// creating new instance of tRPC
const t = initTRPC.create();
const middleware = t.middleware;

// middleware to check authentication
const isAuth = middleware(async (opts) => {
  const { getUser } = getKindeServerSession();
  const user = getUser();

  if (!user || !user.id) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }

  return opts.next({
    // context
    ctx: {
      userId: user.id,
      user,
    },
  })
})

const router = t.router;

// A procedure is a function which is exposed to the client
const publicProcedure = t.procedure;
//  add middleware(s) to a procedure with the t.procedure.use() method. 
const privateProcedure = t.procedure.use(isAuth);
// Leverages tRPC's middleware functionality to seamlessly apply the `isAuth` middleware to the procedure.
// Middleware acts as a gate, intercepting requests before they reach the procedure's logic.
// By using `isAuth` here, we ensure that only authenticated users can proceed, effectively guarding the procedure's content.
export{
  router,
  publicProcedure,
  privateProcedure
}

/**
 * Procedures in tRPC are very flexible primitives to create backend functions. They use an immutable builder pattern, which means you can create reusable base procedures that share functionality among multiple procedures.
 * reference-
 * https://trpc.io/docs/server/procedures
 */
