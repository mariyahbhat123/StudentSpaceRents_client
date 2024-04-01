import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function RangeSlider() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{ width: 290 }}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
        />
      </Box>
    </div>
  );
}
