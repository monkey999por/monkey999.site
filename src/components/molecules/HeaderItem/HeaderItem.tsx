import { useRouter } from "next/router";

import { globalNavilinks } from "@utils/constant";
import { isRoot } from "@utils/functions/komorikoshaCommon";

import styles from "./HeaderItem.module.scss";

export type Props = {
  prefix: string;
};

/**
 * ヘッダのコンテンツを追加
 */
export default function HeaderItem(props: Props): JSX.Element {
  console.log(`■render component HeaderItem`);
  const { prefix } = props;
  const router = useRouter();
  return (
    <>
      <>
        <header className={styles.pageHead}>
          <h1 className={styles.siteTitle}>komorikomasha</h1>
          <p className={styles.catchcopy}>
            What we cannot do alone, we can do together. 3 fun creations that
            give shape to what you want to try.
          </p>
        </header>
        <nav className={styles.globalNavi}>
          <ul>
            <li>
              <a
                className={isRoot(router.asPath) ? styles.current : ""}
                href={globalNavilinks.home}
              >
                {`${prefix}home`}
              </a>
            </li>

            <li>
              <a
                className={
                  globalNavilinks.aboutMe === router.asPath
                    ? styles.current
                    : ""
                }
                href={globalNavilinks.aboutMe}
              >
                {`${prefix}about me`}
              </a>
            </li>
            <li>
              <a
                className={
                  router.asPath.match(/portfolio/g) ? styles.current : ""
                }
                href={globalNavilinks.portfolios}
              >
                {`${prefix}portfolios`}
              </a>
            </li>
            <li>
              <a
                className={
                  globalNavilinks.contact === router.asPath
                    ? styles.current
                    : ""
                }
                href={globalNavilinks.contact}
              >
                {`${prefix}contact`}
              </a>
            </li>
          </ul>
        </nav>
      </>
    </>
  );
}
