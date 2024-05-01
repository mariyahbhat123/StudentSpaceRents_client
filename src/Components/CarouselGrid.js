import React from "react";
import Slider from "react-slick";
import "../Styles/CarouselGrid.css";

function CarouselGrid(props) {
  return (
    <div
      className="d-flex mt-4 ms-5 me-5"
      style={{
        flexDirection: "row",

        justifyContent: "center",
      }}
    >
      <div
        className="d-flex"
        style={{
          border: "1px solid black",
          width: "90%",
          justifyContent: "center",
        }}
      >
        <div className="ms-2 me-2 mb-2" style={{ width: "60%" }}>
          <div className="" style={{ width: "100%" }}>
            <img
              className="imge"
              style={{ width: "100%", objectFit: "cover" }}
              src={`http://localhost:5000/images/${props.img0}`}
              alt=""
            />
          </div>
          <div className="" style={{ width: "100%" }}>
            <img
              className="imge"
              src={`http://localhost:5000/images/${props.img1}`}
              alt=""
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <div className="me-2" style={{ width: "60%" }}>
          <div className="" style={{ width: "100%" }}>
            <img
              className="imge"
              src={`http://localhost:5000/images/${props.img2}`}
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <div className="" style={{ width: "100%" }}>
            <img
              className="imge"
              src={`http://localhost:5000/images/${props.img3}`}
              alt=""
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselGrid;
