import React from 'react'
import HelpIcon from '../../assets/icons/HelpIcon'

type Props = {
    mouseoverText: string
}

function MouseoverPopup({ mouseoverText }: Props) {
    return (
        <div className='hidden md:block'>
            <div className='group relative'>
                <HelpIcon className='text-grey-base group-hover:text-black transition-all duration-300 cursor-pointer'/>
                <div className='bg-black text-white text-[12px] p-2 rounded-[2px] absolute top-[-5px] w-max max-w-[250px] left-14 opacity-0 group-hover:opacity-100 transition-all duration-300 select-none pointer-events-none'>
                    {mouseoverText}
                </div>
            </div>
            
        </div>
    )
}

export default MouseoverPopup
