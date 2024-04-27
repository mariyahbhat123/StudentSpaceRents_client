import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
export default function GooglePlaces({ handlePlaceSelect }) {
  const [value, setValue] = useState(null);
  const googleApi = process.env.REACT_APP_GOOGLE_API_KEY;
  console.log(value);
  const onSelect = (data) => {
    geocodeByAddress(data.label)
      .then((results) => getLatLng(results[0]))
      .then((data) => {
        handlePlaceSelect(data);
      });
  };

  console.log(JSON.parse(localStorage.getItem("lat")));
  console.log(JSON.parse(localStorage.getItem("lng")));
  return (
    <div>
      <GooglePlacesAutocomplete
        apiKey={googleApi}
        selectProps={{
          value,
          onChange: (data) => {
            console.log("Raninngggg", data);
            setValue(data);
            onSelect(data);
          },
        }}
      />
    </div>
  );
}
