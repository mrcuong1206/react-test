import { React, useRef } from "react";
import "./App.css";
// import YoutubeList from "./Components/Youtube/YoutubeList";
// import ColorBox from "./Components/ChangeColorBox/ColorBox.js";
// import Counter from "./Components/Count/Counter";
// import CounterUseRef from "./Components/CountUseRef/CounterUseRef";
// import Reducer from "./Components/Reducer/Reducer";
// import NewReducer from "./Components/Reducer/NewReducer";
// import Context from "./Components/context/Context";
import { useStore, actions } from "./store";

const App = () => {
  // const name = "ReyC";
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;
  const inputRef = useRef();

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput));
    dispatch(actions.setTodoInput(""));
    inputRef.current.focus();
  };
  const handleDel = (index) => {
    dispatch(actions.delTodo(index));
  };

  return (
    <div className="app">
      {/* <YoutubeList>{name}</YoutubeList> */}
      {/* <h1>Change Color Box</h1> */}
      {/* <ColorBox />
      <Counter />
      <CounterUseRef />
      <Reducer /> */}
      {/* <NewReducer />
      <Context /> */}
      <h1>Todo with Context and Reducer</h1>
      <input
        placeholder="Enter type..."
        value={todoInput}
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
        ref={inputRef}
      ></input>
      <button onClick={handleAdd}>Add</button>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <span
            onClick={() => {
              handleDel(index);
            }}
          >
            x
          </span>
        </li>
      ))}
    </div>
  );
};

export default App;
