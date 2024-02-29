import DashboardNav from '@/components/navigation/dashboard.navbar';
import { SidebarNavItem } from '@/types/nav.types';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import UpdgradeAccBtn from '@/components/navigation/updatePlan'
import { getUserFromKinde } from '@/lib/kinde'; 
import { redirect } from 'next/navigation';
import {getUserFromDatabase} from '@/db/getUser';
import UserContext from '@/context/UserContext';
const dashboardConfig: {
    sidebarNav: SidebarNavItem[]
} = {
    sidebarNav: [
    {
        title: 'Profile',
        href: '/dashboard',
        icon: 'library',
    },
    {
        title: 'API Stats',
        href: '/dashboard/api-stats',
        icon: 'pieChart',
    },
    {
        title: 'Settings',
        href: '/dashboard/settings',
        icon: 'settings',
    },
    ]
}
export default async function RootLayout(props:any) 
    {
    const user = getUserFromKinde();
    if(!user || !user.id){
        redirect('/api/auth/login');
    }
    const dbUser = await getUserFromDatabase(user.id);
    return (
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-9'>
            <div className='flex min-h-screen flex-col space-y-6 my-2'>
                <div className='grid gap-12 md:grid-cols-[200px_1fr] flex-1'>
                    <aside className='hidden w-[200px] flex-col md:flex pr-2 border-r justify-between'>
                        <DashboardNav items={dashboardConfig.sidebarNav} />
                        <UpdgradeAccBtn />
                    </aside>
                    <main className='flex w-full flex-1 flex-col overflow-hidden'>
                        <MaxWidthWrapper>
                            <header className='flex items-center'>
                                <h1 className='text-4xl my-5 font-semibold'>
                                    Hey <span className='text-blue-600'>{dbUser.fullname}</span>, Welcome to Aqua Insights
                                </h1>
                            </header>
                        </MaxWidthWrapper>
                        <hr className='my-4' />
                        {props.children}
                    </main>
                </div>
            </div>
        </div>
    )
}