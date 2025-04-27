import React from 'react'
import Button from '../../components/core/button'
import CTA from '../../components/cta'

function LandingPage() {
	return (
		<main id='Landing Page'>
			<section id='Main' className='mb-12 mosafe-section'>
				<h1 className='font-black text-[44px] mb-10'>Insert heading text here</h1>
				<Button text='CTA' onClick={() => null} className='btn-variant-white' />
			</section>

			<CTA />
		</main>
	)
}

export default LandingPage
