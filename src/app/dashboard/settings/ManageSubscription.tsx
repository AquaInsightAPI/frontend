import React from 'react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button'
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
type Propos = {
  plan:string
}
const ManageSubscription = ({plan}:any) => {
  return (
    <>
      <Link
        href='/apply'
        className={buttonVariants({
          variant: plan === 'free' ? 'default' : 'destructive',
          size: 'lg',
        })}>
        {plan==='free'?'Update to Pro':'Cancel Subscription'}
      </Link>
    </>
  )
}

export default ManageSubscription