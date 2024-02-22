import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { PLANS } from '@/config/stripe'
import { Button } from '@/components/ui/button';
import {getUserFromDatabase} from '@/db/getUser';
import UpgradeButton from '@/components/UpgradeButton';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { buttonVariants } from '@/components/ui/button'
import {
    ArrowRight,
    Check,
    HelpCircle,
    Minus,
  } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils'

const Page = async ()=>{
    const {getUser} = getKindeServerSession();
    const user = getUser();
    const dbUser = await getUserFromDatabase(user?.id);
    const pricingItems = [
        {
          plan: 'Free',
          tagline: 'Uncover Insights Gradually: Access Monthly and Yearly Averages with a One-Month Delay',
          quota: 100,
          quotaFootnote: 'The Free Plan includes an access limit of 100 rows per request, ensuring efficient and manageable data retrieval.',
          features: [
            {
              text: 'Access to custom date data',
              negative: false,
            },
            {
              text: 'Access to Yearly Data',
              negative: false,
            },
            {
              text: "Immediate access to current month's data",
              footnote:"For Free Plans, there is a two-month delay in accessing the current month's data.",
              negative: true,
            },
            {
              text: 'Enjoy the flexibility of 1000 daily requests',
              footnote: 'The free plan allows for 10 daily requests, whereas the pro plan permits 1000 daily requests.',
                negative: true,
            },
            {
              text: 'Priority support',
              negative: true,
            },
          ],
        },
        {
          plan: 'Pro',
          tagline: 'Unleash the Power of Data Now: Transforming the Way You Explore and Analyze.',
          quota:10000,
          quotaFootnote: 'Our Paid Plans offer a robust access limit of 10,000 rows per request, enabling users to extract larger datasets for comprehensive analysis.',
          features: [
            {
              text: 'Access to custom date data',
              negative: false,
            },
            {
              text: 'Access to Yearly Data',
              negative: false,
            },
            {
              text: "Immediate access to current month's data",
              footnote:"For Free Plans, there is a two-month delay in accessing the current month's data.",
              negative: false,
            },
            {
              text: 'Enjoy the flexibility of 1000 daily requests',
                negative: false,
            },
            {
              text: 'Priority support',
              negative: false,
            },
          ],
        },
      ]

    return (
        <>
        <MaxWidthWrapper className='py-10'>
            <div className='mx-auto mb-10 sm:max-w-lg text-center'>
              <h1 className='text-6xl font-bold sm:text-7xl'>
                Pricing
              </h1>
              <p className='mt-5 text-gray-600 sm:text-lg'>
                Whether you're just dipping your toes into our service or seeking a deeper dive, our 
                flexible plans have you covered.
              </p>
            </div>


            <div className='pt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 text-center'>
            <TooltipProvider>
            {pricingItems.map(
              ({ plan, tagline, quota, features,quotaFootnote }) => {
                const price =
                  PLANS.find(
                    (p) => p.slug === plan.toLowerCase()
                  )?.price.amount || 0

                return (
                  <div
                    key={plan}
                    className={cn(
                      'relative rounded-2xl bg-white shadow-lg',
                      {
                        'border-2 border-blue-600 shadow-blue-200':
                          plan === 'Pro',
                        'border border-gray-200':
                          plan !== 'Pro',
                      }
                    )}>
                    {plan === 'Pro' && (
                      <div className='absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-2 text-sm font-medium text-white'>
                        {!user || dbUser.plan==='free' ?'Upgrade now': 'Current plan'}
                      </div>
                    )}

                    <div className='p-5'>
                      <h3 className='my-3 text-center font-display text-3xl font-bold'>
                        {plan}
                      </h3>
                      <p className='text-gray-500'>
                        {tagline}
                      </p>
                      <p className='my-5 font-display text-6xl font-semibold'>
                        ${price}
                      </p>
                      <p className='text-gray-500'>
                        per month
                      </p>
                    </div>

                    <div className='flex h-20 items-center justify-center border-b border-t border-gray-200 bg-gray-50'>
                      <div className='flex items-center space-x-1'>
                        <p>
                          Access Limit: {quota} rows per request
                        </p>

                        <Tooltip delayDuration={300}>
                          <TooltipTrigger className='cursor-default ml-1.5'>
                            <HelpCircle className='h-4 w-4 text-zinc-500' />
                          </TooltipTrigger>
                          <TooltipContent className='w-80 p-2'>
                            {quotaFootnote}
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </div>

                    <ul className='my-10 space-y-5 px-8'>
                      {features.map(
                        ({ text, footnote, negative }) => (
                          <li
                            key={text}
                            className='flex space-x-5'>
                            <div className='flex-shrink-0'>
                              {negative ? (
                                <Minus className='h-6 w-6 text-gray-300' />
                              ) : (
                                <Check className='h-6 w-6 text-blue-500' />
                              )}
                            </div>
                            {footnote ? (
                              <div className='flex items-center space-x-1'>
                                <p
                                  className={cn(
                                    'text-gray-600',
                                    {
                                      'text-gray-400':
                                        negative,
                                    }
                                  )}>
                                  {text}
                                </p>
                                <Tooltip
                                  delayDuration={300}>
                                  <TooltipTrigger className='cursor-default ml-1.5'>
                                    <HelpCircle className='h-4 w-4 text-zinc-500' />
                                  </TooltipTrigger>
                                  <TooltipContent className='w-80 p-2'>
                                    {footnote}
                                  </TooltipContent>
                                </Tooltip>
                              </div>
                            ) : (
                              <p
                                className={cn(
                                  'text-gray-600',
                                  {
                                    'text-gray-400':
                                      negative,
                                  }
                                )}>
                                {text}
                              </p>
                            )}
                          </li>
                        )
                      )}
                    </ul>
                    <div className='border-t border-gray-200' />
                    <div className='p-5'>
                      {plan === 'Free' ? (
                        <Link
                          href={
                            user ? '/dashboard' : '/sign-in'
                          }
                          className={buttonVariants({
                            className: 'w-full',
                            variant: 'secondary',
                          })}>
                          {!user ?'Sign In': dbUser.plan==='free'? 'Current Plan': 'Unavailable'}
                        </Link>
                      ) : user ? (
                        <div>
                          {dbUser.plan==='free' &&
                            <Link href=''>
                              <Button className='w-full' onClick={UpgradeButton}>
                                Upgrade now <ArrowRight className='h-5 w-5 ml-1.5' />
                              </Button>
                            </Link>
                            
                          }
                          {dbUser.plan==='pro' &&
                            <Button className='w-full' disabled={true}>
                              Current Plan <ArrowRight className='h-5 w-5 ml-1.5' />
                            </Button>
                          }
                        </div>
                      ) : (
                        <Link
                          href='/sign-in'
                          className={buttonVariants({
                            className: 'w-full',
                          })}>
                          {user ? 'Upgrade now' : 'Sign up'}
                          <ArrowRight className='h-5 w-5 ml-1.5' />
                        </Link>
                      )}
                    </div>
                  </div>
                )
              }
            )}
          </TooltipProvider>
            </div>
        </MaxWidthWrapper>
        </>
    )
}

export default Page;
