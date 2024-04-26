import React from "react";
import Hoc from "./Hoc";

const ComponentB = ({ name, count, setCount }) => {
  return (
    <>
      <h1>
        {name} : {count}
      </h1>
      <button onClick={() => setCount(count + 2)}>Increment2</button>
    </>
  );
};

export default Hoc(ComponentB);
