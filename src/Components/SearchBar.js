import React from "react";
import Button from "react-bootstrap/esm/Button";

export default function SearchBar() {
  return (
    <div>
      <div>
        <select
          className=""
          style={{ width: "10%", padding: "7px", textAlign: "center" }}
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
          style={{ width: "30%", padding: "5px" }}
        />
        <button
          variant="none"
          style={{ width: "10%", backgroundColor: "azure", padding: "6px" }}
        >
          Search
        </button>
      </div>
    </div>
  );
}
