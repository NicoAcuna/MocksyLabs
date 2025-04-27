import React from 'react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import { Feature } from '../../constants/types'
import Link from 'next/link'

type Props = {
	feature: Feature
	index: number
}

function FeatureGroupFeatureCard({ feature, index }: Props) {
	return (
		<section
			id={feature.title}
			className={`bg-purple-light p-4 rounded-xl max-w-[350px] flex flex-col sm:max-w-[300px] h-[450px] mb-6 ${
				index % 2 !== 0 ? 'sm:mt-[80%]' : ''
			}`}>
			<img src={feature.cardImage.src} className='mb-6' />
			<div className='flex flex-col flex-grow relative'>
				<p className='font-semibold text-[18px] my-2'>{feature.title}</p>
				<p className='mb-6'>{feature.text}</p>
				<Link href={`${feature.slug}`}>
					<div className='absolute bottom-0 right-0 hover:scale-105 cursor-pointer transition-all duration-300 border-2 border-black p-4 rounded-[50%]'>
						<ArrowIcon alignment='right' />
					</div>
				</Link>
			</div>
		</section>
	)
}

export default FeatureGroupFeatureCard
