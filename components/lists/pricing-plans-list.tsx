import React from 'react'
import { PricingPlan } from '../../constants/types'
import PricingPlanCard from '../cards/pricing-plan-card'

type Props = {
    pricingPlans: Array<PricingPlan>
}

function PricingPlansList({ pricingPlans }: Props) {

    const renderPricingPlanCards = () => {
        return pricingPlans.map((plan, index) => {
            return <PricingPlanCard plan={plan} key={index} />
        })
    }

  return (
    <div className=''>
        { renderPricingPlanCards() }
    </div>
  )
}

export default PricingPlansList
