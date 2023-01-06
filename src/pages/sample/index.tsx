import SampleAtom from "@atoms/SampleAtom";
import { testfunc } from "@utils/functions/sampleFunc";
import styles from "@utils/styles/Sample.module.scss";

type Props = {
  value: string;
  keys?: number[];
};

export default function sample() {
  testfunc();
  return (
    <div className='test'>
      <p className={styles.global_sss}>asign global style test</p>
      <h1>sample page</h1>
      <SampleAtom />
    </div>
  );
}
