import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Accordion from "react-bootstrap/Accordion";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  heroImgLeft,
  heroImgRight,
  phoneImg,
  questionImg,
  leatherImg,
  brilliantBookImg,
  boxBelowImg,
  polygon01,
  semi01,
  semi02,
  semi03,
  redCirclewithSemi,
  redSemibehindBook,
  siteScrollImg,
  helpingIcon01,
  helpingIcon02,
  helpingIcon03,
  helpingIcon04,
  helpingIcon05,
  Imgundercircle,
  bannerImg01,
  ImgUnderArc,
  A4book,
  categoryIcon01,
  categoryIcon02,
  categoryIcon03,
  categoryIcon04,
  categoryIcon05,
  categorybk,
  processImg01,
  processImg02,
  processImg03,
  processImg04,
  secondBannerImg01,
  getTouchBook,
  processFeather,
  helpingBook,
  banner2imgRight,
  publishBookImg,
  publishBookBgPattern,
  testimonialGroupImg,
  testimonialQuote,
  ratingStars,
  publicationBook1,
  publicationBook2,
  instagramIcon,
  facebookIcon,
  youtubeIcon,
  twitterIcon,
  dmcaImg,
  paymentImg,
  footerBrandImgs,
  polygon03,
  chatIcon,
  mainHeroCombineSecImg,


  partner1, partner2, partner3, partner4, partner5, footerSingleLogo
} from "../../asserts/images";
import "./style.css";

import FirstCustomBanner from "../../components/FirstCustomBanner";
import SecondCustomBanner from "../../components/SecondCustomBanner";
import Testimonial from "../../components/Testimonial";
import CustomPublication from "../../components/CustomPublication";
import Faq from "../../components/Faq";
import GetTouch from "../../components/GetTouch";
import CustomCategory from "../../components/CustomCategory";
import UserLayout from "../../components/Layout/UserLayout";
import PublishBook from "../../components/PublishBook";
import Partners from "../../components/Partners";
import { tab } from "@testing-library/user-event/dist/tab";
import Portfolio from "../../components/Portfolio";

const tabs = [
  {
    id: "book-publishing",
    title: "Book Publishing",
    link:"/book-publishing",
    icon: helpingIcon01,
    content:
      "At Falcon Book Writing, we make publishing easy and hassle-free. From formatting to cover design and distribution, we guide you through the whole process. Moreover, our experts ensure your book meets industry standards and gets the attention it deserves on major platforms, turning your vision into a professionally published masterpiece.",
    className: "blue",
  },
  {
    id: "ghost-writing",
    title: "Ghost Writing",
    link:"/ghost-writing",
    icon: helpingIcon02,
    content:
      "Falcon Book Writing offers professional ghostwriting through our book writers for hire for those who have ideas but no time to write. Share your story or concept, and our talented writers will bring it to life with creativity and precision. You retain full credit while we do the hard work, making your dream book a reality.",
    className: "pink",
  },
  {
    id: "book-editing",
    title: "Book Editing",
    link:"/proof-reading",
    icon: helpingIcon03,
    content:
      "Let Falcon Book Writing polish your manuscript to perfection. Our skilled editors refine grammar, structure, and flow while preserving your unique voice. Whether it's a novel or a non-fiction piece, we enhance readability and professionalism, ensuring your book captivates readers and stands out in a competitive market.",
    className: "lime",
  },
  {
    id: "ebook-writing",
    title: "eBook Writing",
    link:"/ebook-writing",
    icon: helpingIcon04,
    content:
      "Falcon Book Writing specializes in providing book writing services. Whether it is storytelling, self-help, or business, our book writers for hire create engaging content that suits your audience. Therefore, we ensure your eBook is formatted correctly and visually appealing, ready for digital platforms, helping you connect with readers worldwide effortlessly.",
    className: "orange",
  },
  {
    id: "lorem-ipsum",
    title: "Book Marketing",
    link:"/book-marketing",
    icon: helpingIcon05,
    content:
      "At Falcon Book Writing, we get your book in the hands of its audience through marketing strategies. From social media campaigns to Amazon optimization, we make your book come to life by increasing visibility and sales. Therefore, our approach ensures that your story is brought into the limelight as your book becomes a success story.",
    className: "teal",
  },
];

const Home = () => {
  // const [activeTab, setActiveTab] = useState({});
  const [activeTab, setActiveTab] = useState(tabs[2]);

 const navigate = useNavigate()

  console.log("activetabs", activeTab);

  return (
    <>
      <UserLayout>
        {/* <div className="main-hero-combineSec"> */}

        {/* <img src={mainHeroCombineSecImg} alt="" className="main-hero-combineSec-img" /> */}

        <section className="hero_section">
          <div className="container-fluid position-relative">
            <div className="hero_response_first_img">
              <img src={heroImgLeft} alt="first"></img>
            </div>

            <div className="hero_response_second_img">
              <img src={heroImgRight} alt="first"></img>
            </div>

            <div className="row justify-content-between">
              <div className="col-lg-3 col-sm-0">
                <div
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <img
                    draggable={false}
                    src={heroImgLeft}
                    className="img-fluid making_none main_banner-left-img"
                    alt=""
                  ></img>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 col-8 mx-auto align-self-center">
                <div
                  className="hero_centered_main"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="2000"
                >
                  <div className="hero_centered_content">
                    <div className="content_with_border">
                      <h2 className="brand_name_title">
                        Welcome To <br /> <span class="theme-color">FALCON BOOK WRITING</span>
                      </h2>

                      <h2 className="ebook_publisher_title">
                       Let's <br/> Write Your <br/><span class="theme-color">Story</span> <br/>Together!
                      </h2>

                      <p className="avail_discount_text">
                      Avail A Discount On All Our Services
                      </p>
                    </div>

                    <div className="featherImg">
                      <img
                        src={leatherImg}
                        className="img-fluid"
                        alt="leather"
                      ></img>
                    </div>
                  </div>
                  <div className="hero_btns">
                  <button
                      type="submit"
                      class="brand_btn"
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      Chat With Us
                    </button>
                    {/* <button className="btn_with_icon btn-red">
                      <span className="btn_with_icon_text">Get a Quote</span>
                    </button> */}
                    {/* <button className="btn_with_icon">
                      <img
                        src={chatIcon}
                        className="btn_with_icon_img"
                        alt=""
                      />
                      <span className="btn_with_icon_text">Chat With us</span>
                    </button> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-0">
                <div
                  data-aos="fade-left"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <img
                    draggable={false}
                    src={heroImgRight}
                    className="img-fluid making_none main_banner-right-img"
                    alt=""
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="brilliant_mind_section brilliant_mind_HomeSection">
          <div className="polygonImg01">
            <img draggable={false} src={polygon01} alt="polygon"></img>
          </div>

          <div className="polygonImg02">
            <img draggable={false} src={polygon01} alt="polygon"></img>
          </div>
          <section className="sec2_about sec_padding">
            <div className="container-fluid">
              <div className="row">
                <Partners />
              </div>
            </div>
            <div className="container-fluid">
              <div class="row align-items-center">
                <div class="col-sm-12 col-lg-6">
                  <div class="sec_title">
                    <h2
                      className=""
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      Smoothing Your <span class="color-red"> Writing Journey </span> Making It Rewarding And Impactful
                    </h2>
                    <p
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      At Falcon Book Writing, we commit to providing Book Writing Service that create you best-written books which could captivate readers and bring a long-lasting impression.
                    </p>

                    <p
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      We will work hand in hand with you to bring your vision to life, whether you are writing a book in the genre of your choice or for a specific purpose. From brainstorming and writing to editing, formatting, and publishing, we have end-to-end support to match your unique needs.
                    </p>

                    <p
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      Whether you are an aspiring author, a business professional who wants to share your expertise or just someone with a story to tell, we make sure your book is polished, engaging, and ready for success.
                    </p>

                    <p
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      In addition, at falcon book writing, our book writers for hire feels pride themselves on delivering excellent quality and personalized service, making your journey to becoming a published author smooth and rewarding.
                    </p>
                    {/* <button
                      type="submit"
                      class="brand_btn"
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      Read More
                    </button> */}
                    <div class="inner-btn-group">
                    <button className="btn-bg-white blink">
                      <Link to={'/contact-us'}>Get Started</Link>
                    </button>
                    <button className="btn-bg-red"><a href="tel:(855) 288-8770">Call Us Now</a></button>
                  </div>
                  </div>
                </div>

                <div class="col-sm-12 col-lg-6">
                  <div className="book_main_box">
                    <div className="book_semicircle_box">
                      <div className="first_semi">
                        <img draggable={false} src={semi01} alt="semi"></img>
                      </div>

                      <div className="second_semi">
                        <img draggable={false} src={semi02} alt="semi"></img>
                      </div>

                      <div className="third_semi">
                        <img draggable={false} src={semi03} alt="semi"></img>
                      </div>

                      <div className="circle_with_semi">
                        <img
                          draggable={false}
                          src={redCirclewithSemi}
                          alt="semi"
                        ></img>
                      </div>

                      <div className="circle_with_semi2">
                        <img
                          draggable={false}
                          src={redCirclewithSemi}
                          alt="semi"
                        ></img>
                      </div>
                    </div>

                    <div
                      class="text-center book_img position-relative"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      <img
                        src={brilliantBookImg}
                        className="img-fluid home_img2"
                        alt=""
                      ></img>

                      <div className="redCircleBehindBook">
                        <img
                          draggable={false}
                          src={redSemibehindBook}
                          alt="red"
                        ></img>
                      </div>
                    </div>

                    <div>
                      <img
                        draggable={false}
                        src={boxBelowImg}
                        class="img-fluid innerBoxBelowImg"
                        alt=""
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* <div className="container-fluid p-0">
            <div>
              <div class="marquee-container trusted-partnerContainer">
                <div class="marquee">
                <div class="trustedPartners">
                    <div class="trustedPartner ">
                      <img draggable={false} src={footerSingleLogo} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={footerSingleLogo} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={footerSingleLogo} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={footerSingleLogo} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={footerSingleLogo} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={footerSingleLogo} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={footerSingleLogo} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={footerSingleLogo} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={footerSingleLogo} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={footerSingleLogo} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={footerSingleLogo} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={footerSingleLogo} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={footerSingleLogo} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={footerSingleLogo} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={footerSingleLogo} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={footerSingleLogo} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={footerSingleLogo} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={footerSingleLogo} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={footerSingleLogo} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={footerSingleLogo} alt=""></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div> */}

          
        </section>

        {/* </div> */}

        <section className="helping_things_section">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-center">
              <div className="col-sm-12 col-md-8 col-lg-6">
                <div className="helping_left_part">
                  <div id="parent-circle">
                    <div className="duolingo_Under_img">
                      <img
                        draggable={false}
                        src={Imgundercircle}
                        alt="thtye"
                      ></img>
                    </div>

                    {tabs.map((item, ind) => {
                      const isActive = activeTab.id === item.id;
                      return (
                        <div
                          class={`circle ${item.className} ${
                            isActive ? "active" : ""
                          } making_it_none`}
                          onMouseEnter={() => setActiveTab(item)}
                        >
                          <img
                            src={item.icon}
                            alt="helpingIcon"
                            className="duolingo_tab_img"
                          ></img>
                          <h6 className="duolingo_tab_title" onClick={()=>navigate(item.link)}>{item.title}</h6>
                        </div>
                      );
                    })}
                    {/* <div class="circle blue making_it_none">
                      <img
                        src={helpingIcon01}
                        alt="helpingIcon"
                        className="duolingo_tab_img"
                      ></img>
                      <h6 className="duolingo_tab_title">Book Publishing</h6>
                    </div>
                    <div class="circle pink making_it_none">
                      <img
                        src={helpingIcon02}
                        alt="helpingIcon"
                        className="duolingo_tab_img"
                      ></img>
                      <h6 className="duolingo_tab_title">Ghost Writing</h6>
                    </div>
                    <div class="circle lime making_it_none">
                      <img
                        src={helpingIcon03}
                        alt="helpingIcon"
                        className="duolingo_tab_img"
                      ></img>
                      <h6 className="duolingo_tab_title">Book Editing</h6>
                    </div>
                    <div class="circle orange making_it_none">
                      <img
                        src={helpingIcon04}
                        alt="helpingIcon"
                        className="duolingo_tab_img"
                      ></img>
                      <h6 className="duolingo_tab_title">Ebook Writing</h6>
                    </div>
                    <div class="circle teal making_it_none">
                      <img
                        src={helpingIcon05}
                        alt="helpingIcon"
                        className="duolingo_tab_img"
                      ></img>
                      <h6 className="duolingo_tab_title">Lorem Ipsum</h6>
                    </div> */}
                  </div>
                </div>

                <div className="main_duolingo_tab_below">
                  {tabs.map((item, index) => {
                    const isActive1 = activeTab.id === item.id;
                    return (
                      <div
                        className={`single_duolingo_tab_below ${
                          isActive1 ? "active" : ""
                        }`}
                        onMouseEnter={() => setActiveTab(item)}
                      >
                        <div className="duolingo_tab_img_below">
                          <img
                            // src={helpingIcon02}
                            src={item.icon}
                            alt="helpingIcon"
                            className="duolingo_tab_img"
                          ></img>
                        </div>
                        <div className="">
                          <h6 className="duolingo_tab_title_below m-0">
                            {item.title}
                          </h6>
                        </div>
                      </div>
                    );
                  })}
                  {/* <div className="single_duolingo_tab_below">
                    <div className="duolingo_tab_img_below">
                      <img
                        src={helpingIcon01}
                        alt="helpingIcon"
                        className="duolingo_tab_img"
                      ></img>
                    </div>
                    <div className="">
                      <h6 className="duolingo_tab_title_below m-0">
                        Book Publishing
                      </h6>
                    </div>
                  </div>

                  <div className="single_duolingo_tab_below">
                    <div className="duolingo_tab_img_below">
                      <img
                        src={helpingIcon02}
                        alt="helpingIcon"
                        className="duolingo_tab_img"
                      ></img>
                    </div>
                    <div className="">
                      <h6 className="duolingo_tab_title_below m-0">
                        Ghost Writing
                      </h6>
                    </div>
                  </div>

                  <div className="single_duolingo_tab_below">
                    <div className="duolingo_tab_img_below">
                      <img
                        src={helpingIcon03}
                        alt="helpingIcon"
                        className="duolingo_tab_img"
                      ></img>
                    </div>
                    <div className="">
                      <h6 className="duolingo_tab_title_below m-0">
                        Book Editing
                      </h6>
                    </div>
                  </div>

                  <div className="single_duolingo_tab_below">
                    <div className="duolingo_tab_img_below">
                      <img
                        src={helpingIcon04}
                        alt="helpingIcon"
                        className="duolingo_tab_img"
                      ></img>
                    </div>
                    <div className="">
                      <h6 className="duolingo_tab_title_below m-0">
                        Ebook Writing
                      </h6>
                    </div>
                  </div>

                  <div className="single_duolingo_tab_below">
                    <div className="duolingo_tab_img_below">
                      <img
                        src={helpingIcon05}
                        alt="helpingIcon"
                        className="duolingo_tab_img"
                      ></img>
                    </div>
                    <div className="">
                      <h6 className="duolingo_tab_title_below m-0">
                        Lorem Ipsum
                      </h6>
                    </div>
                  </div>
                </div> */}
                </div>
              </div>

              <div className="col-sm-12 col-md-8 col-lg-6 mx-auto">
                <div className="main_helping_content">
                  <div className="sec_title">
                    <h2
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                       The Services That <br />
                      <span class="color-red"> Shape Great Books </span>
                    </h2>
                    <div className="helping_tab">
                      <div
                        className="helping_tab_img"
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="2000"
                      >
                        <img draggable={false} src={helpingBook} alt="Book" />
                      </div>
                      <h3
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="3000"
                      >
                        {activeTab.title}
                      </h3>
                    </div>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                      className="helping_tab_para"
                    >
                      {activeTab.content}
                    </p>
                    {/* <button
                      type="submit"
                      class="brand_btn"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                    >
                      Get Started
                    </button> */}
                    <div class="inner-btn-group">
                    <button className="btn-bg-white blink">
                      <Link to={'/contact-us'}>Get Started</Link>
                    </button>
                    <button className="btn-bg-red"><a href="tel:(855) 288-8770">Call Us Now</a></button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </section>

        <FirstCustomBanner />

        <CustomCategory
          className={"category_section"}
          image={categorybk}
          polygon01={polygon01}
        />

        <PublishBook />

        <section class="process_sec sec_padding">
          <img
            draggable={false}
            src={processFeather}
            className="process_feather"
            alt="feather"
          />

          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="sec_title">
                  <h2
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                     In Our Step-By-Step <br />
                    <span class="color-red">eBook</span> Creation
                    <span class="color-red"> Process:</span>
                  </h2>
                </div>
              </div>
            </div>
            <div class="row process_rows">
              <div class="col-sm-12 col-lg-5 mx-auto">
                <div
                  class="process_content"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <h4 class="process_step">Step 1</h4>
                  <h3 class="process_content_title">Initial Consultation</h3>
                  <p>
                  We start by having a one-on-one conversation with you to understand what you envision for the eBook. This step helps us learn about the topic, target audience, and specific goals or messages you would like to convey. Be it a how-to guide, a personal story, or a professional resource, we ensure we are on the same page as your expectations from the very start.
                  </p>
                </div>
              </div>
              <div class="col-sm-6 col-lg-4 mx-auto">
                <div
                  class="process_img"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="2000"
                >
                  <img
                    draggable={false}
                    src={processImg01}
                    class="img-fluid"
                    alt="Crafting the Details"
                  />
                </div>
              </div>
              <div class="col-sm-6 col-lg-3 mx-auto">
                <div
                  class="process_counter"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="3000"
                >
                  <h1>01</h1>
                </div>
              </div>
            </div>
            <div class="row process_rows">
              <div class="col-sm-12 col-lg-5 mx-auto">
                <div
                  class="process_content"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <h4 class="process_step">Step 2</h4>
                  <h3 class="process_content_title">
                  Outline & Planning
                  </h3>
                  <p>
                  Having compiled all your ideas, we proceed to creating a detailed outline. It is where we arrange the content into chapters or sections and determine how the information flows and which key points are covered. We will also find out any research or materials needed to support the content. However, the aim is to have a structured plan to make the writing process smooth and ensure that your eBook is well-organized.
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 mx-auto">
                <div
                  class="process_img"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="2000"
                >
                  <img
                    draggable={false}
                    src={processImg02}
                    class="img-fluid"
                    alt="Crafting the Details"
                  />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mx-auto">
                <div
                  class="process_counter"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="3000"
                >
                  <h1>02</h1>
                </div>
              </div>
            </div>
            <div class="row process_rows">
              <div class="col-lg-5 col-sm-12 mx-auto">
                <div
                  class="process_content"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <h4 class="process_step">Step 3</h4>
                  <h3 class="process_content_title">Writing & Editing</h3>
                  <p>
                  With the outline set, our team starts to write the content. We ensure that the text is clear, engaging, and informative for your audience. We then enter the editing process, where we review and refine the content. We improve readability, correct grammatical and spelling errors, and ensure that your voice and message are delivered. We also ensure that the content is consistent and professional.
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 mx-auto">
                <div
                  class="process_img"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="2000"
                >
                  <img
                    draggable={false}
                    src={processImg03}
                    class="img-fluid"
                    alt="Crafting the Details"
                  />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mx-auto">
                <div
                  class="process_counter"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="3000"
                >
                  <h1>03</h1>
                </div>
              </div>
            </div>

            <div class="row process_rows">
              <div class="col-lg-5 col-sm-12 mx-auto">
                <div
                  class="process_content"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <h4 class="process_step">Step 4</h4>
                  <h3 class="process_content_title">
                  Formatting & Publishing
                  </h3>
                  <p>
                  Once we complete the writing, we'll format your eBook for an attractive and professional look. This may include selecting specific fonts, layout, design elements to make it as visually appealing and readable as possible on all devices. Then, we walk you through how to publish your eBook into Amazon or on your own website and other publishing sources.
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 mx-auto">
                <div
                  class="process_img"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="2000"
                >
                  <img
                    draggable={false}
                    src={processImg04}
                    class="img-fluid"
                    alt="Crafting the Details"
                  />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mx-auto">
                <div
                  class="process_counter"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="3000"
                >
                  <h1>04</h1>
                </div>
              </div>
            </div>

            <div class="row process_rows">
              <div class="col-lg-5 col-sm-12 mx-auto">
                <div
                  class="process_content"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <h4 class="process_step">Step 5</h4>
                  <h3 class="process_content_title">Marketing & Promotion</h3>
                  <p>Once you publish your eBook, we assist you in sharing it with the world. This step involves a customized marketing strategy to reach your target audience. We guide you on how to use social media, email campaigns, and other means to promote your eBook.</p>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 mx-auto">
                <div
                  class="process_img"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="2000"
                >
                  <img
                    draggable={false}
                    src={processImg03}
                    class="img-fluid"
                    alt="Crafting the Details"
                  />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mx-auto">
                <div
                  class="process_counter"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="3000"
                >
                  <h1>05</h1>
                </div>
              </div>
            </div>

            <div class="inner-btn-group">
                  <button className="btn-bg-white blink">
                    <Link to={'/contact-us'}>Get Started</Link>
                  </button>
                  <button className="btn-bg-red"><a href="tel:(855) 288-8770">Call Us Now</a></button>
                </div>

          </div>
        </section>

        <Portfolio />

        <SecondCustomBanner />

        <Testimonial />

        <section className="progress_sec">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 col-sm-10 mx-auto process-m">
                <div className="progress_item">
                  <div className="sec_title">
                    <h2>
                      10+ YEAR OF <br />
                      EXPERIANCE
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-10 mx-auto process-m progress_col2">
                <div className="progress_item">
                  <div className="sec_title">
                    <h2>
                      700+ bOOK <br />
                      wRITTEN
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-10 mx-auto process-m">
                <div className="progress_item">
                  <div className="sec_title">
                    <h2>
                      250+ AMERICAN
                      <br />
                      WRITERS
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CustomPublication />

        <Faq />

        <GetTouch />



      

      </UserLayout>
    </>
  );
};
export default Home;
