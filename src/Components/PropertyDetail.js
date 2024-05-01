import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./navBar";
import FooterCom from "./FooterCom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CarouselGrid from "./CarouselGrid";
import PropDtailesCom from "./PropDtailesCom";

import Button from "react-bootstrap/Button";
import ScheduleVisit from "./ScheduleVisit";

export default function PropertyDetail(props) {
  let { state } = useLocation();

  let id = state.id;
  console.log(id);
  const [propertyData, setPropertyData] = useState([]);

  const showPropertyDetails = async () => {
    const response = await fetch(
      `http://localhost:5000/api/propertyData/${id}`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let res = await response.json();

    setPropertyData([res.propertyData]);
  };

  useEffect(() => {
    showPropertyDetails();
  }, []);

  console.log(propertyData);
  return (
    <div>
      <div className="w-100" style={{ backgroundColor: "#ff385c" }}>
        <NavBar />
      </div>

      {propertyData
        ? propertyData.map((item) => {
            return (
              <>
                <div className="w-100">
                  <div
                    className="d-flex p-4  "
                    style={{ justifyContent: "space-between" }}
                  >
                    <div>
                      <h4>HOUSE TYPE</h4>
                    </div>
                    <div>
                      <FavoriteBorderIcon className="me-4" />
                      <ShareIcon />
                    </div>
                  </div>{" "}
                  <div className="d-flex ms-4">
                    <LocationOnIcon className="me-2" />
                    <h5>hawal tibetan colony</h5>
                  </div>
                </div>
                <div className="d-flex p-2 mt-2">
                  <div
                    className="p-1 ms-3"
                    style={{
                      width: "200px",
                      border: "1px solid black",
                      borderRadius: "50px",
                    }}
                  >
                    <h6>Managed By SSR</h6>
                  </div>
                  <div
                    className="p-1 ms-4"
                    style={{
                      width: "100px",
                      border: "1px solid black",
                      borderRadius: "50px",
                    }}
                  >
                    <h6>1 BHK</h6>
                  </div>
                  <div
                    className="p-1 ms-4"
                    style={{
                      width: "200px",
                      border: "1px solid black",
                      borderRadius: "50px",
                    }}
                  >
                    <h6>Available for girls</h6>
                  </div>
                </div>

                <div className="">
                  <CarouselGrid
                    img0={item.img0}
                    img1={item.img1}
                    img2={item.img2}
                    img3={item.img3}
                  />
                </div>
                <div className="w-100 mt-2">
                  <div className="d-flex " style={{ marginLeft: "15%" }}>
                    <Button
                      variant="none"
                      style={{ width: "15%", borderRadius: "50px" }}
                    >
                      Photos
                    </Button>

                    <Button
                      className="ms-5"
                      variant="none"
                      style={{ width: "15%", borderRadius: "50px" }}
                    >
                      Map
                    </Button>
                  </div>
                </div>

                <div
                  className="d-flex mt-5"
                  style={{ backgroundColor: "#f5f5f5" }}
                >
                  <div className="" style={{ width: "65%" }}>
                    <PropDtailesCom />
                  </div>{" "}
                  <div
                    className="ms-5 p-4"
                    style={{
                      width: "30%",
                      boxShadow: "2px 2px 2px 2px grey",
                      height: "500px",
                      position: "sticky",
                      top: "0px",
                      backgroundColor: "white",
                    }}
                  >
                    <ScheduleVisit />
                  </div>
                </div>
              </>
            );
          })
        : ""}
      <div>
        <FooterCom />
      </div>
    </div>
  );
}
