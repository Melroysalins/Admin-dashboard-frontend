import React, { useState } from "react";
import "./index.css";
import Button from "@mui/material/Button";
import AddProductComponent from "../../component/addProduct";

const ProductsPage = () => {
  const [show, setShow] = useState(false);
  const [productcount, setProductCount] = useState([]);
  return (
    <div className="ProductsPage">
      <div className="AddProductContainner">
        <Button
          variant="contained"
          sx={{ background: "black" }}
          onClick={() => {
            setShow(true);
            setProductCount([...productcount, ""]);
          }}
        >
          Add Product
        </Button>
      </div>
      {show && (
        <div className="ProductPageContainner">
          {productcount?.map((list, index) => (
            <AddProductComponent key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
