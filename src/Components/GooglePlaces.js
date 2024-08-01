import { Data } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
export default function GooglePlaces(props) {
  const handlePlaceSelect = props.handlePlaceSelect;

  const [value, setValue] = useState("");

  console.log("VALUEEE", value);
  const handleOnSelect = (data) => {
    geocodeByAddress(data.label)
      .then((results) => getLatLng(results[0]))
      .then((data) => {
        handlePlaceSelect(data);
      });
  };

  // useEffect(() => {
  //   if (value) {
  //     onSelect();
  //   }
  // }, [value]);

  console.log(JSON.parse(localStorage.getItem("lat")));
  console.log(JSON.parse(localStorage.getItem("lng")));
  return (
    <div>
      <GooglePlacesAutocomplete
        onLoadFailed={(err) => console.error("ERRROR", err)}
        selectProps={{
          value,
          onChange: (data) => handleOnSelect(data),
        }}
      />
    </div>
  );
}
