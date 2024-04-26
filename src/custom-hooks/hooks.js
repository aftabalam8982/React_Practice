import React, { useState } from "react";

const useCount = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  return {
    count,
    setCount,
  };
};

export default useCount;
