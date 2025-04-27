import React from 'react'
import AppleIcon from '../../assets/icons/AppleIcon'
import ArrowDownloadNow from '../../assets/icons/ArrowDownloadNow'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import GooglePlayIcon from '../../assets/icons/GooglePlayIcon'
import { Colors } from '../../constants/colors'
import Link from 'next/link'

function DownloadNow() {
	return (
		<section id='Download Now' className='bg-purple-light '>
			<section className='mosafe-section'>
				<section className='mosafe-section lg:flex lg:items-center lg:gap-6'>
					<div className='lg:w-1/3'>
						<ArrowDownloadNow className='hidden lg:flex pt-8' />
						<p className='text-[28px] text-center lg:text-left my-4'>
							<span className='font-bold'>Protect your team</span> with Mosafe
						</p>
					</div>

					<div className='grid grid-cols-2 justify-items-center gap-2 lg:gap-12 lg:h-full grow '>
						<div className='bg-white rounded-lg flex flex-col items-center p-4 lg:h-full lg:w-[100%] lg:py-[80px] max-w-[350px] border border-white hover:border-purple-base transition-all duration-500'>
							<AppleIcon className={'h-20 lg:h-40 lg:mb-12'} />
							<p className='text-center text-[13px] my-2'>Mobile app for IOS</p>
							<div className='flex items-center cursor-pointer group'>
								<a
									href='https://apps.apple.com/au/app/mosafe-daily-safety-companion/id1606093443'
									target="_blank"
									rel="noreferrer"
								>
									<p className='text-link-base mr-2 text-[13px] text-center transition-all group-hover:-translate-x-1 duration-300'>Download now</p>
								</a>
								<ArrowIcon
									alignment='top-right'
									color={Colors.LINK_BASE}
									className='transition-all group-hover:translate-x-1 group-hover:-translate-y-1 duration-300'
								/>
							</div>
						</div>

						<div className='bg-white rounded-lg flex flex-col items-center p-4 lg:h-full lg:w-[100%] lg:py-[80px] max-w-[350px] border border-white hover:border-purple-base transition-all duration-500'>
							<GooglePlayIcon className={'h-20 lg:h-40 lg:mb-12'} />
							<p className='text-center text-[13px] my-2'>Mobile app for Android</p>
							<div className='flex items-center cursor-pointer group transition-all'>
								<a
									href='https://play.google.com/store/apps/details?id=au.com.mosafe.android'
									target="_blank"
									rel="noreferrer"
								>
									<p className='text-link-base mr-2 text-[13px] text-center transition-all group-hover:-translate-x-1 duration-300'>Download now</p>
								</a>
								<ArrowIcon
									alignment='top-right'
									color={Colors.LINK_BASE}
									className='transition-all group-hover:translate-x-1 group-hover:-translate-y-1 duration-300'
								/>
							</div>
						</div>
					</div>
				</section>
			</section>
		</section>
	)
}

export default DownloadNow
