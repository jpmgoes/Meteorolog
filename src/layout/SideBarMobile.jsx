import { useState } from "react";
import { Burger } from "./Burger";
import { MobileMenu } from "./MobileMenu";

export const SideBarMobile = ({ queryPag }) => {
  const [open, setOpen] = useState(true);

  return (
    <nav className="sidebar">
      <Burger open={open} setOpen={setOpen} />
      <MobileMenu open={open} />
      <div className="sidebar__forcast-card"></div>
    </nav>
  );
};
