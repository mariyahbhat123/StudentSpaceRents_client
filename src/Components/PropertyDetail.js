import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./navBar";
import FooterCom from "./FooterCom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CarouselGrid from "./CarouselGrid";

import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ScheduleVisit from "./ScheduleVisit";
import Slider from "react-slick";

import "../Styles/slideArrow.css";
import CardDetail from "./CardDetail";
import "../Styles/CardDetailSlider.css";
import PropDetailsMap from "./PropDetailsMap";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "../Styles/PropertyDetail.css";

export default function PropertyDetail(props) {
  let { state } = useLocation();
  const propertyID = localStorage.getItem("propertyID");

  const id = state.id;

  localStorage.setItem("propertyID", id);

  console.log(propertyID);
  const [propertyData, setPropertyData] = useState([]);

  const showPropertyDetails = async () => {
    const response = await fetch(
      `http://localhost:5000/api/propertyData/${propertyID}`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let res = await response.json();

    setPropertyData([res.propertyData]);
  };

  useEffect(() => {
    showPropertyDetails();
  }, []);

  console.log(propertyData);

  const [showDetail, setShowDetail] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const handleDetail = () => {
    if (showDetail === false) {
      setShowDetail(true);
    } else {
      setShowDetail(false);
    }
  };

  const handleTermsDetail = () => {
    if (showTerms === false) {
      setShowTerms(true);
    } else {
      setShowTerms(false);
    }
  };
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,

    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          variableWidth: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          variableWidth: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
    ],
  };

  const overviewRef = useRef(null);
  const aboutRef = useRef(null);
  const TermsRef = useRef(null);
  const mapRef = useRef(null);

  //const handleClick = () => {
  // ref.current?.scrollIntoView({ behavior: "smooth" });
  //};

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="w-100" style={{ backgroundColor: "#ff385c" }}>
        <NavBar />
      </div>

      {propertyData
        ? propertyData.map((item) => {
            return (
              <>
                <div className="w-100">
                  <div
                    className="topContainer d-flex  "
                    style={{ justifyContent: "space-between" }}
                  >
                    <div>
                      <h4>{item.propertyType}</h4>
                    </div>
                    <div>
                      <FavoriteBorderIcon className="me-4" />
                      <ShareIcon />
                    </div>
                  </div>{" "}
                  <div
                    className="locationContainer
                  d-flex ms-4"
                  >
                    <LocationOnIcon className="locationIcon me-2" />
                    <h5>{item.address}</h5>
                  </div>
                </div>
                <div className="availableManaged d-flex p-2 mt-2">
                  <div
                    className="p-1 ms-3"
                    style={{
                      width: "200px",
                      border: "1px solid #ff385c",
                      borderRadius: "50px",
                    }}
                  >
                    <h6>Managed By SSR</h6>
                  </div>
                  {/* <div
                    className="p-1 ms-4"
                    style={{
                      width: "100px",
                      border: "1px solid black",
                      borderRadius: "50px",
                    }}
                  >
                    <h6>1 BHK</h6>
                  </div> */}
                  <div
                    className="p-1 ms-4"
                    style={{
                      width: "200px",
                      border: "1px solid #ff385c",
                      borderRadius: "50px",
                    }}
                  >
                    <h6>Available for {item.for}</h6>
                  </div>
                </div>

                <div className="">
                  <CarouselGrid
                    img0={item.img0}
                    img1={item.img1}
                    img2={item.img2}
                    img3={item.img3}
                  />
                </div>
                {/* <div className="w-100 mt-2">
                  <div className="d-flex " style={{ marginLeft: "15%" }}>
                    <Button
                      variant="none"
                      style={{ width: "15%", borderRadius: "50px" }}
                    >
                      Photos
                    </Button>

                    <Button
                      className="ms-5"
                      variant="none"
                      style={{ width: "15%", borderRadius: "50px" }}
                    >
                      Map
                    </Button>
                  </div>
                </div> */}

                <div
                  className="d-flex mt-5"
                  style={{ backgroundColor: "#f5f5f5" }}
                >
                  <div className="" style={{ width: "64%" }}>
                    {" "}
                    <div className="ms-5">
                      <div
                        className="scrollContainer d-flex p-3"
                        style={{
                          justifyContent: "space-evenly",
                          position: "sticky",
                          top: "0px",
                          zIndex: "1",
                          backgroundColor: "white",
                        }}
                      >
                        <Button
                          bsPrefix="btnScroll"
                          onClick={() => handleScroll(overviewRef.current)}
                          variant="none"
                        >
                          Overview
                        </Button>
                        <Button
                          // className="btnScroll"
                          bsPrefix="btnScroll"
                          onClick={() => handleScroll(aboutRef.current)}
                          variant="none"
                        >
                          About
                        </Button>
                        <Button
                          bsPrefix="btnScroll"
                          onClick={() => handleScroll(mapRef.current)}
                          variant="none"
                        >
                          Map
                        </Button>
                        <Button
                          bsPrefix="btnScroll"
                          onClick={() => handleScroll(TermsRef.current)}
                          variant="none"
                        >
                          Terms of stay
                        </Button>
                      </div>
                      <div
                        className="aboutContainer mt-4 p-5"
                        style={{
                          backgroundColor: "white",
                        }}
                        ref={aboutRef}
                      >
                        <div
                          className="moreDetailContainer d-flex"
                          style={{ justifyContent: "space-between" }}
                        >
                          <div className="detailsText">
                            <p>ABOUT</p>
                          </div>
                          <div className="moreDetail">
                            {showDetail === false ? (
                              <KeyboardArrowUpIcon />
                            ) : (
                              <KeyboardArrowDownIcon />
                            )}
                            <Button
                              bsPrefix="moreDetailsBtn"
                              onClick={handleDetail}
                              variant="none"
                            >
                              More Details
                            </Button>
                          </div>
                        </div>
                        {showDetail === true ? (
                          <div>
                            <p>{item.description}</p>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div
                        className="rentIncludesContainer slider-container mt-4 p-5 "
                        style={{ backgroundColor: "white" }}
                        ref={overviewRef}
                      >
                        <div className="rentText mb-4">
                          <h5 className="rentText">Rent includes</h5>
                        </div>
                        <Slider {...settings} className="d-flex slider">
                          <div className="">
                            <CardDetail
                              title="Overview"
                              item0="Switch"
                              item1="Light"
                              item2="Fan"
                              width="15rem"
                              height="12rem"
                            />
                          </div>
                          <div className=" ms-3">
                            <CardDetail
                              title="Living Room"
                              item0="Switch"
                              item1="Light"
                              item2="Fan"
                              width="15rem"
                              height="12rem"
                            />
                          </div>
                          <div className="ms-3">
                            <CardDetail
                              title="Kitchen"
                              item0="Modular Kitchen"
                              item1="Tap"
                              item2=""
                              width="15rem"
                              height="12rem"
                            />
                          </div>
                          <div className="ms-3">
                            <CardDetail
                              title="Bedroom"
                              item0="Switch"
                              item1="Light"
                              item2="Fan"
                              width="15rem"
                              height="12rem"
                            />
                          </div>
                        </Slider>
                      </div>
                      <div
                        className="propertyDetailMapContainer mt-4"
                        ref={mapRef}
                      >
                        <div>
                          <p className="detailsText">MAP</p>
                        </div>
                        <div className="propertyDetailMap">
                          <PropDetailsMap
                            lat={item.coordinates.lat}
                            lng={item.coordinates.lng}
                          />
                        </div>
                      </div>

                      <div
                        className="termsContainer mt-4 p-5"
                        style={{
                          backgroundColor: "white",
                        }}
                        ref={TermsRef}
                      >
                        <div
                          className="moreDetailContainer d-flex"
                          style={{ justifyContent: "space-between" }}
                        >
                          <div>
                            <p className="detailsText">Terms & Conditions</p>
                          </div>
                          <div className="moreDetail">
                            {showTerms === false ? (
                              <KeyboardArrowUpIcon />
                            ) : (
                              <KeyboardArrowDownIcon />
                            )}
                            <Button
                              bsPrefix="moreDetailsBtn"
                              onClick={handleTermsDetail}
                              style={{ textDecoration: "none" }}
                            >
                              More Details
                            </Button>
                          </div>
                        </div>
                        {showTerms === true ? (
                          <div>
                            <ul>
                              <li>
                                <b>Rent:</b> Monthly rent of{" "}
                                {item.monthlyRent.toLocaleString()}, due on the
                                date of each month.
                              </li>
                              <li>
                                <b>Utilities: </b>Tenant responsible for all the
                                utilities provided, unless otherwise specified.
                              </li>
                              <li>
                                <b> Maintenance:</b> Landlord responsible for
                                major repairs; tenant for minor repairs and
                                upkeep.
                              </li>
                              <li>
                                <b> Smoking:</b> No smoking allowed inside the
                                premises.
                              </li>
                              <li>
                                <b> Alterations:</b> Written consent required
                                from landlord for any alterations.
                              </li>
                            </ul>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>{" "}
                  <div
                    className="scheduleVisitContainer ms-5 p-4"
                    style={{
                      width: "30%",
                      boxShadow: "2px 2px 2px 2px grey",
                      height: "500px",
                      position: "sticky",
                      top: "0px",
                      backgroundColor: "white",
                    }}
                  >
                    <ScheduleVisit
                      monthlyRent={item.monthlyRent}
                      ownerEmail={item.ownerEmail}
                      ownerName={item.ownerName}
                      address={item.address}
                    />
                  </div>
                </div>
              </>
            );
          })
        : ""}
      <div>
        <FooterCom />
      </div>
    </div>
  );
}
