import React from "react";
import { NavBar } from "./NavBar";

const SideBarDesktop = ({
  queryPag,
  dataToSideCard,
  country,
  name,
  systemPattern,
}) => {
  return (
    <nav className="sidebar-desk">
      <div className="sidebar-desk__menu">
        <NavBar
          queryPag={queryPag}
          dataToSideCard={dataToSideCard}
          country={country}
          name={name}
          systemPattern={systemPattern}
        />
      </div>
      <div className="sidebar-desk__forcast-card"></div>
    </nav>
  );
};

export default SideBarDesktop;
