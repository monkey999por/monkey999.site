type Props = {
  count: number;
};

export default function ChildHasProps(props: Props): JSX.Element {
  console.log("render outer ChildHasProps");

  return <p style={{ color: "black;" }}>Child: {props.count}</p>;
}
