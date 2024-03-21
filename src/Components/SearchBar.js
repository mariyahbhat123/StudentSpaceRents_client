import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

export default function SearchBar() {
  const [show, setShow] = useState(false);
  return (
    <div className=" d-flex" style={{ justifyContent: "center" }}>
      <div className="w-100 d-flex " style={{ justifyContent: "center" }}>
        <div
          className="d-flex"
          style={{
            backgroundColor: "white",
            width: "50%",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <div
            className=""
            style={{
              width: "20%",
              border: "2px solid black",
              borderRadius: "55px",
              padding: "3px",
            }}
          >
            <select
              className=""
              style={{
                padding: "4px",
                textAlign: "center",
                border: "0",
              }}
            >
              <option value="" selected disabled>
                District
              </option>
              <option value="">Srinagar</option>
              <option value="">Baramulla</option>
              <option value="">Kupwara</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Search Locality or Landmark"
            style={{
              width: "80%",
              padding: "5px",
              paddingLeft: "15px",
              borderRadius: "20px",
              marginLeft: "4px",
            }}
            onChange={() => setShow(true)}
          ></input>{" "}
          {show === true ? (
            <button
              style={{
                width: "5%",
                position: "absolute",
                left: "63%",
                border: "none",
                padding: "3px",
                backgroundColor: "transparent",
              }}
              onClick={() => setShow(false)}
            >
              <ClearIcon className="mt-1" />
            </button>
          ) : (
            ""
          )}
          <button
            variant="none"
            style={{
              width: "39px",
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
    </div>
  );
}
