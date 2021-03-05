import "./style/index.scss";
import { SideBar } from "./SideBar";
import { Background } from "./Background";

export const Layout = ({ children, queryPag }) => {
  return (
    <>
      <Background />
      <div className="main">
        <div className="main__square">
          <div className="main__square__left">
            <SideBar queryPag={queryPag} />
          </div>
          <div className="main__square__rigth">{children}</div>
        </div>
      </div>
    </>
  );
};
