import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import {privateProcedure, publicProcedure, router} from './trpc';
import { TRPCError } from '@trpc/server';
import { db } from '@/db';
import { getUserSubscriptionPlan, stripe } from '@/lib/stripe';
import { PLANS } from '@/config/stripe';
import {absoluteUrl} from '@/lib/utils';

// Expoting router
// This is for server not client
export const appRouter = router({
    // auth callback router
    authCallback: publicProcedure.query(async ()=>{
        const {getUser} = getKindeServerSession();
        const user = getUser();
        console.log(user)
        if(!user.id || !user.email){
            throw new TRPCError({code:'UNAUTHORIZED'})
        }
        // console.log('kinde user exit')
        const dbUser = await db.users.findFirst({
            where: {
                kindeId: user.id,
            }
        })
        
        if(!dbUser){
            // create user in database
            var temp = await db.users.create({
                data:{
                    kindeId: user.id,
                    email: user.email,
                    emailVerified: true,
                    fullname: user.given_name || user.email.split('@')[0],
                    username: user.id.slice(3,10),
                    organization: 'NA'
                }
            })
        }
        return {success:true};
    }),
})

// Exporting only the type of a router!
// This prevents us from importing server code on the client.
export type AppRouter = typeof appRouter;