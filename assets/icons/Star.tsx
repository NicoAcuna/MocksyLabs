

import React from 'react'
import { IconBaseProps } from '../../constants/types'

interface Props extends IconBaseProps {
  color?: string
}

function Star({ className, onClick, color }: Props) {
  return (
    <div className={`${onClick ? "cursor-pointer " : " "}` + className} onClick={onClick}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.53566 19.5884L10.045 14.91L16.6012 19.5884L14.049 12.2597L20.0901 8.27277H12.7378L10.045 0.414062L7.39914 8.27277H0L6.04107 12.2597L3.53566 19.5884Z" fill="#FFCD57" />
      </svg>

    </div>
  )
}

export default Star