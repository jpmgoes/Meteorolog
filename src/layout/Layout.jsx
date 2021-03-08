import "./style/index.scss";
import { SideBarMobile } from "./SideBarMobile";
import { Background } from "./Background";
import SideBarDesktop from "./SideBarDesktop";

export const Layout = ({ dataToSideCard, children, queryPag }) => {
  return (
    <>
      <Background />
      <div className="main">
        <div className="main__square">
          <div className="main__square__left">
            <SideBarMobile
              queryPag={queryPag}
              dataToSideCard={dataToSideCard}
            />
            <SideBarDesktop
              queryPag={queryPag}
              dataToSideCard={dataToSideCard}
            />
          </div>
          <div className="main__square__rigth">{children}</div>
        </div>
      </div>
    </>
  );
};
