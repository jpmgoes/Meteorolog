import React from "react";

export const DottedSquare = () => {
  return (
    <div className="square">
      {new Array(64).fill(<div className="square__dotted"></div>)}
    </div>
  );
};
