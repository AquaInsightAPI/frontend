'use client';
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SidebarNavItem } from '@/types/nav.types';
import { cn } from '@/lib/utils';
import { Icons } from '../Icons';

interface DashboardNavProps {
  items: SidebarNavItem[];
}

const DashboardNav = ({ items }: DashboardNavProps) => {
  const path = usePathname();

  if (!items?.length) return null;

  return (
      <nav>{
        items.map((item, index) => {
          const Icon = Icons[item?.icon || 'list'];
          const isActive = path === item.href;
          return item.href && (
            <Link className='' key={index} href={item.disabled ? '/' : item.href}>
              <span
                className={cn(
                  'group flex items-center justify-center rounded-md pr-6 py-2 font-medium hover:bg-accent hover:text-accent-foreground text-center text-lg',
                  isActive ? 'bg-accent text-blue-600' : 'transparent',
                  item.disabled ? 'cursor-not-allowed opacity-80' : 'cursor-pointer',
                )}
              >
                <Icon className='w-4 h-4 mr-2'/>
                {item.title}
              </span>
            </Link>
          );

        })
      }
      </nav>
  )
}

export default DashboardNav