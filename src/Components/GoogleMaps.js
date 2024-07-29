import React, { useEffect, useMemo, useRef, useState } from "react";

import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  LoadScript,
} from "@react-google-maps/api";
import GooglePlaces from "./GooglePlaces";

const containerStyle = {
  width: "100%",
  height: "400px",
};
export default function GoogleMaps(props) {
  const center = props.center;
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
  // const reactGoogleApi = process.env.REACT_APP_GOOGLE_API_KEY;
  // console.log(reactGoogleApi);

  console.log("APII", process.env.REACT_APP_GOOGLE_API_KEY);

  // const greatPlaceStyle = {
  //   position: "absolute",
  //   transform: "translate(-50%, -50%)",
  // };
  // console.log(googleMapsRef);

  const { isLoaded } = useJsApiLoader({
    id: "react-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
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
          center={center}
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
        <p>LOADING..</p>
      )}

      {/* ) : (
          <p>LOADING...</p>
        )} */}
    </div>
  );
}
