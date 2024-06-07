import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ColorToggleButton({ alignment, setAlignment }) {
  console.log("new alignment--->", alignment);
  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      console.log("new alignment--->", alignment);
      setAlignment(newAlignment === "true"); // Convert string back to boolean
    }
  };

  console.log("Toggle", alignment);

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment?.toString()} // Convert boolean to string
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="true">True</ToggleButton>
      <ToggleButton value="false">False</ToggleButton>
    </ToggleButtonGroup>
  );
}
