import React from 'react'
import { UseCase } from '../../constants/types'
import UseCaseCard from '../cards/use-case-card'

type Props = {
	useCases: Array<UseCase>
}

function UseCasesList({ useCases }: Props) {
	function renderUseCaseCards() {
		return useCases.map((useCase) => <UseCaseCard key={useCase.slug} useCase={useCase} />)
	}

	return (
		<div className='flex flex-col items-center mosafe-section'>
			<div className='card-list'>{renderUseCaseCards()}</div>
		</div>
	)
}

export default UseCasesList
