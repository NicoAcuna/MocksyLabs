import React, { useState, ReactElement, useEffect } from 'react'
import LogoIcon from '../../assets/icons/LogoIcon'
import { AnimatePresence, motion } from 'framer-motion'
import Button from './button'
import { NavbarTab } from '../nav-dropdown'
import Login from '../../assets/icons/Login'
import MiniArrow from '../../assets/icons/MiniArrow'
import NavDropDownDesktop from '../nav-dropdown-desktop'
import Link from 'next/link'
import { pricingLink } from '../../constants/data/header'
import { useRouter } from 'next/router'
import { ClickAwayListener } from '@mui/base'

function HeaderDesktop() {
	const [selectedTab, setSelectedTab] = useState<NavbarTab>()

	const location = useRouter()

	const tabs: NavbarTab[] = ['Features', 'Solutions', 'Discover', 'Company', 'Pricing']

	const changeNavTab = (tabClicked: NavbarTab) => {
		if (tabClicked === 'Pricing') return
		if (selectedTab === tabClicked) {
			setSelectedTab(undefined)
			return
		}

		if (!selectedTab) {
			setSelectedTab(tabClicked)
			return
		}

		setSelectedTab(tabClicked)
	}

	const renderNavTabs = (): ReactElement[] => {
		return tabs.map((tab, index) => (
			<div key={index}>
				<div
					className={`px-6 flex  gap-2 items-center my-[1rem] text-[16px] font-bold cursor-pointer transition-all ${
						selectedTab && selectedTab !== tab && 'text-grey-base'
					} `}
					onClick={() => changeNavTab(tab)}>
					{tab !== 'Pricing' ? (
						<>
							<div id='nav_link'>{tab}</div>
							<MiniArrow className={`transition-all duration-300 ${tab === selectedTab && 'rotate-180'}`} />
						</>
					) : (
						<Link href={pricingLink}>
							<div>{tab}</div>
						</Link>
					)}
				</div>
			</div>
		))
	}

	const handleClickAway = (e: MouseEvent | TouchEvent) => {
		const element = e.target as Element
		if (!element) return
		if (element.id === 'nav_link') return
		setSelectedTab(undefined)
	}

	useEffect(() => {
		setSelectedTab(undefined)
	}, [location])

	return (
		<>
			<div className='bg-purple-base text-[#FFF] p-[15px] text-center text-[16px] font-bold flex gap-4 items-center justify-center'>
				<Link
					href='/download'
				>
					<div>
						Download the mobile app <a className='font-medium underline cursor-pointer'>here</a>
					</div>
				</Link>
			</div>
			<nav className={`mb-4`}>
				<div
					className={`${
						selectedTab && 'border-b-[1px] border-secondary-dark'
					} select-none flex mosafe-section py-[16px] items-center justify-between h-[80px]`}>
					<Link href='/'>
						<div>
							<LogoIcon className='cursor-pointer' />
						</div>
					</Link>

					<section id='Navigation' className='flex gap-2'>
						{renderNavTabs()}
					</section>

					<div className='flex gap-4 items-center'>
						<Link href='https://app.mosafe.com.au/'>
							<div className='flex gap-2 cursor-pointer hover:scale-105 transition-all duration-300'>
								<p className='font-bold'>Log in</p>
								<Login />
							</div>
						</Link>
						<Button onClick={() => window.location.href = 'https://app.mosafe.com.au/'} text='Sign up' className='btn-variant-black px-4' />
					</div>
				</div>

				<AnimatePresence exitBeforeEnter>
					{selectedTab && (
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
							transition={{ duration: 0.4, type: 'spring', bounce: 0.2 }}
							className='absolute w-full bg-white z-10 border-b-[1px] border-secondary-dark'>
							<ClickAwayListener onClickAway={handleClickAway} mouseEvent='onMouseDown'>
								<div>
									<NavDropDownDesktop selectedTab={selectedTab} />
								</div>
							</ClickAwayListener>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
		</>
	)
}

export default HeaderDesktop
