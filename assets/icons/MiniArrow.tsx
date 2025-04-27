

import React from 'react'
import { IconBaseProps } from '../../constants/types'

interface Props extends IconBaseProps {}

function MiniArrow({ className, onClick }: Props) {
  return (
    <div className={`${ onClick ? "cursor-pointer " : " "}` + className} onClick={onClick}>
      <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.41988 6.11008C4.90622 6.62997 4.09378 6.62997 3.58012 6.11008L0.409458 2.90096C-0.451112 2.02995 0.135057 0.5 1.32934 0.5L7.67066 0.500001C8.86494 0.500001 9.45111 2.02995 8.59054 2.90096L5.41988 6.11008Z" fill="currentColor" />
      </svg>
    </div>
  )
}

export default MiniArrow