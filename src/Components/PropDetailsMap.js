import React, { useState } from "react";
import GoogleMaps from "./GoogleMaps";
import { useJsApiLoader } from "@react-google-maps/api";

export default function PropDetailsMap(props) {
  const [center, setCenter] = useState({ lat: 33.2778, lng: 75.3412 });

  const callback = (val) => {
    const lat = props.lat;
    const lng = props.lng;
    const draggable = props.draggable;
    console.log("valueeeeeeee", lat);
  };

  return (
    <div>
      <div>
        <GoogleMaps
          height="40vh"
          width="100%"
          center={center}
          setCenter={setCenter}
          callback={callback}
        />
      </div>
    </div>
  );
}
