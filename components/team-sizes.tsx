import React, { useState } from 'react'
import { TeamSize } from '../constants/types'
import TeamSizeCard from './cards/team-size-card'

type Props = {
	teamSizes: Array<TeamSize>
}

function TeamSizes({ teamSizes }: Props) {
	const [selectedTeamSize, setSelectedTeamSize] = useState<TeamSize>(teamSizes[0])

	function renderTeamSizeCards() {
		return teamSizes.map((teamSize, index) => (
			<TeamSizeCard
				teamSize={teamSize}
				key={index}
				isSelected={teamSize.name === selectedTeamSize.name}
				onClick={() => setSelectedTeamSize(teamSize)}
			/>
		))
	}

	return (
		<div className='mosafe-section'>
			<h3 className='text-[32px] sm:text-[44px] font-extrabold text-center mb-6'>Compliance solutions for teams any size</h3>

			<div className='flex flex-col sm:flex-row sm:justify-between mb-10'>{renderTeamSizeCards()}</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-x-10'>
				<div className='sm:order-2 mb-6'>
					<h3 className='text-[24px] font-semibold mb-4'>{selectedTeamSize.title}</h3>
					<p>{selectedTeamSize.text}</p>
				</div>
				<img src={selectedTeamSize.image.src} className='sm:order-1' />
			</div>
		</div>
	)
}

export default TeamSizes
