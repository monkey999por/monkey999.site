export default function ChildHasProps(props: any): JSX.Element {
  console.log("render outer ChildHasProps");

  return <p style={{ color: "black;" }}>Child: {props.count}</p>;
}
