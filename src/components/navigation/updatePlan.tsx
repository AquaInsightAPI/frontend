import React from 'react'
import Link from 'next/link'
// import { getUserForms } from '@/app/actions/getUserForms'
import ProgressBar from './progressBar'
import SubscribeBtn from './SubscribeBtn'
// import { auth } from '@/auth'
// import { getUserSubscription } from '@/app/actions/userSubscriptions'

type Props = {}
const MAX_FREE_REQ = 10
const UpdgradeAccBtn = async (props: Props) => {
//   if (subscription) {
//     return null;
//   }
//   const forms = await getUserForms();
  const formCount = 4;
  const percent = (formCount / MAX_FREE_REQ) * 100;

  return (
    <div className='p-4 mb-4 text-left text-xs'>
      <ProgressBar value={percent} />
      <p className='mt-2'>{MAX_FREE_REQ - formCount} requests left on the free plan today.</p>
      <p>
        <SubscribeBtn price="price_1Oeu01C0XQCoR9vaO7GKAKRJ" userId={'ds'} />
        {' '} for unlimited forms.
      </p>
    </div>
  )
}

export default UpdgradeAccBtn