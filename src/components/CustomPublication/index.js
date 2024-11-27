import React from "react";
import {
  polygon01,
  polygon03,
  publicationBook1,
  publicationBook2,
} from "../../asserts/images";

const CustomPublication = () => {
  return (
    <>
      <section className="publication_sec sec_padding">
        <img src={polygon01} className="publication_polygon" alt="polygon" />
        <img src={polygon03} className="publication_polygon_3" alt="polygon" />
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-10 mx-auto">
              <div
                className="publication_images"
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                <img
                  draggable={false}
                  src={publicationBook1}
                  className="publicationBook1"
                  alt=""
                />
                <img
                  draggable={false}
                  src={publicationBook2}
                  className="publicationBook2"
                  alt=""
                />
                <div className="audio_player">
                  <audio controls>
                    <source src="horse.ogg" type="audio/ogg" />
                    <source src="horse.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-10 mx-auto">
              <div className="publication_content">
                <div className="sec_title">
                  <h2
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Paperback <br />
                    <span class="color-red">Publication</span>
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    Your book's global accessibility is a top priority for us.
                    Ensuring availability across all platforms, our
                    comprehensive marketing and distribution strategies
                    encompass both hardcover and paperback options. One source
                    for everything you require, backed by our committed group of
                    leading experts.
                  </p>
                  <h2
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="3000"
                  >
                    Online <br />
                    <span class="color-red">Publication</span>
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="3000"
                  >
                    We are highly satisfied with our capacity to transform
                    aspiring authors into published ones by granting them
                    unmatched authority over all aspects of their creative
                    concept and publishing objectives, focusing on eBooks. Our
                    all-encompassing assistance surpasses conventional
                    publishing; we actively collaborate with you to formulate a
                    resilient marketing strategy, guaranteeing a triumphant
                    debut and optimizing your financial gains.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomPublication;
