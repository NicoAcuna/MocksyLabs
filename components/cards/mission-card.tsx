import Link from 'next/link'
import React from 'react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import { Mission } from '../../constants/types'

type Props = {
    mission: Mission
}

function MissionCard({ mission }: Props) {
    return (
        <div className={`py-8 px-2 mb-4  min-h-[240px] pb-12 md:pb-0 border-b-2 border-black`}>
            <p className='font-black text-[38px] text-purple-base'>{mission.index}</p>
            <section className='md:grid md:grid-cols-2 md:gap-[100px]'>
                <img src={mission.image.src} alt={mission.title} className='mb-12 md:px-8 md:mb-0 px-2' />
                <section>
                    <h3 className='font-bold text-[24px] mb-4'>{mission.title}</h3>
                    <p className='mb-10'>{mission.text}</p>
                </section>
            </section>
        </div>
    )
}

export default MissionCard
