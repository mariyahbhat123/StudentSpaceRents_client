import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "../Styles/slideArrow.css";
import CardDetail from "./CardDetail";

export default function PropDtailesCom() {
  const [showDetail, setShowDetail] = useState(false);
  const handleDetail = () => {
    if (showDetail === false) {
      setShowDetail(true);
    } else {
      setShowDetail(false);
    }
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-4 ms-5">
      <div
        className="d-flex p-3"
        style={{ border: "1px solid black", justifyContent: "space-evenly" }}
      >
        <p>Overview</p>
        <p>Amenities</p>
        <p>Rent details</p>
        <p>Terms of stay</p>
      </div>
      <div className="mt-4 p-5" style={{ border: "1px solid black" }}>
        <div className="d-flex" style={{ justifyContent: "space-between" }}>
          <div className="">
            <h5>About</h5>
          </div>
          <div>
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
      <div className="slider-container  ">
        <Slider {...settings} className="d-flex ">
          <div className="">
            <CardDetail
              title="Overview"
              item0="Switch"
              item1="Light"
              item2="Fan"
            />
          </div>
          <div className="ms-3 ">
            <CardDetail
              title="Living Room"
              item0="Switch"
              item1="Light"
              item2="Fan"
            />
          </div>
          <div className="ms-4">
            <CardDetail
              title="Kitchen"
              item0="Modular Kitchen"
              item1="Tap"
              item2=""
            />
          </div>
          <div className="ms-5">
            <CardDetail
              title="Bedroom"
              item0="Switch"
              item1="Light"
              item2="Fan"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}
