import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import { PricingPlan } from '../../constants/types'
import Button from '../core/button'

type Props = {
    plan: PricingPlan
}

function PricingPlanCard({ plan }: Props) {

    const router = useRouter()

    return (
        <section className='bg-white p-4 rounded-xl mb-4 pr-12'>
            <p className='text-[16px]'>{plan.name}</p>
            <p className='text-[44px] font-black text-purple-base mb-6'>{plan.price}</p>
            {plan.isComingSoon ? <div className='text-purple-base text-[12px] px-[12px] py-[2px] bg-purple-light rounded-lg w-fit mb-4'>Coming soon</div>
            : <Button icon={<ArrowIcon alignment='right' />} text='Get started' onClick={() => router.push(plan.link)} className='btn-variant-white'/>}
        </section>
    )
}

export default PricingPlanCard
