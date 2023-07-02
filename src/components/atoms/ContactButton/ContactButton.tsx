import { ReactElement } from "react";

import styles from "./ContactButton.module.scss";

/**
 * component-test
 */
export default function ContactButton(): ReactElement {
  console.log(`render component Waku`);
  return (
    <>
      <div className={styles.contactButton}>
        <p className={styles.text}>contact formbotton</p>
      </div>
    </>
  );
}
