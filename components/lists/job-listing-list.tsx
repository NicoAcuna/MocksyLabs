

import React from 'react'
import { JobListing } from '../../constants/types'
import JobListingCard from '../cards/job-listing-card'

type Props = {
    jobListings: Array<JobListing>
}

function JobListingList({ jobListings }: Props) {

    function renderJobListingCards(){
        return jobListings.map(jobListing => <JobListingCard jobListing={jobListing} key={jobListing.slug}/>)
    }
  return (
    <div className="card-list">
        { renderJobListingCards() }
    </div>
  )
}

export default JobListingList