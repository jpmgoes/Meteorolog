import { useContext } from "react";
import { LocationInfoContext } from "../App";
import { Layout } from "../layout/Layout";

const Settings = () => {
  const { setSystemPattern, systemPattern } = useContext(LocationInfoContext);

  function changeSystemPattern() {
    const now = window.localStorage.getItem("systemPattern");
    if (now === "metric") {
      window.localStorage.setItem("systemPattern", "imperial");
      setSystemPattern("imperial");
    } else {
      window.localStorage.setItem("systemPattern", "metric");
      setSystemPattern("metric");
    }
    console.log(systemPattern);
  }

  return (
    <div>
      <Layout queryPag={"navbar__settings"}>
        <button onClick={changeSystemPattern}>
          {window.localStorage.getItem("systemPattern")}
        </button>
      </Layout>
    </div>
  );
};
export default Settings;
