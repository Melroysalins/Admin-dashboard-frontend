import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "./pages/login";
import Registerpage from "./pages/register";
import Orderpage from "./pages/order";
import ProductsPage from "./pages/products";
import Homepage from "./pages/homepage";
import { DashBoardPage } from "./pages/dashBoard";
import ProfilePage from "./pages/profile";
import StorePage from "./pages/storepage";
import VerifyPage from "./pages/verifyPage";
import ChangePassword from "./pages/changePassword";
import AllProducts from "./pages/allProducts";
import EditPage from "./pages/editPage";
import EditStore from "./component/editStore";
import EditProduct from "./component/editProduct";
import EditProfile from "./component/editProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route path="dashboard" element={<DashBoardPage />} />
          <Route path="order" element={<Orderpage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="allproducts" element={<AllProducts />} />
          <Route path="store" element={<StorePage />} />
          <Route path="/" element={<EditPage />}>
            <Route path="editstore" element={<EditStore />} />
            <Route path="editproduct/:_id" element={<EditProduct />} />
            <Route path="editprofile" element={<EditProfile />} />
          </Route>
        </Route>
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/verify" element={<VerifyPage />} />
        <Route path="/updatepassword" element={<ChangePassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
