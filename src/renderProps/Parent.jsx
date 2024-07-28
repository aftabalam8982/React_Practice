import React from "react";
import Render from "./Render";
import ComponenetA from "./ComponenetA";
import ComponentB from "./ComponentB";

const Parent = () => {
  return (
    <>
      <Render render={(name) => <ComponenetA name={name} />} />
      <Render render={(name) => <ComponentB name2={name} />} />
      {/* <Render>{(name) => <ComponenetA name={name} />}</Render>  => here we are sharing function as a children props.    */}
    </>
  );
};

export default Parent;
