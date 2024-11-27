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
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Featured</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Authors</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Contact</a>
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
                    <Link href="#home" as={Link} to="/">
                      <p className="navbar_para">Ebook Publishers llc</p>
                      <p className="navbar_para_bottom">Consultation</p>
                    </Link>

                    <Link as={Link} to="/book-publishing">
                      <p className="navbar_para">
                        Self{" "}
                        <span className="header_light_bold">Publishing</span>
                      </p>
                      <p className="navbar_para_bottom">Publishing</p>
                    </Link>

                    <Link to={"/ghost-writer"}>
                      <p className="navbar_para">
                        Ghostwriting{" "}
                        <span className="header_light_bold">Services</span>
                      </p>
                      <p className="navbar_para_bottom">Writing</p>
                    </Link>

                    <Link to={"/audio-book-design"}>
                      <p className="navbar_para">
                        The Book{" "}
                        <span className="header_light_bold">Designer</span>
                      </p>
                      <p className="navbar_para_bottom">Production</p>
                    </Link>

                    <Link to={"/book-editing"}>
                      <p className="navbar_para">
                        Book <span className="header_light_bold">Editor</span>
                      </p>
                      <p className="navbar_para_bottom">Proofreading</p>
                    </Link>

                    <Link to={"/book-marketing"}>
                      <p className="navbar_para">
                        <span className="header_light_bold">Marketing</span>
                      </p>
                      <p className="navbar_para_bottom">Branding</p>
                    </Link>

                    <DropdownButton id="dropdown-basic-button" className="navbar-more-btn" title="More">
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>


                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
