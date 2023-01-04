import Test from "@test/Test";

type Props = {
  value: string;
  keys?: number[];
};

export default function Dummy() {
  return (
    <div className='test'>
      <h1>dummy page</h1>
      <Test />
    </div>
  );
}
