

import React from 'react'
import { IconBaseProps } from '../../constants/types'

interface Props extends IconBaseProps { }

function ArrowDownloadNow({ className, onClick }: Props) {
  return (
    <div className={`${onClick ? "cursor-pointer " : " "}` + className} onClick={onClick}>
      <svg width="142" height="128" viewBox="0 0 142 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M75.3715 1.13607C76.8836 -0.37869 79.3352 -0.37869 80.8472 1.13607L140.779 61.1741C142.338 62.7356 142.338 65.2644 140.779 66.8259L80.8472 126.864C79.3352 128.379 76.8836 128.379 75.3715 126.864C73.8594 125.349 73.8594 122.893 75.3715 121.378L128.777 67.8788H3.87195C1.73353 67.8788 0 66.1422 0 64C0 61.8578 1.73353 60.1212 3.87195 60.1212H128.777L75.3715 6.6215C73.8594 5.10674 73.8594 2.65083 75.3715 1.13607Z" fill="black" />
      </svg>




    </div>
  )
}

export default ArrowDownloadNow