import React, { useRef, useState, useEffect } from "react";
import "./index.css";
import StoreLogo from "../storeLogo";
import ProductName from "../productName";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { deleteParticularProduct } from "../../api/deleteProduct";
import CustomizedSnackbars from "../snackBar";

const ProductList = ({ data, setLoad }) => {
  const [quantitys, setQuantitys] = useState();
  const [prices, setPrices] = useState();
  const [showmenu, setShowMenu] = useState(false);
  const [disable, setDisable] = useState(true);
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState(false);
  const [message, setMessage] = useState("success");
  const navigate = useNavigate();
  const { productname, price, quantity, image } = data;

  const menuRef = useRef(null);
  const iconRef = useRef(null);

  const handleProductEdit = () => {
    navigate(`/editproduct/${data?._id}`);
  };

  const handleProductDelete = async () => {
    const storeID = localStorage.getItem("userid");

    const result = await deleteParticularProduct({ storeID, _id: data?._id });

    if (result?.status === 200) {
      setOpen(true);
      setMessage(result?.message);
      setSeverity("success");
      setLoad(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        iconRef.current &&
        !iconRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    if (showmenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showmenu]);

  return (
    <div className="ProductListContainner">
      <div className="PLogoandNameContainner">
        <StoreLogo image={image?.url} isproductpage={true} />
        <ProductName name={productname} key={data?._id} data={data} />
      </div>
      <div className="AllInOneContainner">
        <div className="QtyInputDisplay">
          <label>Qty : </label>
          <input
            type="number"
            placeholder={quantity}
            value={quantitys}
            onChange={(e) => setQuantitys(e.target.value)}
            disabled={disable}
          />
        </div>
        <div className="priceLableCOntainner">
          <label>Rs : </label>
          <input
            type="number"
            placeholder={price}
            value={prices}
            className="priceINPUT"
            onChange={(e) => setPrices(e.target.value)}
            disabled={disable}
          />
        </div>
        <div className="EditContainner">
          <MoreVertIcon
            sx={{ cursor: "pointer" }}
            onClick={() => setShowMenu(!showmenu)}
            ref={iconRef}
          />
          {showmenu && (
            <ul ref={menuRef}>
              <li onClick={() => handleProductEdit()}>Edit</li>
              <li onClick={() => handleProductDelete()}>Delete</li>
            </ul>
          )}
        </div>
      </div>
      <CustomizedSnackbars
        open={open}
        setOpen={setOpen}
        severity={severity}
        message={message}
      />
    </div>
  );
};

export default ProductList;
