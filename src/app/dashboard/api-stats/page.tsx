import React from 'react';
 
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const page = async () => {

  return(
    <div className='flex items-center justify-center min-h-min text-center'>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link" className='text-3xl text-blue-700'>Coming Soon</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">API Stats</h4>
              <p className="text-sm">
                Get real time stats of your API
              </p>
              <div className="flex items-center pt-2">
                <span className="text-xs text-muted-foreground">
                  Coming 2024
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}

export default page;