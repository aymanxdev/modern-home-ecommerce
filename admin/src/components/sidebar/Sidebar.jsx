import React from "react";

import "./sidebar.styles.css";
import {
  LineStyleOutlined,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";
import MenuItem from "../menu-item/MenuItem";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <MenuItem active icon={<LineStyleOutlined />}>
                Home
              </MenuItem>
            </Link>

            <MenuItem icon={<Timeline />}>Analytics</MenuItem>

            <MenuItem icon={<TrendingUp />}>Sales</MenuItem>
          </ul>
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <MenuItem icon={<PermIdentity />}>Users</MenuItem>{" "}
            </Link>
            <Link to="products" className="link">
              <MenuItem icon={<Storefront />}>Products</MenuItem>
            </Link>
            <MenuItem icon={<AttachMoney />}>Transactions</MenuItem>
            <MenuItem icon={<BarChart />}>Reports</MenuItem>
          </ul>
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <MenuItem icon={<MailOutline />}>Mail</MenuItem>
            <MenuItem icon={<DynamicFeed />}>Feedback</MenuItem>
            <MenuItem icon={<ChatBubbleOutline />}>Messages</MenuItem>
          </ul>
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <MenuItem icon={<WorkOutline />}>Manage</MenuItem>
            <MenuItem icon={<Timeline />}>Analytics</MenuItem>
            <MenuItem icon={<Report />}>Reports</MenuItem>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
