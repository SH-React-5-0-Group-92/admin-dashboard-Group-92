import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Group92Admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAin</p>
          <li>
            <DashboardIcon className="icon" />
            <span> Dashboard</span>
          </li>
          <li>
            <AccountCircleIcon className="icon" />
            <span> Users</span>
          </li>
          <li>
            <ProductionQuantityLimitsIcon className="icon" />
            <span> Products</span>
          </li>
          <li>
            <CreditCardOutlinedIcon className="icon" />
            <span> Orders</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span> Settings</span>
          </li>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span> Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span> Logout</span>
          </li>
          <li>
            <span> color options</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
