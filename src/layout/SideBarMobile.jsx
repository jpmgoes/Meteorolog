import { useState } from "react";
import { Burger } from "./Burger";
import { MobileMenu } from "./MobileMenu";

export const SideBarMobile = ({
  queryPag,
  dataToSideCard,
  country,
  name,
  systemPattern,
}) => {
  const [open, setOpen] = useState(true);

  return (
    <nav className="sidebar">
      <Burger open={open} setOpen={setOpen} />
      <MobileMenu
        open={open}
        queryPag={queryPag}
        dataToSideCard={dataToSideCard}
        country={country}
        name={name}
        systemPattern={systemPattern}
      />
      <div className="sidebar__forcast-card"></div>
    </nav>
  );
};
