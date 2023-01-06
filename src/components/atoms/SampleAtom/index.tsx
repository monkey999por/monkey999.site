import { Dummys } from "@utils/types/sampleType";

import styles from "./sampleAtom.module.scss";

export default function SampleAtom() {
  const typetest: Dummys = {
    val: 123,
  };
  return (
    <div className={styles.box}>
      <h1 className={styles.sample_atom}>Component SampleAtom</h1>
    </div>
  );
}
