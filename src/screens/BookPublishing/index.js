import React from 'react'
import UserLayout from '../../components/Layout/UserLayout'
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

import {
    
    bookPublishingImg2,
  } from "../../asserts/images";

const BookPublishing = () => {
  return (
    <>
        <UserLayout>

        <InnerHero
          innerheroclass="bookpublishingBg"
          title="Helping Authors Share Their Words with the"
          subtitle=" World"
          para="Falcon Book Writing is professional in making the book publishing process easy for the author. We handle everything, from formatting and design to distribution, ensuring your work is presented to the world professionally. The goal is to make the book available to the reader through various platforms and channels."
        />

        <Section2
        innerSec2Class="innerbrilliant_mind_section"
          title="Reach Your Readers   "
          subtitle="Faster"
          title2="With Our Book Publishing Service"
          description="At Falcon Book Writing, we know that you want to get your book to the reader's hands as quickly as possible. That is why our Book Publishing service is designed to help you move from manuscript to market faster. We streamlined the process so that all the work, from editing and design to distribution and marketing, will be done to make sure your book is ready to be sold in no time."
          description2="Our team goes the extra mile working along with you to guarantee success in your publishing journey. Giving you personalized service to meet all your needs. We take it all off your hands as regards the complexities surrounding publishing and let you do what best you can: write. Whether you are a first-time author or an experienced one. Falcon Book Writing guides you through the world of publishing with ease, getting your book into readers' hands and onto store shelves faster than ever before."
          // subtitle1="How we work?"
          // subtitle2="    Tailored Collaborations?"
          // subtitle3="  Expert Guidance"
          image={bookPublishingImg2}
          imgClass="book-publishingImg2"
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
  )
}

export default BookPublishing