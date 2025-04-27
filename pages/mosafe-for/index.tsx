import Head from 'next/head'
import React from 'react'
import CTA from '../../components/cta'
import MosafeForsList from '../../components/lists/mosafe-fors-list'
import { mosafeForData } from '../../constants/data/mosafe-fors'

function AllMosafeFors() {
	return (
		<main>
			<Head>
				<title>Mosafe For</title>
				<meta name='description' content="With Mosafe's safety software, drivers, managers, and owners can all ensure compliance and workplace safety. Our platform is designed to protect your business and your team, no matter your role."></meta>
				<meta name='keywords' content='Safety compliance, Chain of Responsibility solution, Driver management, Owner accountability, All-in-one safety solution' />
			</Head>
			<section className='flex flex-col items-center mosafe-section'>
				<h1 className='text-[38px] lg:text-[44px] font-extrabold mb-8 text-center'>
					See who <span className='text-purple-base'>Mosafe is for</span> below
				</h1>
				<MosafeForsList mosafeFors={mosafeForData} />
			</section>

			<CTA />
		</main>
	)
}

export default AllMosafeFors
