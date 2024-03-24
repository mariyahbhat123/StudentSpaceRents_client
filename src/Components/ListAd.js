import React from "react";
import CardComponent from "./CardComponent";
import NavBar from "./navBar";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import ReplayIcon from "@mui/icons-material/Replay";

export default function ListAd() {
  return (
    <div className="w-100">
      <div style={{ backgroundColor: "#ff385c" }}>
        <NavBar />
      </div>
      <div className="d-flex" style={{ flexDirection: "row", height: "90vh" }}>
        <div
          className=" "
          style={{
            width: "35%",
            border: "2px solid black",
            backgroundColor: "#f5f5f5",
          }}
        >
          <div className="mt-4 d-flex" style={{ justifyContent: "center" }}>
            <div className="d-flex w-100 ms-2 me-1">
              <div
                className="d-flex p-1 "
                style={{
                  width: "120px",
                  border: "1px solid black",
                  backgroundColor: "white",
                  justifyContent: "center",
                  borderRadius: "100px",
                }}
              >
                <h6 className="" style={{ marginTop: "10px" }}>
                  District
                </h6>
                <div className="ms-2">
                  <button
                    className="p-1 mb-2 mt-2"
                    style={{
                      border: "0",

                      backgroundColor: "white",
                      height: "25px",
                    }}
                  >
                    <ClearIcon fontSize="20px" className="mb-3" />
                  </button>
                </div>
              </div>
              <input
                className="ms-2"
                type="search"
                style={{ width: "65%", padding: "8px" }}
                placeholder="Search"
              />
              <button
                variant="none"
                style={{
                  width: "50px",
                  backgroundColor: "#ff385c",
                  padding: "4px",
                  color: "white",
                  borderRadius: "100%",
                  marginLeft: "4px",
                }}
              >
                <SearchIcon />
              </button>{" "}
            </div>
          </div>
          <div className="d-flex mt-4" style={{ justifyContent: "center" }}>
            <div
              className="p-4"
              style={{
                width: "80%",
                border: "1px solid black",
                backgroundColor: "white",
              }}
            >
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <div style={{ color: "#008387" }}>
                  <h5>Filters</h5>
                </div>
                <div className="d-flex ">
                  {" "}
                  <button
                    className=""
                    style={{ border: "0", backgroundColor: "white" }}
                  >
                    <ReplayIcon className="  mb-2 " />
                  </button>
                  <h5>Reset</h5>
                </div>
              </div>

              <hr />
              <div className="w-100">
                <div className="">
                  <input type="radio" />
                  PG
                  <input type="radio" className="ms-3" />
                  House
                  <input type="radio" className="ms-3" />
                  Flat
                  <input type="radio" className="ms-3" />
                  Room
                </div>
                <div className="mt-4">
                  <h4>For</h4>
                  <input type="radio" />
                  Male
                  <input type="radio" className="ms-3" />
                  Female
                </div>

                <div className="mt-4">
                  <h4>Room Type</h4>
                  <input type="checkbox" />
                  PG
                  <input type="checkbox" className="ms-3" />
                  House
                  <input type="checkbox" className="ms-3" />
                  Flat
                  <input type="checkbox" className="ms-3" />
                  Room
                </div>
                <div className="mt-4">
                  <h4>Rent Range:</h4>
                </div>
                <div className="mt-4">
                  <h4>Preferred For</h4>
                  <input type="checkbox" />
                  Student
                  <input type="checkbox" className="ms-3" />
                  Professional
                </div>
                <div className="mt-4">
                  <h4>Food Included</h4>
                  <input type="checkbox" />
                  BreakFast
                  <input type="checkbox" className="ms-3" />
                  Lunch
                  <input type="checkbox" className="ms-3" /> Dinner
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="" style={{ width: "70%" }}>
          <div style={{ overflowY: "scroll", height: "100%" }}>
            <CardComponent md={3} />
          </div>
        </div>
      </div>
    </div>
  );
}
