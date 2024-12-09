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

const AudioBookDesign = () => {
  return (
    <>
      <UserLayout>
        <InnerHero
          innerheroclass="audioBookDesignBg"
          title="Audio Books As"
          subtitle=" Engaging "
          title2="As Your Written Story"
          para="Falcon Book Writing brings your story to life with professional audiobooks. The expert narrators make your book as engaging and exciting as the written version. Our high-quality audio production guarantees an unforgettable experience, letting your story be heard and enjoyed anywhere."
        />

        <Section2
          innerSec2Class="innerbrilliant_mind_section"
          title="Give Your Book A "
          subtitle=" Voice"
          title2="With Falcon's Professional Audio Services"
          // subtitle1="How we work?"
          description="This opens up your book to a much wider audience. Whether it's a novel, an autobiography, or a self-help book, we will work closely with you to ensure the essence of your book emerges during the process, making it engaging for the audience. Listening to an audiobook is a great opportunity to put forward your word in front of those consumers. Who always devour content through audial media so that minds get active towards the material on move. Then with the Falcon's good quality of audio production, you can be sure. That your book will surely be audible and clear as well as professional speaking to the ear getting from the beginning till end."
          // subtitle2="    Tailored Collaborations?"
          // subtitle3="  Expert Guidance"
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

export default AudioBookDesign;
