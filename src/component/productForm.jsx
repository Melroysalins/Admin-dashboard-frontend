import React, { useState } from "react";
import SubProduct from "./subProduct";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

const ProductForm = () => {
  const [subproductcount, setSubProductCount] = useState([]);
  const [categoryname, setCategoryName] = useState("");

  const handleAddInput = () => {
    setSubProductCount([...subproductcount, ""]); // Adding a new empty input to the array
  };

  return (
    <div className="ProductForm">
      <input
        type="text"
        placeholder="Enter Category Name"
        value={categoryname}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <div className="SubProductContainners">
        {subproductcount.map((list, index) => (
          <SubProduct key={index} categoryname={categoryname} />
        ))}
        <div className="AddSubProductButton">
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={() => handleAddInput()}
            sx={{ width: "100px", height: "30px" }}
          >
            ADD
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
