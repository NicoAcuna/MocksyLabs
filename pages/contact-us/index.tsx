import React, { ReactElement, useState } from 'react'
import { useBreakpoint } from '../../util/use-breakpoint'
import ContactUsMain from '../../assets/images/contact-us-main.png'
import TextInput from '../../components/core/text-input'
import Button from '../../components/core/button'
import SendMessage from '../../assets/icons/SendMessage'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import FAQCard from '../../components/cards/faq-card'
import { FAQList } from '../../constants/data/faqs'
import Head from 'next/head'
import CTA from '../../components/cta'

function ContactUs() {
	const breakpoint = useBreakpoint()

	const [fullName, setFullName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [message, setMessage] = useState<string>('')

	const renderFAQs = (): ReactElement[] => {
		return FAQList.map((faq, index) => <FAQCard key={index} faq={faq} />)
	}

	return (
		<main id='Contact Us'>
			<Head>
				<title>Contact Us</title>
				<meta name='description' content='Need some help with Mosafe? Our friendly support team is always here to assist you! Head to our contact page and let us know how we can help.'></meta>
				<meta name='keywords' content='Safety and compliance, Contact Mosafe, Digital Safety Management' />
			</Head>
			<section id='Contact us' className={`mosafe-section gap-4 sm:grid-cols-2 sm:grid `}>
				<div>
					<p className='text-purple-base font-bold text-[18px] mb-2'>Contact Us</p>
					<p className='text-black font-black text-[38px] mb-6'>Get in touch</p>
					<img src={ContactUsMain.src} alt='Mosafe Drone Delivery' className='m-auto px-[20%] mb-8' />
				</div>
				<div>
					<p className='text-[20px] leading-8 mb-4'>Fill out the form below with any of your questions.</p>

					<TextInput label='Full name' value={fullName} onChange={(e) => setFullName(e.target.value)} className='mb-6' />
					<TextInput label='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='mb-6' />

					<TextInput label='Message' value={message} onChange={(e) => setMessage(e.target.value)} className='mb-12' rows={5} />

					<Button text='Send message' onClick={() => null} className='btn-variant-black' icon={<SendMessage />} />
				</div>
			</section>

			<section id='FAQs' className={`bg-purple-light pt-12 `}>
				<section className='mosafe-section sm:grid grid-cols-2'>
					<div>
						<p className='text-purple-base font-bold text-[18px] mb-2'>Frequently Asked Questions</p>
						<p className='text-black font-black text-[38px] mb-6'>FAQ&#39;s</p>
						<p className='text-[20px] leading-8 mb-12'>Have a less frequently asked question? Contact us above.</p>

						<Button text='More FAQs' onClick={() => null} className='btn-variant-black mb-12' icon={<ArrowIcon alignment='right' />} />
					</div>
					<div>
						{renderFAQs()}
						<p className='my-8 mx-auto text-link-base cursor-pointer w-fit font-bold'>Show More</p>
					</div>
				</section>
			</section>

			<CTA color='#FFF' />
		</main>
	)
}

export default ContactUs
