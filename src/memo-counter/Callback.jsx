import React, { useCallback, useState } from "react";

const Callback = () => {
  const [para, setPara] = useState("Hello Aftab, I here to help you.");
  const [count, setCount] = useState(0);

  const foo = useCallback(() => {
    console.time("state");
    let i = 0;
    while (i < 999999999) i++;
    setCount(count + 1);
    console.log("aftabb");
    console.timeEnd("state");
  }, [count]);

  const handleClick = () => {
    setPara("I am the callback component");
    console.log("object");
  };

  return (
    <div>
      <h1>{para}</h1>
      <button onClick={handleClick}>change header</button>
      <button onClick={foo}>add count: {count}</button>
    </div>
  );
};

export default Callback;
