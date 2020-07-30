import React from "react";

function Circle({ x, y, datum, getRating }) {
  console.log("datum: ", datum);
  return (
    <circle
      cx={x}
      cy={y}
      r="15"
      style={{
        fill: datum.x === 2 ? "transparent" : "#fff",
        stroke: datum.x === 2 ? "transparent" : getRating(datum.y + 300).color,
        strokeWidth: "5px",
      }}
    />
  );
}

export default Circle;
