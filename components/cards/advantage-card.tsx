import React from 'react'
import { Advantage } from '../../constants/types'

type Props = {
	advantage: Advantage
}

function AdvantageCard({ advantage }: Props) {
	return (
		<div className={`border border-purple-light p-8 bg-${advantage.backgroundColor} mb-8 rounded-lg min-h-[240px] sm:w-[280px] h-[280px]`}>
			{advantage.title && <p className='text-purple-base text-[38px] font-black mb-6'>{advantage.title}</p>}
			{advantage.text && <p className='mb-6'>{advantage.text}</p>}
			{advantage.item ?? null}
		</div>
	)
}

export default AdvantageCard
