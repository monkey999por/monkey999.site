import styles from "./ContactButton.module.scss";

type Params = {
  styles: { readonly [key: string]: string };
};

/**
 * component-test
 */
export default function ContactButton(): JSX.Element {
  console.log(`render component Waku`);
  return (
    <>
      <div className={styles.contactButton}>
        <p className={styles.text}>contact formbotton</p>
      </div>
    </>
  );
}
