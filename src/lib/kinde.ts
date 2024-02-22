import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export const getUserFromKinde =()=>{
    const {getUser} = getKindeServerSession();
    const user = getUser();
    return user;
}