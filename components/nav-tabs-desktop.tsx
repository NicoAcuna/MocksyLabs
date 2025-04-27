import React, { ReactElement } from 'react'
import ArrowIcon from '../assets/icons/ArrowIcon'
import {
	ImageLinkView,
	NavIconCard as NavIconCardType,
	NavLink,
} from '../constants/types'
import NavIconCard from './cards/nav-icon-card'
import { motion } from 'framer-motion'
import {
	companyTabIcons,
	companyTabImageData,
	discoverTabHelpCentreIcons,
	discoverTabImageData,
	discoverTabLearnIcons,
	featuresTabIcons,
	featuresTabImageData,
	featuresTabTopFeaturesLinks,
	solutionsTabIcons,
	solutionsTabIndustriesLinks,
	solutionsTabMosafeForLinks,
	solutionsTabTeamSizeLinks,
} from '../constants/data/header'
import Link from 'next/link'

const renderImageLinkView = ({
	src,
	description,
	title,
	link,
}: ImageLinkView) => {
	return (
		<>
			<img src={src} className='w-[75%]' />
			<div className='font-bold mb-4'>{title}</div>
			<div>
				<div className='text-grey-base text-[13px] mb-4'>{description}</div>
				<Link href={link}>
					<p className='flex gap-3 items-center font-medium text-[13px] cursor-pointer w-fit'>
						Learn More <ArrowIcon alignment='right' />
					</p>
				</Link>
			</div>
		</>
	)
}

const renderMappedLink = (
	{ item, isComingSoon, link }: NavLink,
	index: number
): ReactElement => {
	if (isComingSoon)
		return (
			<div key={index} className='mb-6'>
				<div className='font-semibold text-grey-light w-fit'>{item}</div>
				<div className='text-purple-base text-[10px] px-[6px] py-[2px] bg-purple-light rounded-lg w-fit'>
					Coming soon
				</div>
			</div>
		)
	else
		return (
			<Link href={link}>
				<div
					key={index}
					className='mb-6 font-semibold cursor-pointer w-fit hover:text-purple-base transition-all duration-300'>
					{item}
				</div>
			</Link>
		)
}

const renderNavIconCards = (iconList: NavIconCardType[]) => {
	return iconList.map((iconDetails: NavIconCardType, index: number) => (
		<NavIconCard key={index} navIcon={iconDetails} />
	))
}

export function FeaturesTabDesktop() {
	return (
		<>
			<section id='Features' className='grid grid-cols-[1fr_2fr_1fr]'>
				<motion.div
					initial={{ opacity: 0, pointerEvents: 'none' }}
					animate={{ opacity: 1, pointerEvents: 'all' }}
					exit={{ opacity: 0, pointerEvents: 'none' }}
					transition={{ ease: 'easeOut', duration: 0.8 }}>
					<div>
						<div className='text-purple-base text-[13px] font-medium mb-[2rem]'>
							The Mosafe Platform
						</div>
						{renderImageLinkView(featuresTabImageData)}
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, pointerEvents: 'none' }}
					animate={{ opacity: 1, pointerEvents: 'all' }}
					exit={{ opacity: 0, pointerEvents: 'none' }}
					transition={{ ease: 'easeOut', duration: 0.8 }}>
					<div>
						<div className='text-white text-[13px] font-medium mb-[2rem] select-none'>
							-
						</div>
						<div className='grid grid-cols-2 h-fit'>
							{renderNavIconCards(featuresTabIcons)}
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, pointerEvents: 'none' }}
					animate={{ opacity: 1, pointerEvents: 'all' }}
					exit={{ opacity: 0, pointerEvents: 'none' }}
					transition={{ ease: 'easeOut', duration: 0.8 }}>
					<div>
						<div className='text-purple-base text-[13px] font-medium mb-6'>
							Top Features
						</div>
						{featuresTabTopFeaturesLinks.map((feature, index) =>
							renderMappedLink(feature, index)
						)}
					</div>
				</motion.div>
			</section>
		</>
	)
}

export function SolutionsTabDesktop() {
	return (
		<section id='Solutions' className='grid grid-cols-4'>
			<motion.div
				initial={{ opacity: 0, pointerEvents: 'none' }}
				animate={{ opacity: 1, pointerEvents: 'all' }}
				exit={{ opacity: 0, pointerEvents: 'none' }}
				transition={{ ease: 'easeOut', duration: 0.8 }}>
				<div className='pr-4'>
					<div className='text-purple-base text-[13px] font-medium mb-[2rem]'>
						Use Cases
					</div>
					{renderNavIconCards(solutionsTabIcons)}
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, pointerEvents: 'none' }}
				animate={{ opacity: 1, pointerEvents: 'all' }}
				exit={{ opacity: 0, pointerEvents: 'none' }}
				transition={{ ease: 'easeOut', duration: 0.8 }}>
				<div className='pr-4'>
					<div className='text-purple-base text-[13px] font-medium mb-[2rem]'>
						Mosafe for...
					</div>
					{solutionsTabMosafeForLinks.map((group, index) =>
						renderMappedLink(group, index)
					)}
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, pointerEvents: 'none' }}
				animate={{ opacity: 1, pointerEvents: 'all' }}
				exit={{ opacity: 0, pointerEvents: 'none' }}
				transition={{ ease: 'easeOut', duration: 0.8 }}>
				<div className='pr-4'>
					<div className='text-purple-base text-[13px] font-medium mb-[2rem]'>
						Industries
					</div>
					{solutionsTabIndustriesLinks.map((industry, index) =>
						renderMappedLink(industry, index)
					)}
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, pointerEvents: 'none' }}
				animate={{ opacity: 1, pointerEvents: 'all' }}
				exit={{ opacity: 0, pointerEvents: 'none' }}
				transition={{ ease: 'easeOut', duration: 0.8 }}>
				<div className='pr-4'>
					<div className='text-purple-base text-[13px] font-medium mb-[2rem]'>
						Team Size
					</div>
					{solutionsTabTeamSizeLinks.map((team, index) =>
						renderMappedLink(team, index)
					)}
				</div>
			</motion.div>
		</section>
	)
}

export function DiscoverTabDesktop() {
	return (
		<>
			<section id='Discover' className='grid grid-cols-3'>
				<motion.div
					initial={{ opacity: 0, pointerEvents: 'none' }}
					animate={{ opacity: 1, pointerEvents: 'all' }}
					exit={{ opacity: 0, pointerEvents: 'none' }}
					transition={{ ease: 'easeOut', duration: 0.8 }}>
					<div className='pr-4'>
						<div className='text-purple-base text-[13px] font-medium mb-[2rem]'>
							Help Centre
						</div>
						{renderNavIconCards(discoverTabHelpCentreIcons)}
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, pointerEvents: 'none' }}
					animate={{ opacity: 1, pointerEvents: 'all' }}
					exit={{ opacity: 0, pointerEvents: 'none' }}
					transition={{ ease: 'easeOut', duration: 0.8 }}>
					<div className='text-purple-base text-[13px] font-medium mb-[2rem]'>
						Customer Stories
					</div>
					{renderNavIconCards(discoverTabLearnIcons)}
				</motion.div>

				<motion.div
					initial={{ opacity: 0, pointerEvents: 'none' }}
					animate={{ opacity: 1, pointerEvents: 'all' }}
					exit={{ opacity: 0, pointerEvents: 'none' }}
					transition={{ ease: 'easeOut', duration: 0.8 }}>
					<div>{renderImageLinkView(discoverTabImageData)}</div>
				</motion.div>
			</section>
		</>
	)
}

export function CompanyTabDesktop() {
	return (
		<>
			<section id='Company' className='grid grid-cols-[2fr_1fr]'>
				<motion.div
					initial={{ opacity: 0, pointerEvents: 'none' }}
					animate={{ opacity: 1, pointerEvents: 'all' }}
					exit={{ opacity: 0, pointerEvents: 'none' }}
					transition={{ ease: 'easeOut', duration: 0.8 }}>
					<div className='pr-4'>
						<div className='text-purple-base text-[13px] font-medium mb-[2rem]'>
							Company
						</div>
						<div className='grid grid-cols-2'>
							{renderNavIconCards(companyTabIcons)}
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, pointerEvents: 'none' }}
					animate={{ opacity: 1, pointerEvents: 'all' }}
					exit={{ opacity: 0, pointerEvents: 'none' }}
					transition={{ ease: 'easeOut', duration: 0.8 }}>
					<div>{renderImageLinkView(companyTabImageData)}</div>
				</motion.div>
			</section>
		</>
	)
}
