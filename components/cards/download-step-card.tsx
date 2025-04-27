import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import Expand from '../../assets/icons/Expand'
import { DownloadStep } from '../../constants/types'

function DownloadStepCard({ icon, title, desc }: DownloadStep) {

    return <div className='w-full flex gap-4 mb-6'>
        <div className='bg-purple-light p-3 rounded-lg h-fit'>{icon}</div>
        <div>
            <div className='font-bold text-[18px] mb-2'>{title}</div>
            <div className='text-grey-base'>{desc}</div>
        </div>

    </div>
}

export default DownloadStepCard