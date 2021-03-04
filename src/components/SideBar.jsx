import { useState } from "react";
import { Burger } from "./Burger";

export const SideBar = () => {
  return (
    <nav className="sidebar">
      <Burger />
      <div className="sidebar__logo"></div>
      <div className="sidebar__menu"></div>
      <div className="sidebar__forcast-card"></div>
    </nav>
  );
};
