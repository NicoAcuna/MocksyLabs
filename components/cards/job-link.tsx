import Link from 'next/link'
import React from 'react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import { JobListing } from '../../constants/types'

type Props = {
    jobListing: JobListing
}

function JobLink({ jobListing }: Props ) {

    return (
        <Link href={`/careers/${jobListing.name}`}>
            <section className='flex justify-between cursor-pointer group items-center mb-6 group' >
                <section>
                    <p className='font-bold group-hover:translate-x-2 transition-all duration-300'>{jobListing.name}</p>
                    <p className='text-[14px] group-hover:translate-x-2 transition-all duration-300'>{jobListing.location}</p>
                </section>
                <ArrowIcon className='transition-all duration-300 rotate-180 group-hover:translate-x-2' />
            </section>
        
        </Link>
    )
}

export default JobLink
