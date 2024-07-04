import React, { useEffect, useMemo, useRef, useState } from "react";
import GoogleMapReact from "google-map-react";

import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

import LocationOn from "@mui/icons-material/LocationOn";
const containerStyle = {
  width: "100%",
  height: "400px",
};
export default function GoogleMaps(props) {
  const [markedCenter, setMarkedCenter] = useState({
    lat: 33.2778,
    lng: 75.3412,
  });
  props.callback(markedCenter);
  const [isDraggable, setIsDraggable] = useState({
    draggable: true,
  });
  props.callback(isDraggable);
  console.log(isDraggable);
  console.log(markedCenter);

  const googleMapsRef = useRef(null);
  const googleApi = process.env.REACT_APP_GOOGLE_API_KEY;

  // const greatPlaceStyle = {
  //   position: "absolute",
  //   transform: "translate(-50%, -50%)",
  // };
  // console.log(googleMapsRef);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: googleApi,
  });
  return (
    <div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          // onLoad={(map) => {
          //   const bounds = new window.google.maps.LatLngBounds();
          //   map.fitBounds(bounds);
          // }}

          ref={googleMapsRef}
          zoom={10}
          center={props.center}
          onClick={(e) =>
            setMarkedCenter({
              lat: e.latLng.lat(),
              lng: e.latLng.lng(),
            })
          }
        >
          <MarkerF position={markedCenter} />
        </GoogleMap>
      ) : (
        ""
      )}{" "}
    </div>
  );
}
