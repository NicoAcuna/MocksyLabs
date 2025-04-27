import React from 'react'
import AustraliaPostIcon from '../assets/icons/AustraliaPostIcon'
import BeestonsIcon from '../assets/icons/BeestonsIcon'
import FastwayIcon from '../assets/icons/FastwayIcon'
import StartrackIcon from '../assets/icons/StartrackIcon'

function TrustedCompanies() {
	return (
		<section id='Trusted Companies' className='bg-purple-light mb-6 sm:mb-12'>
			<section className='mosafe-section'>
				<p className='text-center mb-10 text-[20px] sm:w-1/4 md:w-1/2 sm:mx-auto'>
					Join the <span className='font-bold'>growing number of companies</span> that rely on Mosafe for their safety management needs
				</p>
				<div className='grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center'>
					<AustraliaPostIcon />
					<BeestonsIcon />
					<FastwayIcon />
					<StartrackIcon />
				</div>
			</section>
		</section>
	)
}

export default TrustedCompanies
