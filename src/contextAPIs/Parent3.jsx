import React, { createContext } from "react";
import ComponentE from "./ComponentE";

export const Context = createContext("aftab");

const Parent3 = () => {
  return (
    <Context.Provider value='Afsaree'>
      <ComponentE />
    </Context.Provider>
  );
};

export default Parent3;
