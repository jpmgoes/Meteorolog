import { NavBar } from "./NavBar";

export const MobileMenu = ({ queryPag }) => {
  return (
    <>
      <div className="mobile-block"></div>
      <div className="mobile-menu">
        <div className="mobile-menu__wrap">
          <div className="mobile-menu__logo">LOGO</div>
          <NavBar queryPag={queryPag} />
        </div>
      </div>
    </>
  );
};
