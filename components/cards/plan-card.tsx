import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import Check from '../../assets/icons/Check'
import { PricingPlan } from '../../constants/types'
import Button from '../core/button'

type Props = {
	plan: PricingPlan
}

function PlanCard({ plan }: Props) {
	const router = useRouter()

	const renderAttributes = () => {
		return plan.attributes.map((attr, index) => {
			return (
				<section className='flex gap-2 mb-3 items-center' key={index}>
					<Check color='#000' />
					<p className='text-[14px]'>{attr}</p>
				</section>
			)
		})
	}

	return (
		<section
			className={`p-4 py-6 rounded-xl mb-10 w-[80%] mx-auto border-2 ${
				!plan.isComingSoon ? 'border-purple-base bg-purple-light' : 'border-black'
			} ${plan.name === 'Individual Plan' ? 'bg-purple-light' : 'bg-white'}`}>
			<p className='text-[16px] font-bold'>{plan.name}</p>
			<p className='text-[44px] font-black text-purple-base'>{plan.price}</p>
			<p className='text-[14px] mb-6'>{plan.subText}</p>
			<section className='mb-12'>{renderAttributes()}</section>
			{plan.isComingSoon ? (
				<div className='text-purple-base text-[12px] px-[12px] py-[2px] bg-purple-light rounded-lg w-fit mx-auto'>Coming soon</div>
			) : (
				<Button
					icon={<ArrowIcon alignment='right' />}
					text='Get started'
					onClick={() => router.push(plan.link)}
					className='btn-variant-black rounded-xl py-3 mb-2 w-full justify-center'
				/>
			)}
		</section>
	)
}

export default PlanCard
