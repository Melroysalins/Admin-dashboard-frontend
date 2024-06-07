import React, { useState } from "react";
import "./index.css";
import SelectSmall from "../quantity";
import Button from "@mui/material/Button";
import { ProductUpload } from "../../api/productUpload";
import CustomizedSnackbars from "../snackBar";
const SubProduct = ({ categoryname }) => {
  const [productname, setProductName] = useState("");
  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantityCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("success");
  const [message, setMessage] = useState("");
  const storeID = localStorage.getItem("userid");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handlesaveproduct = async () => {
    if (
      productname?.length &&
      price.length &&
      quantity &&
      description?.length &&
      categoryname?.length
    ) {
      const uploadedProduct = await ProductUpload({
        Pimage: file,
        categoryname,
        productname,
        price,
        description,
        quantity,
        storeID,
      });

      if (uploadedProduct?.status === 200) {
        setOpen(true);
        setSeverity("success");
        setMessage(uploadedProduct?.message);
      } else {
        setOpen(true);
        setSeverity("error");
        setMessage(uploadedProduct?.message);
      }
    } else {
      setOpen(true);
      setSeverity("error");
      setMessage("Please fill all details");
    }
  };

  return (
    <div className="SubProductFormConatiner">
      <input
        type="text"
        placeholder="Enter Product Name"
        value={productname}
        onChange={(e) => setProductName(e.target.value)}
      />
      <div className="productimageandPrice">
        <textarea
          type="text"
          placeholder="Enter Product Description"
          className="priceinpt"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label placeholder="Add Product Image">
          <input type="file" onChange={handleFileChange} />
        </label>
        <input
          type="text"
          placeholder="Enter Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="productpriceandQuantity">
        <SelectSmall setQuantityCount={setQuantityCount} />
        <Button
          variant="contained"
          color="success"
          sx={{ width: "80px", height: "29px" }}
          onClick={() => handlesaveproduct()}
        >
          Save
        </Button>
      </div>
      <CustomizedSnackbars
        open={open}
        setOpen={setOpen}
        message={message}
        severity={severity}
      />
    </div>
  );
};

export default SubProduct;
