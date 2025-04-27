import Head from 'next/head'
import React from 'react'
import CTA from '../../components/cta'
import UseCasesList from '../../components/lists/use-cases-list'
import { useCaseData } from '../../constants/data/use-cases'

function AllUseCases() {
	return (
		<main>
			<Head>
				<title>Use Cases</title>
				<meta name='description' content='At Mosafe, we believe that everyone has a role to play in keeping the workplace safe. Our safety software is designed to engage and protect all members of your team, as our software provides the tools and resources necessary for all roles to take ownership of safety in the workplace.'></meta>
				<meta name='keywords' content='Protect my employees, chain of responsibility system, safety reporting, digital training for employees' />
			</Head>

			<section className='mosafe-section flex flex-col items-center'>
				<h1 className='text-[38px] lg:text-[44px] font-extrabold mb-8 text-center'>
					See all our <span className='text-purple-base'>use cases</span> below
				</h1>
				<UseCasesList useCases={useCaseData} />
			</section>

			<CTA />
		</main>
	)
}

export default AllUseCases
