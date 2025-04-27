import React, { useState } from 'react'
import { ProductBenefit } from '../../constants/types'
import ProductBenefitCard from '../cards/product-benefit-card'

type Props = {
	productBenefits: ProductBenefit[]
}

function ProductBenefitsList({ productBenefits }: Props) {
	const [currentIndex, setCurrentIndex] = useState(0)

	function renderProductBenefitCards() {
		return productBenefits.map((benefit, index) => (
			<ProductBenefitCard benefit={benefit} key={index} setActive={() => setCurrentIndex(index)} isActive={currentIndex === index} />
		))
	}

	return (
		<section id='Benefits' className='mosafe-section lg:flex lg:gap-12'>
			<section className='lg:w-1/3'>
				<h1 className='font-bold text-purple-base text-[18px] sm: mb-6'>Product Benefits</h1>
				<h2 className='font-black text-[32px] leading-10 mb-4'>Raising the bar for safety and compliance  </h2>
				<section id='Product Benefits' className='lg:flex lg:flex-wrap mb-12'>
					{renderProductBenefitCards()}
				</section>
			</section>

			<div className='hidden lg:flex lg:flex-grow'>
				<img src={productBenefits[currentIndex].image.src} alt={productBenefits[currentIndex].title} className='hidden lg:flex rounded-lg' />
			</div>
		</section>
	)
}

export default ProductBenefitsList
