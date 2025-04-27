import React from "react";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import FAQCard from "../../components/cards/faq-card";
import SectionCard from "../../components/cards/section-card";
import Button from "../../components/core/button";
import { FAQList } from "../../constants/data/faqs";

function FAQS() {
  function renderQuestions() {
    return FAQList.map((faq, index) => <FAQCard faq={faq} key={index} />);
  }

  return (
    <div className="sm:grid sm:grid-cols-2 mb-16">
      <div className="sm:flex flex-col mb-12">
        <div className="md:col-span-1 mb-8">
          <p className="text-purple-base font-bold text-[18px] mt-16 mb-2 md:mt-0 md:mb-0">
            Frequently Asked Questions
          </p>
          <h3 className="font-extrabold text-[32px] mb-4 max-w-[280px]">
            FAQs
          </h3>
          <p>
            Anything else on your mind?
            <br></br>
          </p>
        </div>
        <Button
          text="Leave us some feedback"
          className="btn-variant-black"
          icon={<ArrowIcon alignment="right" />}
          onClick={() => null}
        />
      </div>
      <div className="">{renderQuestions()}</div>
    </div>
  );
}

export default FAQS;
