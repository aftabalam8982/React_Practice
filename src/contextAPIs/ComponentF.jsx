import React, { useContext } from "react";
import { Context } from "./Parent3";

const ComponentF = () => {
  const value = useContext(Context);
  //   console.log(value);
  return <Context.Consumer>{(value) => <h1>{value}</h1>}</Context.Consumer>;
};

export default ComponentF;
