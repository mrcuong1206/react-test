import React from "react";
import Button from "../UI/Button";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const decr = () => {
    setCount(count - 1);
  };
  const inc = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>{count}</div>
      <Button onClick={decr}>decr</Button>
      <Button onClick={inc}>incr</Button>
    </div>
  );
};

export default Counter;
