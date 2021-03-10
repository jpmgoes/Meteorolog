import { NavBar } from "./NavBar";

const SideBarDesktop = ({ queryPag }) => {
  return (
    <nav className="sidebar-desk">
      <div className="sidebar-desk__menu">
        <NavBar queryPag={queryPag} />
      </div>
      <div className="sidebar-desk__forcast-card"></div>
    </nav>
  );
};

export default SideBarDesktop;
