

import React from 'react'
import { IconBaseProps } from '../../constants/types'

interface Props extends IconBaseProps { }

function LinkedIn({ className, onClick, href }: Props) {

  const showCursor = href || onClick;

  return (
    <a
      href={href}
      target='_blank'
      rel="noreferrer"
    >
      <div className={`${showCursor ? "cursor-pointer " : " "}` + className} onClick={onClick}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M9 17C9 16.4477 9.44772 16 10 16H14C14.5523 16 15 16.4477 15 17V29C15 29.5523 14.5523 30 14 30H10C9.44772 30 9 29.5523 9 29V17ZM11 18V28H13V18H11Z" fill="black" />
          <path fillRule="evenodd" clipRule="evenodd" d="M24 17C22.6739 17 21.4021 17.5268 20.4645 18.4645C19.5268 19.4021 19 20.6739 19 22V28H21V22C21 21.2043 21.3161 20.4413 21.8787 19.8787C22.4413 19.3161 23.2043 19 24 19C24.7957 19 25.5587 19.3161 26.1213 19.8787C26.6839 20.4413 27 21.2043 27 22V28H29V22C29 20.6739 28.4732 19.4021 27.5355 18.4645C26.5979 17.5268 25.3261 17 24 17ZM24 15C22.1435 15 20.363 15.7375 19.0503 17.0503C17.7375 18.363 17 20.1435 17 22V29C17 29.5523 17.4477 30 18 30H22C22.5523 30 23 29.5523 23 29V22C23 21.7348 23.1054 21.4804 23.2929 21.2929C23.4804 21.1054 23.7348 21 24 21C24.2652 21 24.5196 21.1054 24.7071 21.2929C24.8946 21.4804 25 21.7348 25 22V29C25 29.5523 25.4477 30 26 30H30C30.5523 30 31 29.5523 31 29V22C31 20.1435 30.2625 18.363 28.9497 17.0503C27.637 15.7375 25.8565 15 24 15Z" fill="black" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11ZM9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12Z" fill="black" />
        </svg>
      </div>
    </a>
  )
}

export default LinkedIn