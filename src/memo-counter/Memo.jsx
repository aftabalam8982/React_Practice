import React, { memo } from "react";

const Memo = memo(() => {
  //   let i = 0;
  //   while (i < 9999999) {
  //     i++;
  //   }
  console.log("memo is render.");

  return (
    <div>
      <h1>I'm memo component</h1>
    </div>
  );
});

export default Memo;
