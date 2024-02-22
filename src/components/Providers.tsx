'use client';

import { 
    ReactNode, 
    useState } from 'react';
import { 
    QueryClientProvider,
    QueryClient } from '@tanstack/react-query';
import { trpc } from '@/app/_trpc/client';
import { httpBatchLink } from '@trpc/client';

const Providers = ({ children }: {children:ReactNode}) => {
    const [queryClient] = useState(() => new QueryClient())
    const [trpcClient] = useState(() =>
      trpc.createClient({
        links: [
          httpBatchLink({
            url: 'http://localhost:3000/api/trpc', // the request to the trpc will be sent here
          }),
        ],
      })
    )
  
    return (
      <trpc.Provider
        client={trpcClient}
        queryClient={queryClient}>
        {/* trpc is just a thin wrapper around react query which is typesafe
         */}
        {/* Enabling us to use react query independently of tRPC */}
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </trpc.Provider>
    )
  }
  
  export default Providers