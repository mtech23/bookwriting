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

import { childrenIllustrationImg2 } from "../../asserts/images";

const ChildrenIllustration = () => {
  return (
    <>
      <UserLayout>
        <InnerHero
          innerheroclass="childrenIllustrationBg"
          title="Color Your Book With"
          subtitle=" Attractive Characters!"
          para="We believe that every children's book deserves to come alive with vibrant characters that leap off the page and into the hearts of young readers. That's why we're proud to offer our excellent children's book illustration service, where imagination knows no bounds and creativity flourishes."
        />

        <Section2
          innerSec2Class="innerbrilliant_mind_section"
          title="Bringing Books To Brilliant "
          subtitle="  Life Through "
          title2="Art"
          subtitle1="How we work?"
          description="Our approach to children's book illustration is a collaborative and imaginative journey that begins with inspiration and ends with enchantment. We work closely with authors, editors, and designers to create illustrations that flawlessly intertwine with the narrative, infusing each scene with vibrant colors, intricate details, and boundless creativity. From sketching rough drafts to adding the final digital flourishes, every step of our process is infused with passion and dedication. We strive for perfection, welcoming feedback, and iteration to ensure that our illustrations captivate young readers and ignite their imaginations. At the heart of it, all lies a profound love for storytelling and a commitment to sparking joy and wonder in the hearts of children around the world."
          description2="Our approach to children's book illustration is a collaborative and imaginative journey that begins with inspiration and ends with enchantment. We work closely with authors, editors, and designers to create illustrations that flawlessly intertwine with the narrative, infusing each scene with vibrant colors, intricate details, and boundless creativity. From sketching rough drafts to adding the final digital flourishes, every step of our process is infused with passion and dedication. We strive for perfection, welcoming feedback, and iteration to ensure that our illustrations captivate young readers and ignite their imaginations."
          // subtitle2="    Tailored Collaborations?"
          // subtitle3="  Expert Guidance"
          image={childrenIllustrationImg2}
          imgClass="childrenIllustrationImg2"
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

export default ChildrenIllustration;
