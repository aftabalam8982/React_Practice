import React from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

const Parent2 = () => {
  return (
    <>
      <ComponentA name={"counter1"} />
      <ComponentB name={"counter2"} />
    </>
  );
};

export default Parent2;
