import React, { useState } from "react";
import UserLayout from "../../components/Layout/UserLayout";
import InnerHero from "../../components/InnerHero";
// import CustomCategory from "../../components/CustomCategory";
// import SecondCustomBanner from "../../components/SecondCustomBanner";
// import FirstCustomBanner from "../../components/FirstCustomBanner";
// import PublishBook from "../../components/PublishBook";
// import Testimonial from "../../components/Testimonial";
// import CustomPublication from "../../components/CustomPublication";
// import Faq from "../../components/Faq";
// import GetTouch from "../../components/GetTouch";

import {contactsideimg} from "../../asserts/images/";


const ContactUs = () => {
  return (
    <>
      <UserLayout>
        <InnerHero
          innerheroclass="contactBg"
          title="Discuss how our editing services can improve your book and help you achieve your "
          subtitle=" publishing goals."
          column="col-md-12 text-center center-content featured-author-sec contact-sec"
        //   para="Falcon Book Writing offers expert book writing services suited for books to be held in high esteem. Therefore, when creative professionalism comes together, this house assists its authors in developing compelling stories that intrigue their audience and gain readers around the world."
        />





<section className="btmform">
	<div className="container-fluid">
		<div className="row">
			<div className="col-md-10 offset-md-1">
				<div className="row">
					<div className="col-md-6">
						<div className="imgwrp">
							<img src={contactsideimg} alt="contact us"/>
						</div>
					</div>
					<div className="col-md-6 my-auto">
						<div className="formwrp">
							<div className="txtwrp">
								<h2 className="main-heading">Send Us A Message, And We’ll Be Right Back To Help!</h2>
								<p className="main-pera">Contact Falcon Book Writing if you need anything or have any question for us. Our company stands ready to work and to assist with writing and will get back in contact soon after a message sent.</p>
							</div>
						<form action="https://www.falconbookwriting.com/webpages/FormController.php" method="post" id="myForm">

    <div className="row">
        <div className="col-md-6">
            <div className="field">
                <label>Your Name</label>
                <input type="text" name="Name" placeholder="Write Here" maxlength="12" required/>
            </div>
        </div>
		<div className="col-md-6">
            <div className="field">
                <label>Email Address</label>
                <input type="email" name="Email" placeholder="Write Here" required/>
            </div>
        </div>
        <div className="col-md-12">
            <div className="field">
                <label>Phone Number</label>
                <input type="Number" id="phone-coun" className="phone-country masking contact" name="Number" placeholder="Write Here" required/>
            </div>
        </div>
        <div className="col-md-12">
            <div className="field">
                <label>Message</label>
                <textarea name="Message" placeholder="Write Here" id="textInput" minlength="25" required></textarea>
            </div>
        </div>
        <div className="col-md-6">
            <div className="field">
                
                
                <input type="submit" value="Submit" className="btnwrp" id="submitBtn"/>

               
                <input type="hidden" name="ctry" value=""/>
                <input type="hidden" name="pc" value=""/>
                <input type="hidden" name="cip" value=""/>
                <input type="hidden" name="hiddencapcha" value=""/>
                <input type="hidden" name="submitfrombanner" value=""/>
                <input type="hidden" id="location" name="locationURL" value="https://www.falconbookwriting.com/contact-us" />
            </div>
        </div>
    </div>
</form>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>










        {/* <CustomCategory classNameNameName="category_section2" />
        <FirstCustomBanner />
        <PublishBook />
        <Testimonial />
        <SecondCustomBanner />
        <CustomPublication />
        <Faq />
        <GetTouch /> */}
      </UserLayout>
    </>
  );
};

export default ContactUs;
