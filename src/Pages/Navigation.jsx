import React from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "../Component/SideNav";

function Navigation() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

export default Navigation;
