import React, { memo, useState } from "react";

import ChildHasProps, {
  Props as ChildHasPropsProps,
} from "@atoms/MemoSamle/ChildHasProps";
import ChildNoProps from "@atoms/MemoSamle/ChildNoProps";

// const Child = (props) => {
//   console.log("render Child");
//   return <p style={{ color: "black;" }}>Child: {props.count}</p>;
// };  ↓

const InnerChildMemo = memo(function InnerChildMemo(props: { count: number }) {
  console.log("render InnerChild");
  return <p style={{ color: "black;" }}>Child: {props.count}</p>;
});

const ChildHasPropsMemo = memo(function ChildHasPropsMemo(
  props: ChildHasPropsProps
) {
  return <ChildHasProps count={props.count} />;
});

const ChildNoPropsMemo = memo(function ChildNoPropsMemo() {
  return <ChildNoProps />;
});

export default function MemoTest(): JSX.Element {
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
      <ChildHasProps count={count2} />
      {/* <ChildNoProps /> */}
      <ChildNoPropsMemo />
    </>
  );
}
