import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import Expand from '../../assets/icons/Expand'
import { FAQ } from '../../constants/types'

export type Props = {
	faq: FAQ
}

function FAQCard({ faq }: Props) {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<section className='w-full my-2'>
			<section
				className={`cursor-pointer ${isOpen ? 'border-2 rounded-lg' : 'border-b-2'} border-black py-4`}
				onClick={() => setIsOpen(!isOpen)}>
				<section className='flex gap-8 justify-between w-full items-center px-4'>
					<section className='text-[18px] font-bold '>{faq.question}</section>
					<Expand className='p-4' />
				</section>

				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: 'auto', opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ duration: 0.5 }}>
							<div className='p-4'>{faq.answer}</div>
						</motion.div>
					)}
				</AnimatePresence>
			</section>
		</section>
	)
}

export default FAQCard
