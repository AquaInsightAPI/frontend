import {db} from './index';
type dbUserType = {
    plan:string,
    email:string,
    id:string,
}
export const getUserFromDatabase = async (kindeId:any)=>{
    const dbUser:dbUserType = await db.users.findFirst({
        where: {
            kindeId: kindeId,
        }
    })
    // const allUsers = await db.users.findMany()
    return dbUser;
}
