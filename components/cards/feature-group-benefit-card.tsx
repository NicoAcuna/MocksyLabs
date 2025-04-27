import React from 'react'
import { Benefit } from '../../constants/types'

type Props = {
	benefit: Benefit
}

function FeatureGroupBenefitCard({ benefit }: Props) {
	return (
		<section id={benefit.title} className={`p-2 mb-4 rounded-xl max-w-[280px]`}>
			<div className='mb-8'>{benefit.icon}</div>

			<div>
				<p className='font-semibold text-[18px] my-2'>{benefit.title}</p>
				<p className='mb-6'>{benefit.text}</p>
			</div>
		</section>
	)
}

export default FeatureGroupBenefitCard
