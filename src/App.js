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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route path="dashboard" element={<DashBoardPage />} />
          <Route path="order" element={<Orderpage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="store" element={<StorePage />} />
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
