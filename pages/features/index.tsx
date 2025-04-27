import Head from 'next/head'
import React from 'react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import Button from '../../components/core/button'
import CTA from '../../components/cta'
import FeaturesList from '../../components/lists/features-list'
import { featuresData } from '../../constants/data/features'
import { useRouter } from 'next/router'

function Features() {

	const router = useRouter();

	return (
		<main className={'mosafe-section'}>
			<Head>
				<title>Features</title>
				<meta name='description' content="Discover how Mosafe's powerful safety and compliance features can help protect your business and workforce. Stay compliant and keep your workplace safe with ease."></meta>
				<meta name='keywords' content='Safety compliance, Risk management, Training management, Incident reporting, Analytics and insights, Driver safety, WHS regulations, Mobile app integration' />
			</Head>
			<p className='text-center font-black text-[38px] mb-8'>
				See all our product <span className='text-purple-base'>features</span> below
			</p>

			<Button
				text='Explore the Mosafe platform'
				onClick={() => router.push('/product-overview')}
				icon={<ArrowIcon alignment='right' />}
				className={`btn-variant-white w-full sm:w-fit mx-auto justify-center mb-12`}
			/>

			<FeaturesList features={featuresData} />

			<CTA />
		</main>
	)
}

export default Features
