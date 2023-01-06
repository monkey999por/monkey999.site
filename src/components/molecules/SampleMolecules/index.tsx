import SampleAtom from "@atoms/SampleAtom";

import styles from "./SampleMolecules.module.scss";

export default function SampleMolecules() {
  return (
    <>
      <SampleAtom />
      <div className={styles.box}>
        <h1 className={styles.sample_molecules}>Component SampleMolecules</h1>
      </div>
    </>
  );
}
