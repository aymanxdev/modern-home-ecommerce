import React from "react";

import Home from "./pages/home/Home";
import UsersPage from "./pages/user-list/UsersPage";
import SingleUserPage from "./pages/sing-user/SingleUserPage";
import NewUserPage from "./pages/new-user/NewUserPage";
import ProductsPage from "./pages/products-list/ProductsPage";
import Product from "./pages/product-item/Product";
import NewProduct from "./pages/new-product/NewProduct";
import AdminLogin from "./pages/login/AdminLogin";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import PrivateRoute from "./components/private-route/PrivateRoute";

import "./app.css";

import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Error404 from "./pages/error/Error404";

function App() {
  const admin = useSelector((state) => state.user.currentUser?.isAdmin);

  return (
    <Router>
      {admin && <Topbar />}

      <div className="app-container">
        {admin && <Sidebar />}

        <Routes>
          <>
            {/* <Route path="/" element={<PrivateRoute component={Home} />} /> */}
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<UsersPage />} />
              <Route
                path="/user/:userId/:username"
                element={<SingleUserPage />}
              />
              <Route path="/new-user" element={<NewUserPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route
                path="/product/:productId/:prouctTitle"
                element={<Product />}
              />
              <Route path="/new-product" element={<NewProduct />} />
            </Route>
            <Route
              path="/login"
              element={admin ? <Navigate to="/" replace /> : <AdminLogin />}
            />
          </>
          )
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
