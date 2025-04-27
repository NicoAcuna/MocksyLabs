import Link from 'next/link'
import React from 'react'
import ArrowIcon from '../assets/icons/ArrowIcon'
import { Colors } from '../constants/colors'
import AskOurTeamImage from '../assets/images/ask-our-team.png'

function AskOurTeam() {
	return (
		<div className='bg-purple-light flex flex-col justify-center items-center rounded-lg py-8 mosafe-section'>
			<img src={AskOurTeamImage.src} />
			<h3 className='text-[24px] font-bold mb-1 mt-4 text-center'>Any burning questions we haven&apos;t answered?</h3>
			<p className='mb-6'>Get in touch! Our team is here to help.</p>
			<Link href={`/articles`}>
				<div className='flex items-center cursor-pointer group'>
					<p className='underline text-link-base mr-4 font-bold'>Ask us anything</p>
					<ArrowIcon alignment='right' color={Colors.LINK_BASE} className='transition-all group-hover:translate-x-2 duration-300' />
				</div>
			</Link>
		</div>
	)
}

export default AskOurTeam
