import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../RTK/counterSlice";
import { fetchUserData } from "../RTK/userSlice";
const Counter3 = () => {
  const countVal = useSelector((data) => data.counter);
  const fetchData = useSelector((data) => data.user);
  const dispatch = useDispatch();
  // console.log(fetchData);
  return (
    <>
      <h1>I'm Counter {countVal.value}</h1>
      {/* <div>{console.log(fetchData)}</div> */}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(fetchUserData())}>Fetch User</button>
    </>
  );
};

export default Counter3;
