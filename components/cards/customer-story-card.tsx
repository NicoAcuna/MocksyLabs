import Link from 'next/link'
import React from 'react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import { Colors } from '../../constants/colors'
import { CustomerStory } from '../../constants/types'

type Props = {
	customerStory: CustomerStory
}

function CustomerStoryCard({ customerStory }: Props) {
	return (
		<div className={`border-[#00000000] border-[1px] transition-all duration-300 rounded-lg max-w-[280px]`}>
			<img src={customerStory.cardImage.src} className='w-full' />
			<div>
				<p className='font-semibold text-[18px] my-2'>{customerStory.name}</p>
				<p>{customerStory.title}</p>
				<Link href={customerStory.slug}>
					<div className='flex items-center my-8 group cursor-pointer'>
						<p className='underline text-link-base mr-4'>Read story</p>
						<ArrowIcon alignment='right' color={Colors.LINK_BASE} className='transition-all group-hover:translate-x-2 duration-300' />
					</div>
				</Link>
			</div>
		</div>
	)
}

export default CustomerStoryCard
