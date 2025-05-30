import React from 'react'
import { IconBaseProps } from '../../constants/types'

interface Props extends IconBaseProps {}

function TickIcon({ className, onClick }: Props) {

  return (
    <div className={" " + className}>
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M17.7071 0.792893C18.0976 1.18342 18.0976 1.81658 17.7071 2.20711L6.70711 13.2071C6.31658 13.5976 5.68342 13.5976 5.29289 13.2071L0.292893 8.20711C-0.0976311 7.81658 -0.0976311 7.18342 0.292893 6.79289C0.683417 6.40237 1.31658 6.40237 1.70711 6.79289L6 11.0858L16.2929 0.792893C16.6834 0.402369 17.3166 0.402369 17.7071 0.792893Z" fill="#A857FC"/>
        </svg>

    </div>
  )
}

export default TickIcon