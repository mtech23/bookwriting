import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { ModalDialog } from "react-bootstrap";
import {
  polygon01,
  processFeather,
  testImg1,
  testImg2,
  testImg3,
  testImg4,
  testImg5,
  testImg6,
  testImg7,
  testImg8,
  testVideo1,
  testPlayIcon,
} from "../../asserts/images";
import {
  helenMark, davidParker, lisaPatterson, michaelClarke, jessicaWilliams, brianSmith, amandaWhite
} from "../../asserts/videos";
import "./style.css";

import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import { Link} from "react-router-dom";

gsap.registerPlugin(MotionPathPlugin);

const testimonials_data = [
  {
    id: 1,
    image: testImg2,
    Icon: testPlayIcon,
    name: "Brian Smith",
    description: `Falcon Book Writing helped me from editing to publication. Their team made it really easy. Since I have no experience with publishing a book, I had fears that the complexity of the book publishing industry was going to overwhelm me. But Falcon Book Writing led me step by step through this process. Their professional team has been working together with me on every question that I may have. My book is polished by them to perfection. And finally, the, result was amazing, and I couldn't have done it without them.`,
    video: brianSmith
  },
  {
    id: 2,
    image: testImg4,
    Icon: testPlayIcon,
    name: "Helen Mark",
    description: `I was quite nervous about self-publishing, but Falcon Book Writing took me through every single step of the way. The consultancy service was just so useful to me. They made me understand what it means to self-publish, and everything that I had to do was explained. I just felt completely supported throughout all the process - formatting and design, getting the book out there in the channels. However, now my book is live and live on all major platforms, and I just couldn't be more excited.`,
    video: helenMark
  },
  {
    id: 3,
    image: testImg5,
    Icon: testPlayIcon,
    name: "David Parker",
    description: `I really needed help with marketing and branding my book, as it really is the only way to speak directly to your target market. Thanks to their wisdom, I really saw some growth in sales and visibility around my book. I totally cannot recommend them enough!`,
    video: davidParker
  },
  {
    id: 4,
    image: testImg3,
    Icon: testPlayIcon,
    name: "Lisa Patterson",
    description: `The ghostwriting service at Falcon Book Writing was great. I had a concept for a book but did not know how to flesh it out into a full-length manuscript. Their book writing service took my ideas and shaped them into a coherent, interesting narrative. They managed to grasp my voice so well and made the final product come out just like what I wanted it to be; they seemed to be putting down my thoughts and dreams on paper.`,
    video: lisaPatterson
  },
  {
    id: 5,
    image: testImg7,
    Icon: testPlayIcon,
    name: "Michael Clarke",
    description: `I highly recommend their services to any author who wants a high-quality product.`,
    video: michaelClarke
  },
  {
    id: 6,
    image: testImg3,
    Icon: testPlayIcon,
    name: "Jessica Williams",
    description: `I hired the services of Falcon Book Writing for proofreading and editing, and I am thoroughly impressed by their attention to detail. My manuscript was in pretty good shape, but the team helped polish it to perfection. I wouldn't trust anyone else with my manuscript!`,
    video: jessicaWilliams
  },
  {
    id: 7,
    image: testImg8,
    Icon: testPlayIcon,
    name: "Brian Smith",
    description: `Coming from a first-time author, I had many questions and doubts, especially with regards to the publishing process. It was a big help to consult with Falcon Book Writing. They made everything very clear to me, starting from manuscript format to getting my book published.`,
    video: brianSmith
  },
  {
    id: 8,
    image: testImg4,
    Icon: testPlayIcon,
    name: "Amanda White",
    description: `I avail their book writing service which did a great job in making my business book outstanding.`,
    video: amandaWhite
  },
];

const Testimonial = () => {
  const [lgShow, setLgShow] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Attach resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const boxes = document.querySelectorAll(".box");
    const path = document.querySelector("#circularPath");

    // Define responsive settings
    let duration, alignOrigin;

    if (windowWidth < 768) {
      // Mobile settings
      duration = 3;
      alignOrigin = [3, 0.5];
    } else if (windowWidth < 1024) {
      // Tablet settings
      duration = 4;
      alignOrigin = [2.8, 0.5];
    } else {
      // Desktop settings
      duration = 5;
      alignOrigin = [3, 0.5];
    }

    boxes.forEach((box, index) => {
      const totalBoxes = boxes.length;
      // const duration = 5;

      gsap.to(box, {
        motionPath: {
          path: path,
          align: path,
          // alignOrigin: [2.9, 0.5],
          // alignOrigin: [3, 0.5],
          alignOrigin: alignOrigin,
          start: index / totalBoxes,
          end: (index + 1) / totalBoxes,
          immediateRender: true,
        },
        duration: duration,
        repeat: -1, // Repeat infinitely
        ease: "linear",
        yoyo: true,
      });
    });
  }, []);
  return (
    <>
      <section className="testimonial">
        <img src={polygon01} className="testimonial_polygon" alt="polygon" />
        <img
          draggable={false}
          src={processFeather}
          className="process_feather"
          alt="feather"
        />
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-12">
              <div className="sec_title text-center">
                <h2>
                  <span className="color-red">Testimonial</span>
                </h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 col-md-8 mx-auto">
              <div
                className="testimonial_tabs"
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                <div className="test_circle">
                  <svg width="100%" height="100%" viewBox="0 0 500 500">
                    <path
                      id="circularPath"
                      fill="none"
                      stroke="#AF001D"
                      d="M 250,250 m -200,0 a 200,200 0 1,1 400,0 a 200,200 0 1,1 -400,0"
                    />
                  </svg>

                  {testimonials_data.map((item, index) => (
                    <button
                      type="button"
                      className="box"
                      key={index}
                      onClick={() => setLgShow(item.video)}
                    >
                      <img src={item.image} alt="" />
                      <img
                        src={testPlayIcon}
                        className="test_playIcon"
                        alt=""
                      />
                    </button>
                  ))}

                  {/* <button
                    type="button"
                    className="box"
                    // style={{ backgroundImage: `url(${testImg1})` }}
                  >
                    <img src={testImg1} alt="" />
                  </button>
                  <button
                    type="button"
                    className="box"
                    // style={{ backgroundImage: `url(${testImg2})` }}
                  >
                    <img src={testImg2} alt="" />
                  </button>
                  <button
                    type="button"
                    className="box"
                    // style={{ backgroundImage: `url(${testImg3})` }}
                  >
                    <img src={testImg3} alt="" />
                  </button>
                  <button
                    type="button"
                    className="box"
                    // style={{ backgroundImage: `url(${testImg4})` }}
                  >
                    <img src={testImg4} alt="" />
                  </button>
                  <button
                    type="button"
                    className="box"
                    // style={{ backgroundImage: `url(${testImg5})` }}
                  >
                    <img src={testImg5} alt="" />
                  </button>
                  <button
                    type="button"
                    className="box"
                    // style={{ backgroundImage: `url(${testImg6})` }}
                  >
                    <img src={testImg6} alt="" />
                  </button>
                  <button
                    type="button"
                    className="box"
                    // style={{ backgroundImage: `url(${testImg7})` }}
                  >
                    <img src={testImg7} alt="" />
                  </button>
                  <button
                    type="button"
                    className="box"
                    // style={{ backgroundImage: `url(${testImg8})` }}
                  >
                    <img src={testImg8} alt="" />
                  </button> */}
                </div>
                {/* <img
                  draggable={false}
                  src={testimonialGroupImg}
                  className="img-fluid"
                  alt=""
                /> */}

                {/* <div id="parent-circle-02">
                        <div class="circle02 blue">
                         
                        </div>
                        <div class="circle02 pink"></div>
                        <div class="circle02 lime"></div>
                        <div class="circle02 orange"></div>
                        <div class="circle02 teal"></div>
                        <div class="circle02 green">
                            <div className='circleUserImg'>
                            <img src={userImg01} alt='user' className='userImg'></img>
                           </div>
                        </div>
                        <div class="circle02 white"></div>
                        <div class="circle02 black"></div>
                    </div> */}
              </div>
            </div>

            {/* <div className="col-lg-6 col-sm-10 mx-auto">
              <div className="testimonial_tabs_content" data-aos="fade-left"
                data-aos-offset="0"
                data-aos-duration="2000">
                <div className="sec_title">
                  <h2>
                    <span className="color-red">TESTIMONIALS</span>
                  </h2>
                  <img
                    src={testimonialQuote}
                    className="testimonial_quotes"
                    alt=""
                  />
                  <h4>Jhon Smith</h4>
                  <p>
                    “When an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem.
                  </p>
                  <img
                    draggable={false}
                    src={ratingStars}
                    className="testimonial_stars"
                    alt=""
                  />
                </div>
              </div>
            </div> */}
          </div>
          <div class="inner-btn-group">
                  <button className="btn-bg-white blink">
                    <Link to={'/contact-us'}>Get Started</Link>
                  </button>
                  <button className="btn-bg-red"><a href="tel:(855) 288-8770">Call Us Now</a></button>
                </div>
        </div>
      </section>
      <Modal
        size="lg"
        show={lgShow}
        centered
        onHide={() => setLgShow(false)}
        // aria-labelledby="example-modal-sizes-title-lg"
        className="testimonial_modal"
      >
        <Modal.Body>
          <button
            className="modalCloseBtn"
            onClick={() => setLgShow(false)}
            aria-label="Close"
          >
            X
          </button>
          <video autoPlay loop width="100%">
            <source src={lgShow} type="video/mp4" />{" "}
            {/* Replace with your video path */}
            Your browser does not support the video tag.
          </video>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Testimonial;
