'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { trpc } from '@/app/_trpc/client'
import { ReactNode, useState } from 'react';


const Providers = ({ children }: {children:ReactNode}) => {
    const [queryClient] = useState(() => new QueryClient())
    const [trpcClient] = useState(() =>
      trpc.createClient({
        links: [
          httpBatchLink({
            // the request to the trpc will be sent here
            url: 'http://localhost:3000/api/trpc', 
          }),
        ],
      })
    )
  
    return (
      <trpc.Provider
        client={trpcClient}
        queryClient={queryClient}>
        {/* trpc is just a thin wrapper around react query which is typesafe
        Enabling us to use react query independently of tRPC * */}
        <QueryClientProvider client={queryClient}>  {/*using react query directly without tRPC */}
          {children}
        </QueryClientProvider>
      </trpc.Provider>
    )
  }
  
export default Providers;
// reference
// https://trpc.io/docs/client/react/setup
// npm install @trpc/server@next @trpc/client@next @trpc/react-query@next @trpc/next@next @tanstack/react-query@latest
