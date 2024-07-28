import React, { useMemo, useState } from "react";

const Counter = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const isEvent = useMemo(() => {
    let i = 0;
    while (i < 999999999) i++;
    return count1 % 2 === 0 ? "even" : "odd";
  }, [count1]);

  const handleIncrement1 = () => {
    setCount1(count1 + 1);
  };

  const handleIncrement2 = () => {
    setCount2(count2 + 1);
  };

  return (
    <div>
      <h2>Counter1: {count1}</h2>
      <span>{isEvent}</span>
      <button onClick={handleIncrement1}>Increment1</button>
      <h1>Counter2: {count2}</h1>
      <button onClick={handleIncrement2}>Increment2</button>
    </div>
  );
};

export default Counter;
