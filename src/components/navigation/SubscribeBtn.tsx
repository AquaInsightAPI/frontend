'use client';
import React from 'react'
import { useRouter } from 'next/navigation';

type Props = {
  userId?: string,
  price: string,
}

const SubscribeBtn = ({ userId, price }: Props) => {
  const router = useRouter();

  const handleCheckout = async (price: string) => {
    try {
      const { sessionId } = await fetch('/api/stripe/checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ price }),
      }).then((res) => res.json());
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <button className='underline' onClick={() => handleCheckout(price)}>Upgrade your plan</button>
  )
}

export default SubscribeBtn