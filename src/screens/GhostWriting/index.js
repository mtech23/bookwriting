import React from "react";
import UserLayout from "../../components/Layout/UserLayout";
import { sec2img } from "../../asserts/images";
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

const GhostWriter = () => {
  return (
    <>
      <UserLayout>
        <InnerHero
          innerheroclass="ghostwritingBg"
          title="The Perfect"
          subtitle=" Ghostwriting "
          title2="Partner For Every Genre"
          para="Falcon Book Writing is the perfect ghostwriting partner for all genres. Whether fiction and memoirs or business books and self-help, our ghostwriters breathe life into your ideas, ensuring professionalism and creativity in your work. Let's transform your vision into an inspiring book that sets people talking. Let’s get you started on writing today!"
        />

        <Section2
          innerSec2Class="innerbrilliant_mind_section"
          title={`We Write, You Take The  `}
          subtitle="  Credit—Simple "
          title2="As That!"
          description={`The thing about Falcon Book Writing is that everybody has a story. People just may not have the time, skill, or expertise to write the book. That is when our "Ghost Book Writing" comes in, which we closely work with you to take your thoughts into a professionally written and polished book. If you are an idea person, uniquely experienced, or an expert with knowledge to share. Our skilled writers ensure that your voice, style, and vision reflect on every page, making the final product truly yours. The best part? You remain the author, taking full credit and ownership of the book. We handle the writing process from start to finish, saving you time and effort. Here at Falcon Book Writing, we'll focus on your story; we'll do the rest—we work for your success. `}
          // subtitle1="How we work?"
          // subtitle1Desc="At Random House Publishers, we pride ourselves on being the conduit through which your imagination flows into the world. Our ghostwriting service is designed to empower authors like you to bring your stories to life, even if you need a little extra support along the way. Here’s how we work for you:"
          // subtitle2="    Tailored Collaborations?"
          // subtitle2Desc="We understand that every author is unique, and so are their needs. That’s why we offer personalized ghostwriting services tailored to your specific vision and requirements. Whether you have a fully fleshed-out plot or just a spark of an idea, our team of experienced ghostwriters will work closely with you to bring your story to fruition."
          // subtitle3="  Expert Guidance"
          // subtitle3Desc="Writing a book can be a daunting task, but you don’t have to go it alone. When you choose Random House Publishers, you gain access to a team of seasoned professionals who are passionate about storytelling. From brainstorming sessions to plot development and character arcs, we’ll be there to guide you every step of the way."
          // subtitle3Desc2="Writing a book can be a daunting task, but you don’t have to go it alone. When you choose Random House Publishers, you gain access to a team of seasoned professionals who are passionate about storytelling. "
          image={sec2img}
          imgClass="ghost-img2"
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

export default GhostWriter;
