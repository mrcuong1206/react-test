import React, { useState } from "react";
import "./ChangeColor.css";

const ColorBox = () => {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box-color") || "red";
    console.log(initColor);
    return initColor;
  });

  const randomColor = () => {
    const COLOR_LIST = ["red", "orange", "black", "yellow", "green"];
    const randomIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomIndex];
  };

  const handlClickBox = () => {
    const newColor = randomColor();
    setColor(newColor);

    localStorage.setItem("box-color", newColor);
  };

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handlClickBox}
    ></div>
  );
};

export default ColorBox;
