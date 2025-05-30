

import React from 'react'
import { IconBaseProps } from '../../constants/types'

interface Props extends IconBaseProps {
  alignment?: "up" | "down"
  color?: 'black' | 'white'
}

function Expand({ className, onClick, alignment, color }: Props) {

  function getRotationValue(){
    switch(alignment) {
      case "up" : return 'rotate(180deg)'
    }
  }

  return (
    <div className={`${onClick ? "cursor-pointer " : " "}` + className} onClick={onClick} style={{ transform: getRotationValue() }}>
      <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.792893 0.292893C1.18342 -0.0976311 1.81658 -0.0976311 2.20711 0.292893L7.5 5.58579L12.7929 0.292893C13.1834 -0.0976311 13.8166 -0.0976311 14.2071 0.292893C14.5976 0.683417 14.5976 1.31658 14.2071 1.70711L8.20711 7.70711C7.81658 8.09763 7.18342 8.09763 6.79289 7.70711L0.792893 1.70711C0.402369 1.31658 0.402369 0.683417 0.792893 0.292893Z" fill={color ?? 'black'} />
      </svg>
    </div>
  )
}

export default Expand