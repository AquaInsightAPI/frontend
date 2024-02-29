import { getUserFromKinde } from '@/lib/kinde'; 
import ApplyForm from './apply.forms'
import { redirect } from 'next/navigation';
import MaxWidthWrappers from '@/components/MaxWidthWrapper';
import {getUserFromDatabase} from '@/db/getUser'


const Page = async () => {

    const user = getUserFromKinde();
    // if user is not signed in, redirect
    if(!user || !user.id) redirect('/auth-callback?origin=dashboard');

    const dbUser = await getUserFromDatabase(user.id);
    // eventual consistency
    // if user is not present in databse we will redirect
    // to /api/auth-callback?origin=dashboard
    // origin means from where we are redirecting
    // if not present in databse we will redirect to auth-callback and add thing in database
    // (its like setting up account for userplease wait while we are setting up account)
    if(!dbUser){
        redirect('/auth-callback?origin=dashboard');
    }
    if(dbUser.plan=='pro'){
        redirect('/dashboard/settings');
    }
    return(
        <MaxWidthWrappers className='my-10'>
            <ApplyForm/>
        </MaxWidthWrappers>
    )
}

export default Page;
