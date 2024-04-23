import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function RangeSlider() {
  const [value, setValue] = React.useState(2000);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const options = { maxmumFractionDigits: 2 };
  const formattedNumber = Intl.NumberFormat("en-Us", options).format(value);
  return (
    <div>
      <div className="d-flex " style={{ justifyContent: "center" }}>
        <h5 className="">Rent Range:</h5>{" "}
        <p className="ms-2">
          <b>${formattedNumber}</b>
        </p>
      </div>
      <Box sx={{ width: 290 }}>
        <Slider
          getAriaLabel={() => "Rent range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={2000}
          max={50000}
        />
      </Box>
    </div>
  );
}
