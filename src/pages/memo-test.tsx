import React, { useState } from "react";

import ChildHasProps from "@atoms/MemoSamle/ChildHasProps";
import ChildNoProps from "@atoms/MemoSamle/ChildNoProps";

// const Child = (props) => {
//   console.log("render Child");
//   return <p style={{ color: "black;" }}>Child: {props.count}</p>;
// };  ↓

const InnerChildMemo = React.memo((props) => {
  console.log("render InnerChild");
  return <p style={{ color: "black;" }}>Child: {props.count}</p>;
});

const ChildHasPropsMemo = React.memo((props) => {
  return <ChildHasProps count={props.count} />;
});

const ChildNoPropsMemo = React.memo((props) => <ChildNoProps />);

export default function MemoTest() {
  console.log("render App");
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <button onClick={() => setCount1(count1 + 1)}>countup App count</button>
      <button onClick={() => setCount2(count2 + 1)}>countup Child count</button>
      <p style={{ color: "black;" }}>App: {count1}</p>
      <InnerChildMemo count={count2} />
      <ChildHasPropsMemo count={count2} />
      {/* <ChildNoProps /> */}
      <ChildNoPropsMemo />
    </>
  );
}
