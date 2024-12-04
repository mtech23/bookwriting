import React from "react";
import { bannerImg01 } from "../../asserts/images";

const FirstCustomBanner = () => {
  return (
    <>
      <section className="first_banner_section sec_padding">
        <div className="container-fluid">
          <div className="row align-items-end">
            <div className="col-sm-12 col-lg-7">
              <div className="first_banner_left_part">
                <div className="sec_title">
                  <h2
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    We Help You Write, Edit, And Publish Your Book! 
                  </h2>
                  <p
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    At Falcon Book Writing, we help you create and publish your book. With our book writing service, we create and refine your manuscript then prepare it for publication smoothly, our book writers for hire works with you to bring your ideas to life and share them with the world.
                  </p>
                  <button
                    type="submit"
                    class="brand_btn"
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="3000"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-8 col-lg-5 mx-auto d-none d-lg-block">
              <div className="first_banner_right_part">
                <div
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="3000"
                >
                  <img
                    src={bannerImg01}
                    className="img-fluid"
                    alt="bnner"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstCustomBanner;
