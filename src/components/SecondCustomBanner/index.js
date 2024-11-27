
import React from 'react'
import { banner2imgRight, secondBannerImg01 } from '../../asserts/images'

const SecondCustomBanner = () => {
  return (
    <>
          <section className="second_banner_section">
        <div className="banner_left_img">
          <img draggable={false} src={secondBannerImg01} alt="" />
        </div>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-md-12">
              <div className="sec_title">
                <h2 data-aos="fade-up"
                data-aos-offset="0"
                data-aos-duration="1000">Lorem Ipsum Is A dummy Text</h2>
                <p data-aos="fade-up"
                data-aos-offset="0"
                data-aos-duration="2000">
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem.
                </p>
                <button type="button" className="brand_btn" data-aos="fade-up"
                data-aos-offset="0"
                data-aos-duration="3000">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="banner_right_img">
          <img draggable={false} src={banner2imgRight} alt=""></img>
        </div>
      </section>
    </>
  )
}

export default SecondCustomBanner