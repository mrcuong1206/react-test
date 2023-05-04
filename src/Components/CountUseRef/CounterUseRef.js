import React from "react";
import { useEffect } from "react";
import Button from "../UI/Button";

const CounterUseRef = () => {
  const [count, setCount] = React.useState(0);
  const prevCount = React.useRef(count);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>Previous: {prevCount.current}</h2>
      <h2>Current: {count}</h2>

      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
};

export default CounterUseRef;
