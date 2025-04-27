import React from "react";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import EmailIcon from "../../assets/icons/EmailIcon";
import Button from "../../components/core/button";
import JobListingLinkList from "../../components/lists/job-listing-link-list";
import Testimonials from "../../components/testimonials";
import { jobListingCategoriesData } from "../../constants/data/job-listing-categories";
import { testimonialsData } from "../../constants/data/testimonials";
import CareersImage1 from "../../assets/images/careers-image-1.png";
import BackgroundImage from "../../assets/images/careers-background.png";

import UserCard1 from "../../assets/images/user-card.png";
import UserCard2 from "../../assets/images/user-card-2.png";
import UserCard3 from "../../assets/images/user-card-3.png";
import Semicircle from "../../assets/images/careers-semicircle.png";
import Head from "next/head";
import CTA from "../../components/cta";
import WorkHardPlayHard from "../../components/work-hard-play-hard";
import { useRouter } from "next/router";
import Link from "next/link";

function Careers() {
  function renderJobListingLinks() {
    return jobListingCategoriesData.map((jobListingCategory, index) => (
      <JobListingLinkList key={index} category={jobListingCategory} />
    ));
  }

  const router = useRouter();

  const scrollToJobOpenings = () => {
    document.querySelector("#job-openings")?.scrollIntoView();
  }

  return (
    <main id={"Careers"}>
      <Head>
        <title>Careers</title>
        <meta
          name="description"
          content="Mosafe is looking for talented individuals who share our vision of creating a safer and healthier workplace for everyone. Browse our job listings now!"
        ></meta>
        <meta name="keywords" content="Job opportunities, Brisbane product roles" />
      </Head>
      <section className="bg-purple-light flex flex-col items-center mt-14">
        <section
          className="flex flex-col items-center bg-white w-full pt-4 pb-20"
          style={{
            backgroundImage: `url(${BackgroundImage.src})`,
            objectFit: "cover",
            backgroundPosition: "center bottom",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <section className="mosafe-section md:grid md:grid-cols-3 gap-x-20">
            <section className="flex items-center">
              <img
                className="w-[160px] mr-6 mt-[-16rem] hidden lg:block"
                src={UserCard1.src}
              />
              <img
                className="w-[160px] mb-[-20rem] hidden lg:block"
                src={UserCard2.src}
              />
            </section>

            <section className="flex flex-col items-center">
              <h1 className="text-purple-base mb-4 font-bold text-[18px]">
                Careers at Mosafe
              </h1>
              <h3 className="text-center text-[38px] font-extrabold leading-tight mb-8">
                Create something
                <br /> remarkable
              </h3>
              <Button
                onClick={scrollToJobOpenings}
                text="See open positions"
                icon={<ArrowIcon alignment="right" />}
                className="py-2"
              />
            </section>
            <section className="flex flex-col items-start">
              <img
                className="w-[110px] hidden lg:block ml-14 mb-8 mt-[-5rem]"
                src={Semicircle.src}
              />
              <img
                className="w-[160px] hidden lg:block mt-10"
                src={UserCard3.src}
              />
            </section>
          </section>
        </section>
        <section className="mosafe-section py-14 flex flex-col items-center">
          <h3 className="text-center text-[32px] font-extrabold mb-6">
            Your next big career move
          </h3>
          <p className="text-center text-[20px] md:w-[60%]">
            Mosafe is a safety management platform for individuals and teams that deal with safety on a daily basis. Our vision is to create a fundamental shift in the culture and management of workplace safety.
            <br></br>
            <br></br>
            We&apos;re a team of makers who celebrate inclusiveness and authenticity in our community. Check out the positions that we&apos;re hiring for in our Brisbane head office and remotely around Australia.

          </p>
        </section>
      </section>

      <Testimonials testimonials={testimonialsData} />
      <WorkHardPlayHard cta={scrollToJobOpenings} />

      <section className="mosafe-section md:grid md:grid-cols-2 gap-x-20">
        <img src={CareersImage1.src} className="rounded-2xl " />
        <section>
          <h3 className="font-extrabold text-[32px] my-6">Our vision</h3>
          <p className="text-[20px] mb-6">
            To help teams thrive by empowering people to effortlessly take control of their safety enabling them to take part in the global reduction of workplace related incidents, spreading a little joy as we go.
          </p>
          <Button
            text="Learn more"
            onClick={() => router.push('/about-us')}
            className="btn-variant-white"
            icon={<ArrowIcon alignment="right" />}
          />
        </section>
      </section>

      <section className="bg-purple-light md:py-14">
        <section className="mosafe-section grid grid-cols-1 sm:grid-cols-2">
          <section className="my-8 md:my-0">
            <h1 className="text-[32px] font-extrabold ">Get in touch</h1>
            <p className="text-[20px]">Shoot us a message, we&apos;re a friendly bunch!</p>
          </section>

          <Link
            href='/contact-us'
          >
          <section className="flex justify-between items-center bg-white rounded-lg px-6 py-4 md:py-8 cursor-pointer">
            <section className="flex items-center">
              <section className="bg-purple-light p-4 h-min rounded-xl justify-center flex items-center mr-6">
                <EmailIcon />
              </section>
              <section className="md:flex-col ">
                <p className="font-bold text-[24px]">Contact us</p>
                <p className="hidden md:block text-[18px] text-grey-base">
                  We are located in sunny{" "}
                  <span className="font-bold">Brisbane, Australia.</span>
                </p>
              </section>
            </section>

            <ArrowIcon alignment="right" />
          </section>
          </Link>

        </section>
      </section>

      <section className="mosafe-section" id="job-openings">
        <h3 className="font-extrabold text-[32px] md:text-[44px] my-10">
          Job openings
        </h3>
        <section className="md:grid md:grid-cols-3 gap-x-8">
          {renderJobListingLinks()}
        </section>
      </section>

      <CTA variant="Ship" />
    </main>
  );
}

export default Careers;
