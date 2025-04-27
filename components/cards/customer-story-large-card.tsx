import { useRouter } from 'next/router'
import React from 'react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import { CustomerStory } from '../../constants/types'
import Button from '../core/button'

type Props = {
	customerStory: CustomerStory
	imageAlignment: 'left' | 'right'
}

function CustomerStoryLargeCard({ customerStory, imageAlignment = 'left' }: Props) {
	const router = useRouter()
	return (
		<div className={`mb-12 grid grid-cols-1 md:grid-cols-2 gap-x-20 `}>
			<div className={`flex flex-col ${imageAlignment === 'left' ? ' order-2' : ''}`}>
				<h3 className='text-[32px] font-extrabold mb-6'>{customerStory.title}</h3>
				<p className='mb-6'>{customerStory.text}</p>
				<Button
					text='Read story'
					className='btn-variant-white mb-6'
					onClick={() => router.push(customerStory.slug)}
					icon={<ArrowIcon alignment='right' />}
				/>
			</div>
			<img className='h-[500px] md:h-[350px] object-cover rounded-2xl' src={customerStory.cardImage.src} />
		</div>
	)
}

export default CustomerStoryLargeCard
