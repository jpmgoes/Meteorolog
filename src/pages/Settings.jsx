import React from "react";
import { Layout } from "../layout/Layout";

const Settings = ({ name, country, dataToSideCard, systemPattern }) => {
  console.log(name);
  return (
    <div>
      <Layout
        queryPag={"navbar__settings"}
        country={country}
        name={name}
        dataToSideCard={dataToSideCard}
        systemPattern={systemPattern}
      ></Layout>
    </div>
  );
};
export default Settings;
