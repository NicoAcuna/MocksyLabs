import React, { useState } from 'react'
import { MosafeFor } from '../../constants/types'
import MosafeForCard from '../cards/mosafe-for-homepage-card'
import MosafeForMain1 from '../../assets/images/mosafe-for-main-1.png'
import MosafeForMain2 from '../../assets/images/mosafe-for-main-2.png'
import MosafeForMain3 from '../../assets/images/mosafe-for-main-3.png'

type Props = {
	mosafeFors: MosafeFor[]
}

function MosafeFor({ mosafeFors }: Props) {
	const [currentIndex, setCurrentIndex] = useState(0)

	const mainImages = [MosafeForMain1, MosafeForMain2, MosafeForMain3]

	function renderMosafeForCards() {
		return mosafeFors.map((mosafeFor, index) => (
			<MosafeForCard mosafeFor={mosafeFor} key={index} setActive={() => setCurrentIndex(index)} isActive={currentIndex === index} />
		))
	}

	return (
		<section className='mosafe-section sm:py-[20px]'>
			<p className='text-center font-bold text-[32px] sm:px-[10%] sm:mb-8'>
			Discover how Mosafe can help your transport delivery teams feel safer and more confident while on the job.
			</p>
			<section id='Mosafe For' className='px-4 lg:flex lg:flex-wrap lg:gap-8 mb-12'>
				{renderMosafeForCards()}
			</section>

			<img src={mainImages[currentIndex].src} alt='Vehicle Check Example' className='mb-12 hidden lg:flex mx-auto' />
		</section>
	)
}

export default MosafeFor
