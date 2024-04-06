import React from "react";
import Slider from "react-slick";

function CarouselGrid() {
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: false,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="d-flex" style={{ width: "100%" }}>
            <div style={{ width: "50%", border: "2px solid black" }}>
              <p>100</p>
            </div>
            <div style={{ width: "50%" }}>
              <div style={{ width: "100%", border: "1px solid black" }}>
                <p>200</p>
              </div>
              <div style={{ width: "100%" }}>
                <p>75</p>
              </div>
            </div>
          </div>{" "}
          <div
            className="d-flex"
            style={{ width: "100%", justifyContent: "flex-end" }}
          >
            <p>4</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default CarouselGrid;
