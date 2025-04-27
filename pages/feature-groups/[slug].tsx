import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import Check from '../../assets/icons/Check'
import FeatureGroupBenefitCard from '../../components/cards/feature-group-benefit-card'
import FeatureGroupFeatureCard from '../../components/cards/feature-group-feature-card'
import Button from '../../components/core/button'
import Tabs from '../../components/core/tabs'
import CTA from '../../components/cta'
import Testimonials from '../../components/testimonials'
import { featureGroupsData } from '../../constants/data/feature-groups'
import { testimonialsData } from '../../constants/data/testimonials'
import { FeatureGroup } from '../../constants/types'

function FeatureGroups() {
	const router = useRouter()
	const { slug } = router.query

	const [featureGroup, setFeatureGroup] = useState<FeatureGroup>(featureGroupsData[0])

	const renderAttributes = (): JSX.Element[] => {
		return featureGroup.attributes.map((attr, index) => {
			return (
				<section className='flex gap-2 mb-3' key={index}>
					<Check color='#A857FC' />
					<p>{attr}</p>
				</section>
			)
		})
	}

	const renderFeatureCards = (): JSX.Element[] => {
		return featureGroup.features.map((feature, index) => {
			return <FeatureGroupFeatureCard feature={feature} index={index} key={index} />
		})
	}

	const renderBenefitCards = (): JSX.Element[] => {
		return featureGroup.benefits.map((benefit, index) => {
			return <FeatureGroupBenefitCard benefit={benefit} key={index} />
		})
	}

	const getNextFeatureGroup = (): FeatureGroup | undefined => {
		if (!featureGroup) return
		const currentIndex = featureGroupsData.indexOf(featureGroup)

		if (currentIndex === featureGroupsData.length - 1) return featureGroupsData[0]
		return featureGroupsData[currentIndex + 1]
	}

	useEffect(() => {
		if (slug === undefined) return
		const featureGroup = featureGroupsData.find((fg) => fg.slug === '/feature-groups/' + slug)

		if (featureGroup) {
			setFeatureGroup(featureGroup)
		}
	}, [slug])

	return (
		<main id='Feature Groups'>
			<Head>
				<title>{featureGroup.name}</title>
				<meta name='description' content='Discover the features that make Mosafe the ultimate safety and compliance software solution. From risk management to incident reporting, Mosafe has everything you need to keep your workforce safe and your business compliant.'></meta>
				<meta name='keywords' content='Safety software, Compliance management, Risk assessment, Incident reporting, Safety training, Safety analytics, Safety trends, Workforce management, Safety culture' />
			</Head>
			<section id='Overview' className=''>
				<section className='sm:grid sm:grid-cols-2 sm:mb-12 mosafe-section'>
					<div className='sm:mt-[50px]'>
						<h1 className='font-bold text-purple-base text-[18px] sm: mb-2'>{featureGroup.name}</h1>
						<h2 className='font-black text-[32px] leading-10 mb-8'>{featureGroup.title} </h2>

						<Button text='Get started now' icon={<ArrowIcon alignment='right' />} onClick={() => window.location.href ='https://app.mosafe.com.au'} className='btn-variant-white mb-8' />
						<div className='sm:flex sm:flex-wrap sm:gap-4'>{renderAttributes()}</div>
					</div>

					<img src={featureGroup.image.src} className='p-2 mb-12 sm:mb-0' alt={featureGroup.name} />
				</section>

				<section className='hidden mb-[150px] sm:flex mosafe-section py-0'>
					<Tabs
						tabs={featureGroupsData.map((feature) => feature.name)}
						activeTab={featureGroup.name}
						setTab={(tab) => router.push(featureGroupsData[tab.index].slug)}
					/>
				</section>

				<section className='mosafe-section pt-0'>
					<section className='bg-purple-light rounded-md p-4 h-[500px] mb-12'>{/* video player */}</section>

					<section className='lg:flex lg:justify-between mb-12'>
						<div className='grid grid-cols-1 mb-6 lg:w-60% lg:gap-x-[150px]'>
							<p className='font-black text-[38px]'>{featureGroup.statLine}</p>
							<p className='text-[20px]'>{featureGroup.statDescription}</p>
						</div>

						<p className='lg:w-[25%]'>{featureGroup.description}</p>
					</section>
				</section>
			</section>

			<section id='Features' className='mb-12 mosafe-section'>
				<h2 className='font-black text-[32px] leading-9 mb-8 sm:w-1/2 sm:mx-auto sm:text-center'>Explore the features at your fingertips</h2>
				<div className='sm:grid sm:grid-cols-2 sm:w-max sm:gap-x-[80px] sm:mx-auto'>{renderFeatureCards()}</div>
			</section>

			<section id='Benefits' className='mb-12 sm:bg-purple-light'>
				<section className='mosafe-section'>
					<h2 className='font-black text-[32px] leading-9 mb-8 text-center'>How does Mosafe empower your safety management?</h2>
					<div className='sm:flex sm:flex-wrap sm:justify-between '>{renderBenefitCards()}</div>
				</section>
			</section>

			<section className='bg-purple-light p-5 flex justify-between items-center mb-12 sm:hidden'>
				<div>
					<p className='font-bold'>Next feature group</p>
					<p>{getNextFeatureGroup()!.name}</p>
				</div>

				<Link href={getNextFeatureGroup()!.slug}>
					<div className='border-2 border-black p-3 rounded-[50%] w-min ml-auto hover:scale-105 cursor-pointer transition-all duration-300 h-min'>
						<ArrowIcon alignment='right' onClick={() => getNextFeatureGroup()} />
					</div>
				</Link>
			</section>

			<Testimonials testimonials={testimonialsData} />

			<CTA />
		</main>
	)
}

export default FeatureGroups
