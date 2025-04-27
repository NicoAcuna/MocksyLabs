import Link from 'next/link'
import React from 'react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import { Colors } from '../../constants/colors'
import { Industry } from '../../constants/types'

type Props = {
	industry: Industry
}

function IndustryCard({ industry }: Props) {
	return (
		<div
			className={`border-[#00000000] p-4 border-[1px] transition-all duration-300 rounded-lg max-w-[280px] ${
				industry.isComingSoon ? 'opacity-50' : 'hover:border-[#000000]'
			}`}>
			<img src={industry.cardImage.src} />
			<div>
				<p className='font-semibold text-[18px] my-2'>{industry.name}</p>
				<p>{industry.text}</p>

				{industry.isComingSoon ? (
					<div className='text-purple-base text-[10px] px-[6px] py-[2px] bg-purple-light rounded-lg w-fit mt-4'>Coming soon</div>
				) : (
					<Link href={`${industry.slug}`}>
						<div className='flex items-center my-8 group cursor-pointer'>
							<p className='underline text-link-base mr-4'>Find out more</p>
							<ArrowIcon alignment='right' color={Colors.LINK_BASE} className='transition-all group-hover:translate-x-2 duration-300' />
						</div>
					</Link>
				)}
			</div>
		</div>
	)
}

export default IndustryCard
