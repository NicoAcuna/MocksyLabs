import Link from 'next/link'
import React from 'react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import { Colors } from '../../constants/colors'
import { ProductBenefit } from '../../constants/types'

type Props = {
    benefit: ProductBenefit
    setActive: () => void
    isActive: boolean
}

function ProductBenefitCard({ benefit, isActive, setActive }: Props) {
    return <section id={benefit.title} className={`flex flex-col lg:p-6 items-center mb-6 lg:mb-2 lg:w-[30%] lg:min-w-[300px] lg:rounded-[16px] ${isActive && 'lg:bg-purple-light'} lg:border-purple-light lg:border transition-all duration-500`} onMouseOver={() => !isActive && setActive()}>
        <img src={benefit.image.src} className='lg:hidden mb-6 rounded-lg' />
        <section className='flex gap-4'>
            <section className='flex flex-col items-center text-center lg:text-left lg:items-start'>
                <p className='font-semibold text-[20px]'>{benefit.title}</p>
                <p className='my-4'>{benefit.text}</p>
                <Link href={benefit.link ?? '#'}>
                    <section className={`flex items-center ${isActive ? '' : 'lg:opacity-0'} transition-all group cursor-pointer`}>
                        <p className='underline text-link-base mr-2'>Find out more</p>
                        <ArrowIcon
                            alignment='right'
                            color={Colors.LINK_BASE}
                            className='transition-all group-hover:translate-x-2 duration-300' 
                            />
                    </section>
                </Link>
            </section>
        </section>
    </section>
}

export default ProductBenefitCard