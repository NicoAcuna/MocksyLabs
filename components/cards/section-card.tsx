

import Link from 'next/link'
import React from 'react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import Check from '../../assets/icons/Check'
import { Colors } from '../../constants/colors'
import { Section } from '../../constants/types'
import { useBreakpoint } from '../../util/use-breakpoint'

type Props = {
    section: Section,
    imageAlignment: "right" | "left",
}

function SectionCard({ section, imageAlignment }: Props) {
    const breakpoint = useBreakpoint()

    const renderAttributes = () => {
        if (!section.attributes) return

        return section.attributes.map((attr, index) => {
            return <section className='flex gap-2 mb-3' key={index} >
                <Check color='#A857FC' />
                <p>{attr}</p>
            </section>
        })
    }

    return (
        <section className={`grid grid-cols-1 sm:p-10 lg:grid-cols-2 justify-items-center mb-6`}>

            <div className={`px-[10%] pt-2 ${breakpoint === "DESKTOP" && imageAlignment === "left" ? "order-2" : ""}`}>
                <h3 className="text-[33px] lg:text-[44px] font-extrabold mb-4">{section.title}</h3>
                <p>{section.text}</p>
                {!!section.link && (
                    <Link href={section.link}>
                        <div className="flex items-center my-8 cursor-pointer group w-fit">
                            <p className="underline text-link-base mr-4">Find out more</p>
                            <ArrowIcon
                                alignment="right"
                                color={Colors.LINK_BASE}
                                className='group-hover:translate-x-2 transition-all duration-300'
                            />
                        </div>
                    </Link>
                )}
                {section.attributes && renderAttributes()}
            </div>
            <img
                className={`px-4 ${breakpoint === "DESKTOP" && imageAlignment === "left" ? "order-1" : ""}`}
                src={section.image.src}
                alt={section.title}
            />

        </section>
    )
}

export default SectionCard