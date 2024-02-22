import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@/trpc'; // Holds the shape of entire API.

export const trpc = createTRPCReact<AppRouter>({});

/*
IMP- We are just exprting type of AppRouter in client side not the whole server code
reference-
https://trpc.io/docs/client/react/setup
*/