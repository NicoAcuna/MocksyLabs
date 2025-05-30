
import React from 'react'
import { IconBaseProps } from '../../constants/types'

interface Props extends IconBaseProps {
}

function TruckIcon({ className, onClick, color }: Props) {

  return (
    <div className={`${onClick ? "cursor-pointer " : " "}` + className} onClick={onClick} >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M18.5 17C17.6716 17 17 17.6716 17 18.5C17 19.3284 17.6716 20 18.5 20C19.3284 20 20 19.3284 20 18.5C20 17.6716 19.3284 17 18.5 17ZM15 18.5C15 16.567 16.567 15 18.5 15C20.433 15 22 16.567 22 18.5C22 20.433 20.433 22 18.5 22C16.567 22 15 20.433 15 18.5Z" fill={color ?? "black"}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M5.5 17C4.67157 17 4 17.6716 4 18.5C4 19.3284 4.67157 20 5.5 20C6.32843 20 7 19.3284 7 18.5C7 17.6716 6.32843 17 5.5 17ZM2 18.5C2 16.567 3.567 15 5.5 15C7.433 15 9 16.567 9 18.5C9 20.433 7.433 22 5.5 22C3.567 22 2 20.433 2 18.5Z" fill={color ?? "black"}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M15 8C15 7.44772 15.4477 7 16 7H20C20.2652 7 20.5196 7.10536 20.7071 7.29289L23.7071 10.2929C23.8946 10.4804 24 10.7348 24 11V16C24 16.5523 23.5523 17 23 17H16C15.4477 17 15 16.5523 15 16V8ZM17 9V15H22V11.4142L19.5858 9H17Z" fill={color ?? "black"}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M0 3C0 2.44772 0.447715 2 1 2H16C16.5523 2 17 2.44772 17 3V16C17 16.5523 16.5523 17 16 17H1C0.447715 17 0 16.5523 0 16V3ZM2 4V15H15V4H2Z" fill={color ?? "black"}/>
    </svg>

    </div>
  )
}

export default TruckIcon