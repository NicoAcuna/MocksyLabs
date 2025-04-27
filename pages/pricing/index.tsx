import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import FAQCard from '../../components/cards/faq-card'
import PlanCard from '../../components/cards/plan-card'
import Button from '../../components/core/button'
import CTA from '../../components/cta'
import PricingPlanFeatures from '../../components/pricing-plan-features'
import { FAQList } from '../../constants/data/faqs'
import { pricingPlansData } from '../../constants/data/pricing-plans'

function Pricing() {
	const renderPricingPlanCards = () => {
		return pricingPlansData.map((plan, index) => <PlanCard plan={plan} key={index} />)
	}

	const renderFAQs = (): JSX.Element[] => {
		return FAQList.map((faq, index) => <FAQCard key={index} faq={faq} />)
	}

	return (
		<main id='Pricing'>
			<Head>
				<title>Pricing</title>
				<meta name='description' content="Find the perfect plan for your business with Mosafe's flexible pricing options. Choose the features you need and get started today."></meta>
				<meta name='keywords' content='Mosafe pricing, Digital safety management system cost, Purchase safety management system, Mosafe cost' />
			</Head>
			<section id='Plans' className='mosafe-section mb-12'>
				<h1 className='text-[38px] font-black text-center mb-4'>
					Our <span className='text-purple-base'>pricing</span> plans
				</h1>
				<p className='text-center mb-4 sm:mb-12'>They know those things. John Kerry knows this. Today, America has a dual responsibility.</p>

				<section className='md:flex gap-12'>{renderPricingPlanCards()}</section>

				<Link href='#Plan Features'>
					<p className='underline text-link-base text-center cursor-pointer mb-12'>Compare features below</p>
				</Link>

				<section className='border border-purple-base rounded-2xl p-4 py-12 bg-purple-light bg-pricing-frame-bg bg-right bg-no-repeat'>
					<h3 className='text-purple-dark text-[32px] font-black leading-10 mb-12'>Don&apos;t see a plan that suits you?</h3>

					<Button text='Talk to our team' icon={<ArrowIcon className='rotate-180' />} onClick={() => null} className='py-3' />
				</section>
			</section>

			<section id='Plan Features' className='mosafe-section mb-12'>
				<h1 className='text-[32px] font-black mb-4 md:mb-12 leading-10 md:text-center'>Compare plan features</h1>

				<PricingPlanFeatures />
			</section>

			<section id='FAQs' className='mosafe-section mb-12'>
				<p className='text-[32px] font-black mb-4 md:mb-12 leading-10 md:text-center'>Frequently asked questions</p>
				<p className='text-[20px] leading-8 mb-12 text-center'>See what other people are asking about pricing and accounts.</p>

				{renderFAQs()}
				<p className='my-8 mx-auto text-link-base cursor-pointer w-fit font-bold'>Show More</p>
			</section>

			<CTA />
		</main>
	)
}

export default Pricing
