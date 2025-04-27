import React from 'react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import { Feature } from '../../constants/types'
import { motion, Variant } from 'framer-motion'
import { Colors } from '../../constants/colors'
import Link from 'next/link'

type Props = {
	feature: Feature
}

function FeatureCard({ feature }: Props) {
	return (
		<motion.div
			className={`border-[#00000000] p-4 border transition-all duration-300 rounded-xl max-w-[280px] ${
				feature.isComingSoon ? 'opacity-50' : 'hover:border-black'
			}`}>
			<motion.img src={feature.cardImage.src} />
			<div>
				<p className='font-semibold text-[18px] my-2'>{feature.name}</p>
				<p>{feature.text}</p>

				{feature.isComingSoon ? (
					<div className='text-purple-base text-[10px] px-[6px] py-[2px] bg-purple-light rounded-lg w-fit mt-4'>Coming soon</div>
				) : (
					<Link href={`${feature.slug}`}>
						<div className='flex items-center my-8 cursor-pointer group'>
							<p className='underline text-link-base mr-4 font-bold'>Find out more</p>
							<ArrowIcon alignment='right' color={Colors.LINK_BASE} className='transition-all group-hover:translate-x-2 duration-300' />
						</div>
					</Link>
				)}
			</div>
		</motion.div>
	)
}

export default FeatureCard
