import React from 'react'
import AppStore from '../../assets/icons/AppStore'
import PlayStore from '../../assets/icons/PlayStore'
import TrustedCompanies from '../../components/trusted-companies'
import DownloadSteps from '../../assets/images/download-simple-steps.jpg'
import DownloadManage from '../../assets/images/download-manage-bg.png'
import { DownloadStepList } from '../../constants/data'
import DownloadStepCard from '../../components/cards/download-step-card'
import Button from '../../components/core/button'
import DownloadIcon from '../../assets/icons/Download'
import Head from 'next/head'

function Download() {
	const renderDownloadSteps = () => {
		return DownloadStepList.map((downloadStep, index) => (
			<DownloadStepCard key={index} icon={downloadStep.icon} title={downloadStep.title} desc={downloadStep.desc} />
		))
	}

	return (
		<main>
			<Head>
				<title>Download Now</title>
				<meta name='description' content='Get started with Mosafe today! Download our safety and compliance app to protect your workforce and streamline your business. Available for iOS and Android.'></meta>
				<meta name='keywords' content='Digital safety management software, safety management software, safety app, workplace health and safety app' />
			</Head>
			<section id='Download' className={`pt-12 sm:gap-4 bg-download-bg bg-no-repeat bg-right`}>
				<section className='mosafe-section'>
					<section className={`sm:w-1/3`}>
						<p className='text-[38px] font-black mb-4 '>Start driving with the Mosafe app</p>
						<p className='text-[20px] leading-8 mb-12'>Download the Mosafe app today and save time managing your safety</p>

						<div className={`flex mb-[200px] justify-between gap-2 sm:gap-6`}>
							<AppStore />
							<PlayStore />
						</div>
					</section>
				</section>
			</section>

			<TrustedCompanies />

			<section id='Download Steps' className='mosafe-section sm:gap-4 '>
				<section className='sm:mb-[200px] lg:grid lg:grid-cols-2 sm:gap-6'>
					<img src={DownloadSteps.src} alt='App Skeleton' className='w-full' />
					<div>
						<p className='text-[32px] font-black mb-8'>It&apos;s easy and free to get started with Mosafe!</p>
						{renderDownloadSteps()}
					</div>
				</section>

				<section className='bg-purple-light p-8 rounded-t-[32px] sm:rounded-[32px] relative'>
					<img src={DownloadManage.src} className='absolute bottom-0 sm:right-[-32px] z-0 w-[50%] min-w-[400px]' />
					<section className='sm:hidden'>
						<p className='text-purple-dark font-black text-[32px] leading-10 mb-4'>Manage your teams safety easily</p>
						<p className='text-purple-dark text-[20px] leading-[30px] mb-8'>
							Cover your business, meet government requirements and rest assured your team is prepared for anything.
						</p>
						<Button text='Download the app' className='py-3 mb-[350px]' onClick={() => null} icon={<DownloadIcon />} />
					</section>
					<section className='hidden sm:block w-[50%] lg:w-[35%] pl-[5%]'>
						<p className='text-purple-dark font-black text-[32px] leading-10 mb-4'>Manage your safety in one easy app</p>
						<p className='text-purple-dark text-[20px] leading-[30px] mb-8'>
							Mosafe keeps things simple so you can pay attention to what matters most.
						</p>
						<div className={`flex justify-between gap-2 sm:gap-6`}>
							<AppStore className='z-10' />
							<PlayStore className='z-10' />
						</div>
					</section>
				</section>
			</section>
		</main>
	)
}

export default Download
