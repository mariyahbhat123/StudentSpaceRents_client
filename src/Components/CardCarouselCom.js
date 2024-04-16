import React, { useState } from "react";

import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/slideArrow.css";

export default function CardCarouselCom(props) {
  const [favourite, setfavourite] = useState(false);
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

  const fav = () => {
    if (favourite === true) {
      setfavourite(false);
    } else {
      setfavourite(true);
    }
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
                  <Link to="/PropertyDetail" style={{ textDecoration: "none" }}>
                    <Carousel fade className="w-100 " interval={null}>
                      <Carousel.Item className="carousel-item">
                        <Card.Img
                          variant="top"
                          src={item.img}
                          style={{ height: "200px" }}
                        />
                      </Carousel.Item>
                      <Carousel.Item className="carousel-item">
                        <Card.Img
                          variant="top"
                          src={item.img}
                          style={{ height: "200px" }}
                        />
                      </Carousel.Item>
                      <Carousel.Item className="carousel-item">
                        <Card.Img
                          variant="top"
                          src={item.img}
                          style={{ height: "200px" }}
                        />
                      </Carousel.Item>
                    </Carousel>
                    <Card.Body>
                      <h6>
                        <b>Apartment</b>
                      </h6>
                      <Card.Title>Kupwara, kashmir</Card.Title>

                      <Card.Text>
                        <h5>
                          <b>32,000</b>/month
                        </h5>
                      </Card.Text>
                    </Card.Body>{" "}
                  </Link>
                  <Button
                    variant="none"
                    style={{
                      position: "absolute",
                      zIndex: "10",
                      left: "200px",
                      boxShadow: "none",
                    }}
                    onClick={fav}
                  >
                    <FavoriteIcon
                      style={
                        favourite === true
                          ? { color: "red" }
                          : { color: "white" }
                      }
                    />
                  </Button>
                </Card>
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
}
