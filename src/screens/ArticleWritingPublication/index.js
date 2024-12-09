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

const ArticleWritingPublication = () => {
  return (
    <>
        <UserLayout>

        <InnerHero
          innerheroclass="ArticleWritingPublicationBg"
          title="Write With"
          subtitle=" Authority,"
          title2=" Publish With"
          subtitle2=" Impact"
          para="Our service will help in creating well-researched, authoritative content that can really catch people's eyes. Our team ensures the article has great appeal and is impactful enough to give proper passage for your ideas to reach a wider audience. Be proud when publishing and leaving an impact in the field."
        />

        <Section2
        innerSec2Class="innerbrilliant_mind_section"
          title="Make Your Mark With   "
          subtitle="Professionally"
          title2=" Written & Published Articles"
          description="You leave an impression and set a record for credibility by professional, written, and published articles. This marks a long-time impression regarding building your credibility in that given field. You will end up taking the audience further with great content that showcases the knowledge and expertise you have. Such articles which are informative, clear and relevant help build the reader's trust, along with reaching to a wider audience."
          description2="Publishing on renowned platforms increases your visibility, thereby strengthening your personal or professional brand. It might be for industry influence, sharing ideas, or networking with like-minded individuals. A well-written article creates an impact, and therefore leaves you your mark."
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

export default ArticleWritingPublication