import React from 'react'
import Carousel from 'react-multi-carousel'
import { Advantage } from '../../constants/types'
import 'react-multi-carousel/lib/styles.css'
import AdvantageCard from '../cards/advantage-card'

type Props = {
	advantages: Advantage[]
}

const responsive = {
	largeDesktop: {
		breakpoint: { max: 3000, min: 1200 },
		items: 4,
		slidesToSlide: 1,
	},
	desktop: {
		breakpoint: { max: 1200, min: 900 },
		items: 3,
		slidesToSlide: 1,
	},
	tablet: {
		breakpoint: { max: 900, min: 640 },
		items: 2,
		slidesToSlide: 1,
	},
	mobile: {
		breakpoint: { max: 640, min: 0 },
		items: 1,
		slidesToSlide: 1,
	},
}

function AdvantagesList({ advantages }: Props) {
	return (
		<Carousel
			className='w-full'
			responsive={responsive}
			infinite={true}
			swipeable={true}
			autoPlay={true}
			autoPlaySpeed={6000}
			transitionDuration={2000}
			removeArrowOnDeviceType={['tablet', 'mobile', 'desktop', 'largeDesktop']}>
			{advantages.map((advantage, index) => (
				<AdvantageCard advantage={advantage} key={index} />
			))}
		</Carousel>
	)
}

export default AdvantagesList
