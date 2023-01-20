import { HasChildren } from "@utils/types/PropsUtilType";

import styles from "./Waku.module.scss";

type Props = HasChildren;

/**
 * component-test
 */
export default function Waku(props: Props): JSX.Element {
  console.log(`render component Waku`);
  return (
    <>
      <p className={styles.componentName}>■{props.children?.type.name}</p>
      <div className={styles.itemBlock}>{props.children}</div>
    </>
  );
}
