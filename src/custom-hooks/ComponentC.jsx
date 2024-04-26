import React from "react";
import useCount from "./hooks";

const ComponentC = () => {
  const { count, setCount } = useCount(0);
  return (
    <>
      <h1>Count1: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export default ComponentC;
