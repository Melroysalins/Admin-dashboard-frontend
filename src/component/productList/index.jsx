import React, { useRef, useState, useEffect } from "react";
import "./index.css";
import StoreLogo from "../storeLogo";
import ProductName from "../productName";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";

const ProductList = ({ data }) => {
  const [quantitys, setQuantitys] = useState();
  const [prices, setPrices] = useState();
  const [showmenu, setShowMenu] = useState(false);
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();
  const { productname, price, quantity, image } = data;

  const menuRef = useRef(null);
  const iconRef = useRef(null);

  const handleProductEdit = () => {
    navigate(`/editproduct/${data?._id}`);
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
      <StoreLogo image={image?.url} isproductpage={true} />
      <ProductName name={productname} key={data?._id} data={data} />
      <label>
        Qty :
        <input
          type="number"
          placeholder={quantity}
          value={quantitys}
          onChange={(e) => setQuantitys(e.target.value)}
          disabled={disable}
        />
      </label>
      <div style={{ display: "flex", gap: "4px" }}>
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
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductList;
