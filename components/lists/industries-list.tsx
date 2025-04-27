

import React from 'react'
import { Industry } from '../../constants/types'
import IndustryCard from '../cards/industry-card'

type Props = {
    industries: Array<Industry>
}

function IndustriesList({ industries }: Props) {

    function renderIndustryCards(){
        return industries.map(industry => (
            <IndustryCard 
            key={industry.slug}
            industry={industry}
            />
        ))
    }

  return (
    <div className={"card-list"}>
        { renderIndustryCards() }
    </div>
  )
}

export default IndustriesList