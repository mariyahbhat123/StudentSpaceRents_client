import React from "react";

import Card from "react-bootstrap/Card";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/slideArrow.css";

export default function CardCarouselCom(props) {
  const images = props.images;
  console.log(images);
  const settings = {
    dots: true,
    className: "center",
    initialSlide: 0,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 400,
    slidesToScroll: 4,
    swipeToSlide: true,
    arrows: true,
    className: "slides",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          className: "center",
          centerPadding: "60px",
          initialSlide: 0,
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          className: "center",
          centerPadding: "60px",
          initialSlide: 0,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "60px",
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
    ],
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  return (
    <div className="slider-container mt-4 ">
      {" "}
      <h2 className="p-4">Recently Included</h2>
      <Slider {...settings} className="">
        {images.map((item, idx) => {
          return (
            <>
              <div className="">
                <Card className="ms-2 me-2">
                  {" "}
                  <Card.Img
                    variant="top"
                    src={item.img}
                    style={{ height: "200px" }}
                  />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>

                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>{" "}
                </Card>
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
}
