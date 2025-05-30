import React from 'react'
import { IconBaseProps } from '../../constants/types'

interface Props extends IconBaseProps {}

function EmailIcon({ onClick, className }: Props) {
  return (
    <div>
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4 5.5C3.45228 5.5 3 5.95228 3 6.5V18.5C3 19.0477 3.45228 19.5 4 19.5H20C20.5477 19.5 21 19.0477 21 18.5V6.5C21 5.95228 20.5477 5.5 20 5.5H4ZM1 6.5C1 4.84772 2.34772 3.5 4 3.5H20C21.6523 3.5 23 4.84772 23 6.5V18.5C23 20.1523 21.6523 21.5 20 21.5H4C2.34772 21.5 1 20.1523 1 18.5V6.5Z" fill="#A857FC"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M1.18085 5.92662C1.49757 5.47417 2.1211 5.36414 2.57355 5.68085L12.0001 12.2794L21.4266 5.68085C21.8791 5.36414 22.5026 5.47417 22.8193 5.92662C23.136 6.37907 23.026 7.0026 22.5735 7.31932L12.5735 14.3193C12.2292 14.5603 11.7709 14.5603 11.4266 14.3193L1.42662 7.31932C0.974174 7.0026 0.864139 6.37907 1.18085 5.92662Z" fill="#A857FC"/>
        </svg>
    </div>
  )
}

export default EmailIcon