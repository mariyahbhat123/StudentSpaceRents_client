import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/esm/Button";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import "../Styles/SearchBar.css";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const [show, setShow] = useState(false);
  const [district, setDistrict] = useState("");
  const [locality, setLocality] = useState([]);
  const [searchOptions, setSearchOptions] = useState("");
  console.log(locality);
  const handleSearchOptions = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/localities/${district}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const res = await response.json();
      if (!res) {
        console.log("Not able to fetch localities");
      } else if (res.success) {
        setLocality(res.localities.localities);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleSearchOptions();
  }, [district]);
  return (
    <div>
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
                onChange={(e) => setDistrict(e.target.value)}
              >
                <option value="" selected disabled>
                  District
                </option>
                <option value="Srinagar">Srinagar</option>
                <option value="Baramulla">Baramulla</option>
                <option value="Kupwara">Kupwara</option>
                <option value="Anantnag">Anantnag</option>
                <option value="Pulwama">Pulwama</option>

                <option value="Ganderbal">Ganderbal</option>
              </select>
            </div>
            <input
              className="searchComponent"
              type="search"
              placeholder="Search Locality or Landmark"
              style={{}}
              value={searchOptions}
              onChange={(e) => (
                setShow(true), setSearchOptions(e.target.value)
              )}
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
            <Link
              className="searchBtn"
              to="/ListAd"
              state={{
                district: district,
                locality: searchOptions,
              }}
            >
              <SearchIcon />
            </Link>{" "}
          </div>
        </div>
      </div>
      {searchOptions
        ? locality
            .filter((item) =>
              item
                .toLowerCase()
                .toUpperCase()
                .includes(searchOptions.toLowerCase().toUpperCase())
            )
            .map((filteredLocality, index) => {
              return (
                <>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ backgroundColor: "white", width: "23%" }}>
                      <button
                        value={filteredLocality}
                        onClick={(e) => setSearchOptions(e.target.value)}
                        style={{
                          backgroundColor: "white",
                          border: "none",
                          fontSize: "18px",
                        }}
                      >
                        {" "}
                        {filteredLocality}
                      </button>
                    </div>
                    {console.log(searchOptions)}
                  </div>
                </>
              );
            })
        : ""}
    </div>
  );
}
