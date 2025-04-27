import Head from 'next/head'
import React from 'react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import Button from '../../components/core/button'
import CTA from '../../components/cta'
import DownloadNow from '../../components/download-now/download-now'
import ProductBenefitsList from '../../components/lists/product-benefits-list'
import ProductOverviewFeatures from '../../components/product-overview-features'
import Testimonials from '../../components/testimonials'
import { featureGroupsData } from '../../constants/data/feature-groups'
import { ProductBenefitsData } from '../../constants/data/product-benefits'
import { testimonialsData } from '../../constants/data/testimonials'

function ProductOverview() {
	return (
		<main id='Product Overview'>
			<Head>
				<title>Product Overview</title>
				<meta name='description' content='Looking for a safety management solution that can work for your entire organisation? Learn more about our platform on our product overview page.'></meta>
				<meta name='keywords' content='Safety software, Incident reporting, Chain of responsibility solution, digital safety management' />
			</Head>
			<section id='Overview' className='mosafe-section'>
				<div className='sm:px-[8%]'>
					<h2 className='font-black text-center text-[38px] leading-10 mb-[-2rem] lg:w-[40%] lg:mx-auto'>
					Streamline safety management for your team
					</h2>
					<div className='bg-purple-light rounded-md p-4 h-[500px] mb-8'>{/* video player */}</div>
				</div>

				<section className='lg:flex lg:justify-between'>
					<div className='grid grid-cols-2 mb-6 lg:w-60% lg:gap-x-[150px]'>
						<p className='font-black text-[38px]'>100%</p>
						<p className='font-black text-[38px]'>20+</p>
						<p className='text-[20px]'>Cloud-based</p>
						<p className='text-[20px]'>Safety features</p>
					</div>

					<p className='lg:w-[25%]'>Empowering safety, enabling responsibility - Mosafe keeps you covered.</p>
				</section>
			</section>

			<DownloadNow />

			<ProductBenefitsList productBenefits={ProductBenefitsData} />

			<section id='Product Tour' className='bg-purple-light'>
				<section className='mosafe-section flex flex-col items-center'>
					<h2 className='font-black text-center text-[38px] mb-6 sm:w-1/2'>Explore our safety management platform with a guided tour</h2>

					<Button text='Start tour' icon={<ArrowIcon alignment='bottom' />} onClick={() => null} className='mb-12' />

					<div className='bg-white rounded-md p-4 h-[500px] w-[80%] mb-8'>{/* video player */}</div>
				</section>
			</section>

			<ProductOverviewFeatures featureGroups={featureGroupsData} />

			<Testimonials testimonials={testimonialsData} />

			<CTA />
		</main>
	)
}

export default ProductOverview
