import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import React, { ReactElement, useState } from 'react'
import MiniArrow from '../assets/icons/MiniArrow'
import { pricingLink } from '../constants/data/header'
import { useBreakpoint } from '../util/use-breakpoint'
import Button from './core/button'
import { CompanyTab, DiscoverTab, FeaturesTab, SolutionsTab } from './nav-tabs'

export type NavbarTab = 'Features' | 'Solutions' | 'Discover' | 'Company' | 'Pricing'

function NavDropDown() {
	const [selectedTab, setSelectedTab] = useState<NavbarTab>()

	const tabs: NavbarTab[] = ['Features', 'Solutions', 'Discover', 'Company', 'Pricing']

	const renderLinkContentSwitch = (): ReactElement => {
		switch (selectedTab) {
			case 'Features':
				return <FeaturesTab />
			case 'Solutions':
				return <SolutionsTab />
			case 'Discover':
				return <DiscoverTab />
			case 'Company':
				return <CompanyTab />
			case 'Pricing':
				return <div />
			default:
				return <div />
		}
	}

	return (
		<section id='Navigation' className='h-full w-full flex flex-col overflow-y-auto'>
			{tabs.map((tab, index) => (
				<div key={index}>
					<section
						className={`px-6 flex justify-between items-center my-[1rem] text-[30px] font-bold cursor-pointer ${
							selectedTab && selectedTab !== tab && 'text-grey-base'
						}`}
						onClick={() => setSelectedTab(selectedTab === tab ? undefined : tab)}>
						{tab === 'Pricing' ? (
							<Link href={pricingLink}>
								<div className='cursor-pointer'>{tab}</div>
							</Link>
						) : (
							<div>{tab}</div>
						)}

						{tab !== 'Pricing' && <MiniArrow className={`transition-all duration-300 ${tab === selectedTab && 'rotate-180'}`} />}
					</section>

					<AnimatePresence exitBeforeEnter>
						{selectedTab === tab && selectedTab !== 'Pricing' && (
							<motion.div
								initial={{
									height: 0,
									opacity: 0.6,
								}}
								animate={{
									height: 'auto',
									opacity: 1,
								}}
								exit={{
									height: 0,
									opacity: 0,
								}}
								transition={{ duration: 0.4 }}>
								<section className='bg-purple-light p-6'>{renderLinkContentSwitch()}</section>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			))}

			<div className='grid grid-cols-2 gap-4 mt-auto mb-12 p-6'>
				<Button text='Sign up' onClick={() => null} className='w-[100%] justify-center' />
				<Button text='Log in' onClick={() => null} className='btn-variant-white w-[100%] justify-center' />
			</div>
		</section>
	)
}

export default NavDropDown
