

import React from 'react'
import { IconBaseProps } from '../../constants/types'

interface Props extends IconBaseProps {}

function Close({ className, onClick }: Props) {
  return (
    <div className={`${ onClick ? "cursor-pointer " : " "}` + className} onClick={onClick}>
      <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 23L28.9706 6.02944" stroke="#646167" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 6L28.9706 22.9706" stroke="#646167" strokeWidth="2" strokeLinecap="round" />
      </svg>



    </div>
  )
}

export default Close