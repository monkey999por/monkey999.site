export default function ChildNoProps(): JSX.Element {
  console.log("render outer ChildNoProps");

  return <p style={{ color: "black;" }}>Child: no props</p>;
}
