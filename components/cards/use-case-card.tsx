import React from 'react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import { UseCase } from '../../constants/types'
import { Colors } from '../../constants/colors'
import Link from 'next/link'

type Props = {
	useCase: UseCase
}

function UseCaseCard({ useCase }: Props) {
	return (
		<div className={`border-[#00000000] hover:border-black p-4 border-[1px] transition-all duration-300 rounded-lg max-w-[280px]`}>
			<img src={useCase.image.src} />
			<div>
				<p className='font-semibold text-[18px] my-2'>{useCase.name}</p>
				<p>{useCase.text}</p>

				<Link href={`${useCase.slug}`}>
					<div className='flex items-center my-8 group cursor-pointer'>
						<p className='underline text-link-base mr-4'>Find out more</p>
						<ArrowIcon alignment='right' color={Colors.LINK_BASE} className='transition-all group-hover:translate-x-2 duration-300' />
					</div>
				</Link>
			</div>
		</div>
	)
}

export default UseCaseCard
