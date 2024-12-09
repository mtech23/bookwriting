import React from "react";
import { Link } from "react-router-dom";
import { phoneImg, questionImg } from "../../../asserts/images";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import "./style.css";

import { logo } from "../../../asserts/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import {partner1, partner2, partner3, partner4, partner5} from "../../../asserts/images";






const Header = () => {
  return (
    <>
      <header className="position-relative">
        <div className="header_topbar sec_padding">
          {/* <div className="container-fluid">
            <div className="col-sm-12 col-lg-4 ml-auto">
              <div className="topbar_main_content justify-content-end">
                <div className="header_icon_with_info">
                  <Link className="header_topbar_icon">
                    <img
                      draggable={false}
                      src={phoneImg}
                      alt="phone"
                      className="img-fluid"
                    ></img>
                  </Link>
                  <Link>
                    <span className="header_topbar_info">13322826702</span>
                  </Link>
                </div>
                <div className="header_icon_with_info">
                  <Link className="header_topbar_icon">
                    <img
                      src={questionImg}
                      alt="phone"
                      className="img-fluid"
                    ></img>
                  </Link>
                  <Link>
                    <span className="header_topbar_info">Live Chat Now</span>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}



            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid align-items-cennter">
                <ul className="topbar_number">
                  <li><a href="tel:(855) 288-8770" className="text-with-icon">
                  <FontAwesomeIcon icon={faPhone} style={{ color: '#fff' }} />
                    (855) 288-8770
                    </a></li>
                </ul>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon">
                    <div className="topbar_icon_custom-design">
                      <div className="topbar_icon_custom-design-lines"></div>
                      <div className="topbar_icon_custom-design-lines"></div>
                      <div className="topbar_icon_custom-design-lines"></div>
                    </div>
                  </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link" to={"/"}>Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/about-us"}>About</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/featured-author"}>Featured Authors</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/contact-us"}>Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>







          
        </div>

        <section className="header_navbar sec_padding">
          <div className="container-fluid">
            <Navbar expand="lg" className="">
              <Container fluid className="justify-content-between">
                <Navbar.Brand as={Link} to="/" className="header-logo">
                  <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="justify-content-end w-100">
                    <Link to={"/ghost-writing"}>
                      <p className="navbar_para">Ghost Book <span class="header_light_bold">Writing</span></p>
                      {/* <p className="navbar_para_bottom">Consultation</p> */}
                    </Link>

                    <Link as={Link} to="/book-publishing">
                      <p className="navbar_para">
                        Book{" "}
                        <span className="header_light_bold">Publishing</span>
                      </p>
                      {/* <p className="navbar_para_bottom">Publishing</p> */}
                    </Link>

                    <Link to={"/ebook-writing"}>
                      <p className="navbar_para">
                        EBook{" "}
                        <span className="header_light_bold">Writing</span>
                      </p>
                      {/* <p className="navbar_para_bottom">Writing</p> */}
                    </Link>

                    <Link to={"/article-writing-publication"}>
                      <p className="navbar_para">
                      Article Writing &{" "}
                        <span className="header_light_bold">Publication</span>
                      </p>
                      {/* <p className="navbar_para_bottom">Production</p> */}
                    </Link>

                    <Link to={"/book-marketing"}>
                      <p className="navbar_para">
                      Book <span className="header_light_bold">Marketing</span>
                      </p>
                      {/* <p className="navbar_para_bottom">Proofreading</p> */}
                    </Link>

                    <Link to={"/custom-book-illustration"}>
                      <p className="navbar_para">
                      Custom <span className="header_light_bold">Book Illustration</span>
                      </p>
                      {/* <p className="navbar_para_bottom">Branding</p> */}
                    </Link>

                    <DropdownButton id="dropdown-basic-button" className="navbar-more-btn" title="More">
                      {/* <Dropdown.Item href="#/action-1">Resume Writing</Dropdown.Item> */}
                      <Dropdown.Item><Link to={'/author-website'}>Author Website</Link></Dropdown.Item>
                      <Dropdown.Item><Link to={'/book-video-trailer'}>Book Video Trailer</Link></Dropdown.Item>
                      <Dropdown.Item><Link to={'/book-cover-design'}>Book Cover Design</Link></Dropdown.Item>
                      <Dropdown.Item><Link to={'/copyrights-protection'}>Copyrights Protection</Link></Dropdown.Item>
                      <Dropdown.Item><Link to={'/audio-book-design'}>Professional Audio Book</Link></Dropdown.Item>
                      <Dropdown.Item><Link to={'/press-release'}>Press Release</Link></Dropdown.Item>
                      <Dropdown.Item><Link to={'/proof-reading'}>Editing & Proofreading</Link></Dropdown.Item>
                    </DropdownButton>


                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </section>
      </header>


      <div className="float-badge">
        <div className="float-img">
          <span>Reviews</span>
          <img src={partner1} alt="" />
          <img src={partner2} alt="" />
          <img src={partner3} alt="" />
          <img src={partner4} alt="" />
          <img src={partner5} alt="" />
        </div>
      </div>
      



      <a href="tel:(855) 288-8770" class="whatsapp"><i class="fa fa-phone"></i></a>



    </>
  );
};








export default Header;
