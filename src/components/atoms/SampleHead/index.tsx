import Link from "next/link";

import styles from "@utils/styles/komorikosha.module.scss";

/**
 * サイトの固定ヘッダー
 */
export default function SampleHead(): JSX.Element {
  console.log(`★render component SampleHead`);
  return (
    <div className={styles.sampleHead}>
      <h1>
        HTML / CSS design textbook sample to learn while making
        <Link href='/'>←back to top</Link>
      </h1>
    </div>
  );
}
