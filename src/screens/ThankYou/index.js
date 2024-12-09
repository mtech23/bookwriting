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
import { Link } from "react-router-dom";

const ThankYou = () => {
  const [key, setKey] = useState('home');
  return (
    <>
      <UserLayout>
        {/* <InnerHero
          innerheroclass="thankyouBg"
          title="Best Book Writing Company In The"
          subtitle=" USA"
          column="col-md-12 text-center center-content thankyou-sec"
          para="Falcon Book Writing offers expert book writing services suited for books to be held in high esteem. Therefore, when creative professionalism comes together, this house assists its authors in developing compelling stories that intrigue their audience and gain readers around the world."
        /> */}


<div class="thankyou text-center">
    <h1>We’re excited to speak with you!</h1>
    <p>Your consultation call with one of our attentive and warm author strategists is officially on the books! You will receive a welcome email from us very shortly.</p>
    <a class="btn bg-danger text-light" onclick="history.back()" href="javascript:;">Back To Home</a>
</div>





      </UserLayout>
    </>
  );
};

export default ThankYou;
