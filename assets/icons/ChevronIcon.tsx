

import React from 'react'
import { IconBaseProps } from '../../constants/types'

interface Props extends IconBaseProps { 
}

function ChevronIcon({ className, onClick, color }: Props) {
  return (
    <div className={`${onClick ? "cursor-pointer " : " "}` + className} onClick={onClick}>
        <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.69148 0.292893C9.08201 0.683417 9.08201 1.31658 8.69148 1.70711L3.39859 7L8.69148 12.2929C9.08201 12.6834 9.08201 13.3166 8.69148 13.7071C8.30096 14.0976 7.66779 14.0976 7.27727 13.7071L1.27727 7.70711C0.886744 7.31658 0.886744 6.68342 1.27727 6.29289L7.27727 0.292893C7.66779 -0.0976311 8.30096 -0.0976311 8.69148 0.292893Z" fill="black"/>
        </svg>
    </div>
  )
}

export default ChevronIcon