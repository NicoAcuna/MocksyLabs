

import React from 'react'
import { IconBaseProps } from '../../constants/types'

interface Props extends IconBaseProps { }

function DocumentManagement({ className, onClick }: Props) {
  return (
    <div className={`${onClick ? "cursor-pointer " : " "}` + className} onClick={onClick}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M1.10555 16.553C1.35254 16.059 1.95321 15.8588 2.44719 16.1058L12 20.8822L21.5528 16.1058C22.0467 15.8588 22.6474 16.059 22.8944 16.553C23.1414 17.047 22.9412 17.6477 22.4472 17.8946L12.4472 22.8946C12.1657 23.0354 11.8343 23.0354 11.5528 22.8946L1.55276 17.8946C1.05878 17.6477 0.858558 17.047 1.10555 16.553Z" fill="black" />
        <path fillRule="evenodd" clipRule="evenodd" d="M1.10555 11.553C1.35254 11.059 1.95321 10.8588 2.44719 11.1058L12 15.8822L21.5528 11.1058C22.0467 10.8588 22.6474 11.059 22.8944 11.553C23.1414 12.047 22.9412 12.6477 22.4472 12.8946L12.4472 17.8946C12.1657 18.0354 11.8343 18.0354 11.5528 17.8946L1.55276 12.8946C1.05878 12.6477 0.858558 12.047 1.10555 11.553Z" fill="black" />
        <path fillRule="evenodd" clipRule="evenodd" d="M11.5528 1.10557C11.8343 0.964809 12.1657 0.964809 12.4472 1.10557L22.4472 6.10557C22.786 6.27496 23 6.62123 23 7C23 7.37877 22.786 7.72504 22.4472 7.89443L12.4472 12.8944C12.1657 13.0352 11.8343 13.0352 11.5528 12.8944L1.55279 7.89443C1.214 7.72504 1 7.37877 1 7C1 6.62123 1.214 6.27496 1.55279 6.10557L11.5528 1.10557ZM4.23607 7L12 10.882L19.7639 7L12 3.11803L4.23607 7Z" fill="black" />
      </svg>

    </div>
  )
}

export default DocumentManagement