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
                    With Falcon Book Writing, make your book available in a durable, easy-to-carry format. A paperback favorite for readers is inexpensive, lightweight, and convenient to carry. We'll do it all for you-designing the cover to the interior formatting-to ensure that your book looks professional and has that professional appeal, thus making it easy for the book to be marketed to an even larger population when sold through online markets or in bookstores once published.
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
                    The hardcover is ideal for the production of an elegant author's edition with a sturdy cover, often surrounded by a dust jacket. We completely take care of all the processes involved from the design to the printing at Falcon Book Writing. Especially, with hardcover publishing you will get a high-quality, stand-out book, making this ideal for gifts, libraries and those who appreciate lasting durability. We professionally prepare your book to ensure you get the best possible presentation.
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
