import React from "react";
import Icon from "supercons";

export const NavBar = () => {
  return (
    <div className="navbar">
      <div href="./Form" className="navbar__settings">
        <div style={{ color: "magenta" }}>
          <Icon glyph="settings" size={32} />
        </div>
        <p className="navbar__settings__p">Settings</p>
      </div>
    </div>
  );
};
