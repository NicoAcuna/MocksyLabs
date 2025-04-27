

import React from 'react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import { Colors } from '../../constants/colors'
import { TeamSize } from '../../constants/types'

type Props = {
    teamSize: TeamSize
    isSelected: boolean
    onClick: (teamSize: TeamSize) => void
}

function TeamSizeCard({ teamSize, isSelected, onClick }: Props) {


  return (
     <div 
        className={`flex items-center mb-4 w-full sm:w-[20%] min-w-[200px] rounded-xl px-2 py-2 cursor-pointer border-[1px] border-purple-light ${isSelected ? "bg-purple-light" : "bg-white"}`}
        onClick={() => onClick(teamSize)}
        >
            <div className="bg-white rounded-md p-2 flex items-center justify-center mr-4">
            { teamSize.icon }
            </div>

            <p className="font-semibold text-[18px]">{teamSize.name}</p>
        </div>
  )
}

export default TeamSizeCard