import { React, useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

const Paragraph = () => {
  const contextTheme = useContext(ThemeContext);
  return (
    <p className={contextTheme.theme}>
      Contex provider a way to pass Contex provider a way to pass Contex
      provider a way to pass Contex provider a way to pass
    </p>
  );
};

export default Paragraph;
