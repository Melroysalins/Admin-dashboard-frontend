import React, { useEffect, useState } from "react";
import "./index.css";
import ProductSearch from "../../component/productSearch";
import ProductList from "../../component/productList";
import { ProductListAPI } from "../../api/productList";

const AllProducts = () => {
  const [productlist, setProductList] = useState();
  const [fileteredlist, setFilteredList] = useState();

  const FetchProducts = async () => {
    const response = await ProductListAPI();
    setProductList(response?.productList);
    setFilteredList(response?.productList);
  };

  useEffect(() => {
    FetchProducts();
  }, []);

  return (
    <div className="AllProductDisplayPage">
      <div className="AllProductDisplayContainner">
        <ProductSearch
          productlist={productlist}
          setFilteredList={setFilteredList}
        />
        <div className="DisplayAllProduct">
          {fileteredlist &&
            fileteredlist?.map((plist) => (
              <ProductList key={plist?._id} data={plist} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
