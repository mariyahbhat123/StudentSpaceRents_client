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
                    className="d-flex p-4  "
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
                  <div className="d-flex ms-4">
                    <LocationOnIcon className="me-2" />
                    <h5>{item.address}</h5>
                  </div>
                </div>
                <div className="d-flex p-2 mt-2">
                  <div
                    className="p-1 ms-3"
                    style={{
                      width: "200px",
                      border: "1px solid black",
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
                      border: "1px solid black",
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
                <div className="w-100 mt-2">
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
                </div>

                <div
                  className="d-flex mt-5"
                  style={{ backgroundColor: "#f5f5f5" }}
                >
                  <div className="" style={{ width: "65%" }}>
                    {" "}
                    <div className="ms-5">
                      <div
                        className="d-flex p-3"
                        style={{
                          border: "1px solid black",
                          justifyContent: "space-evenly",
                          position: "sticky",
                          top: "0px",
                          zIndex: "1",
                          backgroundColor: "white",
                        }}
                      >
                        <Button
                          onClick={() => handleScroll(overviewRef.current)}
                          variant="none"
                        >
                          Overview
                        </Button>
                        <Button
                          onClick={() => handleScroll(aboutRef.current)}
                          variant="none"
                        >
                          About
                        </Button>
                        <Button
                          onClick={() => handleScroll(mapRef.current)}
                          variant="none"
                        >
                          Map
                        </Button>
                        <Button
                          onClick={() => handleScroll(TermsRef.current)}
                          variant="none"
                        >
                          Terms of stay
                        </Button>
                      </div>
                      <div
                        className="mt-4 p-5"
                        style={{
                          border: "1px solid black",
                          backgroundColor: "white",
                        }}
                        ref={aboutRef}
                      >
                        <div
                          className="d-flex"
                          style={{ justifyContent: "space-between" }}
                        >
                          <div className="">
                            <h5>About</h5>
                          </div>
                          <div>
                            {showDetail === false ? (
                              <KeyboardArrowUpIcon />
                            ) : (
                              <KeyboardArrowDownIcon />
                            )}
                            <Button
                              onClick={handleDetail}
                              style={{ textDecoration: "none" }}
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
                        className="slider-container mt-4 p-5 "
                        style={{ backgroundColor: "white" }}
                        ref={overviewRef}
                      >
                        <div className="mb-4">
                          <h5>Rent includes</h5>
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
                          <div className="ms-3">
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
                      <div className="mt-4" ref={mapRef}>
                        <PropDetailsMap
                          lat={item.coordinates.lat}
                          lng={item.coordinates.lng}
                        />
                      </div>

                      <div
                        className="mt-4 p-5"
                        style={{
                          border: "1px solid black",
                          backgroundColor: "white",
                        }}
                        ref={TermsRef}
                      >
                        <div
                          className="d-flex"
                          style={{ justifyContent: "space-between" }}
                        >
                          <div className="">
                            <h5>Terms & Conditions</h5>
                          </div>
                          <div>
                            {showTerms === false ? (
                              <KeyboardArrowUpIcon />
                            ) : (
                              <KeyboardArrowDownIcon />
                            )}
                            <Button
                              onClick={handleTermsDetail}
                              style={{ textDecoration: "none" }}
                            >
                              More Details
                            </Button>
                          </div>
                        </div>
                        {showTerms === true ? (
                          <div>
                            <p>
                              This quiet semi_furnished 1 BHK independent house
                              for boys, girls, and family is located at Vinayaka
                              Nagar, Bengaluru and is close to the major
                              commercial centres of the area. This independent
                              house with a floor space of 450 sq.ft in total.
                              This house features Modular kitchen and more. It
                              has one bathroom with all facilities. It can be
                              rented at ₹13650 for full house. Book it now!
                            </p>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>{" "}
                  <div
                    className="ms-5 p-4"
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
