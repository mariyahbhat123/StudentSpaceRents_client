import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "../Styles/slideArrow.css";
import CardDetail from "./CardDetail";
import "../Styles/CardDetailSlider.css";
import PropDetailsMap from "./PropDetailsMap";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function PropDtailesCom() {
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
        <Link onClick={() => handleScroll(overviewRef.current)}>Overview</Link>
        <Link onClick={() => handleScroll(aboutRef.current)}>About</Link>
        <Link onClick={() => handleScroll(mapRef.current)}>Map</Link>
        <Link onClick={() => handleScroll(TermsRef.current)}>
          Terms of stay
        </Link>
      </div>
      <div
        className="mt-4 p-5"
        style={{ border: "1px solid black", backgroundColor: "white" }}
        ref={aboutRef}
      >
        <div className="d-flex" style={{ justifyContent: "space-between" }}>
          <div className="">
            <h5>About</h5>
          </div>
          <div>
            {showDetail === false ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
            <Link onClick={handleDetail} style={{ textDecoration: "none" }}>
              More Details
            </Link>
          </div>
        </div>
        {showDetail === true ? (
          <div>
            <p>
              This quiet semi_furnished 1 BHK independent house for boys, girls,
              and family is located at Vinayaka Nagar, Bengaluru and is close to
              the major commercial centres of the area. This independent house
              with a floor space of 450 sq.ft in total. This house features
              Modular kitchen and more. It has one bathroom with all facilities.
              It can be rented at ₹13650 for full house. Book it now!
            </p>
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
        <PropDetailsMap />
      </div>

      <div
        className="mt-4 p-5"
        style={{ border: "1px solid black", backgroundColor: "white" }}
        ref={TermsRef}
      >
        <div className="d-flex" style={{ justifyContent: "space-between" }}>
          <div className="">
            <h5>Terms & Conditions</h5>
          </div>
          <div>
            {showTerms === false ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
            <Link
              onClick={handleTermsDetail}
              style={{ textDecoration: "none" }}
            >
              More Details
            </Link>
          </div>
        </div>
        {showTerms === true ? (
          <div>
            <p>
              This quiet semi_furnished 1 BHK independent house for boys, girls,
              and family is located at Vinayaka Nagar, Bengaluru and is close to
              the major commercial centres of the area. This independent house
              with a floor space of 450 sq.ft in total. This house features
              Modular kitchen and more. It has one bathroom with all facilities.
              It can be rented at ₹13650 for full house. Book it now!
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
