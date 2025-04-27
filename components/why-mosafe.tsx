import React, { useRef, useState } from 'react'
import dynamic from 'next/dynamic';

const lottie = dynamic(() => import('lottie-web'), {
  ssr: false, // Esto evita que se cargue en el servidor.
});


import PieChart from '../assets/lotties/pie-chart.json'
import BarChart from '../assets/lotties/bar-graph.json'
import Button from './core/button'
import ArrowIcon from '../assets/icons/ArrowIcon'
import { useRouter } from 'next/router';

type WhyMosafeTabs = 'Efficiency' | 'Incidents'

function WhyMosafe() {
	const [tab, setTab] = useState<WhyMosafeTabs>('Efficiency');

	const router = useRouter();

		

	return (
		<section id='Why Mosafe' className='mosafe-section sm:mb-12'>
			<p className='font-black text-[2rem] mb-8'>Streamline safety management and reduce incidents</p>
			<div className='sm:grid sm:grid-cols-[3fr_2fr] gap-12 flex flex-col'>
				<div className='order-2 sm:order-1'>
					<p className='text-[20px] mb-6 sm:mb-12'>
					Increase efficiency through automation, clear reporting, and proactive hazard identification throughout your business.
					</p>
					<Button text='Find out more' onClick={() => router.push('/product-overview')} icon={<ArrowIcon alignment='right' />} className='btn-variant-white' />
				</div>
				<section className='order-1 sm:order-2 bg-purple-light rounded-xl py-4 px-4 sm:px-6 max-h-[600px] '>
					<div className='flex gap-4'>
						<p
							className={`bg-white w-1/2 text-center lg:px-6 py-2 border duration-300 cursor-pointer border-white rounded-[40px] hover:font-bold transition-all hover:border-black ${
								tab === 'Efficiency' ? 'font-bold border-black ' : ''
							}`}
							onClick={() => setTab('Efficiency')}>
							Efficiency
						</p>
						<p
							className={`bg-white w-1/2 text-center lg:px-6 py-2 border duration-300 cursor-pointer border-white rounded-[40px] hover:font-bold transition-all hover:border-black ${
								tab === 'Incidents' ? 'font-bold border-black ' : ''
							}`}
							onClick={() => setTab('Incidents')}>
							Incidents
						</p>
					</div>


					<div className='flex justify-between items-center'>
						<p className='text-[1rem] font-bold'>Efficiency increased</p>
						<p className='text-[2.8rem] font-black'>4x</p>
					</div>
				</section>
			</div>
		</section>
	)
}

export default WhyMosafe
