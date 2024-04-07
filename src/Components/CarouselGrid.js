import React from "react";
import Slider from "react-slick";

function CarouselGrid() {
  return (
    <div
      className="d-grid mt-5"
      style={{
        justifyItems: "center",
        alignItems: "center",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gridTemplateRows: "80px 80px 80px 80px",
      }}
    >
      <div style={{}}>
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/ghk070123homeminifeature-005-655b983d8bf5f.jpg?crop=1xw:0.9989583333333334xh;center,top&resize=980:*"
          alt=""
        />
      </div>

      <div style={{}}>
        <img
          src="https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2022/06/10183457/small-bedroom-ideas.jpg"
          alt=""
        />
      </div>
      <div style={{}}>
        <img
          src="https://foyr.com/learn/wp-content/uploads/2021/09/master-bedroom-essentials.png"
          alt=""
        />
      </div>

      <div>
        <p>4</p>
      </div>
    </div>
  );
}

export default CarouselGrid;
