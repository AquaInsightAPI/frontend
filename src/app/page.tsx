import Link from 'next/link';
import MaxWidthWrapper from '../components/MaxWidthWrapper';
import { buttonVariants } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
        <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden 
            rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300
          hover:bg-white/50'>
          <p className='text-sm font-semibold text-gray-700'>
            Coming Soon!
          </p>
        </div>
        <h1 className='max-w-4xl text-3xl sm:text-5xl font-bold md:text-6xl lg:text-7xl'>
          Revolutionizing real time{' '}
          <span className='text-blue-600'>Water Quality</span>{' '}
          Monitoring with Satellites.
        </h1>
        <p className='mt-5 max-w-prose text-zinc-700 text-sm sm:text-lg'>
          AquaInsights offers a streamlined API as a Service, delivering a 
          cost effective solution for real time insights 
          into the very essence of your water. 
        </p>
        <Link
          className={buttonVariants({
            size: 'lg',
            className: 'mt-6',
          })}
          href='/dashboard'
          target='_blank'>
          Get started{' '}
          <ArrowRight className='ml-2 h-5 w-5' />
        </Link>
      </MaxWidthWrapper>      
    </>
      
  )
}
