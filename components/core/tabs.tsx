import React from 'react'

type TabData = {
    tabName: string
    index: number
}

type Props = {
    tabs: string[]
    setTab: (tab: TabData) => void
    activeTab: string
}

function Tabs({ tabs, setTab, activeTab}: Props) {
    
    return (
        <section className='bg-purple-light p-8 w-full rounded-[24px_24px_2px_2px] flex justify-between px-[10%]'>
            {tabs.map((tab, index) => {
                return <p key={index} onClick={() => setTab({ tabName: tab, index })}
                className={`font-medium text-[16px] transition-all cursor-pointer ${tab === activeTab ? 'text-black' : 'text-grey-light'} `}>{tab}</p>
            })}
        </section>
    )
}

export default Tabs
