

import React from 'react'
import { IconBaseProps } from '../../constants/types'

interface Props extends IconBaseProps { }

function Facebook({ className, onClick, href }: Props) {

  const showCursor = href || onClick;

  return (
    <a
      href={href}
      target='_blank'
      rel="noreferrer"
    >
      <div className={`${showCursor ? "cursor-pointer " : " "}` + className} onClick={onClick}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M18.7574 10.7574C19.8826 9.63214 21.4087 9 23 9H26C26.5523 9 27 9.44772 27 10V14C27 14.5523 26.5523 15 26 15H23V17H26C26.3079 17 26.5987 17.1419 26.7882 17.3846C26.9777 17.6273 27.0448 17.9438 26.9701 18.2425L25.9701 22.2425C25.8589 22.6877 25.4589 23 25 23H23V30C23 30.5523 22.5523 31 22 31H18C17.4477 31 17 30.5523 17 30V23H15C14.4477 23 14 22.5523 14 22V18C14 17.4477 14.4477 17 15 17H17V15C17 13.4087 17.6321 11.8826 18.7574 10.7574ZM23 11C21.9391 11 20.9217 11.4214 20.1716 12.1716C19.4214 12.9217 19 13.9391 19 15V18C19 18.5523 18.5523 19 18 19H16V21H18C18.5523 21 19 21.4477 19 22V29H21V22C21 21.4477 21.4477 21 22 21H24.2192L24.7192 19H22C21.4477 19 21 18.5523 21 18V15C21 14.4696 21.2107 13.9609 21.5858 13.5858C21.9609 13.2107 22.4696 13 23 13H25V11H23Z" fill="black" />
        </svg>
      </div>
    </a>
  )
}

export default Facebook