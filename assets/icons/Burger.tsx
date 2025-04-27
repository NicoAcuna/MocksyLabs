

import React from 'react'
import { IconBaseProps } from '../../constants/types'

interface Props extends IconBaseProps {}

function Burger({ className, onClick }: Props) {
  return (
    <div className={`${ onClick ? "cursor-pointer " : " "}` + className} onClick={onClick}>
      <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 10H32" stroke="black" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 18H32" stroke="black" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  )
}

export default Burger