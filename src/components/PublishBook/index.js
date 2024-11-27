import React from 'react'
import { polygon01, polygon03, categorybk, publishBookImg } from '../../asserts/images'

const PublishBook = () => {
    return (
      <>
            <section className="publish_book_sec">
          <img src={polygon01} className="publish_polygon" alt="polygon" />
          <img src={polygon03} className="publish_polygon_3" alt="polygon" />
          <div className="publishBgPattern">
            <img draggable={false} src={categorybk} alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="sec_title">
                  <h2
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    How To Easily <span class="color-red">Publish</span> Your{" "}
                    <span class="color-red">Book</span>
                  </h2>
                </div>
                <div className="publish_book_content">
                  <img
                    draggable={false}
                    src={publishBookImg}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
  
  export default PublishBook