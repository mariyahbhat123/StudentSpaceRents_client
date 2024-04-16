import { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Button from "react-bootstrap/esm/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function CardComponent(props) {
  const [favourite, setfavourite] = useState(false);
  let md = props.md;

  const fav = () => {
    if (favourite === true) {
      setfavourite(false);
    } else {
      setfavourite(true);
    }
  };
  return (
    <div className="ms-4 mt-5">
      <Row xs={1} md={md} className="w-100">
        {Array.from({ length: 8 }).map((_, idx) => (
          <Col key={idx}>
            <Card className="mt-5">
              <Link to="/PropertyDetail" style={{ textDecoration: "none" }}>
                <Carousel fade className="w-100 " interval={null}>
                  <Carousel.Item className="carousel-item">
                    <Card.Img
                      variant="top"
                      src="https://assets.simpleviewcms.com/simpleview/image/fetch/c_fill,h_1080,w_1920/f_jpg/q_65/https://images.citybreakcdn.com/image.aspx%3FImageId%3D6698948"
                      alt=""
                    />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <Card.Img
                      variant="top"
                      src="https://photos.spotahome.com/fsobscale_1600_900_nonverified_ur_15_50/a9f703c7bb278e60ee755b45fd3bd39c102c00584d8a0092c9b8b8f3.jpg"
                      alt=""
                    />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <Card.Img
                      variant="top"
                      src="https://png.pngtree.com/background/20230611/original/pngtree-small-dorm-room-with-two-beds-and-a-desk-picture-image_3153331.jpg"
                      alt=""
                    />
                  </Carousel.Item>
                </Carousel>

                <Card.Body>
                  <h6>
                    <b>Apartment</b>
                  </h6>
                  <Card.Title>Kupwara, kashmir </Card.Title>
                  <Card.Text>
                    <h6>
                      <b>Rs 32,000</b>/month
                    </h6>
                  </Card.Text>
                </Card.Body>
              </Link>

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
                    favourite === true ? { color: "red" } : { color: "white" }
                  }
                />
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
      <div>
        <Link to="/ListAd">See All</Link>
      </div>
    </div>
  );
}
