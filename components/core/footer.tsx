import React, { ReactElement } from 'react'
import Button from './button'
import LogoNoText from '../../assets/icons/LogoNoText'
import {
	companyLinks,
	discoverLinks,
	featureLinks,
	industryLinks,
	mosafeForLinks,
	teamSizeLinks,
	useCaseLinks,
} from '../../constants/data/links'
import { Feature, Industry, Link, MosafeFor, TeamSize, UseCase } from '../../constants/types'
import AppStore from '../../assets/icons/AppStore'
import PlayStore from '../../assets/icons/PlayStore'
import LinkedIn from '../../assets/icons/LinkedIn'
import Instagram from '../../assets/icons/Instagram'
import Facebook from '../../assets/icons/Facebook'
import Twitter from '../../assets/icons/Twitter'
import NextLink from 'next/link'
import { useCaseData } from '../../constants/data/use-cases'
import { mosafeForData } from '../../constants/data/mosafe-fors'
import { teamSizeData } from '../../constants/data/team-sizes'
import { industriesData } from '../../constants/data/industries'
import { featuresData } from '../../constants/data/features'
import ArrowIcon from '../../assets/icons/ArrowIcon'

function Footer() {
	const renderLinkSection = (header: string, links: Link[]) => {
		return (
			<>
				<h4 className='text-purple-base text-[13px] font-bold my-[36px]'>{header}</h4>

				{links.map((link, index) => {
					return (
						<NextLink href={link.slug} key={index}>
							<p
								key={index}
								className='text-grey-base text-[16px] mb-[20px] hover:text-purple-base transition-all duration-500 cursor-pointer w-fit'>
								{link.text}
							</p>
						</NextLink>
					)
				})}
			</>
		)
	}

	const renderResourceLinks = (header: string, resources: UseCase[] | MosafeFor[] | TeamSize[] | Feature[] | Industry[]) => {
		return (
			<>
				<h4 className='text-purple-base text-[13px] font-bold my-[36px]'>{header}</h4>

				{resources.map((resource, index) => {
					return (
						<NextLink href={resource.slug} key={index}>
							<p
								key={index}
								className='text-grey-base text-[16px] mb-[20px] hover:text-purple-base transition-all duration-500 cursor-pointer w-fit'>
								{resource.name}
							</p>
						</NextLink>
					)
				})}
			</>
		)
	}

	return (
		<footer className='bg-footer-logo bg-no-repeat bg-left-bottom py-[5%]'>
			<section className='mosafe-section'>
				<LogoNoText className='py-8 sm:hidden' />

				<section className='grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-12 sm:mb-12'>
					{/* mobile link layout */}
					<section className='sm:hidden'>
						{renderResourceLinks('Use Cases', useCaseData)}
						{renderResourceLinks('Mosafe For...', mosafeForData)}
						{renderResourceLinks('Team Size', teamSizeData)}
						{renderLinkSection('Discover', discoverLinks)}
						{renderResourceLinks('Industries', industriesData)}
					</section>
					<section className='sm:hidden'>
						{renderResourceLinks('Features', featuresData)}
						{renderLinkSection('Company', companyLinks)}
					</section>

					<section className='col-span-2 sm:col-span-1'>
						<LogoNoText className='py-8 hidden sm:block' />

						<h3 className='font-black text-[32px] mb-[1rem]'>Download Now</h3>

						<p className='text-[16px] mb-[1rem]'>
							Not your grandpa&apos;s <span className='font-bold'>safety management </span> solution.
						</p>

						<section className='flex gap-4 mb-[2rem] sm:flex-col '>
							<a
								href='https://apps.apple.com/au/app/mosafe-daily-safety-companion/id1606093443'
								target="_blank"
								rel="noreferrer"
							>
								<AppStore className='w-1/2' />
							</a>
							<a
								href='https://play.google.com/store/apps/details?id=au.com.mosafe.android'
								target="_blank"
								rel="noreferrer"
							>
								<PlayStore className='w-1/2' />
							</a>
						</section>
					</section>

					{/* desktop link layout */}
					<section className='hidden sm:block'>
						{renderResourceLinks('Use Cases', useCaseData)}
						{renderResourceLinks('Mosafe For...', mosafeForData)}
						{renderResourceLinks('Team Size', teamSizeData)}
					</section>
					<section className='hidden sm:block'>{renderResourceLinks('Features', featuresData)}</section>
					<section className='hidden sm:block'>
						{renderLinkSection('Discover', discoverLinks)}
						{renderLinkSection('Company', companyLinks)}
						{renderResourceLinks('Industries', industriesData)}
					</section>
				</section>

				<section className='md:flex md:items-center md:justify-between'>
					<section className='flex gap-4 mb-[1rem]'>
						<LinkedIn href="https://www.linkedin.com/company/mosafe/" />
						<Instagram href="https://www.instagram.com/mosafecrew/" />
						<Facebook href="https://www.facebook.com/people/MosafeCrew/100081333245736" />
						<Twitter href="https://twitter.com/mosafecrew" />
					</section>

					<section className='flex gap-6 text-grey-base text-[16px]'>
						<p>Copyright © 2023</p>
						<NextLink href='/terms'>
							<p className='text-grey-base text-[16px] mb-[20px] hover:text-purple-base transition-all duration-500 cursor-pointer w-fit'>Terms</p>
						</NextLink>
						<NextLink href='/privacy-policy'>
							<p className='text-grey-base text-[16px] mb-[20px] hover:text-purple-base transition-all duration-500 cursor-pointer w-fit'>
								Privacy
							</p>
						</NextLink>
					</section>
				</section>
			</section>
		</footer>
	)
}

export default Footer
