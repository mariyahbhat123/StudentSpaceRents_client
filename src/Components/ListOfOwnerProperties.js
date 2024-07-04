import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { useSelector } from "react-redux";

import Button from "react-bootstrap/Button";

export default function ListOfOwnerProperties() {
  const [ownerPropertyList, setOwnerPropertyList] = useState([]);
  const ownerData = useSelector((state) => state.ownerData.ownerD);
  console.log(ownerData.email);
  const ownerEmail = ownerData.email;
  const handleOwnerProperties = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/ownerPropertyList/${ownerEmail}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data = await response.json();
      console.log(data.ownerProperty);
      setOwnerPropertyList(data.ownerProperty);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleOwnerProperties();
  }, []);
  return (
    <div className="">
      <div className="d-flex justify-content-center mt-2">
        <h4>ADDED PROPERTIES</h4>
      </div>
      {ownerPropertyList.map((item) => {
        return (
          <>
            <Card
              style={{ width: "35rem", border: "1px solid #ff385c" }}
              className="mt-3 mb-3"
            >
              <div className="d-flex">
                <div style={{ width: "20rem", overflow: "hidden" }}>
                  <Carousel fade className="w-100 " interval={null}>
                    <Carousel.Item className="carousel-item">
                      <Card.Img
                        variant="top"
                        src={`http://localhost:5000/images/${item.img0}`}
                        alt=""
                        style={{ height: "250px" }}
                      />
                    </Carousel.Item>
                    <Carousel.Item className="carousel-item">
                      <Card.Img
                        variant="top"
                        src={`http://localhost:5000/images/${item.img1}`}
                        alt=""
                        style={{ height: "250px" }}
                      />
                    </Carousel.Item>
                    <Carousel.Item className="carousel-item">
                      <Card.Img
                        variant="top"
                        src={`http://localhost:5000/images/${item.img2}`}
                        alt=""
                        style={{ height: "250px" }}
                      />
                    </Carousel.Item>
                    <Carousel.Item className="carousel-item">
                      <Card.Img
                        variant="top"
                        src={`http://localhost:5000/images/${item.img3}`}
                        alt=""
                        style={{ height: "250px" }}
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
                <div
                  className="d-flex  mt-1 "
                  style={{ justifyContent: "center" }}
                >
                  <Card.Body className="">
                    <Card.Text>
                      <div>
                        <div className="me-5 ">
                          <p style={{ fontSize: "18px" }}>
                            <b>District: </b>
                            {item.district}
                          </p>
                          <p style={{ fontSize: "18px" }}>
                            <b>Property Type: </b> {item.propertyType}
                          </p>

                          <p style={{ fontSize: "18px" }}>
                            <b>Address: </b>
                            {item.address}
                          </p>
                        </div>
                      </div>
                    </Card.Text>
                  </Card.Body>{" "}
                </div>
              </div>{" "}
            </Card>
          </>
        );
      })}
    </div>
  );
}
