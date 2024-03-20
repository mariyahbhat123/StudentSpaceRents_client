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
          className=""
          style={{
            backgroundColor: "white",
            width: "50%",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <select
            className=""
            style={{
              width: "20%",
              padding: "7px",
              textAlign: "center",
              borderRadius: "20px",
            }}
          >
            <option value="" selected disabled>
              District
            </option>
            <option value="">A</option>
            <option value="">B</option>
            <option value="">C</option>
          </select>
          <input
            type="text"
            placeholder="Search Locality or Landmark"
            style={{
              width: "60%",
              padding: "5px",
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
