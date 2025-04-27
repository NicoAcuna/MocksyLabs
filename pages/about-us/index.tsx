import React from 'react'
import ArrowDown from '../../assets/icons/ArrowDown'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import TeamMain from '../../assets/images/feature-section-1.png'
import FeatureGroupBenefitCard from '../../components/cards/feature-group-benefit-card'
import FounderCard from '../../components/cards/founder-card'
import MissionCard from '../../components/cards/mission-card'
import Button from '../../components/core/button'
import * as Benefits from '../../constants/data/benefits'
import { foundersData } from '../../constants/data/founders'
import { missionsData } from '../../constants/data/missions'
import Careers1 from '../../assets/images/about-us-careers-1.png'
import Careers2 from '../../assets/images/about-us-careers-2.png'
import Careers3 from '../../assets/images/about-us-careers-3.png'
import Link from 'next/link'
import { jobListingsData } from '../../constants/data/job-listings'
import JobLink from '../../components/cards/job-link'
import { useRouter } from 'next/router'
import Mail from '../../assets/icons/Mail'
import Head from 'next/head'
import CTA from '../../components/cta'

function AboutUs() {
	const router = useRouter()

	const renderMissionCards = (): JSX.Element[] => {
		return missionsData.map((mission, index) => <MissionCard mission={mission} key={index} />)
	}

	const renderBenefitCards = (): JSX.Element[] => {
		return Benefits.aboutBenefits.map((benefit, index) => {
			return <FeatureGroupBenefitCard benefit={benefit} key={index} />
		})
	}

	const renderFounderCards = (): JSX.Element[] => {
		return foundersData.map((founder, index) => <FounderCard founder={founder} key={index} />)
	}

	const renderJobLinks = () => {
		return jobListingsData.slice(0, 2).map((job, index) => <JobLink jobListing={job} key={index} />)
	}

	return (
		<main id='About Us'>
			<Head>
				<title>About Us</title>
				<meta name='description' content="Discover how Mosafe's safety and compliance software can help your business stay compliant and keep your workforce safe. Our vision is to create a world where workplace health and safety is a top priority. We value inclusivity, genuine relationships, attention to detail, and involvement at every level."></meta>
				<meta name='keywords' content='Safety and Compliance Software, Workplace Health and Safety, Safety Management System, Safety Software' />
			</Head>
			<section id='Overview' className='mosafe-section mb-12'>
				<h1 className='text-purple-base font-bold text-center mb-2'>About Us</h1>

				<h2 className='font-black text-[38px] leading-[45px] text-center mb-10'>Taking safety somewhere new</h2>

				<div className='mx-auto w-min mb-12'>
					<ArrowDown />
				</div>

				<section className='md:grid md:grid-cols-2 md:items-center md:gap-[100px]'>
					<img src={TeamMain.src} alt='The Mosafe Team' className=' mb-6 rounded-lg' />

					<section>
						<h2 className='font-black text-[38px] leading-[45px] mb-6'>Our Vision</h2>

						<p className='text-[20px] mb-10'>
						To help teams thrive by empowering people to effortlessly take control of their safety enabling them to take part in the global reduction of workplace related incidents, spreading a little joy as we go.


						</p>

						{/* <Button text='Learn more' onClick={() => null} icon={<ArrowIcon alignment='right' />} className='btn-variant-white' /> */}
					</section>
				</section>
			</section>

			<section id='Our Mission' className='mosafe-section mb-12'>
				<h2 className='font-black text-[38px] leading-[45px] mb-6'>Our Values</h2>
				<div className='border-b-2 border-black mb-6' />

				{renderMissionCards()}
			</section>

			<section id='Our Purpose' className='mb-12 bg-purple-light'>
				<section className='mosafe-section'>
					<h2 className='font-black text-[32px] leading-[41px] text-center mb-10'>Our Mission</h2>

					<section className='md:flex md:flex-wrap md:justify-between md:gap-2'>{renderBenefitCards()}</section>
				</section>
			</section>

			<section id='The Founders' className='mosafe-section md:grid md:gap-[100px] lg:grid-cols-4 md:grid-cols-3'>
				<section>
					<h2 className='font-black text-[38px] leading-[45px] mb-2'>The founders</h2>

					<p className='text-[18px] mb-12'>Mosafe is built by a team of industry experts who have spent years working in the field, bringing a wealth of knowledge and expertise to digital safety management.</p>
				</section>
				{renderFounderCards()}
			</section>

			<section id='Careers' className='mosafe-section'>
				<h2 className='font-black text-[38px] leading-[45px] text-center mb-8'>It&apos;s all about our people</h2>

				<p className='text-[20px] mb-10 text-center'>
				The team behind Mosafe is what drives our mission to create a safer, more efficient workplace to make a real impact on people&apos;s lives. 
				</p>

				<Button text='Join our team' onClick={() => router.push('/careers')} icon={<ArrowIcon alignment='right' />} className='py-3 mx-auto mb-12' />

				<section className='md:grid-cols-3 md:grid md:gap-6'>
					<img src={Careers1.src} alt='Mosafe Open Positions' className='mb-4' />

					<div>
						<img src={Careers2.src} alt='Mosafe Open Positions' className='mb-4' />

						{renderJobLinks()}

						<Button text='View all jobs' onClick={() => router.push('/careers')} className='btn-variant-black' />
					</div>

					<img src={Careers3.src} alt='Mosafe Open Positions' className='mb-4 hidden md:block' />
				</section>
			</section>

			<section id='Contact us' className='bg-purple-light mb-12'>
				<section className='mosafe-section md:grid-cols-[1fr_2fr] md:grid md:gap-[100px]'>
					<section>
						<h2 className='font-black text-[32px] leading-[41px] mb-4'>Get in touch</h2>
						<p className='text-[20px] mb-12'>Any questions, ask away!</p>
					</section>

					<Link
						href='/contact-us'
					>
					<section className='p-6 bg-white rounded-lg flex gap-2 items-center justify-between cursor-pointer hover:shadow-lg transition-all duration-300 mb-10 md:mb-0 md:h-fit'>
						<div className='bg-purple-light p-4 rounded-lg'>
							<Mail />
						</div>
						<section>
							<p className='font-bold text-[20px] mb-1 '>Contact us</p>
							<p className='text-grey-base'>
								We are located in sunny <span className='font-bold'>Brisbane, Australia</span>
							</p>
						</section>
						<ArrowIcon className='rotate-180' />
					</section>
					</Link>

				</section>
			</section>

			<CTA color='#FFF' />
		</main>
	)
}

export default AboutUs
