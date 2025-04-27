import React from 'react'
import { FeatureGroup } from '../../constants/types'

type Props = {
    featureGroup: FeatureGroup
    setActive: () => void
    isActive: boolean
}

function ProductOverviewFeatureGroupTab({ featureGroup, isActive, setActive }: Props) {
    return (
        <div className={`flex p-4 border w-full border-purple-light sm:min-w-[300px] sm:w-[25%] rounded-2xl mb-4 items-center ${isActive && 'bg-purple-light'} transition-all duration-500`} onMouseOver={() => !isActive && setActive()} onClick={() => !isActive && setActive()}>
        <div className='flex gap-4 items-center'>
          <div className='p-3 bg-white rounded-lg h-fit'>{featureGroup.icon}</div>
          <div className='flex flex-col items-center lg:text-left lg:items-start'>
              <p className='font-bold text-[16px]'>{featureGroup.name}</p>
          </div>

        </div>
    </div>
    )
}

export default ProductOverviewFeatureGroupTab
