import Link from 'next/link'
import React from 'react'
import { NavIconCard } from '../../constants/types'

type Props = {
    navIcon: NavIconCard
}

function NavIconCard({ navIcon }: Props) {
    return <Link href={navIcon.link}>
        <section className='flex gap-4 mb-4 hover:text-purple-base hover:scale-105 transition-all duration-300 cursor-pointer ' >
            {navIcon.icon}
            <section>
                <p className='font-bold text-[16px]'>{navIcon.title}</p>
                <p className='text-[13px] text-grey-base'>{navIcon.desc}</p>
            </section>

        </section>
    </Link>
}

export default NavIconCard
