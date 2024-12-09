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

const CopyrightsProtection = () => {
  return (
    <>
        <UserLayout>

        <InnerHero
          innerheroclass="copyrightprotectionBg"
          title="No One Owns Your Story But You -"
          subtitle=" Protect It!"
          para="Your story belongs to you alone. Nobody has a right over your story. Secure your creations from theft and misused versions by safeguarding it under copyright. Keep your writing words for yourselves, protecting future creative ownership by ordering a service of copyright protection through Falcon Book Writing."
        />

        <Section2
        innerSec2Class="innerbrilliant_mind_section"
          title="Secure Copyrights So You Can   "
          subtitle="Share "
          title2="Your Story With Confidence"
          description="Choosing Falcon Book Writing ensures that you legally protect your creative work and feel free to share it. When writing a book, your ideas, characters, and expressions become your property, and copyrights give you a chance to control how people may use them. Our service will get you official copyright registration that would mean that if some person steals or uses your work without permission, then you can prove that you are the original author of that work and this protects you from unauthorized reproduction or distribution and you can be very sure that your story is well protected."
          description2="We provide the simplest and safest copyright service so that you have time to do what matters-most for your book. The rest is taken care of: knowing that your creative rights will be protected you can focus on sharing your story with the world, as it is fully protected; and you can act on the case if someone decides to infringe on it."
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

export default CopyrightsProtection