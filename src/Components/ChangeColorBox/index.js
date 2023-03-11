import React, { useState } from "react";
import "./ChangeColor.css";

const ChangeColorBox = () => {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box_color") || "orange";
    return initColor;
  });

  const randomColor = () => {
    const COLOR_LIST = ["red", "yellow", "orange", "black", "green"];
    const randomIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomIndex];
  };

  const handlerChangeColor = () => {
    const newColor = randomColor();
    setColor(newColor);
  };

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handlerChangeColor}
    ></div>
  );
};

export default ChangeColorBox;
