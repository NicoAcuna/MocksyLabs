import Head from 'next/head'
import React from 'react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import Button from '../../components/core/button'
import CTA from '../../components/cta'
import IndustriesList from '../../components/lists/industries-list'
import { industriesData } from '../../constants/data/industries'

function Industries() {
	return (
		<main className=''>
			<Head>
				<title>Industries</title>
				<meta name='description' content='Mosafe offers industry-specific safety solutions for transport, mining, agriculture, and warehousing to help reduce risks and ensure compliance. Keep your employees safe and your operations running smoothly.'></meta>
				<meta name='keywords' content='Workplace safety, Compliance software, Hazard management, Safety regulations, Business operations' />
			</Head>
			<section className='flex flex-col items-center mosafe-section'>
				<h1 className='font-extrabold text-[38px] lg:text-[44px] text-center mb-8'>
					See all our <span className='text-purple-base'>industries</span> below
				</h1>
				<Button text='Show me transport' className='btn-variant-white mb-10' icon={<ArrowIcon alignment='right' />} onClick={() => null} />
				<IndustriesList industries={industriesData} />
			</section>
			<CTA />
		</main>
	)
}

export default Industries
