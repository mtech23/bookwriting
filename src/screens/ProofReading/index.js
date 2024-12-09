import React from "react";
import UserLayout from "../../components/Layout/UserLayout";
import InnerHero from "../../components/InnerHero";
import Section2 from "../../components/Section2";
import CustomCategory from "../../components/CustomCategory";
import SecondCustomBanner from "../../components/SecondCustomBanner";
import FirstCustomBanner from "../../components/FirstCustomBanner";
import PublishBook from "../../components/PublishBook";
import Testimonial from "../../components/Testimonial";
import CustomPublication from "../../components/CustomPublication";
import Faq from "../../components/Faq";
import GetTouch from "../../components/GetTouch";

import { bookMarketingImg2, proofReadingImg2 } from "../../asserts/images";

const ProofReading = () => {
  return (
    <>
      <UserLayout>
        <InnerHero
          innerheroclass="proofReadingBg"
          title="A Fresh Set Of"
          subtitle=" Eyes"
          title2=" For Flawless Writing"
          para="At Falcon Book Writing, we make sure your work gets the professional editing and proofreading to make it perfect. We'll catch all those errors to make it even clearer for your work to come out perfect. Let's shine you with the best polished version of your writing."
        />

        <Section2
          innerSec2Class="innerbrilliant_mind_section"
          title="The Final Touch Your   "
          subtitle=" Manuscript "
          title2="Needs"
        //   subtitle1="How we work?"
          description="Our Falcon Book Writing Editing & Proofreading service is essential, after you’ve poured your heart and soul into writing, it’s important to ensure that your work is polished and ready to shine."
          description2="Our expert editors review the manuscript to correct grammatical mistakes, spelling errors, and poorly constructed sentences. They'll check that your ideas would be readable and flow freely without confusion to those reading them. Our proofreading ensures that we keep details such as punctuation, styles, and formats uniformly correct. With our service, you can be sure that your manuscript is the best version of itself before it reaches your readers. Choose us for that extra layer of perfection that will raise your book and make a lasting impression."
          // subtitle1="How we work?"
          // subtitle2="    Tailored Collaborations?"
          // subtitle3="  Expert Guidance"
          image={proofReadingImg2}
          imgClass="proofReadingImg2"
          actions={true}
          btn1="Let’s Get Start"
          btn2="Call Us Now"
        />

        <CustomCategory className="category_section2" />
        <FirstCustomBanner />
        <PublishBook />
        <Testimonial />
        <SecondCustomBanner />
        <CustomPublication />
        <Faq />
        <GetTouch />
      </UserLayout>
    </>
  );
};

export default ProofReading;
