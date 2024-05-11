import React from "react";
import logo from "../assets/logo.png";
import backImg from "../assets/back.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import firstImg from "../assets/h310.jpg.png";
import SecondImg from "../assets/h36.jpg.png";
import thirdImg from "../assets/h37.jpg.png";
import fourthImg from "../assets/h38.jpg.png";
import fifthImg from "../assets/h39.jpg.png";
import icon from "../assets/Icon.png";
import icon1 from "../assets/Icon1.png";
import icon2 from "../assets/Icon2.png";
import subHome from "../assets/subhome.jpeg";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import avatar from "../assets/avtar.png";
import brand1 from "../assets/brand1.png";
import brand2 from "../assets/brand2.png";
import brand3 from "../assets/brand3.png";
import brand4 from "../assets/brand4.png";
import brand5 from "../assets/brand5.png";
import brand6 from "../assets/brand6.png";
import news1 from "../assets/news1.png";
import news2 from "../assets/news2.png";
import news3 from "../assets/news3.png";
import news4 from "../assets/news4.png";

import "./Home.css";
function Navbar() {
  return (
    <>
      <div className="container-fluid  ps-0  pe-0 ">
        <div className="row  ms-0 me-0 ">
          <div className="container-fluid ps-0  pe-0 ">
            <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src={backImg}
                    class="d-block w-60 "
                    // id="backgroundImage"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block caption-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <p className="text-center pe-3 captionText">5 Beds</p>
                      <p className="text-center pe-3 captionText ">2 Baths</p>
                      <p className="text-center captionText">180 sqft</p>
                    </div>

                    <h2 className="text-center captionSubText">
                      Office Spaces at Northwest
                    </h2>
                    <h6
                      className="pt-3"
                      style={{
                        fontWeight: 200,
                      }}
                    >
                      $260/month
                    </h6>
                    <button type="button" class="btn btn-color">
                      View details{" "}
                      <FontAwesomeIcon
                        className="ps-1 pe-1 "
                        icon={faArrowRight}
                      />
                    </button>
                  </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent pt-3 ">
                  <div className="container-fluid">
                    <a className="navbar-brand ml-5" href="/">
                      <img src={logo} alt="" className="w-75 h-75 ml-5 " />
                    </a>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                      className="collapse navbar-collapse col-5  offset-2   "
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav  mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link active dropdown-toggle text-light "
                            href="/"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{
                              fontWeight: 300,
                              fontSize: 14,
                            }}
                          >
                            Home
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item text-light" href="/">
                                Action
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item text-light" href="/">
                                Another action
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item text-light" href="/">
                                Something else here
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown ps-2 ">
                          <a
                            className="nav-link dropdown-toggle text-light"
                            href="/"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{
                              fontWeight: 300,
                              fontSize: 14,
                            }}
                          >
                            Listings
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item text-light" href="/">
                                Action
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item text-light" href="/">
                                Another action
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item text-light" href="/">
                                Something else here
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown ps-2 ">
                          <a
                            className="nav-link dropdown-toggle text-light"
                            href="/"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{
                              fontWeight: 300,
                              fontSize: 14,
                            }}
                          >
                            Members
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item text-light" href="/">
                                Action
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item text-light" href="/">
                                Another action
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item text-light" href="/">
                                Something else here
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown ps-2 ">
                          <a
                            className="nav-link dropdown-toggle text-light"
                            href="/"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{
                              fontWeight: 300,
                              fontSize: 14,
                            }}
                          >
                            Blog
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item text-light" href="/">
                                Action
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item text-light" href="/">
                                Another action
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item text-light" href="/">
                                Something else here
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown ps-2 ">
                          <a
                            className="nav-link dropdown-toggle text-light"
                            href="/"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{
                              fontWeight: 300,
                              fontSize: 14,
                            }}
                          >
                            Pages
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item text-light" href="/">
                                Action
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item text-light" href="/">
                                Another action
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item text-light" href="/">
                                Something else here
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item ps-2 ">
                          <a
                            className="nav-link  text-light "
                            aria-current="page"
                            href="/"
                            style={{
                              fontWeight: 300,
                              fontSize: 14,
                            }}
                          >
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="d-flex">
                      <FontAwesomeIcon
                        className="text-light pe-3 pt-2"
                        icon={faPhone}
                      />
                      <span
                        className="text-light pt-1"
                        style={{
                          fontWeight: 300,
                          fontSize: 14,
                        }}
                      >
                        +91 999-444-1111
                      </span>
                      <div className="ps-3">
                        <FontAwesomeIcon
                          className="text-light pe-3 pt-1"
                          icon={faCircleUser}
                        />
                        <button
                          type="button"
                          class="btn btn-outline-secondary btn-sm text-light "
                        >
                          Add Property
                        </button>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            {/* 2nd */}
            <div className="container inputSections">
              <div className="row">
                <div className="col-10 offset-2 ">
                  <form className="bg-black d-flex justify-content-between  rounded-4 pb-1 pt-1 formed">
                    <div className="p-1 flex-grow-1 ms-3">
                      <label>Keyword</label>
                      <br />
                      <input
                        type="text"
                        placeholder="Enter Keyword"
                        style={{
                          borderRadius: "5px",
                          width: "100%",
                          height: "40px",
                          marginBottom: "10px",
                        }}
                        className="bg-black text-white"
                      />
                    </div>
                    <div className="p-1 flex-grow-1">
                      <label>Status</label>
                      <br />
                      <select
                        style={{
                          borderRadius: "5px",
                          width: "100%",
                          height: "40px",
                          marginBottom: "10px",
                        }}
                        className="bg-black text-white"
                      >
                        <option value="">All Status</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </div>
                    <div className="p-1 flex-grow-1">
                      <label>Label</label>
                      <br />
                      <select
                        style={{
                          borderRadius: "5px",
                          width: "100%",
                          height: "40px",
                          marginBottom: "10px",
                        }}
                        className="bg-black text-white"
                      >
                        <option value="">All Labels</option>
                        <option value="label1">Label 1</option>
                        <option value="label2">Label 2</option>
                      </select>
                    </div>
                    <hr
                      style={{
                        color: "rgba(255, 255, 255, 0.2)",
                        height: "40px",
                        margin: "0 10px",
                      }}
                    />
                    <div className="d-flex align-items-center pe-5 ms-2 ">
                      <button
                        className="btn  btn-outline-secondary w-100  h-50  me-2"
                        style={{
                          borderRadius: "5px",
                          paddingLeft: "30px",
                          paddingRight: "30px",
                        }}
                      >
                        <span class="text-light ">
                          <FontAwesomeIcon className="pe-1 " icon={faSliders} />{" "}
                          Filter{" "}
                        </span>
                      </button>
                      <button
                        className="btn btn-primaryes w-100  h-50  "
                        style={{
                          borderRadius: "5px",
                          paddingLeft: "50px",
                          paddingRight: "50px",
                          backgroundColor: "#E7C873",
                        }}
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
          {/* 2 */}
        </div>
      </div>

      <div className="container mt-5 pt-5">
        <div>
          <h5
            className="text-center"
            style={{
              color: "#1A1A1A",
              fontSize: 40,
              fontWeight: 500,
            }}
          >
            Find Properties in These Cities
          </h5>
          <h6
            className="text-center pt-4 "
            style={{
              color: "#1A1A1A",
              fontSize: 17,
              fontWeight: 400,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h6>
        </div>
        <div className="d-flex flex-row justify-content-around mt-5 pt-5 gap-5">
          {/* Card 1 */}
          <div className="card position-relative">
            <div className="gradient-overlay"></div>
            <img
              src={firstImg}
              className="card-img-top rounded-3 darkened-image"
              alt="placeholder"
            />
            <div className="card-body position-absolute top-0 start-0">
              <h6 className="card-title text-white">New York</h6>
              <p
                className="text-secondary text-light "
                style={{ fontSize: 14, fontWeight: 200 }}
              >
                8 properties
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card position-relative">
            <div className="gradient-overlay"></div>

            <img
              src={SecondImg}
              className="card-img-top rounded-3 darkened-image"
              alt="placeholder"
            />
            <div className="card-body position-absolute top-0 start-0">
              <h6 className="card-title text-white">Chicago</h6>
              <p
                className="text-secondary text-light "
                style={{ fontSize: 14, fontWeight: 200 }}
              >
                2 properties
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card position-relative">
            <div className="gradient-overlay"></div>
            <img
              src={thirdImg}
              className="card-img-top rounded-3 darkened-image"
              alt="placeholder"
            />
            <div className="card-body position-absolute top-0 start-0">
              <h6 className="card-title text-white">Los Ang</h6>
              <p
                className="text-secondary text-light "
                style={{ fontSize: 14, fontWeight: 200 }}
              >
                1 properties
              </p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="card position-relative">
            <div className="gradient-overlay"></div>

            <img
              src={fourthImg}
              className="card-img-top rounded-3  darkened-image"
              alt="placeholder"
            />
            <div className="card-body position-absolute top-0 start-0">
              <h6 className="card-title text-white">Maimi</h6>
              <p
                className="text-secondary text-light "
                style={{ fontSize: 14, fontWeight: 200 }}
              >
                2 properties
              </p>
            </div>
          </div>
          {/* Card 5 */}
          <div className="card position-relative">
            <div className="gradient-overlay"></div>

            <img
              src={fifthImg}
              className="card-img-top rounded-3 darkened-image"
              alt="placeholder"
            />
            <div className="card-body position-absolute top-0 start-0">
              <h6 className="card-title text-white">Florida</h6>
              <p
                className="text-secondary text-light "
                style={{ fontSize: 14, fontWeight: 200 }}
              >
                3 properties
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="container mt-5 pt-5 pb-5 ">
        <div className="col-12 offset-0">
          <div className="col-12">
            <h4
              className="text-center"
              style={{
                fontWeight: 500,
                fontSize: 40,
                color: "#1A1A1A",
              }}
            >
              Why You Should Work With Us
            </h4>
            <h6
              className="text-center"
              style={{
                fontWeight: 400,
                fontSize: 17,
                color: "#1A1A1A",
                paddingTop: 10,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h6>
          </div>
          <div className="pt-5 text-center d-flex justify-content-around ">
            <div>
              <img
                src={icon}
                alt=""
                className="align-items-center"
                style={{ margin: "0 auto" }}
              />
              <div
                className="pt-4"
                style={{ maxWidth: "300px", margin: "0 auto" }}
              >
                <h6
                  style={{
                    fontWeight: 500,
                    fontSize: 21,
                    color: "#1A1A1A",
                  }}
                >
                  Wide Range of Properties
                </h6>
                <p
                  style={{
                    fontWeight: 300,
                    fontSize: 15,
                    color: "#1A1A1A",
                    paddingTop: 7,
                  }}
                >
                  We offer expert legal help for all related property items in
                  Dubai.
                </p>
              </div>
            </div>
            <div>
              <img
                src={icon1}
                alt=""
                className="align-items-center"
                style={{ margin: "0 auto" }}
              />
              <div
                className="pt-4"
                style={{ maxWidth: "300px", margin: "0 auto" }}
              >
                <h6
                  style={{
                    fontWeight: 500,
                    fontSize: 21,
                    color: "#1A1A1A",
                  }}
                >
                  Wide Range of Properties
                </h6>
                <p
                  style={{
                    fontWeight: 300,
                    fontSize: 15,
                    color: "#1A1A1A",
                    paddingTop: 7,
                  }}
                >
                  We offer expert legal help for all related property items in
                  Dubai.
                </p>
              </div>
            </div>
            <div>
              <img
                src={icon2}
                alt=""
                className="align-items-center"
                style={{ margin: "0 auto" }}
              />
              <div
                className="pt-4"
                style={{ maxWidth: "300px", margin: "0 auto" }}
              >
                <h6
                  style={{
                    fontWeight: 500,
                    fontSize: 21,
                    color: "#1A1A1A",
                  }}
                >
                  Wide Range of Properties
                </h6>
                <p
                  style={{
                    fontWeight: 300,
                    fontSize: 15,
                    color: "#1A1A1A",
                    paddingTop: 7,
                  }}
                >
                  We offer expert legal help for all related property items in
                  Dubai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="container mt-5 pt-5 pb-5  mb-5  ">
        <div className="row">
          <div className="col-12">
            <div
              style={{
                height: "160px",
                gap: "0px",
                // padding: "0px 135px 0px 135px",
                borderRadius: "16px 16px 16px 16px",
                opacity: "0px",
                background: "#1F4B43",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div className="d-flex justify-content-around ">
                <div className=" align-items-center mt-2  ">
                  <p
                    style={{
                      fontSize: "30px",
                      fontWeight: "500",
                      textAlign: "left",
                      color: "#FFFFFF",
                    }}
                  >
                    Sign in to streamline your search
                  </p>
                  <p
                    style={{
                      fontSize: "17px",
                      fontWeight: "200",
                      textAlign: "left",
                      color: "#FFFFFF",
                    }}
                  >
                    Save properties, create alerts and keep track of the
                    enquiries you send to agents.
                  </p>
                </div>
                <div>
                  <button type="button" class="btn btn-color2">
                    Sign in or create an account
                    <FontAwesomeIcon className=" ps-3" icon={faArrowRight} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div
        className="container-fluid d-flex justify-content-center align-items-center ps-0 pe-0 homelive"
        style={{ height: "100vh" }}
      >
        <div className="col-6 text-center">
          <h2 className="text-light" style={{ fontSize: 60, fontWeight: 500 }}>
            Discover a place you'll love to live
          </h2>
          <p
            className="text-light"
            style={{ paddingTop: 10, fontWeight: 300, fontSize: 16 }}
          >
            Pellentesque egestas elementum egestas faucibus sem. Velit nunc
            egestas ut morbi. Leo diam diam
          </p>
          <button
            type="button"
            className="btn btn-color d-inline-flex align-items-center"
          >
            View Properties{" "}
            <FontAwesomeIcon className="ps-2" icon={faArrowRight} />
          </button>
        </div>
      </div>
      {/*  */}
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div className="text-center pe-4 ">
              <h2
                className="text-black w-100"
                style={{
                  fontWeight: 500,
                  fontSize: 40,
                  color: "#1A1A1A",
                }}
              >
                We Use Real Estate to Show Our Appreciation of The World
              </h2>
              <p
                className="pt-3"
                style={{
                  fontWeight: 400,
                  fontSize: 16,
                  color: "#1A1A1A",
                }}
              >
                Pellentesque egestas elementum egestas faucibus sem. Velit nunc
                egestas ut morbi. Leo diam diam nibh eget fermentum massa
                pretium. Mi mauris nulla ac dictum ut mauris non.
              </p>
              <div className="d-flex justify-content-around   pt-4  ">
                <div>
                  <h2
                    style={{
                      fontWeight: 500,
                      fontSize: 40,
                    }}
                  >
                    $18M
                  </h2>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 400,
                    }}
                  >
                    Owned from properties transactions
                  </p>
                </div>
                <div>
                  <h2
                    style={{
                      fontWeight: 500,
                      fontSize: 40,
                    }}
                  >
                    15K+
                  </h2>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 400,
                    }}
                  >
                    Properties for Sell
                  </p>
                </div>

                {/*  */}
              </div>
              <div className="d-flex justify-content-around ps-5 ms-4  pt-4  gap-5 ">
                <div>
                  <h2
                    style={{
                      fontWeight: 500,
                      fontSize: 40,
                    }}
                  >
                    26K+
                  </h2>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 400,
                    }}
                  >
                    Properties for Buy
                  </p>
                </div>
                <div className="ms-4">
                  <h2
                    style={{
                      fontWeight: 500,
                      fontSize: 40,
                    }}
                  >
                    890
                  </h2>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 400,
                    }}
                  >
                    Daily completed transactions.
                  </p>
                </div>
              </div>
              {/*  */}
              <button
                type="button"
                className="btn btn-color d-inline-flex align-items-center"
              >
                Learn More{" "}
                <FontAwesomeIcon className="ps-2" icon={faArrowRight} />
              </button>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src={subHome}
              alt=""
              style={{ maxWidth: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="bg-black mt-5 pt-5 pb-5">
        <div className="container p-5 d-flex ">
          <div className="col-6">
            <div>
              {" "}
              <h6
                className="text-light w-75 "
                style={{
                  fontWeight: 500,
                  fontSize: 30,
                }}
              >
                What our customers are saying us?
              </h6>
              <div className="d-flex flex-row gap-5 pt-4">
                <div>
                  <h4 className="text-light">10m+</h4>
                  <p className="text-light">Happy People</p>
                </div>
                <div>
                  <h4 className="text-light">4.88</h4>
                  <p className="text-light">Overall Rating</p>
                  <div className="text-light">
                    <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div>
              <img
                style={{
                  width: 50,
                }}
                src={avatar}
                alt=""
              />

              <h5
                className="text-light pt-2 "
                style={{
                  fontSize: 15,
                  fontWeight: 400,
                }}
              >
                Cameron Williamson
              </h5>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 200,
                }}
                className="text-light"
              >
                Designer
              </p>
              <div>
                <p
                  className="text-light"
                  style={{
                    fontWeight: 300,
                  }}
                >
                  Searches for multiplexes, property comparisons, and the loan
                  estimator. Works great. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dores.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-2" style={{ borderColor: "gray" }} />
        <div className="container p-2 pb-5 ">
          <h6
            class="text-center text-light"
            style={{
              fontWeight: 400,
            }}
          >
            Thousands of world’s leading companies trust Space
          </h6>
          <div className="d-flex justify-content-around pt-5  ">
            <div>
              <img src={brand1} alt="" />
            </div>
            <div>
              <img src={brand2} alt="" />
            </div>
            <div>
              <img src={brand3} alt="" />
            </div>

            <div>
              <img src={brand4} alt="" />
            </div>
            <div>
              <img src={brand5} alt="" />
            </div>
            <div>
              <img src={brand6} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="container mt-5 pt-5">
        <div>
          <h3
            className="text-center"
            style={{
              fontWeight: 500,
              fontSize: 42,
            }}
          >
            Recent Articles & News
          </h3>
          <p
            className="text-center"
            style={{
              fontWeight: 300,
              fontSize: 12,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="row mt-5">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card">
              <img src={news1} className="card-img-top" alt="Article 1" />
              <div className="card-body">
                <h5
                  className="card-title text-secondary  text-center "
                  style={{
                    fontSize: 13,
                  }}
                >
                  Apartment . March 19 2024{" "}
                </h5>
                <p
                  className="card-text text-center p-1  "
                  style={{
                    fontSize: 17,
                  }}
                >
                  Housing Markets That Changed the Most This Week
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card">
              <img src={news2} className="card-img-top" alt="Article 2" />
              <div className="card-body">
                <h5
                  className="card-title text-secondary  text-center "
                  style={{
                    fontSize: 13,
                  }}
                >
                  Apartment . March 19 2024{" "}
                </h5>
                <p
                  className="card-text text-center p-1  "
                  style={{
                    fontSize: 17,
                  }}
                >
                  Housing Markets That Changed the Most This Week
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card">
              <img src={news3} className="card-img-top" alt="Article 3" />
              <div className="card-body">
                <h5
                  className="card-title text-secondary  text-center "
                  style={{
                    fontSize: 13,
                  }}
                >
                  Office . March 19 2024{" "}
                </h5>
                <p
                  className="card-text text-center p-1  "
                  style={{
                    fontSize: 17,
                  }}
                >
                  Housing Markets That Changed the Most This Week
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card">
              <img src={news4} className="card-img-top" alt="Article 4" />
              <div className="card-body">
                <h5
                  className="card-title text-secondary  text-center "
                  style={{
                    fontSize: 13,
                  }}
                >
                  Shop . March 19 2024{" "}
                </h5>
                <p
                  className="card-text text-center p-1  "
                  style={{
                    fontSize: 17,
                  }}
                >
                  Housing Markets That Changed the Most This Week
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
