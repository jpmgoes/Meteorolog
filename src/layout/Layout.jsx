import "./style/index.scss";
import { SideBarMobile } from "./SideBarMobile";
import { Background } from "./Background";
import SideBarDesktop from "./SideBarDesktop";
import { useContext } from "react";
import { LocationInfoContext } from "../App";


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
              systemPattern={systemPattern}
            />
            <SideBarDesktop
              queryPag={queryPag}
              dataToSideCard={dataToSideCard}
              country={country}
              name={name}
              systemPattern={systemPattern}
            />
          </div>
          <div className="main__square__rigth">{children}</div>
        </div>
      </div>
    </>
  );
};
