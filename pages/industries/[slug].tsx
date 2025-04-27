import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import TickIcon from '../../assets/icons/TickIcon'
import SectionCard from '../../components/cards/section-card'
import Button from '../../components/core/button'
import Testimonials from '../../components/testimonials'
import TrustedCompanies from '../../components/trusted-companies'
import { industriesData } from '../../constants/data/industries'
import { testimonialsData } from '../../constants/data/testimonials'
import { Industry } from '../../constants/types'
import VideoImage from '../../assets/images/video-image.png'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import TeamSizes from '../../components/team-sizes'
import { teamSizeData } from '../../constants/data/team-sizes'
import AttributesList from '../../components/lists/attributes-list'
import Head from 'next/head'
import CTA from '../../components/cta'

function Industry() {
	const [industry, setIndustry] = useState<Industry>()
	const router = useRouter()

	const { slug } = router.query

	useEffect(() => {
		if (slug === undefined) return
		const industry = industriesData.find((industry) => industry.slug === '/industries/' + slug)

		if (industry) {
			setIndustry(industry)
		} else {
			router.push('/industries')
		}
	}, [slug])

	function renderIndustrySections() {
		return industry?.sections.map((section, index) => (
			<SectionCard imageAlignment={index % 2 === 0 ? 'left' : 'right'} section={section} key={index} />
		))
	}

	if (!industry) return <section>Loading..</section>

	return (
		<main id={industry.name}>
			<Head>
				<title>{industry.name}</title>
				<meta name='description' content="Explore how Mosafe's safety and compliance software can help your businesses stay compliant and keep your workforce safe. Learn more today about Mosafe's customisable plaform."></meta>
				<meta name='keywords' content='Safety software, Industry safety management solution, Manage my business, health and safety management system' />
			</Head>
			<section className='flex flex-col sm:flex-row-reverse sm:justify-evenly mosafe-section my-10'>
				<section className='sm:px-4'>
					<h1 className='font-semibold text-[18px] text-purple-base mb-2'>{industry.name}</h1>
					<h3 className='font-extrabold text-[38px] mb-6'>{industry.title}</h3>
					<Button icon={<ArrowIcon alignment='right' />} className='btn-variant-white mb-10' text='Sign up free' onClick={() => null} />
					<AttributesList attributes={industry.attributes} />
				</section>
				<img className='sm:w-1/2 sm:px-4' src={industry.image.src} />
			</section>
			<section className='flex flex-col items-center mosafe-section'>
				<h3 className='text-[32px] font-extrabold text-center sm:w-1/2 mb-4'>
				The easiest way to manage people and safety compliance in the <span className='text-purple-base'>{industry.name}</span> industry.
				</h3>
				<p className='mb-10 text-center'>{industry.videoText}</p>
				<Button text='Watch the demo' className='mb-10' onClick={() => null} />
				<img src={VideoImage.src} className='mb-10 sm:w-2/3' />
			</section>
			<TrustedCompanies />
			<section className='mosafe-section'>{renderIndustrySections()}</section>

			<TeamSizes teamSizes={teamSizeData} />

			<Testimonials testimonials={testimonialsData} />

			<CTA />
		</main>
	)
}

export default Industry
