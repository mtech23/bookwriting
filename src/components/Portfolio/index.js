import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link} from "react-router-dom";

import {
    portfolioImg1,
    portfolioImg2,
    portfolioImg3,
    portfolioImg4,
    portfolioImg5,
    portfolioImg6,
    portfolioImg7,
    portfolioImg8,
    portfolioImg9,
    portfolioImg10,
    portfolioImg11,
    portfolioImg12,
    portfolioImg13,
    portfolioImg14,
    portfolioImg15,
} from "../../asserts/images"

const Portfolio = () => {
  return (
    <section className="portfolio__sec">
        <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
                <div className="sec_title">
                <h2>
                    OUR STANDARD <span class="color-red">SPEAKS IN</span> <br />
                    <span class="color-red"> PORTFOLIO</span>
                    </h2>
                </div>
            </div>
            <div className='col-md-12'>
                <Swiper
                    loop={true}
                    centeredSlides={true}
                    slidesPerView={5}
                    spaceBetween={10}
                    autoplay={{
                        delay: 1,
                        disableOnInteraction: false,
                    }}
                    speed={4000}
                    breakpoints={{
                        1024: { slidesPerView: 5, spaceBetween: 10 },
                        800: { slidesPerView: 3, spaceBetween: 10, centeredSlides: false },
                        600: { slidesPerView: 2, spaceBetween: 10, centeredSlides: false },
                        320: { slidesPerView: 1, spaceBetween: 10, centeredSlides: false },
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={portfolioImg1} alt="Portfolio 1" className="portfolio_imgs" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={portfolioImg2} alt="Portfolio 2" className="portfolio_imgs" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={portfolioImg3} alt="Portfolio 3" className="portfolio_imgs" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={portfolioImg4} alt="Portfolio 4" className="portfolio_imgs" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={portfolioImg5} alt="Portfolio 5" className="portfolio_imgs" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={portfolioImg6} alt="Portfolio 5" className="portfolio_imgs" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={portfolioImg7} alt="Portfolio 5" className="portfolio_imgs" />
                    </SwiperSlide>
                </Swiper>

                {/* Second Swiper */}
                <Swiper
                    loop={true}
                    centeredSlides={true}
                    slidesPerView={5}
                    spaceBetween={10}
                    autoplay={{
                        delay: 1,
                        disableOnInteraction: false,
                        reverseDirection: true,
                    }}
                    speed={4000}
                    breakpoints={{
                        1024: { slidesPerView: 5, spaceBetween: 10 },
                        800: { slidesPerView: 3, spaceBetween: 10, centeredSlides: false },
                        600: { slidesPerView: 2, spaceBetween: 10, centeredSlides: false },
                        320: { slidesPerView: 1, spaceBetween: 10, centeredSlides: false },
                        }}
                    modules={[Autoplay]}
                    className="mySwipernew"
                >
                    <SwiperSlide>
                        <img src={portfolioImg8} alt="Portfolio 8" className="portfolio_imgs" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={portfolioImg9} alt="Portfolio 9" className="portfolio_imgs" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={portfolioImg10} alt="Portfolio 10" className="portfolio_imgs" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={portfolioImg11} alt="Portfolio 11" className="portfolio_imgs" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={portfolioImg12} alt="Portfolio 12" className="portfolio_imgs" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={portfolioImg13} alt="Portfolio 12" className="portfolio_imgs" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={portfolioImg14} alt="Portfolio 12" className="portfolio_imgs" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={portfolioImg15} alt="Portfolio 12" className="portfolio_imgs" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div class="inner-btn-group">
                  <button className="btn-bg-white blink">
                    <Link to={'/contact-us'}>Get Started</Link>
                  </button>
                  <button className="btn-bg-red"><a href="tel:(855) 288-8770">Call Us Now</a></button>
                </div>
        </div>
        </div>
    </section>
  )
}

export default Portfolio
