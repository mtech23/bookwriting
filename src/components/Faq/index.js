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
                  <span class="color-red"> ASKED QUESTIONS</span>
                </h2>
              </div>
            </div>
            <div class="col-lg-6 col-sm-10 mx-auto">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span class="numbering">01.</span>
                    <span class="card_btn_content">
                    What is the difference between self-publishing and traditional publishing?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                  Self-publishing lets you control everything from writing to marketing, while traditional publishing is where a publishing house deals with most of the process, like distribution and promotion. Both are available at Falcon Book Writing, where I provide you with personalized guidance according to your preferences.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span class="numbering">02.</span>
                    <span class="card_btn_content">
                    How do you help with book marketing?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                  Our book marketing service entails creating a customized marketing plan, organizing book launches, and promoting your book through every available online and offline channels. Additionally, we walk you through the author's platform creation process, targeting the right audience, and maximizing the publicity of your work.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <span class="numbering">03.</span>
                    <span class="card_btn_content">
                    What does your ghostwriting service package include?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                  Our ghostwriting services provide you the option of book writers for hire from which you will get a professional writer who drafts your book based on your thoughts, vision, and voice. Our team allows you to own your story fully, ensuring it remains authentic, whether you want us to write the entire book or just certain parts.
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
                    What does your book editing service include?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                  Our book editing service is developmental, line, and copyedits. We restructure and improve the text's flow, grammar, and clarity to ensure your manuscript is ready for publication. Furthermore, the editors are in close touch with you to maintain the voice and enhance the quality of writing.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span class="numbering">05.</span>
                    <span class="card_btn_content">
                    What do we offer that other writers' service providers do not?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                  We offer a complete package of book writing service at Falcon Book Writing-from consultation to post-publishing marketing-to cover every aspect of your book-creation process. Therefore, our team will work with you personally to ensure the best results for every part of the book project, tailoring it into a one-on-one personal experience.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <span class="numbering">06.</span>
                    <span class="card_btn_content">
                    Do I need to buy a package or can I just choose individual services?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                  Yes, you could choose single services or opt for the whole package. However, we have flexibility in our services that can offer you whatever fits your book project from book editing to full service in writing and marketing.
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
