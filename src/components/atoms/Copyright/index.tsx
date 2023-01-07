import styles from "@utils/styles/komorikosha.module.scss";

/**
 * コピーライト
 */
export default function Copyright(): JSX.Element {
  return (
    <footer className={styles.pageFoot}>
      <p id='copyright'>
        <small>Copyright&copy; 2013 @komorikomasha All Rights Reserved.</small>
      </p>
    </footer>
  );
}
