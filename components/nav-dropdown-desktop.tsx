import React, { ReactElement } from 'react'
import { CompanyTabDesktop, DiscoverTabDesktop, FeaturesTabDesktop, SolutionsTabDesktop } from './nav-tabs-desktop'

export type NavbarTab = 'Features' | 'Solutions' | 'Discover' | 'Company' | 'Pricing'

type Props = {
	selectedTab: NavbarTab
}

function NavDropDownDesktop({ selectedTab }: Props) {
	const renderLinkContentSwitch = (): ReactElement => {
		switch (selectedTab) {
			case 'Features':
				return <FeaturesTabDesktop />
			case 'Solutions':
				return <SolutionsTabDesktop />
			case 'Discover':
				return <DiscoverTabDesktop />
			case 'Company':
				return <CompanyTabDesktop />
			case 'Pricing':
				return <div />
			default:
				return <div />
		}
	}

	return <div className={` py-10 ${!selectedTab && 'hidden'} mosafe-section`}>{renderLinkContentSwitch()}</div>
}

export default NavDropDownDesktop
