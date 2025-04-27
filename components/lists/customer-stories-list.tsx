import React from 'react'
import { CustomerStory } from '../../constants/types'
import CustomerStoryCard from '../cards/customer-story-card'

type Props = {
	customerStories: Array<CustomerStory>
}

function CustomerStoriesList({ customerStories }: Props) {
	function renderCustomerStoryCards() {
		return customerStories.map((customerStory) => <CustomerStoryCard customerStory={customerStory} key={customerStory.slug} />)
	}

	return <div className='card-list mosafe-section'>{renderCustomerStoryCards()}</div>
}

export default CustomerStoriesList
