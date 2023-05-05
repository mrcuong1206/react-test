import { createContext } from "react";
import React from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <div>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </div>
  );
};

export { ThemeContext, ThemeProvider };
