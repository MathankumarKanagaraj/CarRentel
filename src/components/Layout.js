import React from "react";
import NavBar from "./NavBar";
import Sidebar from "./SideBar";
import { Outlet } from "react-router-dom";
import CarRentalUI from "../pages/CarRentel";

const Layout = () => {
  return (
    <div className="container-fluid">
      <NavBar />
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <div className="content">
            <Outlet />
            <CarRentalUI />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
