import "./style/index.scss";
import { SideBarMobile } from "./SideBarMobile";
import { Background } from "./Background";
import SideBarDesktop from "./SideBarDesktop";

export const Layout = ({
  dataToSideCard,
  children,
  queryPag,
  country,
  name,
}) => {
  return (
    <>
      <Background />
      <div className="main">
        <div className="main__square">
          <div className="main__square__left">
            <SideBarMobile
              queryPag={queryPag}
              dataToSideCard={dataToSideCard}
              country={country}
              name={name}
            />
            <SideBarDesktop
              queryPag={queryPag}
              dataToSideCard={dataToSideCard}
              country={country}
              name={name}
            />
          </div>
          <div className="main__square__rigth">{children}</div>
        </div>
      </div>
    </>
  );
};
