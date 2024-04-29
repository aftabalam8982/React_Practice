import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { decrementAction, incrementAction } from "../redux-store/action";

const Counter = () => {
  //{ count, increment }
  const count = useSelector((data) => data.count);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(incrementAction(2))}>Increment</button>
      <button onClick={() => dispatch(decrementAction(1))}>Increment</button>
      {/* <button onClick={() => increment(incrementAction(2))}>Increment</button>
      <button onClick={() => increment(decrementAction(1))}>Increment</button> */}
    </>
  );
};
export default Counter;

/*
const mapStateToProps = (currentState) => {
  return {
    count: currentState.count,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: dispatch,
  };
};

export const CounterComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
*/
