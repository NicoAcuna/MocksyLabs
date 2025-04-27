import Head from 'next/head'
import React from 'react'
import CustomerStoriesImage from '../../assets/images/customer-stories-1.png'
import CustomerStoryLargeCard from '../../components/cards/customer-story-large-card'
import CTA from '../../components/cta'
import CustomerStoriesList from '../../components/lists/customer-stories-list'
import { customerStoriesData } from '../../constants/data/customer-stories'

function CustomerStories() {
	function renderCards() {
		return customerStoriesData
			.slice(0, 2)
			.map((customerStory, index) => (
				<CustomerStoryLargeCard customerStory={customerStory} key={customerStory.slug} imageAlignment={index / 2 === 0 ? 'right' : 'left'} />
			))
	}

	return (
		<main className='mt-10'>
			<Head>
				<title>Customer Stories</title>
				<meta name='description' content="Discover how Mosafe's safety and compliance software has helped businesses reduce incidents and improve compliance. Read our customer success stories and start protecting your workforce today."></meta>
				<meta name='keywords' content='Safety and compliance, Safety Management System, Mosafe for teams, Mosafe for small business' />
			</Head>
			<section className='mosafe-section'>
				<p className=' text-purple-base text-[18px] font-bold mb-4'>Customer Success Stories</p>
				<div className='flex flex-col md:flex-row justify-between'>
					<h1 className='text-[38px] font-extrabold leading-10 mb-8'>Customer success is our success</h1>
					<p className='mb-6'>Discover how businesses like yours have integrated Mosafe into their daily workflow to manage their safety</p>
				</div>
				<img className='rounded-2xl w-full object-right object-cover h-[400px] mb-14' src={CustomerStoriesImage.src} />
			</section>
			<section className='mb-16 mosafe-section'>{renderCards()}</section>

			<CustomerStoriesList customerStories={customerStoriesData} />

			<CTA />
		</main>
	)
}

export default CustomerStories
