

import React from 'react'
import { render } from 'react-dom'
import TickIcon from '../../assets/icons/TickIcon'

type Props = {
    attributes: Array<string>
}

function AttributesList({ attributes }: Props) {

    function renderAttributes(){
        return attributes.map((attribute, index) => (
          <div className='mr-6 flex items-center' key={index}>
            <TickIcon className='mr-4'/>
            <p>{ attribute }</p>
          </div>
        ))
      }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
        { renderAttributes() }
    </div>
  )
}

export default AttributesList