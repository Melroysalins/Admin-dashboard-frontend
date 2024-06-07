import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectSmall({ setQuantityCount }) {
  const [age, setAge] = React.useState("");
  const [quantity, setQuantity] = React.useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);

  const handleChange = (event) => {
    setAge(event.target.value);
    setQuantityCount(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Qty</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        {quantity?.map((ele, index) => (
          <MenuItem value={ele}>{ele}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
