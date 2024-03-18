import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CardCarouselCom() {
  const images = [
    {
      img: "https://hips.hearstapps.com/hmg-prod/images/ghk070123homeminifeature-005-655b983d8bf5f.jpg?crop=1xw:0.9989583333333334xh;center,top&resize=980:*",
    },
    {
      img: "https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2022/06/10183457/small-bedroom-ideas.jpg",
    },
    {
      img: "https://foyr.com/learn/wp-content/uploads/2021/09/master-bedroom-essentials.png",
    },
    {
      img: "https://st.hzcdn.com/simgs/pictures/bedrooms/lockhart-plan-greenway-impression-homes-img~c8e198a90e4f00bb_14-9072-1-2fd6d6c.jpg",
    },
    {
      img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      img: "https://www.marthastewart.com/thmb/vVHdWeV4MVvO8suInhPAaKNjuCs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/small-bedroom-ideas-kerrie-kelly-design-lab-01-db0ca0ea8601416b811757235d094b09.JPG",
    },
    {
      img: "https://st.hzcdn.com/simgs/pictures/bedrooms/sims-hilditch-cotswold-manor-house-sims-hilditch-img~e231e0960447b138_14-1715-1-2bb87ae.jpg",
    },
    {
      img: "https://www.ikea.com/images/a-brimnes-bed-in-a-lilac-room-covered-in-lilac-nattsvaermare-aaa6875a0cc26b87aeae1ee1d2eaeb44.jpg",
    },
    {
      img: "https://photos.spotahome.com/fsobscale_1600_900_nonverified_ur_15_50/a9f703c7bb278e60ee755b45fd3bd39c102c00584d8a0092c9b8b8f3.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
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
    <div className="container mt-5">
      {" "}
      <h2>Recently Included</h2>
      <Slider {...settings}>
        {images.map((item, idx) => (
          <Card className="">
            {" "}
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>

              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>{" "}
          </Card>
        ))}
      </Slider>
    </div>
  );
}
