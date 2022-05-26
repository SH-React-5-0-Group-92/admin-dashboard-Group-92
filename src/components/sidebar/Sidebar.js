import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">G92Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <DashboardIcon className="icon" />
            <span> Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span> Team</span>
          </li>
          <li>
            <Link to="/products">
              <ProductionQuantityLimitsIcon className="icon" />
              <span> Products</span>
            </Link>
          </li>
          <li>
            <CreditCardOutlinedIcon className="icon" />
            <span> Orders</span>
          </li>
          <p className="title">SERVICES</p>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span> Settings</span>
          </li>
          <p className="title">CLIENTS</p>

          <li>
            <Link to="/client">
              <AccountCircleOutlinedIcon className="icon" />
              <span> Profile</span>
            </Link>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span> Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
