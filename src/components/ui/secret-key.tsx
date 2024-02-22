'use client'
import * as React from "react"
import { useState } from "react";
import { cn } from "@/lib/utils"
import {EyeIcon,EyeOffIcon,Copy} from 'lucide-react'
import {CopyToClipboard} from 'react-copy-to-clipboard';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const SecretKey = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className,type,value, ...props }, ref) => {
    const [showKey,setShowKey] = useState(false);
    let text ='sds';
    if(typeof value === 'string') text =value;
    return (
      <div className='flex items-center my-4'>
        <span className='font-medium'>Secret Key:</span>
        <input
            type={showKey ? 'text' : 'password'}
            className={cn(
            "flex h-10 w-[16rem] mx-2 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
            )}            
            readOnly={true}
            value={value}
            ref={ref}
            {...props}
        />
        <div className='flex ce'>
          <span>
            {showKey ? <EyeIcon onClick={()=>setShowKey(false)}/> : <EyeOffIcon onClick={()=>setShowKey(true)}/>}
          </span>
          <span>
            <CopyToClipboard text={text} onCopy={() => alert("Copied")}>
              <Copy/>
            </CopyToClipboard>
          </span>
        </div>
        
              
        

      </div>
    )
  }
)
SecretKey.displayName = "Secret Key";

export { SecretKey };
