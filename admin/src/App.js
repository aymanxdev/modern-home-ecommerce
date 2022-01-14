import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import "./app.css";
import UsersPage from "./pages/user-list/UsersPage";
import SingleUserPage from "./pages/sing-user/SingleUserPage";
function App() {
  return (
    <Router>
      <Topbar />
      <div className="app-container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:userId" element={<SingleUserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
