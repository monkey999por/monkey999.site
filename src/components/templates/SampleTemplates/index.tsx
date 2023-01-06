import SampleMolecules from "@molecules/SampleMolecules";

import styles from "./SampleTemplates.module.scss";

type Props = {
  val: string;
};

export default function SampleTemplates(props: Props) {
  return (
    <>
      <SampleMolecules />
      <div className={styles.box}>
        <h1 className={styles.sample_templates}>Component SampleTemplates</h1>
      </div>
      <p>props value: {props.val}</p>
    </>
  );
}
