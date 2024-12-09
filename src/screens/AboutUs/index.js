import React, { useState } from "react";
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
import { Tab, Tabs } from "react-bootstrap";

const AboutUs = () => {
  const [key, setKey] = useState('home');
  return (
    <>
      <UserLayout>
        <InnerHero
          innerheroclass="aboutBg"
          title="Best Book Writing Company In The"
          subtitle=" USA"
          column="col-md-12 text-center center-content about-sec"
          para="Falcon Book Writing offers expert book writing services suited for books to be held in high esteem. Therefore, when creative professionalism comes together, this house assists its authors in developing compelling stories that intrigue their audience and gain readers around the world."
        />

        <Section2
          innerSec2Class="innerbrilliant_mind_section"
          title="Making Book Writing"
          subtitle=" Effortless "
          title2="And Affordable"
          subtitle1=""
          subtitle1Desc="We are known to be best writing agency in the USA, as we are providing book writers for hire, who create professionally written books that really capture the reader's interest. Indeed, our experienced writers, editors, and designers will work closely with you to bring your vision to life. We are committed to the highest quality results every time. For example, you can write a novel, memoir, or business book, and we will make sure that process is smooth and stress-free for you. At last, we help you get your dreams of publishing easy and achievable, through our excellence, rapid turnarounds, and economical costs. Your story deserves the best, and that is what we produce!"
          subtitle2="Why Choose Us?"
          subtitle2Desc="At Falcon Book Writing, we ensure to provide the best services to meet all your requirements. Our experienced book writers for hire, editors, and publishing experts work hard to bring ideas to life in your book, so that it is made with precision and creativity. We offer customized solutions, competitive pricing, and timely delivery, so the whole process is smooth and stress-free. It doesn't stop there-quality and satisfaction of your customers are our focus. Indeed, we'll have your story told in the best manner possible. At last, pick Falcon Book Writing for the professional and reliable journey through book writing."
          // subtitle2="    Tailored Collaborations?"
          // subtitle3="  Expert Guidance"
          image={audioImg2}
          imgClass="audioImg2"
          actions={true}

          btn1="Let’s Get Start"
          btn2="Call Us Now"
        />



<div className="container">
          <div className="tabSection">
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="home" title="About Us">
                <div className="row tab1">
                  <div className="col-4">
                    <h2>ABOUT <br /> US</h2>
                  </div>  
                  <div className="col-8">
                    <p>We, at Falcon Book Writing, are known as the best book writing company that assist you in turning your ideas into professionally written books. Here, we are to guide and help the aspiring author or someone with a story to share in getting expert guidance and writing services to bring to life the vision. From the concept to completion, we will work closely with you in order to ensure that the book captures your voice and message.</p>
                  </div>                
                </div>
              </Tab>
              <Tab eventKey="profile" title="Our Vision">
              <div className="row tab2">
                  <div className="col-4">
                    <h2>Our <br /> Vision</h2>
                  </div>  
                  <div className="col-8">
                    <p>We strive to become the preferred author partner across countries, driving excellence, creativity, and customer satisfaction. Moreover, our goal is to inspire and support authors and make their book-writing journey easy and successful.</p>
                  </div>                
                </div>
              </Tab>
              <Tab eventKey="contact" title="Our Mission">
              <div className="row tab3">
                  <div className="col-4">
                    <h2>Our  <br /> Mission</h2>
                  </div>  
                  <div className="col-8">
                    <p>Our mission is to service the writers to deliver high-quality, bespoke book writing to help them reach out with stories, knowledge, and experiences of this world. Furthermore, we make things much more accessible and make it way easier and bring our customers through all the professionalism we can muster up.</p>
                  </div>                
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>

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

export default AboutUs;
