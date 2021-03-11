import { useContext } from "react";
import { LocationInfoContext } from "../App";
import { Layout } from "../layout/Layout";

const Settings = () => {
  const { setSystemPattern, systemPattern } = useContext(LocationInfoContext);

  function changeSystemPattern(position) {
    const element = document.getElementsByName("systemPattern");
    const value = element[position].value;
    window.localStorage.setItem("systemPattern", value);
    setSystemPattern(value);
  }

  const checked = systemPattern === "metric" ? true : false;

  return (
    <div>
      <Layout queryPag={"navbar__settings"} pagName="settings">
        <div className="systemPattern">
          <h1>System Pattern</h1>
          <div className="systemPattern__values">
            <div className="systemPattern__values__default">
              <label
                htmlFor="metric"
                className="systemPattern__label"
                onClick={() => changeSystemPattern(0)}
              >
                Metric
              </label>
              <input
                type="radio"
                name="systemPattern"
                id="metric"
                className="systemPattern__radio"
                value="metric"
                onClick={() => changeSystemPattern(0)}
                checked={checked}
              />
            </div>
            <div className="systemPattern__values__default">
              <label htmlFor="imperial" className="systemPattern__label">
                Imperial
              </label>
              <input
                type="radio"
                name="systemPattern"
                id="imperial"
                className="systemPattern__radio"
                value="imperial"
                onClick={() => changeSystemPattern(1)}
                checked={!checked}
              />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
export default Settings;
