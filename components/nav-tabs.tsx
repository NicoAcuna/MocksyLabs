import React, { ReactElement } from 'react'
import ArrowIcon from '../assets/icons/ArrowIcon'
import NavIconCard from './cards/nav-icon-card'
import { ImageLinkView, NavIconCard as NavIconCardType, NavLink } from '../constants/types'
import { companyTabIcons, companyTabImageData, discoverTabHelpCentreIcons, discoverTabImageData, discoverTabLearnIcons, featuresTabIcons, featuresTabImageData, featuresTabTopFeaturesLinks, solutionsTabIcons, solutionsTabIndustriesLinks, solutionsTabMosafeForLinks, solutionsTabTeamSizeLinks } from '../constants/data/header'
import Link from 'next/link'

const renderImageLinkView = ({ src, description, title, link }: ImageLinkView) => {
    return <>
        <div className='font-bold mb-4'>{title}</div>
        <div className='flex justify-between gap-8 md:grid md:grid-cols-2 md:gap-0'>
            <img src={src} className='w-1/2 md:w-[75%]' />
            <div>
                <div className='text-grey-base text-[13px] mb-4'>{description}</div>
                <a className='flex gap-3 items-center font-medium text-[13px] cursor-pointer w-fit' href={link}>Learn More <ArrowIcon alignment='right' /></a>
            </div>
        </div>
    </>
}

const renderMappedLink = ({item, isComingSoon, link }: NavLink, index: number): ReactElement => {
    if (isComingSoon) return <div key={index} className='flex gap-4 items-center mb-6'>
        <div className='font-semibold text-grey-light w-fit'>{item}</div>
        <div className='text-purple-base text-[10px] px-[6px] py-[2px] bg-white rounded-lg'>Coming soon</div>

    </div>

    else return <Link href={link}>
        <div key={index} className='mb-6 font-semibold cursor-pointer w-fit hover:text-purple-base transition-all duration-300'>{item}</div>
    </Link>
}

const renderNavIconCards = (iconList: NavIconCardType[]) => {
    return iconList.map((iconDetails: NavIconCardType, index: number) => <NavIconCard key={index} navIcon={iconDetails} />)
}

export function FeaturesTab() {

    return <section id='Features'>
            <p className='text-purple-base text-[13px] font-medium mb-[1rem]'>The Mosafe Platform</p>

            <section className='md:grid md:grid-cols-2'>
                {renderNavIconCards(featuresTabIcons)}
            </section>

            <div className='border-b-[1px] border-secondary-dark my-4 md:hidden'/>

            {renderImageLinkView(featuresTabImageData)}

            <div className='border-b-[1px] border-secondary-dark my-8'/>

            <p className='text-purple-base text-[13px] font-medium mb-6'>Top Features</p>

            <section className='md:grid md:grid-cols-2'>

            {featuresTabTopFeaturesLinks.map((feature, index) => renderMappedLink(feature, index))}

            </section>


        </section>
}

export function SolutionsTab() {

    return <section id='Solutions'>
            <p className='text-purple-base text-[13px] font-medium mb-[1rem]'>Use Cases</p>

            <section className='md:grid md:grid-cols-2'>
                {renderNavIconCards(solutionsTabIcons)}
            </section>

            <div className='border-b-[1px] border-secondary-dark my-6'/>

            <section className='md:grid md:grid-cols-2'>

                <section>
                    <p className='text-purple-base text-[13px] font-medium mb-6'>Mosafe for...</p>

                    {solutionsTabMosafeForLinks.map((group, index) => renderMappedLink(group, index))}

                </section>


                <div className='border-b-[1px] border-secondary-dark my-6 md:hidden'/>

                <section>

                    <p className='text-purple-base text-[13px] font-medium mb-6'>Industries</p>

                    {solutionsTabIndustriesLinks.map((industry, index) => renderMappedLink(industry, index))}

                </section>


            </section>


            <div className='border-b-[1px] border-secondary-dark my-6'/>

            <p className='text-purple-base text-[13px] font-medium mb-6'>Team Size</p>

            {solutionsTabTeamSizeLinks.map((team, index) => renderMappedLink(team, index))}


        </section>
}

export function DiscoverTab() {

    return <section id='Discover'>
            <p className='text-purple-base text-[13px] font-medium mb-[1rem]'>Help Centre</p>

            <section className='md:grid md:grid-cols-2'>
                {renderNavIconCards(discoverTabHelpCentreIcons)}
            </section>

            <section className='border-b-[1px] border-secondary-dark my-6'/>

            <p className='text-purple-base text-[13px] font-medium mb-6'>Learn</p>

            <section>
                {renderNavIconCards(discoverTabLearnIcons)}
            </section>

            <section className='border-b-[1px] border-secondary-dark my-6'/>

            {renderImageLinkView(discoverTabImageData)}


        </section>
}

export function CompanyTab() {

    return <section id='Company'>
            <p className='text-purple-base text-[13px] font-medium mb-4 md:mb-8'>Company</p>

            <section className='md:grid md:grid-cols-2'>
                {renderNavIconCards(companyTabIcons)}
            </section>

            <div className='border-b-[1px] border-secondary-dark my-6 md:hidden'/>

            {renderImageLinkView(companyTabImageData)}

        </section>
}
