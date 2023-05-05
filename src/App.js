import { React } from "react";
import "./App.css";
// import YoutubeList from "./Components/Youtube/YoutubeList";
// import ColorBox from "./Components/ChangeColorBox/ColorBox.js";
// import Counter from "./Components/Count/Counter";
// import CounterUseRef from "./Components/CountUseRef/CounterUseRef";
// import Reducer from "./Components/Reducer/Reducer";
import NewReducer from "./Components/Reducer/NewReducer";
import Context from "./Components/context/Context";

const App = () => {
  // const name = "ReyC";

  return (
    <div className="app">
      {/* <YoutubeList>{name}</YoutubeList> */}
      <h1>Change Color Box</h1>
      {/* <ColorBox />
      <Counter />
      <CounterUseRef />
      <Reducer /> */}
      <NewReducer />
      <Context />
    </div>
  );
};

export default App;
