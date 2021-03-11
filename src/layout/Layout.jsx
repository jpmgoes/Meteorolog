import "./style/index.scss";
import { SideBarMobile } from "./SideBarMobile";
import { Background } from "./Background";
import SideBarDesktop from "./SideBarDesktop";

export const Layout = ({ children, queryPag, pagName }) => {
  return (
    <>
      <Background />
      <div className="main">
        <div className="main__square">
          <div className="main__square__left">
            <SideBarMobile queryPag={queryPag} />
            <SideBarDesktop queryPag={queryPag} />
          </div>
          <div className={`main__square__rigth__${pagName}`}>{children}</div>
        </div>
      </div>
    </>
  );
};
