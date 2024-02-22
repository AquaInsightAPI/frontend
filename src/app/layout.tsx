import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import { cn } from './lib/utils';
import Providers from '@/components/providers/trpcProviders'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aqual Insights',
  description: 'API as a Service',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
        <body 
          className={cn(
                'min-h-screen font-sans antialiased grainy',inter.className
          )}>
          <Navbar/>
          {children}
        </body>
      </Providers>
    </html>
  )
}
