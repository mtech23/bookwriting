import React from "react";
import {
  polygon01,
  polygon03,
  categorybk,
  publishBookImg,
} from "../../asserts/images";

// import ReactTooltip from "react-tooltip";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "./tooltipSteps.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const PublishBook = () => {
  const { pathname } = useLocation()

  const services = {

    home: [
      {
        id: "step1",
        text: "Consult With Our Expert Team",
        // position: { top: "30px", left: "50px" },
      },
      {
        id: "step2",
        text: "Refine Your Manuscript",
        // position: { top: "80px", left: "100px" },
      },
      {
        id: "step3",
        text: "Design Your Book Cover",
        // position: { top: "120px", left: "150px" },
      },
      {
        id: "step4",
        text: "Choose Your Publishing Format",
        // position: { top: "160px", left: "200px" },
      },
      {
        id: "step5",
        text: "Launch And Promote Your Book",
        // position: { top: "200px", left: "250px" },
      },
    ],
    ghostWriting: [
      { id: "step1", text: "Discover Your Story" },
      { id: "step2", text: "Plot & Plan" },
      { id: "step3", text: "Write & Revise" },
      { id: "step4", text: "Fine-Tune the Draft" },
      { id: "step5", text: "Deliver Your Masterpiece" },
    ],
    bookPublishing: [
      { id: "step1", text: "Manuscript Assessment" },
      { id: "step2", text: "Formatting & Design" },
      { id: "step3", text: "ISBN & Registration" },
      { id: "step4", text: "Printing & Distribution" },
      { id: "step5", text: "Launch" },
    ],
    eBookWriting: [
      { id: "step1", text: "Concept Development" },
      { id: "step2", text: "Outline Creation" },
      { id: "step3", text: "Engaging Writing" },
      { id: "step4", text: "Formatting" },
      { id: "step5", text: "eBook Delivery" },
    ],
    articleWritingAndPublication: [
      { id: "step1", text: "Topic Ideation" },
      { id: "step2", text: "Research & Planning" },
      { id: "step3", text: "Write With Authority" },
      { id: "step4", text: "Professional Editing" },
      { id: "step5", text: "Publication Success" },
    ],
    bookVideoTrailer: [
      { id: "step1", text: "Creative Brief" },
      { id: "step2", text: "Script & Storyboard" },
      { id: "step3", text: "Video Creation" },
      { id: "step4", text: "Review & Refine" },
      { id: "step5", text: "Final Launch" },
    ],
    copyrightProtection: [
      { id: "step1", text: "Initial Consultation" },
      { id: "step2", text: "Document Preparation" },
      { id: "step3", text: "Filing Submission" },
      { id: "step4", text: "Confirmation & Tracking" },
      { id: "step5", text: "Receive Certification" },
    ],
    authorWebsite: [
      { id: "step1", text: "Vision Planning" },
      { id: "step2", text: "Design & Layout" },
      { id: "step3", text: "Content Development" },
      { id: "step4", text: "Testing & Optimization" },
      { id: "step5", text: "Launch & Maintain" },
    ],
    bookMarketing: [
      { id: "step1", text: "Marketing Strategy" },
      { id: "step2", text: "Campaign Creation" },
      { id: "step3", text: "Outreach & Engagement" },
      { id: "step4", text: "Analyze & Adjust" },
      { id: "step5", text: "Scale Your Reach" },
    ],
    bookCoverDesign: [
      { id: "step1", text: "Design Brief" },
      { id: "step2", text: "Initial Concepts" },
      { id: "step3", text: "Design Revisions" },
      { id: "step4", text: "Finalization" },
      { id: "step5", text: "Delivery" },
    ],
    customBookIllustration: [
      { id: "step1", text: "Concept Discussion" },
      { id: "step2", text: "Sketch Creation" },
      { id: "step3", text: "Feedback & Adjustments" },
      { id: "step4", text: "Final Artwork" },
      { id: "step5", text: "Integration" },
    ],
    professionalAudiobook: [
      { id: "step1", text: "Upload Your Manuscript" },
      { id: "step2", text: "Voice Selection" },
      { id: "step3", text: "Script Optimization" },
      { id: "step4", text: "Quality Narration" },
      { id: "step5", text: "Final Output" },
    ],
    pressRelease: [
      { id: "step1", text: "Draft Creation" },
      { id: "step2", text: "Feedback & Revisions" },
      { id: "step3", text: "Distribution Strategy" },
      { id: "step4", text: "Submit & Track" },
      { id: "step5", text: "Follow-Up" },
    ],
    editingProofreadingSteps: [
      { id: "step1", text: "Initial Assessment" },
      { id: "step2", text: "Content Editing" },
      { id: "step3", text: "Line Editing" },
      { id: "step4", text: "Proofreading" },
      { id: "step5", text: "Final Review" },
    ]
  };

  const pathList = [
    {
      path: "/",
      stepData: services.home
    },
    {
      path: "/ghost-writing",
      stepData: services.ghostWriting
    },
    {
      path: "/book-publishing",
      stepData: services.bookPublishing
    },
    {
      path: "/ebook-writing",
      stepData: services.eBookWriting
    },
    {
      path: "/article-writing-publication",
      stepData: services.articleWritingAndPublication
    },
    {
      path: "/book-marketing",
      stepData: services.bookMarketing
    },
    {
      path: "/custom-book-illustration",
      stepData: services.customBookIllustration
    },
    {
      path: "/author-website",
      stepData: services.authorWebsite
    },
    {
      path: "/book-video-trailer",
      stepData: services.bookVideoTrailer
    },
    {
      path: "/book-cover-design",
      stepData: services.bookCoverDesign
    },
    {
      path: "/copyrights-protection",
      stepData: services.copyrightProtection
    },
    {
      path: "/audio-book-design",
      stepData: services.professionalAudiobook
    },
    {
      path: "/press-release",
      stepData: services.pressRelease
    },
    {
      path: "/proof-reading",
      stepData: services.editingProofreadingSteps
    }
  ]

  const tooltipData = () => {
    const data = pathList?.find(item => item.path == pathname)?.stepData
    return data

  }

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
                <div
                  className="tooltip-container"
                  style={{ position: "relative" }}
                >
                  <img
                    draggable={false}
                    src={publishBookImg}
                    className="img-fluid"
                    alt=""
                    style={{ width: "100%" }} // Ensure the image scales correctly
                  />
                  {tooltipData().map((step) => (
                    <div
                      key={step.id}
                      className={`step-dot ${step.id}`}
                      data-tooltip-id={step.id}
                      data-tooltip-content={step.text}
                      style={{
                        position: "absolute",
                        // top: step.position.top,
                        // left: step.position.left,
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: "red",
                        cursor: "pointer",
                      }}
                    ></div>
                  ))}
                  {tooltipData().map((step) => (
                    <ReactTooltip
                      key={step.id}
                      id={step.id}
                      effect="solid"
                      place="top"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div class="inner-btn-group">
                  <button className="btn-bg-white blink">
                    <Link to={'/contact-us'}>Get Started</Link>
                  </button>
                  <button className="btn-bg-red"><a href="tel:(855) 288-8770">Call Us Now</a></button>
                </div>
        </div>
      </section>
    </>
  );
};

export default PublishBook;
