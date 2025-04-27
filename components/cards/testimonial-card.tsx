import React from 'react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import Star from '../../assets/icons/Star'
import { Testimonial } from '../../constants/types'
import { AnimatePresence, motion } from 'framer-motion'
import { useBreakpoint } from '../../util/use-breakpoint'

type Props = {
	testimonial: Testimonial
	onRightButtonClick: () => void
	onLeftButtonClick: () => void
	isActive: boolean
}

function TestimonialCard({ testimonial, onLeftButtonClick, onRightButtonClick, isActive }: Props) {
	const renderStars = () => {
		return Array(Math.floor(testimonial.starRating))
			.fill(0)
			.map((s, index) => <Star key={index} />)
	}

	return (
		<AnimatePresence exitBeforeEnter>
			{isActive && (
				<motion.div>
					<div className='grid grid-cols-1 mb-12 sm:grid-cols-[1fr_2fr] sm:gap-12'>
						<div className='relative flex flex-col items-center sm:order-2 sm:min-w-[200px] sm:h-full max-w-[328px] mx-auto lg:mx-0'>
							<div className='overflow-hidden'>
								<motion.img
									className='rounded-lg h-[450px]'
									src={testimonial.image.src}
									alt={testimonial.customerName + ' ' + testimonial.customerOccupation}
									initial={{ x: 400 }}
									animate={{ x: 0 }}
									exit={{ x: -400 }}
									transition={{ ease: 'easeOut', duration: 0.4 }}
								/>
							</div>
							<motion.div
								initial={{ opacity: 0, x: 200 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: 200 }}
								transition={{ duration: 0.4, bounce: 0.25 }}
								className='bg-purple-light rounded-md w-[95%] absolute bottom-2 p-3 right-2 flex items-center gap-4
                                xl:bottom-[40%] xl:shadow-2xl  xl:w-[120%] xl:right-[-100%] xl:min-w-fit'>
								<div className='bg-white rounded-md p-4'>
									<img className='h-8 min-w-[32px]' src={testimonial.companyImage.src} alt='Company Logo' />
								</div>
								<div className=' grow'>
									<div className='font-bold xl:flex xl:justify-between xl:w-full'>
										<p>{testimonial.customerName}</p>
										<div className='gap-1 ml-auto hidden xl:flex'>{renderStars()}</div>
									</div>
									<p className='text-grey-base'>
										<span className='font-bold'>{testimonial.customerOccupation}</span>, {testimonial.customerCompany}
									</p>
								</div>
							</motion.div>
						</div>

						<div className='sm:order-1 sm:w-full relative'>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0 }}
								transition={{ ease: 'easeOut', duration: 0.4 }}>
								<p className='font-bold text-[24px] mb-10 my-4'>{testimonial.text}</p>
							</motion.div>
							<div className='flex items-center gap-6 absolute bottom-0 left-0'>
								<div
									onClick={() => onLeftButtonClick()}
									className='hover:scale-105 cursor-pointer transition-all duration-300 border-[1px] border-black rounded-full max-w-fit p-3'>
									<ArrowIcon />
								</div>
								<div
									onClick={() => onRightButtonClick()}
									className='hover:scale-105 cursor-pointer transition-all duration-300 bg-black border-[1px] border-white rounded-full max-w-fit p-3'>
									<ArrowIcon alignment='right' color='#FFF' />
								</div>
								<div className='flex gap-1 ml-auto xl:hidden'>{renderStars()}</div>
							</div>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default TestimonialCard
