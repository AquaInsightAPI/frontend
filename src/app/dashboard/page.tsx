import { getUserFromKinde } from '@/lib/kinde'; 
import { redirect } from 'next/navigation';
import { db } from '@/db';
import {getUserFromDatabase} from '@/db/getUser'
import {SecretKey} from '@/components/ui/secret-key'
import MaxWidthWrappers from '@/components/MaxWidthWrapper';
import {
Table,
TableBody,
TableCaption,
TableCell,
TableHead,
TableHeader,
TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
const Page = async ()=>{

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
    return(
        <>
            <MaxWidthWrappers className='my-10'>
                {/* Welcome, {dbUser.email}  
                <SecretKey value={dbUser.id}/> */}
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">Full Name</TableCell>
                            <TableCell>Vaasu Bisht</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Username</TableCell>
                            <TableCell>vaasubisht</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Country</TableCell>
                            <TableCell>India</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Email Verified</TableCell>
                            <TableCell>True</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Purpose</TableCell>
                            <TableCell>Academic Project</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Organization</TableCell>
                            <TableCell>VIT BHOPAL UNIVERSITY</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            
            <div className='mt-4'>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size='sm'>Edit profile</Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>
                            Edit profile
                        </SheetTitle>
                        <SheetDescription>
                            Make changes to your profile here. Click save when you're done.
                        </SheetDescription>
                    </SheetHeader>
                        <div className="grid gap-4 py-4">

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                            Full Name
                            </Label>
                            <Input id="name" value="Vaasu Bisht" className="col-span-3" />
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="organization" className="text-right">
                            Username
                            </Label>
                            <Input id="organization" value="VIT Bhopal University" className="col-span-3" />
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="purpose" className="text-right">
                            Purpose
                            </Label>
                            <Input id="purpose" value="Academic Project" className="col-span-3" />
                        </div>

                        </div>
                    <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
            </div>
            </MaxWidthWrappers>
        </>
    )
}

export default Page;
