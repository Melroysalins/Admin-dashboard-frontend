import React, { useState } from "react";
import "./index.css";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import ProductForm from "../productForm";

const AddProductComponent = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="AddProductComponent">
      <div className="Accordian">
        <p>Add Your Products</p>
        <ExpandCircleDownIcon
          sx={{ fontSize: "26px", cursor: "pointer" }}
          onClick={() => setShow(!show)}
        />
      </div>
      {show && <ProductForm />}
    </div>
  );
};

export default AddProductComponent;
