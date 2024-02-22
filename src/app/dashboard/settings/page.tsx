import React from 'react'
import ManageSubscription from './ManageSubscription';
// import { db } from '@/db';

const page = async () => {
  const plan = 'free';
  return(
    <div className='p-4 border rounded-md'>
      <h1 className='text-4xl mb-3'>
        Subscription Details
      </h1>
      <p className='mb-1'>
        You currently are on a {plan} plan
      </p>
      <ManageSubscription />
    </div>
  )
}

export default page