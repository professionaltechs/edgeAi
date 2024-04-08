import React from "react";
import { Outlet } from "react-router-dom";

// COMPONENTS
import Sidebar from "../Sidebar";
import Navbar from "./Navbar";
import RightBar from "./RightBar";

// STYLES
import "../../styles/layout/layout.css";
const Layout = () => {
  return (
    <div className="mainConatiner">
      <Sidebar />
      <div className="SideContainer">
        <Navbar />
        <div className="mainContentContainer">
          <div className="containerWrapper">
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
