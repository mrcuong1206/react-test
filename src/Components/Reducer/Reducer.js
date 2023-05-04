import React from "react";

// useReducer
// 1. Init state 0
// 2. Actions: Up, Down
// 3. Reducer
// 4. Dispatch

//1.
const initState = 0;
//2.
const ACTION_DOWN = "down";
const ACTION_UP = "up";
//3.
const reducer = (state, action) => {
  switch (action) {
    case ACTION_DOWN:
      return state - 1;
    case ACTION_UP:
      return state + 1;
    default:
      throw new Error("Invalid action");
  }
};

const Reducer = () => {
  //4.
  const [count, dispatchCount] = React.useReducer(reducer, initState);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatchCount(ACTION_DOWN)}>-</button>
      <button onClick={() => dispatchCount(ACTION_UP)}>+</button>
    </div>
  );
};

export default Reducer;
