import React, { useReducer } from "react";

const initialValue = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return initialValue;
    default:
      return state;
  }
};
const Counter2 = () => {
  const [{ count } = count, dispatch] = useReducer(reducer, initialValue);
  return (
    <>
      <h1>Counter2: {count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </>
  );
};

export default Counter2;
