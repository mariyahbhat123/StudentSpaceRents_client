import Carousel from "react-bootstrap/Carousel";
import "../Styles/CarouselCom.css";
import bed from "../CarouselImages/bed.jpg";
import living1 from "../CarouselImages/living1.jpg";
import living2 from "../CarouselImages/living2.jpg";
import kitchen1 from "../CarouselImages/kitchen1.jpg";

export default function CarouselComponent() {
  return (
    <div className="w-100 ">
      <Carousel fade className="w-100 ">
        <Carousel.Item className="carousel-item">
          <img
            // src="https://assets.simpleviewcms.com/simpleview/image/fetch/c_fill,h_1080,w_1920/f_jpg/q_65/https://images.citybreakcdn.com/image.aspx%3FImageId%3D6698948"
            src={bed}
            alt=""
            className="landingCarouselImages w-100"
          />
          <div className="color-overlay"></div>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            // src="https://photos.spotahome.com/fsobscale_1600_900_nonverified_ur_15_50/a9f703c7bb278e60ee755b45fd3bd39c102c00584d8a0092c9b8b8f3.jpg"
            src={living1}
            alt=""
            className="landingCarouselImages w-100"
          />
          <div className="color-overlay"></div>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            // src="https://png.pngtree.com/background/20230611/original/pngtree-small-dorm-room-with-two-beds-and-a-desk-picture-image_3153331.jpg"
            src={kitchen1}
            alt=""
            className="landingCarouselImages w-100"
          />
          <div className="color-overlay"></div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
