import styles from "@utils/styles/komorikosha.module.scss";

/**
 * サイトの固定ヘッダー
 */
export default function SampleHead(): JSX.Element {
  return (
    <div className={styles.sampleHead}>
      <h1> HTML / CSS design textbook sample to learn while making</h1>
    </div>
  );
}
