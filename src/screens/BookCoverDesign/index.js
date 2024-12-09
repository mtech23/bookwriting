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

import { CoverDesignImg2 } from "../../asserts/images";

const CoverDesign = () => {
  return (
    <>
      <UserLayout>
        <InnerHero
          innerheroclass="coverDesignBg"
          title="Create The Perfect First "
          subtitle=" Impression "
          title2="With A Stunning Cover"
          para="A good book cover design may attract the eye of a reader. At Falcon Book Writing, our book cover design service creates professional and attractive covers that reflect the story of your book. Our expertise ensures that your book makes a strong first impression and stands out on any shelf."
        />

        <Section2
          innerSec2Class="innerbrilliant_mind_section"
          title="Designing  "
          subtitle="  Faces"
          title2="Of Best-Selling Books"
          // subtitle1="How we work?"
          description="Book cover is a very important thing as, in most instances, it is the very first thing that any possible reader would notice. There is also a possibility that someone could be reading the book. As a result of the attraction evoked by the very catching cover. Thus, the team works very closely with the authors concerning their genres, themes, and moods."
          description2="In order to get to know the kind of cover that will portray this book to the right people. A good cover may establish the tone of the book and will make it stand out; hence the chances of its sale may increase. Choosing our service ensures that your book gets a professionally designed cover. That attracts readers and enhances its potential to gain more attention."
          // description3="Our iterative design process emphasizes collaboration and creativity, ensuring that the final cover is both visually stunning and commercially viable. We aim to produce a cover that grabs attention, conveys the right message, and entices potential readers to pick up your book. At Random House Publishers, we combine artistic flair with market insight to deliver book covers that make a lasting impression."
          // subtitle2="    Tailored Collaborations?"
          // subtitle3="  Expert Guidance"
          image={CoverDesignImg2}
          imgClass="CoverDesignImg2"
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

export default CoverDesign;
