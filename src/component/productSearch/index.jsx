import React, { useState } from "react";
import "./index.css";
import Button from "@mui/material/Button";

const ProductSearch = ({ productlist, setFilteredList }) => {
  const [inputvalue, setInputValue] = useState("");

  const handleSearch = () => {
    if (inputvalue === "") {
      setFilteredList(productlist);
    } else {
      const searchedData = productlist?.filter((pname) =>
        pname?.productname?.includes(inputvalue)
      );
      setFilteredList(searchedData);
    }
  };

  const handleinputchange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value === "") {
      setFilteredList(productlist);
    }
  };

  return (
    <div className="ProductSearchContainner">
      <input
        type="text"
        placeholder="Search products "
        value={inputvalue}
        onChange={handleinputchange}
      />
      <Button
        variant="outlined"
        sx={{
          border: "1px solid black",
          background: "black",
          color: "white",
          borderRadius: "8px",
          "&:hover": {
            opacity: 0.7,
            color: "black",
            border: "1px solid black",
          },
        }}
        onClick={() => handleSearch()}
      >
        Search
      </Button>
    </div>
  );
};

export default ProductSearch;
