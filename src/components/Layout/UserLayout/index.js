import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const UserLayout = (props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Header />

      {props.children}

      <div className={`floatbutton ${toggle ? 'active' : ''}`}>
        <div className="btns_wrap">

          <a href="javascript:;" className="chat_wrap" onclick="$zopim.livechat.window.toggle()">
            <span className="icoo"><i className="fa fa-comment"></i></span>
            <span>Chat With Us</span>
          </a>
          <a href="tel:(855) 288-8770" className="call_wrap">
            <span className="icoo"><i className="fa fa-phone"></i></span>
            <span> (855) 288-8770</span>
          </a>
        </div>



        <div className={`clickbutton ${toggle ? 'active' : ''}`} onClick={() => { setToggle(!toggle) }}>
          <div className="crossplus">50% Off On All Services</div>
        </div>
        <div className="banner-form">
          <h3>Chat With Us to <br />Avail 50% Discount</h3>
          <div className="banform">
            <div className="container">
              <div className="row">
                <div className="ban-form">
                  <form className="cmxform" id="ordernow-form" action="https://www.falconbookwriting.com/webpages/FormController.php" method="post">
                    <div className="alert alert-danger error" style={{ display: "none" }}></div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="fldset">
                          <input type="text" name="Name" placeholder="Name" className="required" onkeyup="validateName(this)" onkeydown="return alphaOnly(event)" required="" />

                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="fldset">
                          <input type="Email" name="Email" placeholder=" Email" onkeyup="emailValidation(this)" onkeypress="emailValidation(this)" className="required" required="" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="fldset">


                          <input type="text" id="phone-coun" name="Number" placeholder="Phone number" pattern="^\d{5,}$" minlength="9" required />
                          <span className="bg-danger col-lg-offset-3 contact_error " style={{ display: "none" }}>Contact No Incorrect</span>

                          <input type="hidden" className="form-control" placeholder="Url" id="url" name="url" value="" required />
                          <input type="tel" name="brand_id" id="brand_id" value="15" hidden />
                          <input type="tel" name="package_id" id="package_id" value="1" hidden />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="fldset">
                          <textarea name="Message" rows="7" placeholder="Talk About Your Project" id="textInput" minlength="25" required></textarea>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="fldset">
                          <input name="submit" type="submit" placeholder="Connect With Us" required />
                          <input className="" type="hidden" name="ctry" value="" />
                          <input type="hidden" name="pc" value="" />
                          <input type="hidden" name="cip" value="" className="form-1-ip" />
                          <input type="hidden" name="hiddencapcha" value="" />
                          <input type="hidden" id="location" name="locationURL" value="https://www.falconbookwriting.com/" />

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
      <Footer />

    </>
  )
}

export default UserLayout