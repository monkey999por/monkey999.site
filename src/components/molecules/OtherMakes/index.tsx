import { globalNavilinks } from "@utils/constant";
import styles from "@utils/styles/komorikosha.module.scss";

/**
 * 他に作ったもののリンクを追加
 */
export default function OtherMakes(): JSX.Element {
  console.log(`render component OtherMakes`);
  return (
    <nav className={styles.otherMakes}>
      <ul>
        <li>
          <a href={globalNavilinks.wizard}>
            Wizard who wants to be a grasshopper
          </a>
        </li>
        <li>
          <a href={globalNavilinks.wordpress}>WordPress design workbook</a>
        </li>
        <li>
          <a href={globalNavilinks.cafe}>Cafe Debut</a>
        </li>
      </ul>
    </nav>
  );
}
