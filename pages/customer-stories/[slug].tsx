import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import Facebook from '../../assets/icons/Facebook'
import Instagram from '../../assets/icons/Instagram'
import LinkedIn from '../../assets/icons/LinkedIn'
import Star from '../../assets/icons/Star'
import Twitter from '../../assets/icons/Twitter'
import AustraliaPostLogo from '../../assets/images/australia-post-logo.png'
import Button from '../../components/core/button'
import CTA from '../../components/cta'
import CustomerStoriesList from '../../components/lists/customer-stories-list'
import { customerStoriesData } from '../../constants/data/customer-stories'
import { CustomerStory } from '../../constants/types'

function CustomerStory() {
	const [customerStory, setCustomerStory] = useState<CustomerStory>()
	const router = useRouter()
	const { slug } = router.query

	useEffect(() => {
		if (slug === undefined) return
		const customerStory = customerStoriesData.find((customerStory) => customerStory.slug === '/customer-stories/' + slug)
		if (customerStory) {
			setCustomerStory(customerStory)
		} else {
			router.push('/customer-stories')
		}
	}, [slug])

	function renderKeyFeatures() {
		if (!customerStory) return
		return customerStory.companyDetails.featuresUsed.map((featureLink, index) => (
			<Link href={featureLink.slug} key={index}>
				<p className='underline cursor-pointer'>{featureLink.text}</p>
			</Link>
		))
	}

	function renderSections() {
		return customerStory?.sections.map((section, index) => (
			<section key={index} className=' mb-6'>
				<h3 className='font-bold text-[24px] mb-4'>{section.title}</h3>
				{section.content}
			</section>
		))
	}

	const renderStars = () => {
		return Array(5)
			.fill(0)
			.map((s, index) => <Star key={index} />)
	}

	if (!customerStory) return <section>loading..</section>
	return (
		<main id={customerStory.name} className=''>
			<Head>
				<title>{customerStory.pageTitle}</title>
				<meta name='description' content='Discover how Mosafe has helped numerous companies achieve better safety measures and workplace practices with our safety and compliance software. Read their success story now and see how Mosafe can benefit your business.'></meta>
				<meta name='keywords' content='Safety and compliance, Mosafe safety software' />
			</Head>
			<section className='grid md:grid-cols-2 mb-10 mosafe-section'>
				<section>
					<p className='text-purple-base mb-4'>Customer Story</p>
					<h1 className='text-[38px] font-extrabold leading-10 mb-6'>{customerStory.name}</h1>
				</section>
				<img className='rounded-xl h-[450px] md:h-[350px] object-cover object-left' src={customerStory.image.src} />
			</section>

			<section className='mosafe-section sm:flex sm:justify-between'>
				<div className='bg-white rounded-md p-3 flex items-center gap-4 shadow-2xl mb-12'>
					<div className='bg-white rounded-md p-4'>
						<img className='h-8 min-w-[32px]' src={AustraliaPostLogo.src} alt='Company Logo' />
					</div>
					<div className='grow'>
						<div className='font-bold flex justify-between w-full md:gap-20 gap-12'>
							<p>Brian Cooper</p>
							<div className='gap-1 ml-auto flex'>{renderStars()}</div>
						</div>
						<p className='text-grey-base'>
							<span className='font-bold'>Driver</span>, Australia Post
						</p>
					</div>
				</div>
				<section className='mb-8'>
					<p className='text-purple-base font-black text-[44px] text-center'>10x</p>
					<p className='text-center'>efficiency in packaging and delivery times</p>
				</section>
			</section>

			<section className='bg-purple-light py-10 grid gap-y-10 md:grid-cols-3 rounded-2xl mosafe-section gap-x-4 mb-10 p-8'>
				<section>
					<p className='mb-10 w-2/3'>{customerStory.companyDetails.text}</p>
					<Button
						text='Visit website'
						icon={<ArrowIcon alignment='top-right' />}
						onClick={() => null}
						className='btn-variant-white bg-purple-light'
					/>
				</section>
				<section>
					<p className='text-[18px] font-bold mb-1'>Located</p>
					<p className='mb-6'>{customerStory.companyDetails.location}</p>
					<p className='text-[18px] font-bold mb-1'>Industry</p>
					<p>{customerStory.companyDetails.industry}</p>
				</section>
				<section>
					<p className='text-[18px] font-bold mb-1'>Key Features Used</p>
					{renderKeyFeatures()}
				</section>
			</section>

			<section className='grid md:grid-cols-5 mosafe-section'>
				<section className=' mb-4'>
					<p className='font-bold mb-2'>Share on:</p>
					<section className='grid md:grid-cols-[80px_80px] grid-cols-[repeat(4,50px)]'>
						<LinkedIn />
						<Instagram />
						<Facebook />
						<Twitter />
					</section>
				</section>

				<section className='col-span-3'>
					{renderSections()}
					<section className='flex flex-col md:flex-col border-t-[2px] pt-6 border-t-purple-light'>
						<section className='flex justify-between md:items-center mb-8 md:flex-row flex-col'>
							<h3 className='md:text-[30px] text-[24px] mb-4 md:mb-0 font-bold'>Fancy another story?</h3>
							<Button
								onClick={() => router.push('/customer-stories')}
								text='View all customer stories'
								className='btn-variant-white'
								icon={<ArrowIcon alignment='right' />}
							/>
						</section>
						<CustomerStoriesList customerStories={customerStoriesData} />
					</section>
				</section>
			</section>

			<CTA />
		</main>
	)
}

export default CustomerStory
