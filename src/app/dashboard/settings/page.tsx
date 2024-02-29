import React from 'react'
import ManageSubscription from './ManageSubscription';
import { getUserFromKinde } from '@/lib/kinde'; 
import { redirect } from 'next/navigation';
import {getUserFromDatabase} from '@/db/getUser';

const page = async () => {

  const user = getUserFromKinde();
  if(!user || !user.id) redirect('/auth-callback?origin=dashboard');
  const dbUser = await getUserFromDatabase(user.id);
  if(!dbUser){
    redirect('/auth-callback?origin=dashboard');
  }

  return(
    <div className='p-10 border rounded-md'>
        <h1 className='text-4xl mb-3'>
          Subscription Details
        </h1>
        <p className='mb-5'>
          You currently are on a {dbUser.plan} plan
        </p>
        <ManageSubscription plan={dbUser.plan}/>
    </div>
  )
}

export default page