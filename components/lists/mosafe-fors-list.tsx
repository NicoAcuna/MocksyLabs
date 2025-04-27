

import React from 'react'
import { MosafeFor } from '../../constants/types'
import MosafeForCard from '../cards/mosafe-for-card'

type Props = {
    mosafeFors: MosafeFor[]
}

function MosafeForsList({ mosafeFors }: Props) {

    function renderMosafeForCards() {
        return mosafeFors.map((mosafeFor, index) => (
            <MosafeForCard mosafeFor={mosafeFor} key={index} />
        ))
    }

    return (
        <div className="flex flex-col items-center">
            <div className="card-list">
                {renderMosafeForCards()}
            </div>

        </div>
    )
}

export default MosafeForsList