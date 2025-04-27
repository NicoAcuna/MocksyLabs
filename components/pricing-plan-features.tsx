import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Check from '../assets/icons/Check'
import ChevronIcon from '../assets/icons/ChevronIcon'
import { planFeaturesData, pricingPlansData } from '../constants/data/pricing-plans'
import Button from './core/button'
import MouseoverPopup from './core/mouseover-popup'

function PricingPlanFeatures() {

    const router = useRouter()

    const [currentPlanIndex, setCurrentPlanIndex] = useState<number>(0)

    const changePlanOrder = (direction: 'NEXT' | 'PREVIOUS') => {
        if (direction === 'NEXT') {
            setCurrentPlanIndex(currentPlanIndex + 1)
            if (currentPlanIndex === pricingPlansData.length - 1) setCurrentPlanIndex(0)
        }
        else {
            setCurrentPlanIndex(currentPlanIndex - 1)
            if (currentPlanIndex === 0) setCurrentPlanIndex(pricingPlansData.length - 1)
        }
    }

    const renderTeamRow = () => {

        return <div className='col-span-2 md:col-span-4 grid grid-cols-2 md:grid-cols-[4fr_1fr_1fr_1fr] md:gap-x-[60px] md:gap-y-8 gap-x-4 gap-y-8 sticky top-0 z-50 bg-white py-2 h-[172px]'>
            <div></div>
            {pricingPlansData.map((plan, index) => {
                return <section className={`mx-auto text-center ${index !== currentPlanIndex && 'hidden md:block'}`} key={index}>
                    <p className='text-[24px] font-bold'>{plan.name}</p>
                    <p className='font-bold text-purple-base mb-4'>{plan.price}</p>
                    {plan.isComingSoon ? <div className='text-purple-base text-[12px] px-[12px] py-[2px] bg-purple-light rounded-lg w-fit mx-auto'>Coming soon</div>
                        : <Button text='Get started' onClick={() => router.push(plan.link)} className='btn-variant-white' />}
                </section>
            })}
        </div>
    }

    const renderPlanFeatures = () => {
        return planFeaturesData.map((planFeature, index) => {
            return <React.Fragment key={index}>

                <div className='border-b-2 border-black pb-4 col-span-2 grid grid-cols-2 gap-4 items-center md:col-span-4 md:block sticky top-[172px] z-40 bg-white h-[90px] md:h-auto'>
                    <p className='font-bold'>{planFeature.title}</p>

                    <section className={`flex gap-2 justify-between items-center py-3 px-3 bg-purple-light rounded-lg h-min ${index !== 0 && 'hidden'} md:hidden`}>
                        <ChevronIcon onClick={() => changePlanOrder('PREVIOUS')} />
                        <p className='text-center font-bold text-[13px]'>Next Plan</p>
                        <ChevronIcon className='rotate-180' onClick={() => changePlanOrder('NEXT')} />

                    </section>

                </div>

                {planFeature.features.map((feature, index) => {
                    return <React.Fragment key={index}>
                        <section className='flex gap-6'>
                            <p className='w-fit'>{feature.name}</p>
                            <MouseoverPopup mouseoverText={feature.mouseOverText} />
                        
                        </section>
                        <section className={`${pricingPlansData[currentPlanIndex].name !== 'Individual Plan' && 'hidden md:block'} mx-auto`}>{feature.plans.individual && <Check color='#A857FC' />}</section>
                        <section className={`${pricingPlansData[currentPlanIndex].name !== 'Business Plan' && 'hidden md:block'} mx-auto`}>{feature.plans.business && <Check color='#A857FC' />}</section>
                        <section className={`${pricingPlansData[currentPlanIndex].name !== 'Enterprise Plan' && 'hidden md:block'} mx-auto`}>{feature.plans.enterprise && <Check color='#A857FC' />}</section>
                    </React.Fragment>
                })}

            </React.Fragment>
        })
    }

    return (
        <section className='grid grid-cols-2 md:grid-cols-[4fr_1fr_1fr_1fr] md:gap-x-[60px] md:gap-y-8 gap-x-4 gap-y-8 '>

            {renderTeamRow()}

            {renderPlanFeatures()}

        </section>
    )
}

export default PricingPlanFeatures
