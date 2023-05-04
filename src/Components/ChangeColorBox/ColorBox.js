import React, { useState } from "react";
import "./ChangeColor.css";

const ColorBox = () => {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("color-box") || "red";
    console.log(initColor);
    return initColor;
  });

  const randomColorBox = () => {
    const COLOR_LIST = ["red", "orange", "green", "yellow", "black"];
    const randomIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomIndex];
  };

  const handleClickBox = () => {
    const newColor = randomColorBox();
    setColor(newColor);

    localStorage.setItem("color-box", newColor);
  };

  return (
    <div
      className="box-color"
      style={{ backgroundColor: color }}
      onClick={handleClickBox}
    ></div>
  );
};

export default ColorBox;
