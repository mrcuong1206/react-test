import Content from "./Content";
import { React, useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

const Context = () => {
  const contextToggle = useContext(ThemeContext);
  return (
    <div>
      <button onClick={contextToggle.toggleTheme}>Toggle Theme</button>
      <Content />
    </div>
  );
};

export default Context;
