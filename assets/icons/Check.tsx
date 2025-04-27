

import React from 'react'
import { IconBaseProps } from '../../constants/types'

interface Props extends IconBaseProps { 
  color?: string
}

function Check({ className, onClick, color }: Props) {
  return (
    <div className={`${onClick ? "cursor-pointer " : " "}` + className} onClick={onClick}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_15109_10600" maskUnits="userSpaceOnUse" x="2" y="10" width="9" height="9">
          <rect x="2.58789" y="12" width="2" height="9.07445" transform="rotate(-45 2.58789 12)" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_15109_10600)">
          <path fillRule="evenodd" clipRule="evenodd" d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z" fill={color ?? "#4BC0C0"} />
        </g>
        <mask id="mask1_15109_10600" maskUnits="userSpaceOnUse" x="9" y="4" width="13" height="13">
          <rect x="10.415" y="17" width="2.0003" height="15.5558" transform="rotate(-135 10.415 17)" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask1_15109_10600)">
          <path fillRule="evenodd" clipRule="evenodd" d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z" fill={color ?? "#4BC0C0"} />
        </g>
      </svg>


    </div>
  )
}

export default Check