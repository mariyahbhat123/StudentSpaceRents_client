import React from "react";
import CardComponent from "./CardComponent";
import NavBar from "./navBar";
import Search from "@mui/icons-material/Search";

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
            backgroundColor: "gray",
          }}
        >
          <div className="mt-4 d-flex" style={{ justifyContent: "center" }}>
            <div className="d-flex w-100 ms-5">
              <div className="d-flex" style={{ border: "1px solid black" }}>
                <p>District</p>
                <button style={{ border: "none" }}>X</button>
              </div>
              <input
                className="ms-2"
                type="search"
                style={{ width: "60%", padding: "8px" }}
                placeholder="Search"
              />
              <button className="p-2 ms-2 " style={{ borderRadius: "60px" }}>
                <Search />
              </button>
            </div>
          </div>
          <div className="d-flex mt-4" style={{ justifyContent: "center" }}>
            <div
              className="p-4"
              style={{ width: "80%", border: "1px solid black" }}
            >
              <div>
                <h2>Filters</h2>
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
