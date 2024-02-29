"use client"; // using hooks to its a client component


import { trpc } from '@/app/_trpc/client';
import { useRouter, useSearchParams} from 'next/navigation';

const Page = () =>{
    console.log('here')
    const router = useRouter();
    const searchParams = useSearchParams();
    const origin = searchParams.get('origin');
    console.log(origin)
    
    // not input expected so first parameter is undefined
    trpc.authCallback.useQuery(undefined, {
        onSuccess: ({ success }) => {
          if(success){
            // user is synced to db
            router.push(origin ? `/${origin}` : '/dashboard')
          }
        },
        onError: (err) => {
          if (err.data?.code === 'UNAUTHORIZED') {
            router.push('/sign-in')
          }
        },
        retry: true,
        retryDelay: 500,
      })
      return (
        <div>
          <div>Setting up your account...dsdss</div>
          <div>You will be redirected automatically</div>
        </div>
      )

}
export default Page;