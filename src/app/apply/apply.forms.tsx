'use client';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const formSchema = z.object({
    username: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
})

const Page = async ()=>{
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: '',
        },
    })
     
    function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values)
    }
    return (
        <div className='p-4 border rounded-md'>
            <header className='m-6'>
                <h1 className='text-4xl mb-3'>
                    Hello <span className='text-blue-600 font-semibold'>Vaasu</span>, you're applying for
                </h1>
                <p className='mb-1 text-2xl font-semibold'>
                    Aqua Insights Pro Plan
                </p>
            </header>
            
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                    <FormField
                    control={form.control}
                    name='username'
                    render={({ field }) => (
                        <FormItem className='p-4 '>
                            <FormLabel>
                                Where did you hear about aqua insights? *
                            </FormLabel>
                            <FormControl>
                            <RadioGroup defaultValue='option-one'>
                                <div className='flex items-center space-x-2'>
                                    <RadioGroupItem value='github' id='github' />
                                    <Label htmlFor='github'>Github</Label>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <RadioGroupItem value='linkedin' id='linkedin' />
                                    <Label htmlFor='linkedin'>Linkedin</Label>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <RadioGroupItem value='friend' id='friend' />
                                    <Label htmlFor='friend'>From a friend</Label>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <RadioGroupItem value='other' id='other' />
                                    <Label htmlFor='other'>Others</Label>
                                </div>
                            </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        
                    )}
                    />
                    <FormField
                    control={form.control}
                    name='username'
                    render={({ field }) => (
                        <FormItem className='p-4 '>
                            <FormLabel>
                            What's your current role?
                            </FormLabel>
                            <FormControl>
                            <RadioGroup defaultValue='student'>
                                <div className='flex items-center space-x-2'>
                                    <RadioGroupItem value='student' id='student' />
                                    <Label htmlFor='student'>Student</Label>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <RadioGroupItem value='researcher' id='researcher' />
                                    <Label htmlFor='researcher'>Researcher</Label>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <RadioGroupItem value='startupf' id='startupf' />
                                    <Label htmlFor='startupf'>Start-Up founder</Label>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <RadioGroupItem value='governmentE' id='governmentE' />
                                    <Label htmlFor='governmentE'>Government Employee</Label>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <RadioGroupItem value='other' id='other' />
                                    <Label htmlFor='other'>Others</Label>
                                </div>
                            </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>  
                    )}
                    />
                    
                    <FormField
                    control={form.control}
                    name='username'
                    render={({ field }) => (
                        <FormItem className='p-4 '>
                            <FormLabel>
                            How will you use the APIs? (optional)
                            </FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>  
                    )}
                    />
                    <Button type='submit' className='bg-blue-600'>Submit</Button>
                </form>
            </Form>
        </div>
    )
}

export default Page;