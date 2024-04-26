import React from "react";
import useCount from "./hooks";

const ComponentD = () => {
  const { count, setCount } = useCount(2);
  return (
    <>
      <h1>Count2: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export default ComponentD;
