import React, { useEffect, useState } from "react";
import "./index.css";
import DisplayStoreImage from "../displayStoreImage";
import ColorToggleButton from "../ToggleButton";
import CustomizedSnackbars from "../snackBar";
import Button from "@mui/material/Button";
import { getCurrentProductInfo } from "../../api/getProduct";
import { useParams } from "react-router-dom";
import { UpdateProductDetails } from "../../api/updateProduct";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";

const EditProduct = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");
  const [productname, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(undefined);
  const [price, setPrice] = useState(undefined);
  const [file, setFile] = useState("");
  const [available, setAvaialable] = useState(true);
  const [load, setLoad] = useState(false);
  const [alignment, setAlignment] = React.useState();
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth <= 450);

  const { _id } = useParams();

  const FetchProductDetails = async () => {
    const result = await getCurrentProductInfo({ _id });
    if (result?.status === 200) {
      setProductName(result?.requestProductInfo?.productname);
      setQuantity(result?.requestProductInfo?.quantity);
      setDescription(result?.requestProductInfo?.description);
      setAvaialable(result?.requestProductInfo?.available);
      setFile(result?.requestProductInfo?.image?.url);
      setPrice(result?.requestProductInfo?.price);
      setAlignment(result?.requestProductInfo?.available);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSaveProductDetails = async () => {
    console.log("The File---->", quantity);
    const result = await UpdateProductDetails({
      Pimage: file,
      _id,
      productname,
      description,
      price,
      quantity,
      available: alignment,
    });
    if (result?.status === 200) {
      setOpen(true);
      setMessage(result?.message);
      setSeverity("success");
      setLoad(true);
    }
  };

  useEffect(() => {
    FetchProductDetails();
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 450);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [load]);

  return (
    <div className="EditProductPage">
      <div className="EditProductContainner">
        <Box
          sx={{
            width: !isScreenSmall ? 400 : 240,
            maxWidth: "100%",
            border: "none",
          }}
        >
          <TextField
            fullWidth
            label="Enter Store Name"
            id="fullWidth"
            value={productname}
            onChange={(e) => setProductName(e.target.value)}
          />
        </Box>
        <Box
          sx={{
            width: !isScreenSmall ? 400 : 240,
            maxWidth: "100%",
            border: "none",
          }}
        >
          <TextField
            fullWidth
            label="Enter Store Name"
            id="fullWidth"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Box>

        <Box
          sx={{
            width: !isScreenSmall ? 400 : 240,
            maxWidth: "100%",
            border: "none",
          }}
        >
          <TextField
            fullWidth
            label="Enter Store Name"
            id="fullWidth"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </Box>
        <Box
          sx={{
            width: !isScreenSmall ? 400 : 240,
            maxWidth: "100%",
            border: "none",
          }}
        >
          <TextField
            fullWidth
            label="Enter Store Name"
            id="fullWidth"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Box>
      </div>
      <div className="productImageContainner">
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: !isScreenSmall ? "center" : "",
            width: "100%",
            flexDirection: !isScreenSmall ? "" : "column",
          }}
        >
          <DisplayStoreImage image={file} />
          <label
            style={{
              fontFamily: "Poppins",
              fontWeight: "600",
              opacity: "0.6",
              width: "30%",
              display: "flex",
              textAlign: "end",
              justifyContent: "end",
            }}
          >
            Add Image
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            style={{ marginLeft: "5px" }}
          />
        </div>
      </div>
      <div className="ProductSaveButtonContainner">
        <Button
          variant="contained"
          sx={{
            background: "black",
            "&:hover": {
              opacity: 0.7,
              background: "black",
            },
          }}
          onClick={() => handleSaveProductDetails()}
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

export default EditProduct;
