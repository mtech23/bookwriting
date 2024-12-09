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

const EbookWriting = () => {
  return (
    <>
        <UserLayout>

        <InnerHero
          innerheroclass="EbookwritingBg"
          title="eBook Writing"
          subtitle=" Designed"
          title2=" To Keep Readers Hooked"
          para="We at Falcon Book Writing have developed our eBook writing service so that you remain hooked from the beginning till the end. We can create an exciting story full of an interesting plot, relatable characters, and smooth narration. Our idea is to produce eBooks that will make your audience curious and wanting to read more."
        />

        <Section2
        innerSec2Class="innerbrilliant_mind_section"
          title="The Professional eBook You Always   "
          subtitle="Wanted"
          // title2="Let Us Tell Yours"
          description="When you choose Falcon Book Writing's eBook Writing service, you're getting the kind of eBook you've wanted but haven't had – a professional one. When we work with you for creating fiction, nonfiction, or a specialized guide, we take care of all aspects from planning through final polish. It makes it important that the eBook should not just be professional to present but has a soulful feel to help readers who would want to read through until more interesting things are explored. Being assured of excellent writing skills in our writing service guarantees that your eBook will find its way, attracting those you want by standing tall, rather to be in a busy market. Let us turn your thoughts into a polished eBook you'd enjoy sharing."
          // description2="Random House Publishers's book publishing service operates on a foundation of editorial excellence, author-centricity, global reach, innovative marketing, and a commitment to diversity and inclusion. With a team of experienced editors dedicated to refining manuscripts, Random House Publishers ensures that every book meets the highest standards of quality. Authors receive tailored support throughout the publishing process, from development to marketing, enabling them to realize their creative and commercial goals. Leveraging a vast distribution network and cutting-edge marketing strategies, Random House Publishers reaches readers worldwide through various formats and platforms. "
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

export default EbookWriting