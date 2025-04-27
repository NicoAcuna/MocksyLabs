import React, { useState } from "react";
import MosafeManImage1 from "../assets/images/mosafe-man-1.png";
import MosafeManImage2 from "../assets/images/mosafe-man-2.png";
import WorkHardImage1 from "../assets/images/work-hard-1.png";
import WorkHardImage2 from "../assets/images/work-hard-2.jpg";
import WorkHardImage3 from "../assets/images/work-hard-3.png";
import OurCultureImage from "../assets/images/our-culture.png";
import PlayHardImage1 from "../assets/images/play-hard-1.png";
import PlayHardImage2 from "../assets/images/play-hard-2.png";
import PlayHardImage3 from "../assets/images/play-hard-3.png";
import FunStuffImage from "../assets/images/fun-stuff.png";
import Button from "./core/button";
import { JobListing } from "../constants/types";
import JobListingLinkList from "./lists/job-listing-link-list";
import Link from "next/link";
import ArrowIcon from "../assets/icons/ArrowIcon";
import { jobListingsData } from "../constants/data/job-listings";

type Props = {
  cta: () => void
}

function WorkHardPlayHard({
  cta
}: Props) {
  const [currentTab, setCurrentTab] = useState<"Work hard" | "Play hard">(
    "Work hard"
  );

  function renderJobListingLinks(jobListings: Array<JobListing>) {
    return jobListings.map((jobListing, index) => (
      <Link href={jobListing.slug} key={index}>
        <div className="flex items-center justify-between cursor-pointer group mb-6">
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
    <section className="mosafe-section">
      <section className="flex justify-between md:flex-row flex-col mb-14">
        <h3 className="text-[38px] font-extrabold text-center mb-4">
          Working at Mosafe
        </h3>
        <div className="grid md:grid-cols-2 md:w-1/2 gap-y-4 ">
          <div
            onMouseEnter={() =>
              currentTab !== "Work hard" && setCurrentTab("Work hard")
            }
            className={`${
              currentTab === "Work hard" ? "bg-purple-light" : ""
            } cursor-pointer border-[1px] border-purple-light transition-colors duration:150 rounded-2xl px-2 py-2 md:w-fit pr-12 flex items-center`}
          >
            <img
              className="h-[60px] mr-4 bg-white p-2 rounded-md"
              src={MosafeManImage1.src}
            />
            <p className="text-[18px] font-bold">Work hard</p>
          </div>
          <div
            onMouseEnter={() =>
              currentTab !== "Play hard" && setCurrentTab("Play hard")
            }
            className={` ${
              currentTab === "Play hard" ? "bg-purple-light" : ""
            } cursor-pointer border-[1px] border-purple-light transition-colors duration:150 rounded-2xl px-2 py-2 md:w-fit pr-12 flex items-center`}
          >
            <img
              className="h-[60px] mr-4 bg-white p-2 rounded-md"
              src={MosafeManImage2.src}
            />
            <p className="text-[18px] font-bold">Play hard</p>
          </div>
        </div>
      </section>
      {currentTab === "Work hard" ? (
        <section className="grid grid-cols-2 md:flex gap-4">
          <img className="md:w-[15%]" src={OurCultureImage.src} />
          <img
            className="md:w-[25%] h-full object-cover rounded-xl"
            src={WorkHardImage1.src}
          />
          <section className="md:w-[35%] flex flex-col col-span-2">
            <img src={WorkHardImage2.src} className="mb-4 md:mb-0" />
            <section className="flex flex-col justify-end h-full">
              {renderJobListingLinks(jobListingsData.slice(0, 2))}
              <Button
                text="View all jobs"
                onClick={cta}
                className="btn-variant-black"
              />
            </section>
          </section>
          <img
            className="md:w-[25%] hidden md:block"
            src={WorkHardImage3.src}
          />
        </section>
      ) : (
        <section className=" grid grid-cols-2 md:flex gap-4">
          <img className="md:w-[15%]" src={FunStuffImage.src} />
          <img
            className="md:w-[25%]  h-full object-cover rounded-xl"
            src={PlayHardImage1.src}
          />
          <section className="md:w-[35%] flex flex-col col-span-2">
            <img src={PlayHardImage2.src} className="mb-4 md:mb-0" />
            <section className="flex flex-col justify-end h-full">
              {renderJobListingLinks(jobListingsData.slice(2, 4))}
              <Button
                text="View all jobs"
                onClick={() => null}
                className="btn-variant-black"
              />
            </section>
          </section>
          <img
            className="md:w-[25%] hidden md:block"
            src={PlayHardImage3.src}
          />
        </section>
      )}
    </section>
  );
}

export default WorkHardPlayHard;
