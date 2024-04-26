import React, { useState } from "react";

const Render = ({ children }) => {
  const [name, setName] = useState("Aftab alam");
  return <div>{children(name)}</div>;
};

export default Render;
