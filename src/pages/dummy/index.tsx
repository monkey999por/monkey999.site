import TestAtom from "@atoms/TestAtom";
import { testfunc } from "@utils/functions/testf";
import styles from "@utils/styles/Test.module.scss";

type Props = {
  value: string;
  keys?: number[];
};

export default function Dummy() {
  testfunc();
  return (
    <div className='test'>
      <p className={styles.global_sss}>asign global style test</p>
      <h1>dummy page</h1>
      <TestAtom />
    </div>
  );
}
