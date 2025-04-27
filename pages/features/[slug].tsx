import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import TickIcon from '../../assets/icons/TickIcon'
import SectionCard from '../../components/cards/section-card'
import Button from '../../components/core/button'
import CTA from '../../components/cta'
import AttributesList from '../../components/lists/attributes-list'
import UseCases from '../../components/lists/use-cases-list'
import Testimonials from '../../components/testimonials'
import { featuresData } from '../../constants/data/features'
import { testimonialsData } from '../../constants/data/testimonials'
import { Feature } from '../../constants/types'

function Feature() {
	const [feature, setFeature] = useState<Feature>()
	const router = useRouter()
	const { slug } = router.query

	useEffect(() => {
		if (slug === undefined) return
		const feature = featuresData.find((feature) => feature.slug === '/features/' + slug)

		if (feature && !feature.isComingSoon) {
			setFeature(feature)
		} else {
			router.push('/features')
		}
	}, [slug])

	function renderFeatureSections() {
		return feature?.sections.map((section, index) => (
			<SectionCard imageAlignment={index % 2 === 0 ? 'left' : 'right'} section={section} key={index} />
		))
	}

	function renderFeatureSections2() {
		return feature?.sections2.map((section, index) => (
			<SectionCard imageAlignment={index % 2 === 0 ? 'left' : 'right'} section={section} key={index} />
		))
	}

	if (!feature) return <div>loading</div>

	return (
		<main id={feature.title} className=''>
			<Head>
				<title>{feature.name}</title>
				<meta name='description' content="Effortlessly manage workplace safety and compliance with Mosafe's range of powerful features. Sign up now and keep your workforce safe and secure."></meta>
				<meta name='keywords' content='Safety compliance, Incident management, Risk assessment, Employee training, Real-time tracking, Analytics and insights, Mobile compatibility, Customizable forms, Document management' />
			</Head>
			<section className='lg:grid lg:grid-cols-[2fr_1fr] mosafe-section'>
				<div className='lg:w-[60%]'>
					<h1 className='font-bold text-purple-base text-[18px] sm: mb-2'>{feature.name}</h1>
					<h1 className='font-extrabold text-[44px] mb-6'>{feature.title}</h1>
					<Button text='Start your free trial' className='btn-variant-white mb-8' icon={<ArrowIcon alignment='right' />} onClick={() => window.location.href = 'https://app.mosafe.com.au/'} />
					<AttributesList attributes={feature.attributes} />
				</div>
				<img className='' src={feature.image.src} alt={feature.title + ' main image'} />
			</section>

			<section className='mosafe-section'>{renderFeatureSections()}</section>

			<h2 className='font-extrabold text-[38px] text-center mosafe-section py-0'>
				Explore how this feature can help your business with these <span className='text-purple-base'>use cases</span>
			</h2>
			<UseCases useCases={feature.useCases} />


			<Testimonials testimonials={testimonialsData} />

			<CTA />
		</main>
	)
}

export default Feature
