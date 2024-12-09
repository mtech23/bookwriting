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

import { illustrationImg2 } from "../../asserts/images";

const Illustration = () => {
  return (
    <>
      <UserLayout>
        <InnerHero
          innerheroclass="illustrationBg"
          title="Bring Your Story To Life"
          subtitle=" Through "
          title2="Custom Illustrations"
          para="Personalized Illustrations to lend a splash of color and rich texture to your book. Brilliant artists give creative, hand-drawn visuality to your novel, children's book, or any other. These will make your story alluring and memorable."
        />

        <Section2
          innerSec2Class="innerbrilliant_mind_section"
          title="Design The Perfect  "
          subtitle=" Companion "
          title2="For Your Words"
          // subtitle1="How we work?"
          description="The professional illustrators will work with you to create the artworks that reflect themes, emotions, and the atmosphere of your story. It may be a children's book, a fantasy adventure, or a heartfelt memoir, but it's going to stand out for sure. The right illustrations don't just enhance your writing; they breathe life into your writing for the reader. At Falcon Book Writing, we perfect your illustrations, aligning them with your vision. To ensure each piece of artwork is placed perfectly and fits the narrative. Unique visuals which will make all the lasting impression upon the readers beyond the pages of text."
          // subtitle2="    Tailored Collaborations?"
          // subtitle3="  Expert Guidance"
          image={illustrationImg2}
          imgClass="illustrationImg2"
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

export default Illustration;
