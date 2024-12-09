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

import { websiteAuthorImg2 } from "../../asserts/images";

const AuthorWebsite = () => {
  return (
    <>
      <UserLayout>
        <InnerHero
          innerheroclass="websiteAuthorBg"
          title="Let Your Story Live"
          subtitle=" Online"
          title2=" With The Perfect Website!"
          para="Falcon Book Writing will help you build your website, bringing your book to life online. From easy navigation to showcasing one's work, our uniquely designed author websites make this easier to connect with potential readers. Let us create the perfect website to get your writing all together!"
        />

        <Section2
          innerSec2Class="innerbrilliant_mind_section"
          title="Showcase Your Work With A "
          subtitle=" Website"
          title2=" That Works For You"
          // subtitle1="How we work?"
          description="When you select this service, you invest in a web site that works as intensively as you do. It is very important that your good author website supports good online presence and communicates even better with readers. We're ready to develop a user-friendly and fully functional website of your work, showing them your story, and luring readers to their next stories."
          description2="We ensure that your voice is represented online, whether you want to showcase your latest book. Let guests see what's behind the pen, or share contact and social media links with followers. After all, your website says something about you, not just your books. So, ensure it expresses your unique voice by giving you a beautiful, user-friendly site designed for helping you build up to readership and then onto marketing your books in earnest. With Falcon Book Writing, you will have a website that works for you in drawing readers in and making it possible to build those lasting connections with your audience."
          // subtitle2="    Tailored Collaborations?"
          // subtitle3="  Expert Guidance"
          image={websiteAuthorImg2}
          imgClass="websiteAuthorImg2"
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

export default AuthorWebsite
