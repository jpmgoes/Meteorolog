import { NavBar } from "./NavBar";

export const MobileMenu = ({
  queryPag,
  dataToSideCard,
  country,
  name,
  systemPattern,
}) => {
  return (
    <>
      <div className="mobile-block"></div>
      <div className="mobile-menu">
        <div className="mobile-menu__wrap">
          <NavBar
            queryPag={queryPag}
            dataToSideCard={dataToSideCard}
            country={country}
            name={name}
            systemPattern={systemPattern}
          />
        </div>
      </div>
    </>
  );
};
