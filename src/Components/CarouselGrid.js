import React from "react";
import Slider from "react-slick";
import "../Styles/CarouselGrid.css";

function CarouselGrid() {
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
              src="https://hips.hearstapps.com/hmg-prod/images/ghk070123homeminifeature-005-655b983d8bf5f.jpg?crop=1xw:0.9989583333333334xh;center,top&resize=980:*"
              alt=""
            />
          </div>
          <div className="" style={{ width: "100%" }}>
            <img
              className="imge"
              src="https://foyr.com/learn/wp-content/uploads/2021/09/master-bedroom-essentials.png"
              alt=""
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <div className="me-2" style={{ width: "60%" }}>
          <div className="" style={{ width: "100%" }}>
            <img
              className="imge"
              src="https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2022/06/10183457/small-bedroom-ideas.jpg"
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <div className="" style={{ width: "100%" }}>
            <img
              className="imge"
              src="https://foyr.com/learn/wp-content/uploads/2021/09/master-bedroom-essentials.png"
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
