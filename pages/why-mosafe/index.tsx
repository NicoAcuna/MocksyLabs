import React from 'react'
import AdvantageCard from '../../components/cards/advantage-card'
import Button from '../../components/core/button'
import { advantagesData } from '../../constants/data/advantages'
import WhyMosafeSection from '../../components/why-mosafe'
import Testimonials from '../../components/testimonials'
import { testimonialsData } from '../../constants/data/testimonials'
import { mosafeWhySectionData } from '../../constants/data/mosafe-why-sections'
import SectionCard from '../../components/cards/section-card'
import Head from 'next/head'
import CTA from '../../components/cta'
import AdvantagesList from '../../components/lists/advantages-list'
import { useRouter } from 'next/router'

function WhyMosafe() {
	const router = useRouter();
	const renderSections = () => {
		return mosafeWhySectionData.map((section, index) => (
			<SectionCard imageAlignment={index % 2 === 0 ? 'left' : 'right'} section={section} key={index} />
		))
	}

	return (
		<main id='Why Mosafe'>
			<Head>
				<title>Why Mosafe</title>
				<meta name='description' content='Say goodbye to complicated safety software and hello to Mosafe. Our user-friendly platform is the best choice for businesses looking to protect their employees.'></meta>
				<meta name='keywords' content='Safety management system, all-in-one safety solution, safety software, chain of responsibility compliance' />
			</Head>
			<section id='Overview' className='bg-why-mosafe-bg bg-no-repeat'>
				<section className='mosafe-section'>
					<h1 className='text-purple-base font-bold text-center mb-2'>Why Mosafe?</h1>

					<h2 className='font-black text-[38px] leading-[45px] text-center mb-6'>Manage your employees and their safety with one solution</h2>

					<p className='text-[20px] text-center mb-6'>
					Communicate, manage, and train your employees with Mosafe’s all-in-one app. Easy to use, easy to customise, and easy to scale.
					</p>

					<Button text='What is Mosafe?' onClick={() => router.push('/product-overview')} className='mx-auto py-3 mb-[200px]' />
					<div className='bg-purple-light rounded-md p-4 h-[500px] mb-8'>{/* video player */}</div>
				</section>
			</section>

			<section id={'Advantages'} className='mosafe-section sm:flex sm:gap-4 sm:flex-wrap'>
				<AdvantagesList advantages={advantagesData} />
			</section>

			<WhyMosafeSection />

			<section className='mosafe-section'>{renderSections()}</section>

			<Testimonials testimonials={testimonialsData} />

			<CTA />
		</main>
	)
}

export default WhyMosafe
