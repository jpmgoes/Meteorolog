/* eslint-disable no-dupe-keys */
import React from "react";
import Icon from "supercons";
import { Link } from "react-router-dom";

export const NavBar = ({ queryPag }) => {
  function focusPage(queryPag, query) {
    if (queryPag === query)
      return {
        "border-left": "3px solid #fff",
        background: "rgb(112, 116, 248)",
        background:
          "linear-gradient(90deg,rgba(112, 116, 248, 1) 0%,rgba(97, 102, 247, 1) 100%)",
      };
    return {};
  }
  return (
    <div className="navbar">
      <Link to="/">
        <div
          href="./Form"
          className="navbar__settings"
          style={focusPage(queryPag, "navbar__dashboard")}
        >
          <div style={{ color: "magenta" }}>
            <Icon glyph="grid" size={32} />
          </div>
          <p className="navbar__settings__p">Dashboard</p>
        </div>
      </Link>
      <Link to="/settings">
        <div
          href="./Form"
          className="navbar__settings"
          style={focusPage(queryPag, "navbar__settings")}
        >
          <div style={{ color: "magenta" }}>
            <Icon glyph="settings" size={32} />
          </div>
          <p className="navbar__settings__p">Settings</p>
        </div>
      </Link>
    </div>
  );
};