import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import Button from '../../components/core/button'
import AttributesList from '../../components/lists/attributes-list'
import { useCaseData } from '../../constants/data/use-cases'
import { UseCase } from '../../constants/types'
import SectionCard from '../../components/cards/section-card'
import JourneyList from '../../components/lists/journey-list'
import AdvantageCard from '../../components/cards/advantage-card'
import Testimonials from '../../components/testimonials'
import { testimonialsData } from '../../constants/data/testimonials'
import Tabs from '../../components/core/tabs'
import Head from 'next/head'
import CTA from '../../components/cta'
import AdvantagesList from '../../components/lists/advantages-list'

function UseCase() {
	const [useCase, setUseCase] = useState<UseCase>()
	const router = useRouter()
	const { slug } = router.query

	useEffect(() => {
		if (slug === undefined) return
		const useCase = useCaseData.find((useCase) => useCase.slug === '/use-cases/' + slug)

		if (useCase) {
			setUseCase(useCase)
		} else {
			router.push('/use-cases')
		}
	}, [slug])

	function renderUseCaseSections() {
		return useCase?.sections.map((section, index) => (
			<SectionCard imageAlignment={index % 2 === 0 ? 'left' : 'right'} section={section} key={index} />
		))
	}

	const getNextUseCase = (): UseCase | undefined => {
		if (!useCase) return
		const currentIndex = useCaseData.indexOf(useCase)

		if (currentIndex === useCaseData.length - 1) return useCaseData[0]
		return useCaseData[currentIndex + 1]
	}

	if (!useCase) return <div>loading</div>

	return (
		<main id={useCase.title}>
			<Head>
				<title>{useCase.name}</title>
				<meta name='description' content="Mosafe's safety platform provides robust safety training, compliance monitoring, and risk assessments to protect your team and your business. Learn more about our comprehensive safety solution."></meta>
				<meta name='keywords' content='Safety solution, digital safety software, protect my employees, safety compliance for small business, safety management system' />
			</Head>

			<section id='Overview' className='lg:grid lg:grid-cols-[2fr_1fr] lg:items-center mosafe-section'>
				<section className='lg:w-[60%] mb-12'>
					<h1 className='font-bold text-[18px] mb-2 text-purple-base'>{useCase.name} Use Case</h1>
					<h2 className='font-extrabold text-[38px] leading-[44px] mb-6'>{useCase.title}</h2>
					<Button text='Sign up free' className='btn-variant-white mb-8' icon={<ArrowIcon alignment='right' />} onClick={() => null} />
					<AttributesList attributes={useCase.attributes} />
				</section>

				<img className='mb-12' src={useCase.image.src} alt={useCase.title + ' main image'} />
			</section>

			<section className='hidden md:flex mb-12 mosafe-section'>
				<Tabs
					tabs={useCaseData.map((useCase) => useCase.name)}
					activeTab={useCase.name}
					setTab={(tab) => router.push(useCaseData[tab.index].slug)}
				/>
			</section>

			{/* <section id='Applies To' className='md:grid md:grid-cols-2 mosafe-section'>
				<section>
					<h2 className='font-extrabold text-[38px] leading-[44px] mb-6 px-6 sm:px-[10%] '>Remove this section</h2>
					<p className='mb-12 px-6 sm:px-[10%] '>{useCase.applyToText}</p>
					<Link href={useCase.solutionLink}>
						<p className='text-purple-base font-bold px-6 sm:px-[10%] mb-12'>View solution</p>
					</Link>
				</section>

				<section className='relative w-full'>
					<section className='grid grid-cols-2 gap-2 px-6 sm:px-[10%] mb-12'>
						<img src={useCase.applyToImage1.src} alt={'Applies to 1'} />
						<div />
						<div />
						<img src={useCase.applyToImage2.src} alt={'Applies to 2'} className='ml-[-25%] mt-[-25%]' />
					</section>
				</section>
			</section> */}

			{/* <section id='How' className='mosafe-section'>
				<h2 className='font-extrabold text-[32px] leading-[41px] mb-6 text-center '>{useCase.howTitle}</h2>
				<p className='mb-12 text-center'>{useCase.howText}</p>

				<Button text='Watch how it works' onClick={() => null} className='mx-auto py-3 mb-12' />

				<section className='bg-purple-light rounded-md p-4 h-[500px] mb-12'></section>
			</section> */}

			<section className='mosafe-section'>{renderUseCaseSections()}</section>

			<section id={'Journies'}>
				<section className='grid grid-cols-[1fr_4fr] items-center gap-4 px-6 sm:px-[10%] mb-8 md:hidden'>
					<ArrowIcon className='rotate-[-90deg] w-min mx-auto' />
					<p className='font-bold text-[16px]'>Select a journey step below</p>
				</section>

				<JourneyList journies={useCase.journies} />
			</section>

			<section id={'Advantages'} className='mosafe-section sm:flex sm:gap-4 sm:flex-wrap'>
				<AdvantagesList advantages={useCase.advantages} />
			</section>

			<Testimonials testimonials={testimonialsData} />

			<section className='bg-purple-light p-5 flex justify-between items-center mb-12 md:hidden'>
				<div>
					<p className='font-bold'>Next use case</p>
					<p>{getNextUseCase()!.name}</p>
				</div>

				<Link href={getNextUseCase()!.slug}>
					<div className='border-2 border-black p-3 rounded-[50%] w-min ml-auto hover:scale-105 cursor-pointer transition-all duration-300 h-min'>
						<ArrowIcon alignment='right' onClick={() => getNextUseCase()} />
					</div>
				</Link>
			</section>

			<CTA />
		</main>
	)
}

export default UseCase
