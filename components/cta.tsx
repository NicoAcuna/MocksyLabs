import React from 'react'
import ArrowIcon from '../assets/icons/ArrowIcon'
import LoginProfile from '../assets/icons/LoginProfile'
import Button from './core/button'

type Props = {
	color?: string
	text?: string
	subText?: string
	variant?: 'Standard' | 'Ship' | 'Login'
}

function CTA({ color, text, variant, subText }: Props) {
	if (variant === 'Login')
		return (
			<section className='mosafe-section my-2'>
				<section
					className={`${color ? `bg-[${color}]` : 'bg-purple-light'} rounded-[32px] 
				w-full p-[40px] flex justify-center flex-col items-center text-center bg-footer-card-image bg-no-repeat bg-left-bottom`}>
					<p className='text-black text-3xl font-black mb-8 w-1/2'>{text ?? 'The safety management system that frees up your day'}</p>
					<section className='flex gap-8 items-center justify-center'>
						<Button text='Login' onClick={() => null} icon={<LoginProfile color='#FFF' />} className='hover:bg-[#00000000] py-2' />
						<Button text='Sign up for free' onClick={() => null} className='btn-variant-white bg-[#00000000]' />
					</section>
				</section>
			</section>
		)

	if (variant === 'Ship')
		return (
			<section className='mosafe-section my-0'>
				<section
					className={`${color ? `bg-[${color}]` : 'bg-purple-light'} rounded-[32px] 
				w-full py-[10%] mx-auto md:mx-0 md:flex items-center justify-between text-center bg-footer-card-image-2 bg-no-repeat md:bg-center bg-[left_bottom_-8rem] bg px-[10%]`}>
					<section className='md:max-w-[30%] max-w-[100%]'>
						<p className='text-purple-dark text-3xl font-black mb-4'>{text ?? 'Want to see what all the fuss is about?'}</p>
						<p className='text-purple-dark text-xl md:mb-0 mb-12'>{subText ?? 'Check out our Mosafe app'}</p>
					</section>
					<Button text='Sign up free' onClick={() => window.location.href = 'https://app.mosafe.com.au/'} icon={<ArrowIcon alignment='right' />} className='mx-auto md:mx-0' />
				</section>
			</section>
		)

	return (
		<section className='mosafe-section my-0'>
			<section
				className={`${color ? `bg-[${color}]` : 'bg-purple-light'} rounded-[32px] 
				w-full p-[40px] flex justify-center flex-col items-center text-center bg-footer-card-image bg-no-repeat bg-left-bottom`}>
				<p className='text-purple-dark text-3xl font-black mb-[4rem]'>{text ?? 'Make safety your superpower with Mosafe'}</p>
				<Button text='Sign up free' onClick={() => window.location.href = 'https://app.mosafe.com.au'} icon={<ArrowIcon alignment='right' />} />
			</section>
		</section>
	)
}

export default CTA
