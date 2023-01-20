import Link from "next/link";

import styles from "./SampleHead.module.scss";

/**
 * サイトの固定ヘッダー
 */
export default function SampleHead(): JSX.Element {
  console.log(`★render component SampleHead`);
  return (
    <div className={styles.sampleHead}>
      <Link className={styles.sampleHead_link} href='/'>
        ←back to top
      </Link>
      <h1 className={styles.sampleHead_h1}>
        HTML / CSS design textbook sample to learn while making
      </h1>
    </div>
  );
}
