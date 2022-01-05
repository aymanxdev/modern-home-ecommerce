import "./App.css";
import Pay from "./components/Pay";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import ProductsList from "./pages/ProductsList";
import Register from "./pages/Register";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
function App() {
  const user = true;
  // const navigate = useNavigate()
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:category" element={<ProductsList />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<Pay />} />

          <Route
            path="/login"
            element={user ? <Navigate to="/" replace /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/" replace /> : <Register />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
