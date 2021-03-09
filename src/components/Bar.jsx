import React from "react";

export const Bar = ({ porc }) => {
  const style = {
    backgroundColor: "#FDAC47",
    width: `${porc}%`,
    height: "3px",
    marginTop: "10px",
  };
  return (
    <div className="bar">
      <div className="bar__yellow" style={style}></div>
    </div>
  );
};
