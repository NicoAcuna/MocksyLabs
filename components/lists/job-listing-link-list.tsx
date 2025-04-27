import Link from "next/link";
import React from "react";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import { jobListingsData } from "../../constants/data/job-listings";
import { JobListingCategory } from "../../constants/types";

type Props = {
  category: JobListingCategory;
};

function JobListingLinkList({ category }: Props) {
  const jobListings = jobListingsData.filter(
    (jobListing) => jobListing.category === category
  );

  function renderJobListingLinks() {
    return jobListings.map((jobListing, index) => (
      <Link href={jobListing.slug} className="" key={index}>
        <div className="flex items-center justify-between mb-2 cursor-pointer group">
          <div className="flex flex-col">
            <p className="font-bold group-hover:text-purple-base transition-all duration-300">
              {jobListing.name}
            </p>
            <p className=" font-normal text-[14px]">{jobListing.location}</p>
          </div>
          <ArrowIcon
            alignment="right"
            className="transition-all group-hover:translate-x-2 duration-300 group-hover:text-purple-base"
          />
        </div>
      </Link>
    ));
  }

  return (
    <div className="mb-6">
      <h3 className="text-purple-base text-[20px] font-bold mb-6">
        {category}
      </h3>
      {renderJobListingLinks()}
    </div>
  );
}

export default JobListingLinkList;
