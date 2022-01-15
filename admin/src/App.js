import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import "./app.css";
import UsersPage from "./pages/user-list/UsersPage";
import SingleUserPage from "./pages/sing-user/SingleUserPage";
import NewUserPage from "./pages/new-user/NewUserPage";
import ProductsPage from "./pages/products-list/ProductsPage";
import Product from "./pages/product-item/Product";
import NewProduct from "./pages/new-product/NewProduct";
function App() {
  return (
    <Router>
      <Topbar />
      <div className="app-container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/user/:userId/:username" element={<SingleUserPage />} />
          <Route path="/new-user" element={<NewUserPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route
            path="/product/:productId/:prouctTitle"
            element={<Product />}
          />
          <Route path="/new-product" element={<NewProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
