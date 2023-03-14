import React from "react";
import "./App.css";
// import YoutubeList from "./Components/Youtube/YoutubeList";
import ColorBox from "./Components/ChangeColorBox/ColorBox.js";
const App = () => {
  // const name = "ReyC";

  return (
    <div className="app">
      {/* <YoutubeList>{name}</YoutubeList> */}
      <ColorBox />
      <h1>My Todos</h1>
    </div>
  );
};

export default App;
