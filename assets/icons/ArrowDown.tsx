import React from 'react'
import { IconBaseProps } from '../../constants/types'

interface Props extends IconBaseProps { }


function ArrowDown({ className }: Props) {
  return (
    <div className={" " + className}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.6641 2.33268C15.6641 1.41221 14.9179 0.666016 13.9974 0.666016C13.0769 0.666016 12.3307 1.41221 12.3307 2.33268V21.6423L3.50924 12.8208C2.85837 12.17 1.80309 12.17 1.15222 12.8208C0.501344 13.4717 0.501344 14.527 1.15222 15.1779L12.8189 26.8445C13.4698 27.4954 14.525 27.4954 15.1759 26.8445L26.8426 15.1779C27.4934 14.527 27.4934 13.4717 26.8426 12.8208C26.1917 12.17 25.1364 12.17 24.4856 12.8208L15.6641 21.6423V2.33268Z" fill="black" />
      </svg>


    </div>
  )
}

export default ArrowDown