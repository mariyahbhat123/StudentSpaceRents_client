import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import "../Styles/SearchBar.css";

export default function SearchBar() {
  const [show, setShow] = useState(false);
  return (
    <div className="d-flex" style={{ justifyContent: "center" }}>
      <div className="w-100 d-flex " style={{ justifyContent: "center" }}>
        <div className="mainContainer d-flex">
          <div className="optionContainer">
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
              <option>Anantnag</option>
              <option>Pulwama</option>
              <option>Shopian</option>
              <option>Kulgam</option>
              <option>Budgam</option>
              <option>Ganderbal</option>
              <option>Bandipore</option>
            </select>
          </div>
          <input
            className="searchComponent"
            type="text"
            placeholder="Search Locality or Landmark"
            style={{}}
            onChange={() => setShow(true)}
          ></input>{" "}
          {show === true ? (
            <button
              className="btnClearCom"
              style={{
                width: "5%",
                position: "absolute",
                left: "66%",
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
          <button className="searchBtn" variant="none">
            <SearchIcon />
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
