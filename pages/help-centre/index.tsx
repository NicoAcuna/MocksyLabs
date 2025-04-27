import React, { useState } from 'react'
import HelpCentreImage from '../../assets/images/help-centre.png'
import HelpCentreImage2 from '../../assets/images/help-centre-3.png'
import AskOurTeam from '../../components/ask-our-team'
import UserGuides from './user-guides'
import FAQS from './faqs'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import Head from 'next/head'
import CTA from '../../components/cta'
import Button from '../../components/core/button'
import Check from '../../assets/icons/Check'
import { Colors } from '../../constants/colors'

function HelpCentre() {
	const [currentPage, setCurrentPage] = useState<'FAQS' | 'UserGuides'>('UserGuides')

	const renderAttributes = () => {
		const attributes = ['Easy set up and onboarding', 'Swift rollout to your teams', 'Simple integration', 'Get instant help from our team']
		return attributes.map((attr, index) => {
			return (
				<section className='flex gap-2 mb-3 items-center' key={index}>
					<Check color={Colors.PURPLE_PRIMARY} />
					<p className='text-[14px]'>{attr}</p>
				</section>
			)
		})
	}

	return (
		<main>
			<Head>
				<title>Help Centre</title>
				<meta name='description' content='Looking for help with Mosafe? Check out our Help Center with articles and FAQs or get in touch with our support team. Find answers and support for all your safety and compliance needs.'></meta>
				<meta name='keywords' content='Mosafe troubleshooting, Help with Mosafe, Contact Mosafe, Getting started with Mosafe' />
			</Head>
			<section className='flex flex-col mt-20'>
				<section className='mosafe-section'>
					<h1 className='text-[18px] text-purple-base font-bold text-center'>Help Centre</h1>
					<h3 className='text-[38px] font-extrabold text-center mb-8'>We&apos;re here to help!</h3>

					<img src={HelpCentreImage.src} className='md:w-1/2 self-center mx-auto' />
					<section className='bg-purple-light sm:flex py-6 rounded-t-3xl rounded-b-sm justify-center mb-20 gap-x-20 hidden md:visible'>
						<p
							className={`font-bold cursor-pointer ${currentPage === 'UserGuides' ? 'text-grey-base' : ''}`}
							onClick={() => setCurrentPage('FAQS')}>
							FAQs
						</p>
						<p
							className={`font-bold cursor-pointer ${currentPage === 'FAQS' ? 'text-grey-base' : ''}`}
							onClick={() => setCurrentPage('UserGuides')}>
							User Guides
						</p>
					</section>
					{currentPage === 'FAQS' ? <FAQS /> : <UserGuides />}

					<AskOurTeam />
				</section>
				{currentPage === 'FAQS' && (
					<section className='grid md:grid-cols-2 mosafe-section gap-x-20'>
						<section>
							<p className='font-bold text-[20px] text-purple-base mb-4'>User Guides</p>
							<p className='font-extrabold text-[44px] leading-10 mb-6'>Learn how to get the most out of Mosafe</p>
							<p className='mb-6'>
							Our user guides are here to make your experience with Mosafe as smooth as possible! They will guide you through how to set up the platform to suit your workspace and teach you how to use our digital safety management system.</p>
							<Button text='Explore user guides' className='btn-variant-white mb-6' onClick={() => null} icon={<ArrowIcon alignment='right' />} />
							<section className='grid grid-cols-2'>{renderAttributes()}</section>
						</section>
						<section className='flex justify-center items-center'>
							<img className='md:w-1/2' src={HelpCentreImage2.src} />
						</section>
					</section>
				)}
				<section className='bg-purple-light mt-8 w-full mb-14 mosafe-section flex justify-between items-center md:hidden '>
					<section>
						<p className=' font-bold'>Get help</p>
						<p>{currentPage === 'FAQS' ? 'User Guides' : "View all FAQs"}</p>
					</section>
					<section
						onClick={() => setCurrentPage(currentPage === 'FAQS' ? 'UserGuides' : 'FAQS')}
						className=' p-[0.8rem] rounded-full border-[2px] border-black flex items-center justify-center'>
						<ArrowIcon alignment='right' />
					</section>
				</section>
			</section>

			<CTA color={currentPage === 'FAQS' ? '' : '#FFF'} variant='Standard' />
		</main>
	)
}

export default HelpCentre
