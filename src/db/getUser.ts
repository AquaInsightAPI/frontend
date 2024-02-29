import {db} from './index';
type dbUserType = {
    plan:string,
    email:string,
    id:string,
    fullname:string,
}
export const getUserFromDatabase = async (kindeId:any)=>{
    const dbUser:dbUserType = await db.users.findFirst({
        where: {
            kindeId: kindeId,
        }
    })
    return dbUser;
}
