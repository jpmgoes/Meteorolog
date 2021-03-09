import React from "react";
import { Layout } from "../layout/Layout";

const Settings = ({ name, country, dataToSideCard }) => {
  console.log(name);
  return (
    <div>
      <Layout
        queryPag={"navbar__settings"}
        country={country}
        name={name}
        dataToSideCard={dataToSideCard}
      ></Layout>
    </div>
  );
};
export default Settings;
