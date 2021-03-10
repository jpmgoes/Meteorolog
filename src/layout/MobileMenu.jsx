import { NavBar } from "./NavBar";

export const MobileMenu = ({ queryPag }) => {
  return (
    <>
      <div className="mobile-block"></div>
      <div className="mobile-menu">
        <div className="mobile-menu__wrap">
          <NavBar queryPag={queryPag} />
        </div>
      </div>
    </>
  );
};
