import React from "react";
import Hoc from "./Hoc";

const ComponentA = ({ name, count, setCount }) => {
  return (
    <>
      <h1>
        {name} : {count}
      </h1>
      <button onClick={() => setCount(count + 1)}>Increment1</button>
    </>
  );
};

export default Hoc(ComponentA);
