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

import { bookMarketingImg2 } from "../../asserts/images";

const BookMarketing = () => {
  return (
    <>
      <UserLayout>
        <InnerHero
          innerheroclass="bookMarketingBg"
          title="Take The Fast Track To Book Sales With"
          subtitle=" Falcon Marketing"
          para="Our expertise works in tactics to gain more interest for your book and get its presence at the correct market. Our marketing technique is on strategies that give your book the lead. It deserves over the rest while making sure the success percentage that can cope up with the competition reaches its mark."
        />

        <Section2
          innerSec2Class="innerbrilliant_mind_section"
          title="Let’s Make Your Book   "
          subtitle=" The Talk "
          title2=" Of The Town"
          // subtitle1="How we work?"
          description="Falcon Book Writing book marketing experts will do for you to ensure your book is the talk of everywhere. We know that the correct network must view or appreciate your piece. Which is why we implement strategies to make it happen. Whether it is your first book or several. We help build buzz and excitement to a point where people do talk. Our service can provide you with marketing plans designed specifically to include social media promotion, targeted campaigns, reviews, and much more. We know how to create a strong presence for your book to make sure it hits readers' desks in a crowded market. Relax knowing that we will take care of the marketing when you choose our service. Let us help make your book a must-read and bestseller!"
          // subtitle1="How we work?"
          // subtitle2="    Tailored Collaborations?"
          // subtitle3="  Expert Guidance"
          image={bookMarketingImg2}
          imgClass="bookMarketingImg2"
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

export default BookMarketing;
