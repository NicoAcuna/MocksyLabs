import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import Button from './button'
import Burger from '../../assets/icons/Burger'
import Close from '../../assets/icons/Close'
import NavDropDown from '../nav-dropdown'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Header() {
	const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

	const location = useRouter()

	useEffect(() => {
		if (isNavOpen) {
			document.body.style.overflow = 'hidden'
			window.scrollTo(0, 0)
		} else document.body.style.overflow = 'unset'
	}, [isNavOpen])

	useEffect(() => {
		setIsNavOpen(false)
	}, [location])

	return (
		<nav className={`${isNavOpen && 'h-screen flex flex-col'} mb-[1rem]`}>
			<div className='bg-purple-base text-[#FFF] p-[15px] text-center text-[14px] font-light z-50'>
				Download the mobile app <a className='font-medium underline'>here</a>
			</div>

			<div
				className={`${
					isNavOpen && 'border-b-[1px] border-secondary-dark'
				} flex px-[18px] py-[16px] bg-white items-center h-[80px] z-50 relative`}>
				<Link href='/'>
					<div>
						<Image src="/mocksy-logo.png" alt="MocksyLabs Logo" width={300} height={170} />

					</div>
				</Link>
				<div className='flex gap-2 items-center ml-auto'>
					<AnimatePresence initial={false}>
						{!isNavOpen && (
							<motion.div
								initial={{ opacity: 0, y: 0 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 0 }}
								transition={{ ease: 'easeOut', duration: 0.2 }}>
								<Button onClick={() => null} text='Sign up' className='btn-variant-black px-3' />
							</motion.div>
						)}
					</AnimatePresence>

					{isNavOpen ? <Close onClick={() => setIsNavOpen(false)} /> : <Burger onClick={() => setIsNavOpen(true)} />}
				</div>
			</div>

			<AnimatePresence>
				{isNavOpen && (
					<motion.div
						initial={{ opacity: 0, y: -100 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -100, position: 'absolute' }}
						transition={{ ease: 'easeOut', duration: 0.4 }}
						className='flex-grow overflow-y-hidden w-full h-[calc(100%_-_120px)] z-30'>
						<NavDropDown />
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	)
}

export default Header
