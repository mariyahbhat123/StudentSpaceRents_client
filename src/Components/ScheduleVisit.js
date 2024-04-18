import React from "react";
import CardDetail from "./CardDetail";
import Slider from "react-slick";
import Button from "react-bootstrap/esm/Button";

export default function ScheduleVisit() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    variableWidth: true,

    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          variableWidth: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
  return (
    <div>
      <div>
        <div>
          <h4>13,650</h4>
        </div>
        <div>
          <h6>Rent/month</h6>
        </div>
      </div>
      <hr />
      <div className="mt-4">
        <div>
          <p>Pick your visit date & time</p>
        </div>
        <div className=" slider-container ">
          <Slider {...settings} className="d-flex ">
            <div className="me-2">
              <CardDetail
                width="5rem"
                height="6rem"
                title={false}
                item0="Mon"
                item1="1"
              />
            </div>
            <div className="me-2">
              <CardDetail
                width="5rem"
                height="6rem"
                title={false}
                item0="Tues"
                item1="2"
              />
            </div>
            <div className="me-2">
              <CardDetail
                width="5rem"
                height="6rem"
                title={false}
                item0="Wed"
                item1="3"
              />
            </div>
            <div className="me-2">
              <CardDetail
                width="5rem"
                height="6rem"
                title={false}
                item0="Thur"
                item1="4"
              />
            </div>
            <div className="me-2">
              <CardDetail
                width="5rem"
                height="6rem"
                title={false}
                item0="Fri"
                item1="5"
              />
            </div>
            <div className="me-2">
              <CardDetail
                width="5rem"
                height="6rem"
                title={false}
                item0="Sat"
                item1="6"
              />
            </div>
            <div className="me-2">
              <CardDetail
                width="5rem"
                height="6rem"
                title={false}
                item0="Sun"
                item1="7"
              />
            </div>
          </Slider>
        </div>
        <div
          className="d-flex mt-5"
          style={{ justifyContent: "space-between" }}
        >
          <div
            className=""
            style={{
              textAlign: "center",
              border: "1px solid grey",
              padding: "4px 0px",
              width: "180px",
              borderRadius: "50px",
            }}
          >
            {" "}
            <p className="m-auto">01:00 pm - 04:00 pm</p>
          </div>
          <div
            style={{
              textAlign: "center",
              border: "1px solid grey",
              padding: "4px 0px",
              width: "180px",
              borderRadius: "50px",
            }}
          >
            {" "}
            <p className="m-auto">04:00 - 07:00 pm</p>
          </div>
        </div>
        <div className="mt-4">
          <Button
            variant="none"
            style={{
              borderRadius: "50px",
              width: "80%",
              backgroundColor: "#ff385c",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Schedule Visit
          </Button>
        </div>
      </div>
    </div>
  );
}
