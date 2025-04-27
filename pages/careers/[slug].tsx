import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import ChevronIcon from '../../assets/icons/ChevronIcon'
import Facebook from '../../assets/icons/Facebook'
import Instagram from '../../assets/icons/Instagram'
import LinkedIn from '../../assets/icons/LinkedIn'
import Twitter from '../../assets/icons/Twitter'
import Button from '../../components/core/button'
import CTA from '../../components/cta'
import JobListingList from '../../components/lists/job-listing-list'
import { jobListingsData } from '../../constants/data/job-listings'
import { JobListing } from '../../constants/types'

function Career() {
	const [jobListing, setJobListing] = useState<JobListing>()
	const router = useRouter()
	const { slug } = router.query

	useEffect(() => {
		if (slug === undefined) return
		const jobListing = jobListingsData.find((jobListing) => jobListing.slug === 'careers/' + slug)
		if (jobListing) {
			setJobListing(jobListing)
		} else {
			router.push('/careers')
		}
	}, [slug])

	function renderSections() {
		return jobListing?.sections.map((section, index) => (
			<section key={index} className=' mb-6'>
				<h3 className='font-bold text-[24px] mb-4'>{section.title}</h3>
				{section.content}
			</section>
		))
	}

	if (!jobListing) return <section>loading...</section>

	return (
		<main className='mt-10'>
			<Head>
				<title>{jobListing.name}</title>
				<meta name='description' content='Take the next step in your career and join the team at Mosafe. We offer a dynamic and inclusive work environment focused on creating a safer world for everyone involved.'></meta>
				<meta name='keywords' content='Mosafe jobs, Careers, Brisbane Product jobs' />
			</Head>
			<section className='flex flex-col justify-center mosafe-section'>
				<section className='flex items-center mb-4 cursor-pointer'>
					<section
						onClick={() => router.push('/careers')}
						className='bg-purple-light p-[0.75rem] rounded-md flex justify-center items-center mr-4'>
						<ChevronIcon />
					</section>
					<span className='text-[18px] font-bold'>Back to jobs</span>
				</section>
				<section className='flex sm:flex-row flex-col items-center justify-between mb-10'>
					<h1 className='font-extrabold text-[38px] leading-10 mb-6 sm:mb-0'>{jobListing.name}</h1>
					<p>{jobListing.title}</p>
				</section>
			</section>

			<section className='mosafe-section'>
				<img className='rounded-2xl mb-10 object-cover h-[350px] sm:h-auto' src={jobListing.image.src} />
			</section>

			<section className='sm:grid sm:grid-cols-4 mosafe-section'>
				<section className=' mb-4'>
					<p className='font-bold mb-2'>Share on:</p>
					<section className='grid grid-flow-col auto-cols-min'>
						<LinkedIn />
						<Instagram />
						<Facebook />
						<Twitter />
					</section>
				</section>

				<section className='col-span-3'>
					<h3 className='mb-6 text-[30px]'>
						We&apos;re hiring a <span className='font-bold'>{jobListing.name}</span>
					</h3>
					<p className='mb-8'>{jobListing.text}</p>
					{renderSections()}
					<section className='flex flex-col sm:flex-row sm:items-center justify-between mb-8 border-t-[2px] pt-8 border-purple-light '>
						<h3 className='text-[30px] font-bold mb-4 sm:mb-0'>Open positions at Mosafe</h3>
						<Button
							onClick={() => router.push('careers')}
							text='View all opportunities'
							icon={<ArrowIcon alignment='right' />}
							className='btn-variant-white'
						/>
					</section>
					<JobListingList jobListings={jobListingsData.slice(3)} />
				</section>
			</section>

			<CTA variant='Ship' />
		</main>
	)
}

export default Career
