import { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Button from "react-bootstrap/esm/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CardActions } from "@mui/material";
import PropertyDetail from "./PropertyDetail";
export default function CardComponent(props) {
  const [favourite, setfavourite] = useState(false);
  const [propertyId, setPropertyId] = useState("");
  const [clickLink, setClickLink] = useState(false);
  console.log(propertyId);
  console.log(clickLink);
  let md = props.md;
  const propertyData = props.propertyData;

  const fav = () => {
    if (favourite === true) {
      setfavourite(false);
    } else {
      setfavourite(true);
    }
  };

  const handlePropertyId = () => {
    if (clickLink === true) {
      <Link to={<PropertyDetail />} />;
      setClickLink(false);
    } else {
      setClickLink(true);
    }
  };

  return (
    <div className="ms-4 mt-5">
      <Row xs={1} md={md} className="w-100">
        {propertyData.map((item, idx) => {
          return (
            <>
              {" "}
              <Link
                style={{ textDecoration: "none" }}
                to="/PropertyDetail"
                state={{ id: item._id }}
              >
                {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
                <Col key={idx}>
                  <Card
                    className="mt-5"
                    onClick={() => setPropertyId(item._id)}
                  >
                    <Carousel fade className="w-100 " interval={null}>
                      <Carousel.Item className="carousel-item">
                        <Card.Img
                          variant="top"
                          src={`http://localhost:5000/images/${item.img0}`}
                          alt=""
                          style={{ height: "200px" }}
                        />
                      </Carousel.Item>
                      <Carousel.Item className="carousel-item">
                        <Card.Img
                          variant="top"
                          src={`http://localhost:5000/images/${item.img1}`}
                          alt=""
                          style={{ height: "200px" }}
                        />
                      </Carousel.Item>
                      <Carousel.Item className="carousel-item">
                        <Card.Img
                          variant="top"
                          src={`http://localhost:5000/images/${item.img2}`}
                          alt=""
                          style={{ height: "200px" }}
                        />
                      </Carousel.Item>
                      <Carousel.Item className="carousel-item">
                        <Card.Img
                          variant="top"
                          src={`http://localhost:5000/images/${item.img3}`}
                          alt=""
                          style={{ height: "200px" }}
                        />
                      </Carousel.Item>
                    </Carousel>

                    <Card.Body>
                      <h6>
                        <b>{item.propertyType}</b>
                      </h6>
                      <Card.Title>{item.address} </Card.Title>
                      <Card.Text>
                        <h6>
                          <b>{item.monthlyRent}</b>/month
                        </h6>
                      </Card.Text>
                    </Card.Body>
                  </Card>{" "}
                  <Button
                    variant="none"
                    style={{
                      position: "absolute",
                      zIndex: "10",
                      left: "250px",
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
                </Col>{" "}
              </Link>
              {/* ))} */}
            </>
          );
        })}{" "}
      </Row>

      <div
        className="mt-4 me-4"
        style={{
          textAlign: "end",
          fontSize: "18px",
        }}
      >
        <Link
          to={{
            pathname: "/ListAd",
            state: {
              propertyData: propertyData,
            },
          }}
          style={{
            color: "black",
            fontWeight: "bold",
          }}
        >
          See All
        </Link>
      </div>
    </div>
  );
}
