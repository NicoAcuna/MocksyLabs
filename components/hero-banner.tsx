import React, { useEffect, useRef, useState } from 'react'
import Image1 from '../assets/images/hero-image-1.png'
import Image2 from '../assets/images/hero-image-2.png'
import Image3 from '../assets/images/hero-image-3.png'
import Image4 from '../assets/images/hero-image-4.png'
import Pending from '../assets/lotties/pending-lottie.json'
import DecreaseRisk from '../assets/images/decrease-risk.jpg'
import IncreaseWorkplaceSafety from '../assets/images/increase-workplace-safety.png'
import DecreaseRiskDesktop from '../assets/images/decrease-risk-desktop.png'
import CheckStartedImage from '../assets/images/check-started.png'
import CheckCompleteImage2 from '../assets/images/check-complete-2.png'
import Button from './core/button'
import { useScroll } from 'framer-motion'
import { motion } from 'framer-motion'
import ArrowIcon from '../assets/icons/ArrowIcon'
import Check from '../assets/icons/Check'
import { useBreakpoint } from '../util/use-breakpoint'
import { HomeAnimationCheck } from '../constants/types'
import { homeCheckDesktopAnimationPoints, homeCheckMobileAnimationPoints } from '../constants/data'

function HeroBanner() {
	const heroRef = useRef(null)
	const { scrollY } = useScroll()
	const breakpoint = useBreakpoint()

	const [checkStartedOpacity, setCheckStartedOpacity] = useState(1)
	const [checkStartedLeft, setCheckStartedLeft] = useState('30%')
	const [checkStartedTop, setCheckStartedTop] = useState('10%')
	const [isCheckCompleted, setIsCheckCompleted] = useState(false)

	const [rightCardMargin, setRightCardMargin] = useState(0)
	const [bottomCardMargin, setBottomCardMargin] = useState(15)

	const [checkCompleteScale, setCheckCompleteScale] = useState(0)

	const calculateProgress = (progress: number, min: number, max: number) => {
		const progressResult = progress * max
		if (progressResult <= min) return min
		else return progressResult
	}

	const calculateProgressReverse = (progress: number, min: number, max: number) => {
		const progressResult = progress * max
		return max - progressResult
	}

	const checkStartedAnimationController = (latest: number, animationPoints: HomeAnimationCheck) => {
		const { floatStart, floatEnd, hideStart, hideEnd, floatXMax, floatXMin, floatYMax, floatYMin } = animationPoints

		// opacity

		// if (latest <= opacityStart) setCheckStartedOpacity(1)
		// else if (latest > opacityStart && latest < opacityEnd) {
		// 	const progressThrough = (latest - opacityStart) / (opacityEnd - opacityStart)
		// 	setCheckStartedOpacity(progressThrough)
		// } else if (latest >= opacityEnd) setCheckStartedOpacity(1)

		// diagonal float
		if (latest > floatStart && latest < floatEnd) {
			const progress = (latest - floatStart) / (floatEnd - floatStart)
			const calcedProgressHeight = calculateProgress(progress, floatYMin, floatYMax)

			const calcedProgressLeft =
				breakpoint === 'MOBILE' ? calculateProgressReverse(progress, floatXMin, floatXMax) : calculateProgress(progress, floatXMin, floatXMax)

			setCheckStartedTop(calcedProgressHeight.toString() + '%')
			setCheckStartedLeft(calcedProgressLeft.toString() + '%')
		}

		if (latest > floatStart + 150) setIsCheckCompleted(true)
		else setIsCheckCompleted(false)

		// hide after complete appears
		if (latest <= hideStart) setCheckStartedOpacity(1)
		if (latest > hideStart) {
			const progress = (latest - hideStart) / (hideEnd - hideStart)
			const calcedProgress = calculateProgressReverse(progress, 0, 1)
			setCheckStartedOpacity(calcedProgress)
		} else if (latest > hideEnd) setCheckStartedOpacity(0)
	}

	const checkCompletedAnimationController = (latest: number, animationPoints: HomeAnimationCheck) => {
		const { scaleStart, scaleEnd } = animationPoints

		// scale
		if (latest <= scaleStart) setCheckCompleteScale(0)
		else if (latest > scaleStart && latest < scaleEnd) {
			const progressThrough = (latest - scaleStart) / (scaleEnd - scaleStart)
			setCheckCompleteScale(progressThrough)
		} else if (latest >= scaleEnd) setCheckCompleteScale(1)
	}

	const cardAnimationController = (latest: number) => {
		const startTranslate = 400
		const endTranslate = 800

		const adminCardEndMarginValue = 340
		const smallCardOffsetEndMarginValue = 0
		const smallCardOffsetStartMarginValue = 15

		if (latest <= startTranslate) {
			setRightCardMargin(0)
			setBottomCardMargin(smallCardOffsetStartMarginValue)
		} else if (latest > startTranslate && latest < endTranslate) {
			const progressThrough = (latest - startTranslate) / (endTranslate - startTranslate)
			setRightCardMargin(progressThrough * adminCardEndMarginValue)
			setBottomCardMargin(15 - progressThrough * 15)
		} else if (latest >= endTranslate) {
			setRightCardMargin(adminCardEndMarginValue)
			setBottomCardMargin(smallCardOffsetEndMarginValue)
		}
	}

	useEffect(() => {
		return scrollY.onChange((latest) => {
			checkStartedAnimationController(latest, breakpoint === 'MOBILE' ? homeCheckMobileAnimationPoints : homeCheckDesktopAnimationPoints)
			checkCompletedAnimationController(latest, breakpoint === 'MOBILE' ? homeCheckMobileAnimationPoints : homeCheckDesktopAnimationPoints)
			cardAnimationController(latest)
		})
	}, [breakpoint])

	useEffect(() => {
		if (!breakpoint) return

		if (breakpoint === 'MOBILE') {
			setCheckStartedLeft(homeCheckMobileAnimationPoints.floatXMax + '%')
			setCheckStartedTop(homeCheckMobileAnimationPoints.floatYMin + '%')
		} else {
			setCheckStartedLeft(homeCheckDesktopAnimationPoints.floatXMin + '%')
			setCheckStartedTop(homeCheckDesktopAnimationPoints.floatYMin + '%')
		}
	}, [breakpoint])

	return (
		<section id='Hero' className='flex flex-col items-center mosafe-section sm:py-[20px]'>
			<div className='flex flex-col items-center mb-4 lg:mb-[-6rem]'>
				<p className='text-center text-[20px] mb-8 sm:w-1/2'>
				Simplifying safety management to keep your workers safe.
				</p>
				<Button onClick={() => window.location.href = 'https://app.mosafe.com.au/'} text='Sign up for free' className='py-3 mb-6 sm:mb-0' icon={<ArrowIcon alignment='right' />} />
			</div>

			<div className='relative w-full pointer-events-none'>
				<motion.div
					style={{
						left: checkStartedLeft,
						opacity: checkStartedOpacity,
						top: checkStartedTop,
					}}
					className='bg-white z-10 rounded-md flex items-center shadow-lg absolute p-2 gap-2 font-bold text-[13px] whitespace-nowrap'>
					<img src={CheckStartedImage.src} alt='Check started' className='bg-[#FCF1D1] rounded-md' />
					<p>Check {isCheckCompleted ? 'completed' : 'started'}</p>
					
				</motion.div>

				<motion.div
					className='bg-white rounded-md flex items-center shadow-lg absolute p-2 gap-2 font-bold text-[13px] whitespace-nowrap'
					style={{
						left:
							breakpoint === 'MOBILE' ? homeCheckMobileAnimationPoints.completedLeft + '%' : homeCheckDesktopAnimationPoints.completedLeft + '%',
						top: breakpoint === 'MOBILE' ? homeCheckMobileAnimationPoints.completedTop + '%' : homeCheckDesktopAnimationPoints.completedTop + '%',
						scale: checkCompleteScale,
						transformOrigin: '100% 50%',
						zIndex: '10',
					}}>
					<img src={CheckCompleteImage2.src} alt='New check compelete' width='32px' height='32px' />
					<div>
						<p>
							<span className='text-link-base'>NEW</span> Check Completed
						</p>
						<p className='flex gap-2 text-grey-base text-[0.7rem] font-normal items-center'>
							from <span className='bg-purple-light h-[10px] rounded-3xl grow' />
						</p>
					</div>
				</motion.div>

				<div
					className='grid grid-cols-2 gap-y-8 gap-x-6 items-center justify-items-center mb-6 relative sm:mb-[110px] w-full 
            sm:grid-cols-[1.5fr_1.4fr_1.4fr_1.5fr]'>
					<div className='relative w-[100%] sm:min-w-[200px]' ref={heroRef}>
						<img src={Image3.src} className='rounded-xl w-[100%]' alt='Delivery driver' />
						<div className='absolute bottom-1 right-1 bg-white px-2 py-1 rounded-tl-md rounded-br-md rounded-tr-sm rounded-bl-sm text-[13px]'>
							<p>Delivery Driver</p>
						</div>
					</div>
					<div className='hidden sm:block' />
					<div className='hidden sm:block' />

					<motion.div
						className=' w-full right-0 hidden sm:block'
						style={{
							marginBottom: rightCardMargin * -1 + '%',
						}}>
						<div className='relative w-full sm:min-w-[200px] mb-[-150%] sm:mb-0'>
							<img src={Image1.src} className='rounded-xl w-[100%]' alt='Transport admin' />
							<div className='absolute bottom-1 right-1 bg-white px-2 py-1 rounded-tl-md rounded-br-md rounded-tr-sm rounded-bl-sm text-[13px]'>
								<p>Transport Admin</p>
							</div>
						</div>
					</motion.div>

					<div className='relative w-full sm:min-w-[200px] mb-[-150%] sm:mb-0 sm:hidden'>
						<img src={Image1.src} className='rounded-xl w-[100%]' alt='Transport admin' />
						<div className='absolute bottom-1 right-1 bg-white px-2 py-1 rounded-tl-md rounded-br-md rounded-tr-sm rounded-bl-sm text-[13px]'>
							<p>Transport Admin</p>
						</div>
					</div>

					<div className='relative w-[100%] sm:hidden'>
						<img src={Image2.src} className='rounded-xl w-[100%]' alt='Business owner' />
						<div className='absolute bottom-1 right-1 bg-white px-2 py-1 rounded-tl-md rounded-br-md rounded-tr-sm rounded-bl-sm text-[13px]'>
							<p>Business Owner</p>
						</div>
					</div>
				</div>

				<section id='' className='hidden sm:grid grid-cols-[1fr_1.5fr_2fr_1.5fr] w-full gap-6 mb-[110px]'>
					<motion.div
						style={{
							marginTop: bottomCardMargin + 'px',
						}}>
						<img className='rounded-lg w-full' src={DecreaseRiskDesktop.src} alt='Decrease risk and paper waste' />
					</motion.div>

					<motion.div
						style={{
							marginTop: bottomCardMargin * -1 + 'px',
						}}>
						<div className='relative'>
							<img src={Image2.src} className='rounded-xl w-full' alt='Business owner' />
							<div className='absolute bottom-1 right-1 bg-white p-4 rounded-tl-md rounded-br-xl rounded-tr-xl rounded-bl-xl'>
								<p className='font-semibold'>Business Owner</p>
							</div>
						</div>
					</motion.div>

					<motion.div
						style={{
							marginTop: bottomCardMargin + 'px',
						}}>
						<div className='relative flex flex-col justify-between gap-8'>
							<img className='rounded-lg w-full' src={Image4.src} alt='Delivery' />
							<img className='rounded-lg w-full' src={IncreaseWorkplaceSafety.src} alt='Increase workplace safety' />
						</div>
					</motion.div>

					<div className='relative max-w-fit'></div>
				</section>
			</div>

			<img src={DecreaseRisk.src} alt='Decrease risk and paper waste' className='sm:hidden' />
		</section>
	)
}

export default HeroBanner
