import React, { useState } from 'react'
import ArrowIcon from '../assets/icons/ArrowIcon'
import { Colors } from '../constants/colors'
import { FeatureGroup } from '../constants/types'
import ProductOverviewFeatureGroupTab from './cards/product-overview-feature-group-tab'
import Link from 'next/link'

type Props = {
	featureGroups: FeatureGroup[]
}

function ProductOverviewFeatures({ featureGroups }: Props) {
	const [currentIndex, setCurrentIndex] = useState(0)

	const renderFeatureGroupTabs = (): JSX.Element[] => {
		return featureGroups.map((featureGroup, index) => {
			return (
				<ProductOverviewFeatureGroupTab
					featureGroup={featureGroup}
					key={index}
					setActive={() => setCurrentIndex(index)}
					isActive={currentIndex === index}
				/>
			)
		})
	}

	const renderFeatureGroupData = (): JSX.Element => {
		const featureGroup = featureGroups[currentIndex]

		return (
			<section id={featureGroup.name} className='lg:grid lg:grid-cols-2 lg:items-center lg:gap-12'>
				<img src={featureGroup.image.src} className='hidden lg:flex' />

				<div>
					<h2 className='font-bold text-[1.5rem] leading-8 mb-4'>{featureGroup.title}</h2>

					<p className='mb-6'>{featureGroup.description}</p>

					<Link
						href={featureGroup.slug}
					>
						<div className={`flex items-center transition-all`}>
							<p className='underline text-link-base mr-2 cursor-pointer'>Find out more</p>
							<ArrowIcon alignment='right' color={Colors.LINK_BASE} />
						</div>
					</Link>
				</div>

				<img src={featureGroup.image.src} className=' lg:hidden' />
			</section>
		)
	}

	return (
		<section id='Features' className='mosafe-section '>
			<h2 className='font-black text-center text-[38px] mx-auto mb-6 sm:w-1/2'>Empower your team&apos;s safety with intuitive features</h2>

			<section id='Feature Groups' className='mb-12 flex flex-wrap sm:gap-x-[10%]'>
				{renderFeatureGroupTabs()}
			</section>

			{renderFeatureGroupData()}
		</section>
	)
}

export default ProductOverviewFeatures
