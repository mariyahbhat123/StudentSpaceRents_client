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
          }}
        >
          <div className="mt-5 d-flex" style={{ justifyContent: "center" }}>
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
          <div className="d-flex mt-5" style={{ justifyContent: "center" }}>
            <div
              className=""
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
                  <input type="radio" />
                  House
                  <input type="radio" />
                  Flat
                  <input type="radio" />
                  Room
                </div>
                <div>
                  <p>For</p>
                  <input type="radio" />
                  Male
                  <input type="radio" />
                  Female
                </div>

                <div>
                  <p>Room Type</p>
                  <input type="checkbox" />
                  PG
                  <input type="checkbox" />
                  House
                  <input type="checkbox" />
                  Flat
                  <input type="checkbox" />
                  Room
                </div>
                <div>
                  <p>Rent Range:</p>
                </div>
                <div>
                  <p>Preferred For</p>
                  <input type="checkbox" />
                  Student
                  <input type="checkbox" />
                  Professional
                </div>
                <div>
                  <p>Food Included</p>
                  <input type="checkbox" />
                  BreakFast
                  <input type="checkbox" />
                  Lunch
                  <input type="checkbox" /> Dinner
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
