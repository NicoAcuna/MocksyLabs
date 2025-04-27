

import React from 'react'
import {IconBaseProps} from '../../constants/types'

interface Props extends IconBaseProps {}

function TriangleArrowIcon({ onClick, className }: Props) {
    
  return (
    <div>
        <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.61325 3.74005C3.27081 4.08665 2.72919 4.08665 2.38675 3.74005L0.272972 1.60064C-0.300741 1.01997 0.0900381 -7.32129e-08 0.886225 0L5.11378 3.88747e-07C5.90996 4.6196e-07 6.30074 1.01997 5.72703 1.60064L3.61325 3.74005Z" fill="black"/>
        </svg>
    </div>
  )
}

export default TriangleArrowIcon