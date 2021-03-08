import React from "react";
import { NavBar } from "./NavBar";

const SideBarDesktop = ({ queryPag, dataToSideCard }) => {
  return (
    <nav className="sidebar-desk">
      <div className="sidebar-desk__menu">
        <NavBar queryPag={queryPag} dataToSideCard={dataToSideCard} />
      </div>
      <div className="sidebar-desk__forcast-card"></div>
    </nav>
  );
};

export default SideBarDesktop;
