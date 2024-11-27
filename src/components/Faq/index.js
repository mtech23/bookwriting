import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { categorybk } from "../../asserts/images";

const Faq = () => {
  return (
    <>
      <section class="faqs_sec sec_padding">
        <div className="publishBgPattern">
          <img draggable={false} src={categorybk} alt="" />
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="sec_title">
                <h2
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="2000"
                >
                  FREQUENTLY
                  <span class="color-red">ASKED QUESTIONS</span>
                </h2>
              </div>
            </div>
            <div class="col-lg-6 col-sm-10 mx-auto">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span class="numbering">01.</span>
                    <span class="card_btn_content">
                      Lorem Ipsum is simply dummy text of the and typesetting
                      industry.
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span class="numbering">02.</span>
                    <span class="card_btn_content">
                      Lorem Ipsum is simply dummy text of the and typesetting
                      industry.
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <span class="numbering">03.</span>
                    <span class="card_btn_content">
                      Lorem Ipsum is simply dummy text of the and typesetting
                      industry.
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div class="col-lg-6 col-sm-10 mx-auto">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span class="numbering">04.</span>
                    <span class="card_btn_content">
                      Lorem Ipsum is simply dummy text of the and typesetting
                      industry.
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span class="numbering">05.</span>
                    <span class="card_btn_content">
                      Lorem Ipsum is simply dummy text of the and typesetting
                      industry.
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <span class="numbering">06.</span>
                    <span class="card_btn_content">
                      Lorem Ipsum is simply dummy text of the and typesetting
                      industry.
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
