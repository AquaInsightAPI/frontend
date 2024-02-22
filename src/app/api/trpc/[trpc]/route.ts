// ROUTER HANDLERS
// USED IN BACKEND
// https://nextjs.org/docs/app/building-your-application/routing/route-handlers
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { appRouter } from '@/trpc'

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => ({}),
  })

export { handler as GET, handler as POST };
// Route Handlers
// refer to https://trpc.io/docs/server/adapters/nextjs#route-handlers