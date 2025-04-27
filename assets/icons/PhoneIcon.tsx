

import React from 'react'
import { IconBaseProps } from '../../constants/types'

interface Props extends IconBaseProps { }

function PhoneIcon({ className, onClick }: Props) {
  return (
    <div className={`${onClick ? "cursor-pointer " : " "}` + className} onClick={onClick}>
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M7.47266 3C6.92037 3 6.47266 3.44772 6.47266 4V20C6.47266 20.5523 6.92037 21 7.47266 21H17.4727C18.0249 21 18.4727 20.5523 18.4727 20V4C18.4727 3.44772 18.0249 3 17.4727 3H7.47266ZM4.47266 4C4.47266 2.34315 5.8158 1 7.47266 1H17.4727C19.1295 1 20.4727 2.34315 20.4727 4V20C20.4727 21.6569 19.1295 23 17.4727 23H7.47266C5.8158 23 4.47266 21.6569 4.47266 20V4Z" fill="#A857FC" />
        <path fillRule="evenodd" clipRule="evenodd" d="M11.4727 18C11.4727 17.4477 11.9204 17 12.4727 17H12.4827C13.0349 17 13.4827 17.4477 13.4827 18C13.4827 18.5523 13.0349 19 12.4827 19H12.4727C11.9204 19 11.4727 18.5523 11.4727 18Z" fill="#A857FC" />
      </svg>


    </div>
  )
}

export default PhoneIcon