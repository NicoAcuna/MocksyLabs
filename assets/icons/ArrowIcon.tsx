

import React from 'react'
import {IconBaseProps} from '../../constants/types'


interface Props extends IconBaseProps {
  alignment?: "right" | "left" | "top" | "bottom" | "top-right"
  color?: string
}

function ArrowIcon({ className, onClick, alignment, color }: Props) {

  function getRotationValue(){
    switch(alignment){
      case "right" : return 'rotate(180deg)'
      case "bottom" : return 'rotate(270deg)'
      case "top" : return 'rotate(90deg)'
      case "top-right" : return 'rotate(135deg)'
      case "left" : return 
    }
  }

  return (
    <div className={className}>
      <div 
      style={{ transform: getRotationValue() }}
      className={`${onClick ? "cursor-pointer " : " "}`} onClick={onClick}
      >
          <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.9999 6.00019H3.4099L6.7099 2.71019C6.8982 2.52188 7.00399 2.26649 7.00399 2.00019C7.00399 1.73388 6.8982 1.47849 6.7099 1.29019C6.52159 1.10188 6.2662 0.996094 5.9999 0.996094C5.73359 0.996094 5.4782 1.10188 5.2899 1.29019L0.289896 6.29019C0.198856 6.38529 0.127491 6.49743 0.0798963 6.62019C-0.0201217 6.86365 -0.0201217 7.13672 0.0798963 7.38019C0.127491 7.50294 0.198856 7.61508 0.289896 7.71019L5.2899 12.7102C5.38286 12.8039 5.49346 12.8783 5.61532 12.9291C5.73718 12.9798 5.86788 13.006 5.9999 13.006C6.13191 13.006 6.26261 12.9798 6.38447 12.9291C6.50633 12.8783 6.61693 12.8039 6.7099 12.7102C6.80363 12.6172 6.87802 12.5066 6.92879 12.3848C6.97956 12.2629 7.00569 12.1322 7.00569 12.0002C7.00569 11.8682 6.97956 11.7375 6.92879 11.6156C6.87802 11.4937 6.80363 11.3831 6.7099 11.2902L3.4099 8.00019H10.9999C11.2651 8.00019 11.5195 7.89483 11.707 7.70729C11.8945 7.51976 11.9999 7.2654 11.9999 7.00019C11.9999 6.73497 11.8945 6.48062 11.707 6.29308C11.5195 6.10554 11.2651 6.00019 10.9999 6.00019Z" fill={color ?? 'currentColor'}/>
          </svg>
      </div>


    </div>
  )
}

export default ArrowIcon