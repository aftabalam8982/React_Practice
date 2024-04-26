import React, { useState } from "react";

const Hoc = (Component) => {
  const NewComponent = (props) => {
    const [count, setCount] = useState(0);
    return <Component count={count} setCount={setCount} {...props} />;
  };

  return NewComponent;
};

export default Hoc;
