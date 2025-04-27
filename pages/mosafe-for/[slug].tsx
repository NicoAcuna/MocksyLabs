import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import SectionCard from '../../components/cards/section-card'
import Button from '../../components/core/button'
import Tabs from '../../components/core/tabs'
import CTA from '../../components/cta'
import FeaturesList from '../../components/lists/features-list'
import Testimonials from '../../components/testimonials'
import { featuresData } from '../../constants/data/features'
import { mosafeForData } from '../../constants/data/mosafe-fors'
import { testimonialsData } from '../../constants/data/testimonials'
import { MosafeFor, Section } from '../../constants/types'

function MosafeFor() {
	const [mosafeFor, setMosafeFor] = useState<MosafeFor>()
	const router = useRouter()
	const { slug } = router.query

	useEffect(() => {
		if (slug === undefined) return
		const mosafeFor = mosafeForData.find((mosafeFor) => mosafeFor.slug === '/mosafe-for/' + slug)

		if (mosafeFor) {
			setMosafeFor(mosafeFor)
		} else {
			router.push('/mosafe-for')
		}
	}, [slug])

	function renderMosafeForSections(sections: Section[]) {
		return sections.map((section, index) => <SectionCard imageAlignment={index % 2 === 0 ? 'left' : 'right'} section={section} key={index} />)
	}

	const getNextMosafeFor = (): MosafeFor | undefined => {
		if (!mosafeFor) return
		const currentIndex = mosafeForData.indexOf(mosafeFor)

		if (currentIndex === mosafeForData.length - 1) return mosafeForData[0]
		return mosafeForData[currentIndex + 1]
	}

	if (!mosafeFor) return <div>loading</div>

	return (
		<main id={mosafeFor.title}>
			<Head>
				<title>{mosafeFor.name}</title>
				<meta name='description' content="Transform your safety culture with Mosafe's software for drivers, managers, and owners.  From fleet management to incident reporting, our platform streamlines safety processes for everyone."></meta>
				<meta name='keywords' content='Safety software, Digital safety software, Safety management system' />
			</Head>
			<section id='Overview' className='lg:grid lg:grid-cols-[1fr_1fr] lg:items-center mosafe-section'>
				<section className='lg:w-[60%] mb-12 lg:order-2'>
					<h1 className='font-bold text-[18px] mb-2 text-purple-base'>Mosafe for {mosafeFor.name}</h1>
					<h2 className='font-extrabold text-[38px] leading-[44px] mb-6'>{mosafeFor.title}</h2>
					<Button text='Sign up free' className='btn-variant-white mb-8' icon={<ArrowIcon alignment='right' />} onClick={() => null} />
				</section>

				<img className='mb-12 lg:order-1' src={mosafeFor.image.src} alt={mosafeFor.title + ' main image'} />
			</section>

			<section className='hidden md:flex mb-12 mosafe-section'>
				<Tabs
					tabs={mosafeForData.map((mosafeFor) => mosafeFor.name)}
					activeTab={mosafeFor.name}
					setTab={(tab) => router.push(mosafeForData[tab.index].slug)}
				/>
			</section>

			<section className='mosafe-section'>{renderMosafeForSections(mosafeFor.sections1)}</section>

			<Testimonials testimonials={testimonialsData} className='bg-purple-light' />

			<section id='Features' className='mosafe-section'>
				<section className='lg:flex lg:justify-between'>
					<section>
						<h1 className='font-extrabold text-[38px] leading-[44px] mb-6 text-center lg:text-left'>Features to simplify your daily routine</h1>
						<p className='text-center mb-6 lg:text-left'>Explore how Mosafe can help you improve your everyday safety.</p>
					</section>
					<Button
						text='Start today'
						className='btn-variant-black mb-8 mx-auto lg:mx-0 lg:h-min'
						icon={<ArrowIcon alignment='right' />}
						onClick={() => null}
					/>
				</section>

				<FeaturesList features={featuresData} hideTitle />
			</section>

			{mosafeFor.sections2 && renderMosafeForSections(mosafeFor.sections2)}

			<section className='bg-purple-light p-5 flex justify-between items-center mb-12 md:hidden'>
				<div>
					<p className='font-bold'>Next user</p>
					<p>{getNextMosafeFor()!.name}</p>
				</div>

				<Link href={getNextMosafeFor()!.slug}>
					<div className='border-2 border-black p-3 rounded-[50%] w-min ml-auto hover:scale-105 cursor-pointer transition-all duration-300 h-min'>
						<ArrowIcon alignment='right' onClick={() => getNextMosafeFor()} />
					</div>
				</Link>
			</section>

			<CTA />
		</main>
	)
}

export default MosafeFor
