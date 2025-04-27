import React, { useEffect, useState } from 'react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import Check from '../../assets/icons/Check'
import FeatureGroupBenefitCard from '../../components/cards/feature-group-benefit-card'
import FeatureGroupFeatureCard from '../../components/cards/feature-group-feature-card'
import Button from '../../components/core/button'
import Tabs from '../../components/core/tabs'
import Testimonials from '../../components/testimonials'
import { testimonialsData } from '../../constants/data/testimonials'
import { businessTypesData } from '../../constants/data/business-types'
import SectionCard from '../../components/cards/section-card'
import Dollar from '../../assets/icons/Dollar'
import FeaturesList from '../../components/lists/features-list'
import { featuresData } from '../../constants/data/features'
import { pricingPlansData } from '../../constants/data/pricing-plans'
import PricingPlansList from '../../components/lists/pricing-plans-list'
import PricingPlanCard from '../../components/cards/pricing-plan-card'
import Slider from '../../components/core/slider'
import { useRouter } from 'next/router'
import Head from 'next/head'
import CTA from '../../components/cta'

function BusinessType() {
	const router = useRouter()

	const [currentBTIndex, setCurrentBTIndex] = useState<number>(0)
	const [numUsers, setNumUsers] = useState(1)

	const businessType = businessTypesData[currentBTIndex]

	const renderAttributes = (): JSX.Element[] => {
		return businessType.attributes.map((attr, index) => {
			return (
				<section className='flex gap-2 mb-3' key={index}>
					<Check color='#A857FC' />
					<p>{attr}</p>
				</section>
			)
		})
	}

	const renderFeatureCards = (): JSX.Element[] => {
		return businessType.useCases.map((useCase, index) => {
			return <FeatureGroupFeatureCard feature={useCase} index={index} key={index} />
		})
	}

	const renderBenefitCards = (): JSX.Element[] => {
		return businessType.benefits.map((benefit, index) => {
			return <FeatureGroupBenefitCard benefit={benefit} key={index} />
		})
	}

	const showNextFeatureGroup = () => {
		if (currentBTIndex === businessTypesData.length - 1) setCurrentBTIndex(0)
		else setCurrentBTIndex(currentBTIndex + 1)
	}

	const getNextFeatureGroupName = () => {
		if (currentBTIndex === businessTypesData.length - 1) return businessTypesData[0].name
		else return businessTypesData[currentBTIndex + 1].name
	}

	const getSliderPlanPricing = () => {
		if (numUsers < 2) return pricingPlansData[0]
		else if (numUsers < 24) return pricingPlansData[1]
		else return pricingPlansData[2]
	}

	useEffect(() => {
		if (router.query.teamSize && !(router.query.teamSize instanceof Array)) setCurrentBTIndex(parseInt(router.query.teamSize))
	}, [router.query])

	return (
		<main id='Business Type'>
			<Head>
				<title>{businessType.name}</title>
				<meta name='description' content="Discover the advantages of Mosafe's safety and compliance software for businesses of every size with our detailed business types page. Learn how we can help your organization stay safe and compliant."></meta>
				<meta name='keywords' content='Safety and compliance, Workplace health and safety, Mosafe for teams' />
			</Head>

			<section id='Overview' className='mosafe-section'>
				<section className='sm:grid sm:grid-cols-2 sm:mb-12'>
					<div className='sm:mt-[50px]'>
						<h1 className='font-bold text-purple-base text-[18px] sm: mb-2'>{businessType.name} Teams</h1>
						<h2 className='font-black text-[32px] leading-10 mb-8'>{businessType.title} </h2>

						<Button text='Sign up free' icon={<ArrowIcon alignment='right' />} onClick={() => null} className='btn-variant-white mb-8' />
						<div className='sm:flex sm:flex-wrap sm:gap-4'>{renderAttributes()}</div>
					</div>

					<img src={businessType.image.src} className='p-2 mb-12 sm:mb-0' alt={businessType.name} />
				</section>

				<section className='hidden sm:flex'>
					<Tabs
						tabs={businessTypesData.map((feature) => feature.name)}
						activeTab={businessType.name}
						setTab={(tab) => setCurrentBTIndex(tab.index)}
					/>
				</section>
			</section>

			<section id='Use Cases' className='mb-12 mosafe-section'>
				<h2 className='font-black text-[32px] leading-9 mb-4 sm:w-1/2 sm:mx-auto text-center'>{businessType.featureTitle}</h2>
				<p className='mb-8 sm:w-1/2 sm:mx-auto text-center'>
					{businessType.featureDescription}
				</p>
				<div className='sm:grid sm:grid-cols-2 sm:w-max sm:gap-x-[80px] sm:mx-auto'>{renderFeatureCards()}</div>
			</section>

			<Testimonials testimonials={testimonialsData} className='bg-purple-light mb-6' />

			<section className='mosafe-section'>
				<SectionCard imageAlignment='left' section={businessType.section} />
			</section>

			<section id='Benefits' className='my-12 mosafe-section'>
				<h2 className='font-black text-[32px] leading-9 mb-8 text-center'>Streamline workflows and eliminate knowledge gaps</h2>
				<div className='sm:flex sm:flex-wrap sm:justify-between'>{renderBenefitCards()}</div>

				<div className='sm:flex sm:flex-wrap sm:gap-4 sm:justify-center sm:mb-12 hidden'>{renderAttributes()}</div>

				<Button text='Sign up free' icon={<ArrowIcon alignment='right' />} onClick={() => null} className='btn-variant-black mx-auto' />
			</section>

			<section id='Pricing' className='mb-12 bg-purple-light'>
				<section className='mosafe-section'>
					<section className='sm:flex justify-between'>
						<section>
							<section className='flex gap-6 items-center mb-6'>
								<section className='bg-white p-2 h-min rounded-lg'>
									<Dollar />
								</section>
								<h2 className='font-black text-[32px] leading-9 text-center'>Pricing Plans</h2>
							</section>
							<p className='mb-8'>Click and drag the slider below to explore the best plan that will suit your business</p>
						</section>

						<section className='hidden sm:block'>
							<PricingPlanCard plan={getSliderPlanPricing()} />
						</section>
					</section>

					<section className='hidden sm:block'>
						<Slider defaultValue={1} min={1} max={40} step={1} value={numUsers} onChange={setNumUsers} color={'#A857FC'} />
					</section>

					<section className='sm:hidden'>
						<PricingPlansList pricingPlans={pricingPlansData} />
					</section>
				</section>
			</section>

			<section id='Features' className='mosafe-section'>
				<h2 className='font-black text-[32px] leading-9 mb-8 text-center'>Features that help you manage your employees organisation-wide</h2>
				<FeaturesList features={businessType.features} hideTitle />
			</section>

			<section className='bg-purple-light p-5 flex justify-between items-center mb-12 sm:hidden'>
				<div>
					<p className='font-bold'>Next team type</p>
					<p>{getNextFeatureGroupName()}</p>
				</div>

				<div
					className='border-2 border-black p-3 rounded-[50%] w-min ml-auto hover:scale-105 cursor-pointer transition-all duration-300 h-min'
					onClick={() => showNextFeatureGroup()}>
					<ArrowIcon alignment='right' />
				</div>
			</section>

			<CTA />
		</main>
	)
}

export default BusinessType
