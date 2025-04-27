import React from 'react'
import { Founder } from '../../constants/types'

type Props = {
    founder: Founder
}

function FounderCard({ founder }: Props) {
    return (
        <div className={`py-8 min-h-[240px] md:min-w-[200px] md:p-0 mx-auto px-[10%] `}>
            <img src={founder.image.src} alt={founder.name} className='rounded-xl mb-4 w-full'/>
            <h3 className='mb-4 font-bold text-[20px] w-min'>{founder.name}</h3>
            <p className=''>{founder.text}</p>
        </div>
    )
}

export default FounderCard
