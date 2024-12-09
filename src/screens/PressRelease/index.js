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

import { audioImg2 } from "../../asserts/images";

const PressRelease = () => {
  return (
    <>
      <UserLayout>
        <InnerHero
          innerheroclass="PressreleaseBg"
          title="The Ultimate Companions For Your Following"
          subtitle=" Announcement"
          para="Looking to Share exciting News? Look no more! We are here with our Press Releases service. We design crisp, formal announcements that make people read and talk. Let the words be written by experts, and you can concern yourself with the message. Try us today."
        />

        <Section2
          innerSec2Class="innerbrilliant_mind_section"
          title="Press Releases That Create"
          subtitle=" Waves"
          // title2="For Your Voice!"
          subtitle1="Turning News into Headlines"
          subtitle1Desc="Falcon Book Writing's Press Releases service turns your announcements into stories that can't be ignored. Whether you are launching a new book, sharing an exciting milestone, or making a big reveal, we create releases that stand out from the crowd. Our team knows how to take your news and present it in a way that grabs attention, sparks curiosity, and leaves readers wanting more. By focusing on the uniqueness of your story, we ensure that it commands all the attention and gets its due recognition."
          subtitle2="Engage and Connect"
          subtitle2Desc="A wonderful press release does more than just provide information; it creates a connection. We specialize in turning your message into a compelling narrative that resonates with readers, journalists, and influencers. By incorporating engaging storytelling with strategic insights, we tailor each release to speak directly to your audience. Whether it’s building excitement, inspiring action, or leaving a lasting impression, we help your story cut through the noise and reach the people who matter most to you."
          subtitle3="Achieve Maximum Impact"
          subtitle3Desc="Your news deserves to make waves, and we are here to make that happen. At Falcon Book Writing, we design press releases with maximum visibility and buzz in mind. Understanding the intricacies of the publishing world and media landscape, we position your story for success. We take care of creating interest to driving meaningful engagement. Every word counts toward creating a powerful, impactful release that amplifies your voice and raises your brand."
          image={audioImg2}
          imgClass="audioImg2"
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

export default PressRelease;
