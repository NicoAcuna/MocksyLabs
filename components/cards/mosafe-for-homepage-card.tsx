import Link from 'next/link'
import React, { useState } from 'react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import { Colors } from '../../constants/colors'
import { MosafeFor } from '../../constants/types'


type Props = {
    mosafeFor: MosafeFor
    setActive: () => void
    isActive: boolean
}

function MosafeForCard({ mosafeFor, setActive, isActive }: Props) {

  return (
    <div className={`flex flex-col p-6 items-center lg:w-[30%] lg:min-w-[300px] lg:rounded-[16px] lg:border-purple-light lg:border ${isActive && 'lg:bg-purple-light'} transition-all duration-500`} onMouseOver={() => !isActive && setActive()}>
        <img src={mosafeFor.image.src} className='lg:hidden mb-6'/>
        <div className='flex gap-4'>
          <div className='hidden lg:flex p-2 bg-white rounded-lg h-fit'>{mosafeFor.icon}</div>
          <div className='flex flex-col items-center text-center lg:text-left lg:items-start'>
              <p className='font-semibold text-[20px]'>{mosafeFor.name}</p>
              <p className='my-4'>{mosafeFor.text}</p>
              <Link href={mosafeFor.slug}>
                <div className={`flex items-center ${isActive ? '' : 'lg:opacity-0'} transition-all group cursor-pointer`}>
                    <p className='underline text-link-base mr-2'>Find out more</p>
                    <ArrowIcon 
                    alignment='right'
                    color={Colors.LINK_BASE} 
                    className='transition-all group-hover:translate-x-2 duration-300' 
                    />
                </div>
              </Link>
          </div>

        </div>
    </div>
  )
}

export default MosafeForCard