import React from 'react'
import { Feature } from '../../constants/types'
import { useBreakpoint } from '../../util/use-breakpoint'
import FeatureCard from '../cards/feature-card'

type Props = {
	features: Feature[]
	hideTitle?: boolean
}

function FeaturesList({ features, hideTitle }: Props) {
	const breakpoint = useBreakpoint()

	function renderFeatureCards() {
		return features.map((feature, index) => <FeatureCard feature={feature} key={index} />)
	}

	return (
		<section id='Features' className='mosafe-section py-8 flex flex-col items-center'>
			{!hideTitle && (
				<p className='font-black text-[32px] leading-10 mb-4 sm:mb-12 sm:w-[40%] sm:text-center'>
					Enhance your safety management with Mosafe&apos;s all-in-one platform. 
				</p>
			)}

			<div className={'card-list'}>{renderFeatureCards()}</div>
		</section>
	)
}

export default FeaturesList
