import React, { useEffect, useState } from 'react'
import { Testimonial } from '../constants/types'
import asyncTimeout from '../util/async-timeout'
import TestimonialCard from './cards/testimonial-card'

type Props = {
	testimonials: Testimonial[]
	className?: string
}

function Testimonials({ testimonials, className }: Props) {
	const [currentIndex, setCurrentIndex] = useState(0)

	function renderTestimonialCards() {
		return testimonials.map((testimonial, index) => {
			return (
				<TestimonialCard
					testimonial={testimonial}
					onLeftButtonClick={handleLeftButtonClick}
					onRightButtonClick={handleRightButtonClick}
					isActive={index === currentIndex}
					key={index}
				/>
			)
		})
	}

	const delayCardChange = async (delay: number, currentValue: number) => {
		setCurrentIndex(-1)
		await asyncTimeout(delay)
		return currentValue
	}

	async function handleLeftButtonClick() {
		const oldIndex = await delayCardChange(399, currentIndex)
		if (currentIndex === 0) {
			setCurrentIndex(testimonials.length - 1)
			return
		}
		setCurrentIndex(oldIndex - 1)
	}

	async function handleRightButtonClick() {
		const oldIndex = await delayCardChange(399, currentIndex)
		if (currentIndex === testimonials.length - 1) {
			setCurrentIndex(0)
			return
		}
		setCurrentIndex(oldIndex + 1)
	}

	return (
		<section id='Testimonials' className={`${className} sm:min-h-[500px] min-h-[750px]`}>
			<section className='mosafe-section'>{renderTestimonialCards()}</section>
		</section>
	)
}

export default Testimonials
