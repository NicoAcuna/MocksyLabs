import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import { Colors } from '../../constants/colors'
import { Journey } from '../../constants/types'
import Button from '../core/button'

type Props = {
    journies: Journey[]
}

function JourneyList({ journies }: Props) {

    const router = useRouter()

    const [activeJourney, setActiveJourney] = useState<Journey>(journies[0])

    const renderJourneyIcons = () => {
        return <section className='flex flex-col md:flex-row justify-between h-full py-8'>
            {journies.map((journey, index) => <img key={index} src={journey.image.src} className={`h-[40px] w-[40px] border-white border-2 rounded-[50%] object-cover mx-auto hover:scale-125 transition-all cursor-pointer duration-300 z-10 ${activeJourney === journey && 'scale-125'}`} onClick={() => setActiveJourney(journey)} />)}
        </section>
    }

    return (
        <section id='Journey' className='grid grid-cols-[1fr_3fr] md:block'>

            <section className='bg-[#B588FF] px-4 md:px-[12%] relative'>

                <div className='absolute top-0 left-[calc(50%_-_2px)] md:top-[50%] md:left-0 h-full w-[4px] md:w-full md:h-[4px] linear-grad'/>

                {renderJourneyIcons()}

            </section>

            <section className={`bg-purple-light grid grid-cols-1 sm:p-10 lg:grid-cols-2 justify-items-center py-6 items-center md:grid-cols-2 md:py-[10%]`}>

                <div className={`px-[10%] md:order-2`}>
                    <h1 className='text-[16px] font-bold mb-4 text-purple-base'>{activeJourney.title}</h1>
                    <h3 className='text-[32px] lg:text-[44px] leading-[46px] font-extrabold mb-4'>{activeJourney.section.title}</h3>
                    <p>{activeJourney.section.text}</p>
                    <Button text='Find out more' icon={<ArrowIcon className='rotate-180'/>} onClick={() => {
                        if (activeJourney.section.link) {
                            router.push(activeJourney.section.link)
                        }
                    }} className='btn-variant-white bg-purple-light my-6' />
                </div>
                <img
                    className={`px-4 md:order-1`}
                    src={activeJourney.section.image.src}
                    alt={activeJourney.section.title}
                />

            </section>

        </section>
    )
}

export default JourneyList
