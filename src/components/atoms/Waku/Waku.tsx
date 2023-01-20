import styles from "./Waku.module.scss";

/**
 * component-test
 */
export default function Waku(props: any): JSX.Element {
  console.log(`render component Waku`);
  return (
    <>
      <p className={styles.componentName}>■{props.children.type.name}</p>
      <div className={styles.itemBlock}>{props.children}</div>
    </>
  );
}
