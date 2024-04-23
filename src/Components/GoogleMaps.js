import React, { useRef, useState } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function GoogleMaps(props) {
  const [center, setCenter] = useState({ lat: 51.5072, lng: 0.1276 });
  console.log(center);

  const googleMapsRef = useRef(null);
  const googleApi = process.env.REACT_APP_GOOGLE_API_KEY;
  return (
    <div style={{ height: "50vh", width: "50%" }}>
      <GoogleMapReact
        ref={googleMapsRef}
        bootstrapURLKeys={{ key: googleApi }}
        defaultCenter={center}
        defaultZoom={11}
        center={center}
      >
        <AnyReactComponent lat={33.2778} lng={75.3412} text="My Marker" />
      </GoogleMapReact>
      <button
        onClick={
          () => setCenter({ lat: 33.2778, lng: 75.3412 })
          //googleMapsRef.current.panTo({ defaultProps });
        }
      >
        <p>Change lat long</p>
      </button>
    </div>
  );
}
