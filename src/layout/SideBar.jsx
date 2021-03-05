import { useState } from "react";
import { Burger } from "./Burger";
import { MobileMenu } from "./MobileMenu";
import { NavBar } from "./NavBar";

export const SideBar = () => {
  const [open, setOpen] = useState(true);

  return (
    <nav className="sidebar">
      <Burger open={open} setOpen={setOpen} />
      <MobileMenu open={open} />
      <div className="sidebar__logo">LOGO</div>
      <div className="sidebar__menu">
        <NavBar />
      </div>
      <div className="sidebar__forcast-card"></div>
    </nav>
  );
};
