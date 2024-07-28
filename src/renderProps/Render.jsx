import React, { useState } from "react";

const Render = ({ render }) => {
  const [name, setName] = useState("Aftab alam");
  return <div>{render(name)}</div>;
};

export default Render;
