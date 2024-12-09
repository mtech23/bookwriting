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

const BookVideoTrailer = () => {
  return (
    <>
        <UserLayout>

        <InnerHero
          innerheroclass="bookTrailerBg"
          title="The Perfect Visual Introduction To Your Next "
          subtitle=" Bestseller"
          para="This service is a representation of the essence of your book that will attract more readers through their curiosity and interest in it. The right mix of visuals and storytelling will bring out the brilliance of your book, so it would not leave without making an impact."
        />

        <Section2
        innerSec2Class="innerbrilliant_mind_section"
          title="Show, Don't Just Tell—Let Your Book   "
          subtitle="Shine"
          title2="With A Trailer"
          description="This can be a book trailer or make your story come alive and give people, would-be readers an anticipation of what to look for when they read through. In the same way film trailers create excitement towards their movie, a book video trailer captures the sense and emotions of your book which could not be accomplished word."
          description2="Offering a professional book video trailer that makes your book stand out in the crowd. It is not only about telling your audience what your book is about; it is more about showing them, making an emotional connection, and creating curiosity. A well-made trailer can draw eyeballs, keep your readers interested in your book, and want to pick it up. It is an innovative form of pitching for your work while using video marketing power to make it sparkle and make readers wonder."
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

export default BookVideoTrailer