import Link from 'next/link'
import React from 'react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import { Colors } from '../../constants/colors'
import { JobListing } from '../../constants/types'

type Props = {
	jobListing: JobListing
}

function JobListingCard({ jobListing }: Props) {
	return (
		<div className={`border-[#00000000] border-[1px] transition-all duration-300 rounded-lg max-w-[280px]`}>
			<img src={jobListing.cardImage.src} className='max-w-sm' />
			<div>
				<p className='font-semibold text-[18px] my-2'>{jobListing.name}</p>
				<p>{jobListing.title}</p>
				<Link href={jobListing.slug}>
					<div className='flex items-center my-8 group'>
						<p className='underline text-link-base mr-4'>Apply now</p>
						<ArrowIcon alignment='right' color={Colors.LINK_BASE} className='transition-all group-hover:translate-x-2 duration-300' />
					</div>
				</Link>
			</div>
		</div>
	)
}

export default JobListingCard
