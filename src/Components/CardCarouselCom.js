import React, { useState, useEffect } from "react";

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
import "../Styles/CardCarouselCom.css";

export default function CardCarouselCom(props) {
  const [favourite, setfavourite] = useState(false);
  // const [propertyData, setPropertyData] = useState([]);
  const [showPropertyDetails, setShowPropertyDetails] = useState("");
  const propertyData = props.propertyData;
  console.log(propertyData);

  const settings = {
    dots: true,
    className: "center",
    initialSlide: 0,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 400,
    slidesToScroll: 2,

    swipeToSlide: true,
    arrows: true,
    // className: "slides",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          className: "center",
          centerPadding: "60px",

          initialSlide: 0,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          className: "center",
          centerPadding: "60px",
          initialSlide: 0,
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          className: "center",
          centerPadding: "60px",
          initialSlide: 0,
          infinite: false,
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
          Infinity: false,
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

  // const loadData = async () => {
  //   let response = await fetch("http://localhost:5000/api/propertyData", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   response = await response.json();
  //   setPropertyData(response);
  // };

  // useEffect(() => {
  //   loadData();
  // }, []);
  // console.log(propertyData);

  const handlePropertyData = (id) => {
    //   setShowPropertyDetails([...showPropertyDetails, id]);
  };

  const propertyID = localStorage.getItem("propertyID");

  return (
    <div className="slider-container mt-4 ">
      {" "}
      <h3 className="p-4">RECENTLY INCLUDED</h3>{" "}
      <Slider {...settings}>
        {propertyData
          .slice(2, 9)
          .reverse()
          .map((item) => {
            const rent = item.monthlyRent;
            const Rent = rent.toLocaleString();
            return (
              <div className="me-5">
                <Card className="ms-2 me-2">
                  <Carousel fade className="w-100 " interval={null}>
                    <Carousel.Item className="carousel-item">
                      <Card.Img
                        variant="top"
                        title="img0"
                        src={`http://localhost:5000/images/${item.img0}`}
                        style={{ height: "200px" }}
                      />
                    </Carousel.Item>
                    <Carousel.Item className="carousel-item">
                      <Card.Img
                        variant="top"
                        name="img1"
                        value={item.img1}
                        src={`http://localhost:5000/images/${item.img1}`}
                        style={{ height: "200px" }}
                      />
                    </Carousel.Item>
                    <Carousel.Item className="carousel-item">
                      <Card.Img
                        variant="top"
                        name="img2"
                        value={item.img2}
                        src={`http://localhost:5000/images/${item.img2}`}
                        style={{ height: "200px" }}
                      />
                    </Carousel.Item>
                    <Carousel.Item className="carousel-item">
                      <Card.Img
                        variant="top"
                        name="img3"
                        value={item.img3}
                        src={`http://localhost:5000/images/${item.img3}`}
                        style={{ height: "200px" }}
                      />
                    </Carousel.Item>
                  </Carousel>{" "}
                  <Link
                    to="/PropertyDetail"
                    state={{ id: item._id }}
                    style={{ textDecoration: "none" }}
                  >
                    <Card.Body className="cardBodyContainer">
                      <div className="detailContainer">
                        <p className="propertyType">{item.propertyType}</p>
                        <Card.Title className="propertyAddress">
                          {item.address}
                        </Card.Title>
                      </div>
                      <Card.Text className="mothlyRentContainer">
                        <p className="monthlyRent">
                          <b>{Rent}</b>/month
                        </p>
                      </Card.Text>
                    </Card.Body>{" "}
                  </Link>{" "}
                  {/* <Button
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
                  </Button> */}
                </Card>
              </div>
            );
          })}
      </Slider>
    </div>
  );
}
