import React from "react";
import NavBar from "./navBar";
import FooterCom from "./FooterCom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function PropertyDetail() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
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

      <div>
        <FooterCom />
      </div>
    </div>
  );
}
